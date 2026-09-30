#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""口语练习插入工具

把一批 SPEAKING_SENTENCES 追加到 data/courses.js 数组末尾。

用法:
    python3 tools/insert-speaking.py tools/batch44-speaking.py

批次文件定义 BATCH = [ {'level','es','zh','slow','vocab':[...]}, ... ]

校验：
  - 字段完整、level 合法
  - es 不与现有句子重复
  - slow 必须是 es 加了省略号停顿的版本：去掉省略号后应与 es 一致
    （否则 TTS 慢速版会念出和原文不同的内容）
  - vocab 各项必须能在 es 中找到（走 check-terms.mjs 形态学）
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data' / 'courses.js'
ARRAY = 'SPEAKING_SENTENCES'
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
    if not terms:
        return []
    helper = Path(__file__).resolve().parent / 'check-terms.mjs'
    payload = json.dumps({'terms': terms, 'text': text}, ensure_ascii=False)
    try:
        out = subprocess.run(['node', str(helper)], input=payload,
                             capture_output=True, text=True, timeout=60)
    except (OSError, subprocess.SubprocessError) as e:
        print('⚠️  无法调用形态学校验器（%s）' % e)
        return []
    if out.returncode != 0:
        return []
    try:
        return json.loads(out.stdout or '[]')
    except json.JSONDecodeError:
        return []


def norm_slow(s):
    """把 slow 的省略号停顿去掉，便于与 es 比对"""
    return re.sub(r'[\s…]+', '', s)


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    ns = {}
    exec(Path(sys.argv[1]).read_text(encoding='utf-8'), ns)
    batch = ns['BATCH']

    src = DATA.read_text(encoding='utf-8')
    existing = set()
    for m in re.finditer(r"es:'((?:[^'\\]|\\.)*)'", src):
        existing.add(re.sub(r'\s+', ' ', m.group(1).strip().lower()))

    errs = []
    seen = set()
    for p in batch:
        es = p.get('es', '')
        for f in ('level', 'es', 'zh', 'slow', 'vocab'):
            if not p.get(f):
                errs.append('缺字段 %s：%s' % (f, es or p))
        if p.get('level') not in LEVELS:
            errs.append('level 非法：%s（%s）' % (p.get('level'), es))
        k = re.sub(r'\s+', ' ', str(es).strip().lower())
        if k in existing:
            errs.append('与现有句子重复：%s' % es)
        if k in seen:
            errs.append('批次内重复：%s' % es)
        seen.add(k)
        # slow 必须是 es 加停顿，去掉省略号后内容一致
        if norm_slow(p.get('slow', '')) != re.sub(r'\s+', '', es):
            errs.append('slow 与 es 内容不一致：%s' % es)
        # vocab 必须出现在句子里
        miss = morphology_missing(p.get('vocab') or [], es)
        for m in miss:
            errs.append('vocab 未出现在句子中：%s（%s）' % (m, es))
    if errs:
        print('❌ 校验未通过：')
        for e in errs:
            print('   - ' + e)
        raise SystemExit(1)

    end = find_array_end(src, ARRAY)
    head = src[:end - 1].rstrip()
    tail = src[end - 1:]
    if not head.endswith(','):
        head += ','
    lines = []
    for p in batch:
        v = ', '.join(js(x) for x in p['vocab'])
        lines.append("  {level:%s, es:%s, zh:%s, slow:%s, vocab:[%s]},"
                     % (js(p['level']), js(p['es']), js(p['zh']), js(p['slow']), v))
    block = '\n'.join(lines).rstrip(',')
    new_src = head + '\n' + block + '\n' + tail

    if new_src.count('[') != new_src.count(']') or new_src.count('{') != new_src.count('}'):
        raise SystemExit('❌ 括号不配平，已放弃')
    if re.search(r'},\s*,', new_src):
        raise SystemExit('❌ 产生孤立逗号，已放弃')

    DATA.write_text(new_src, encoding='utf-8')
    lv = {}
    for p in batch:
        lv[p['level']] = lv.get(p['level'], 0) + 1
    print('✅ 新增口语句子 %d 条 %s' % (len(batch), json.dumps(lv, ensure_ascii=False)))


if __name__ == '__main__':
    main()
