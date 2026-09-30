#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""精读语篇插入工具

把一批 READING_PASSAGES 追加到 data/courses.js 的 READING_PASSAGES 数组末尾。

用法:
    python3 tools/insert-readings.py tools/batch29-c2.json

与 insert-units.py 同样的设计原则：
  - 用括号深度扫描定位数组结尾，不靠缩进或行号
  - 插入后自检语法（孤逗号、括号配平、字段完整）
  - 自检失败就回滚，不留下半成品
"""
import json
import subprocess
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data' / 'courses.js'

REQUIRED_FIELDS = ['level', 'title', 'topic', 'minutes', 'paragraphs',
                   'glossary', 'structures', 'questions']


def find_array_end(src: str, array_name: str) -> int:
    """返回 `const array_name = [` 对应 `]` 之后的位置。"""
    m = re.search(r'const\s+' + re.escape(array_name) + r'\s*=\s*\[', src)
    if not m:
        raise SystemExit(f'找不到数组 {array_name}')
    i = m.end() - 1  # 指向 '['
    depth = 0
    in_str = None
    in_tpl = False
    while i < len(src):
        ch = src[i]
        nxt = src[i + 1] if i + 1 < len(src) else ''
        if in_tpl:
            if ch == '\\':
                i += 2
                continue
            if ch == '`':
                in_tpl = False
            i += 1
            continue
        if in_str:
            if ch == '\\':
                i += 2
                continue
            if ch == in_str:
                in_str = None
            i += 1
            continue
        if ch == '`':
            in_tpl = True
            i += 1
            continue
        if ch in ('"', "'"):
            in_str = ch
            i += 1
            continue
        if ch == '/' and nxt == '/':
            j = src.find('\n', i)
            i = len(src) if j < 0 else j + 1
            continue
        if ch == '/' and nxt == '*':
            j = src.find('*/', i)
            i = len(src) if j < 0 else j + 2
            continue
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    raise SystemExit(f'数组 {array_name} 括号未配平')


def js_str(s: str) -> str:
    """转成 JS 单引号字符串字面量（内容含单引号时改用双引号）。"""
    s = s.replace('\\', '\\\\')
    if "'" in s and '"' not in s:
        return '"' + s.replace('"', '\\"') + '"'
    return "'" + s.replace("'", "\\'") + "'"


def render(p: dict, indent: str = '  ') -> str:
    i2, i4, i6 = indent, indent * 2, indent * 3
    out = []
    out.append(f"{i2}{{level:{js_str(p['level'])}, title:{js_str(p['title'])}, "
               f"topic:{js_str(p['topic'])}, minutes:{int(p['minutes'])},")
    out.append(f"{i4}paragraphs:[")
    for para in p['paragraphs']:
        out.append(f"{i6}{{es:`{para['es']}`,")
        out.append(f"{i6} zh:`{para['zh']}`}},")
    out.append(f"{i4}],")
    out.append(f"{i4}glossary:[")
    for g in p['glossary']:
        out.append(f"{i6}{{es:{js_str(g['es'])}, zh:{js_str(g['zh'])}}},")
    out.append(f"{i4}],")
    out.append(f"{i4}structures:[")
    for s in p['structures']:
        out.append(f"{i6}{{es:{js_str(s['es'])}, note:{js_str(s['note'])}}},")
    out.append(f"{i4}],")
    out.append(f"{i4}questions:[")
    for q in p['questions']:
        out.append(f"{i6}{{q:{js_str(q['q'])}, a:{js_str(q['a'])}}},")
    out.append(f"{i4}]")
    out.append(f"{i2}}}")
    return '\n'.join(out)


def morphology_missing(terms, text):
    """调用 tools/check-terms.mjs，复用审计脚本同一套形态学逻辑。

    不用 Python 自己写词干匹配——那会和主审计脚本产生两套规则，
    结果就是对同一份内容给出两个不同的判定。
    """
    if not terms:
        return []
    helper = Path(__file__).resolve().parent / 'check-terms.mjs'
    payload = json.dumps({'terms': terms, 'text': text}, ensure_ascii=False)
    try:
        out = subprocess.run(
            ['node', str(helper)], input=payload,
            capture_output=True, text=True, timeout=60)
    except (OSError, subprocess.SubprocessError) as e:
        print(f'⚠️  无法调用形态学校验器（{e}），跳过生词核查')
        return []
    if out.returncode != 0:
        print(f'⚠️  形态学校验器异常：{out.stderr.strip()[:200]}')
        return []
    try:
        return json.loads(out.stdout or '[]')
    except json.JSONDecodeError:
        return []


def validate(passages):
    errs = []
    seen_titles = set()
    for p in passages:
        t = p.get('title', '?')
        for f in REQUIRED_FIELDS:
            if f not in p:
                errs.append(f'[{t}] 缺字段 {f}')
        if p.get('level') not in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2'):
            errs.append(f'[{t}] level 非法: {p.get("level")}')
        if p.get('title') in seen_titles:
            errs.append(f'[{t}] 标题重复')
        seen_titles.add(p.get('title'))
        paras = p.get('paragraphs') or []
        if len(paras) < 3:
            errs.append(f'[{t}] 段落过少: {len(paras)}')
        for i, para in enumerate(paras):
            if not para.get('es') or not para.get('zh'):
                errs.append(f'[{t}] 第 {i+1} 段缺 es 或 zh')
        if not (8 <= len(p.get('glossary') or []) <= 20):
            errs.append(f'[{t}] 生词表条数异常: {len(p.get("glossary") or [])}')
        if len(p.get('questions') or []) < 2:
            errs.append(f'[{t}] 理解题少于 2 道')
        # 核心自检：structures.es 必须逐字出现在正文里
        body = ' '.join(x.get('es', '') for x in paras)
        for s in (p.get('structures') or []):
            if s.get('es', '').strip() and s['es'].strip() not in body:
                errs.append(f'[{t}] 长难句未在正文逐字出现: {s["es"][:40]}…')
            if not s.get('note'):
                errs.append(f'[{t}] 长难句缺 note 讲解')
        # 生词必须能在正文中找到（走主审计同款形态学）
        terms = [g.get('es', '') for g in (p.get('glossary') or []) if g.get('es')]
        for miss in morphology_missing(terms, body):
            errs.append(f'[{t}] 生词未在正文出现: {miss}')
    return errs


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    batch = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
    if not isinstance(batch, list):
        raise SystemExit('批次文件必须是 JSON 数组')

    errs = validate(batch)
    if errs:
        print('❌ 批次校验未通过：')
        for e in errs:
            print('   - ' + e)
        raise SystemExit(1)

    src = DATA.read_text(encoding='utf-8')
    end = find_array_end(src, 'READING_PASSAGES')   # end 指向 ']' 之后
    head = src[:end - 1].rstrip()                   # 不含 ']'，只为给最后一项补逗号
    tail = src[end - 1:]                            # 从 ']' 开始

    # 数组最后一项后面必须有逗号（原文件常写成 `}\n]`，没有逗号）
    if not head.endswith(','):
        head = head + ','

    body = '\n'.join(render(p) + ',' for p in batch).rstrip(',')
    new_src = head + '\n' + body + '\n' + tail

    # 自检：括号配平 + 无孤立逗号
    if new_src.count('[') != new_src.count(']') or new_src.count('{') != new_src.count('}'):
        raise SystemExit('❌ 括号不配平，已放弃')
    if re.search(r'},\s*,', new_src):
        raise SystemExit('❌ 产生孤立逗号，已放弃')

    DATA.write_text(new_src, encoding='utf-8')
    print(f'✅ 新增精读语篇 {len(batch)} 篇')
    for p in batch:
        n = sum(len(x['es'].split()) for x in p['paragraphs'])
        print(f"   {p['level']}  {p['title']}  （{len(p['paragraphs'])} 段 / 约 {n} 词 / 生词 {len(p['glossary'])}）")


if __name__ == '__main__':
    main()
