#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""A1/A2 语法专项题库追加工具（批次 34/35）

补齐 audit-gaps.mjs 里「语法点无对应练习」的缺口。
题目格式与既有题库一致：
  {sentence:'...', options:[...], correct:0, explain:'...'}

用法: python3 tools/insert-grammar.py tools/batch34-a1a2-grammar.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data' / 'courses.js'
ARRAY = 'GRAMMAR_QUIZZES'


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
    s = s.replace('\\', '\\\\')
    if "'" in s and '"' not in s:
        return '"' + s.replace('"', '\\"') + '"'
    return "'" + s.replace("'", "\\'") + "'"


def render(groups):
    out = []
    for topic, qs in groups:
        # 每题 4 个选项
        for sent, opts, correct, exp in qs:
            assert len(opts) == 4, '选项数必须是 4: ' + sent
            assert len({o.strip().lower() for o in opts}) == 4, '选项重复: ' + sent
        out.append('  {topic:%s, questions:[' % js(topic))
        for sent, opts, correct, exp in qs:
            out.append('    {sentence:%s, options:[%s], correct:%d, explain:%s},'
                       % (js(sent), ', '.join(js(o) for o in opts), correct, js(exp)))
        out[-1] = out[-1].rstrip(',')
        out.append('  ]},')
    out[-1] = out[-1].rstrip(',')
    return '\n'.join(out)


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    ns = {}
    exec(Path(sys.argv[1]).read_text(encoding='utf-8'), ns)
    groups = ns['GROUPS']

    src = DATA.read_text(encoding='utf-8')
    end = find_array_end(src, ARRAY)
    head = src[:end - 1].rstrip()
    tail = src[end - 1:]
    if not head.endswith(','):
        head += ','
    block = render(groups)
    new_src = head + '\n' + block + '\n' + tail

    if new_src.count('[') != new_src.count(']') or new_src.count('{') != new_src.count('}'):
        raise SystemExit('括号不配平，已放弃')
    if re.search(r'},\s*,', new_src):
        raise SystemExit('产生孤立逗号，已放弃')

    DATA.write_text(new_src, encoding='utf-8')
    n = sum(len(q) for _, q in groups)
    print('新增语法主题 %d 个 / %d 题' % (len(groups), n))
    for t, qs in groups:
        print('   %s（%d 题）' % (t, len(qs)))


if __name__ == '__main__':
    main()
