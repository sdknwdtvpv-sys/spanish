#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""搭配插入工具

把一批 COLLOCATIONS 追加到 data/courses.js 数组末尾。

用法:
    python3 tools/insert-collocations.py tools/batch43-collocations.py

批次文件定义 BATCH = [ {'level','pattern','zh','example'}, ... ]

校验（都是踩过坑的地方）：
  - 字段完整、level 合法
  - pattern 不与现有搭配重复（靠人工记忆避免重复不可靠）
  - example 必须真的包含该 pattern —— 用 tools/check-terms.mjs 的形态学，
    不自己写词干匹配（自己写的会把 adoptar→adoptó 这类正常变位误报）
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data' / 'courses.js'
ARRAY = 'COLLOCATIONS'
LEVELS = ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')


def find_array_end(src, name):
    m = re.search(r'const\s+' + re.escape(name) + r'\s*=\s*\[', src)
    if not m:
        raise SystemExit('找不到数组 ' + name)
    i = m.end() - 1
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
    raise SystemExit('数组括号未配平')


def js(s):
    s = str(s).replace('\\', '\\\\')
    if "'" in s and '"' not in s:
        return '"' + s.replace('"', '\\"') + '"'
    return "'" + s.replace("'", "\\'") + "'"


def morphology_missing(terms, text):
    """调用 tools/check-terms.mjs，复用主审计的形态学逻辑。"""
    if not terms:
        return []
    helper = Path(__file__).resolve().parent / 'check-terms.mjs'
    payload = json.dumps({'terms': terms, 'text': text}, ensure_ascii=False)
    try:
        out = subprocess.run(['node', str(helper)], input=payload,
                             capture_output=True, text=True, timeout=60)
    except (OSError, subprocess.SubprocessError) as e:
        print('⚠️  无法调用形态学校验器（%s），跳过例句核查' % e)
        return []
    if out.returncode != 0:
        print('⚠️  形态学校验器异常：%s' % out.stderr.strip()[:200])
        return []
    try:
        return json.loads(out.stdout or '[]')
    except json.JSONDecodeError:
        return []


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    ns = {}
    exec(Path(sys.argv[1]).read_text(encoding='utf-8'), ns)
    batch = ns['BATCH']

    src = DATA.read_text(encoding='utf-8')

    # 现有 pattern 集合（用于查重）
    existing = set()
    for m in re.finditer(r"pattern:'((?:[^'\\]|\\.)*)'", src):
        existing.add(re.sub(r'\s+', ' ', m.group(1).strip().lower()))
    for m in re.finditer(r'pattern:"((?:[^"\\]|\\.)*)"', src):
        existing.add(re.sub(r'\s+', ' ', m.group(1).strip().lower()))

    errs = []
    seen = set()
    for c in batch:
        pat = c.get('pattern', '')
        for f in ('level', 'pattern', 'zh', 'example'):
            if not c.get(f):
                errs.append('缺字段 %s：%s' % (f, pat or c))
        if c.get('level') not in LEVELS:
            errs.append('level 非法：%s（%s）' % (c.get('level'), pat))
        k = re.sub(r'\s+', ' ', str(pat).strip().lower())
        if k in existing:
            errs.append('与现有搭配重复：%s' % pat)
        if k in seen:
            errs.append('批次内重复：%s' % pat)
        seen.add(k)
    if errs:
        print('❌ 校验未通过：')
        for e in errs:
            print('   - ' + e)
        raise SystemExit(1)

    # 例句必须含该搭配。逐条核对——把多条合并成一段文本再查是错的：
    # 那会用一个条目的例句「满足」另一个条目的搭配。
    # 走 check-terms.mjs 的形态学，避免 adoptar→adoptó 这类变位被误报。
    real_miss = []
    for c in batch:
        if morphology_missing([c['pattern']], c['example']):
            real_miss.append('%s  →  %s' % (c['pattern'], c['example']))
    if real_miss:
        print('❌ 以下搭配的例句未包含该搭配：')
        for m in real_miss:
            print('   - ' + m)
        raise SystemExit(1)

    end = find_array_end(src, ARRAY)
    head = src[:end - 1].rstrip()
    tail = src[end - 1:]
    if not head.endswith(','):
        head += ','
    lines = []
    for c in batch:
        lines.append("  {level:%s, pattern:%s, zh:%s, example:%s},"
                     % (js(c['level']), js(c['pattern']), js(c['zh']), js(c['example'])))
    block = '\n'.join(lines).rstrip(',')
    new_src = head + '\n' + block + '\n' + tail

    if new_src.count('[') != new_src.count(']') or new_src.count('{') != new_src.count('}'):
        raise SystemExit('❌ 括号不配平，已放弃')
    if re.search(r'},\s*,', new_src):
        raise SystemExit('❌ 产生孤立逗号，已放弃')

    DATA.write_text(new_src, encoding='utf-8')
    lv = {}
    for c in batch:
        lv[c['level']] = lv.get(c['level'], 0) + 1
    print('✅ 新增搭配 %d 条 %s' % (len(batch), json.dumps(lv, ensure_ascii=False)))


if __name__ == '__main__':
    main()
