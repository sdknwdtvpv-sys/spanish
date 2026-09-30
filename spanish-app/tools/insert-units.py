#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
通用内容插入器 —— 把新单元追加到指定等级的 units 数组末尾。

用法:
    python3 tools/insert-units.py <batch_module.py>

批次文件需定义：
    BATCH = { 'A1': [单元dict, ...], 'B2': [...] }

单元 dict 结构：
    {'id','title','subtitle','lessons','duration',
     'vocab':[(es,zh,example),...],
     'grammar':[{'title','desc'},...]}

设计要点（踩过的坑）：
  * 逗号必须接在「最后一个元素的行尾」，绝不能新增一行只放逗号，
    否则数组会出现空位（sparse array），运行时 units 里出现 undefined。
  * 定位数组结尾要用方括号配对，不能用字符串查找。
"""
import io
import sys
import re
import importlib.util
import os

HERE = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(HERE, '..', 'data', 'courses.js')


def load_batch(path):
    spec = importlib.util.spec_from_file_location("batch", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod.BATCH


def find_units_array(src, level):
    """返回 (open_idx, close_idx)，即该等级 units: [ ... ] 的方括号位置。"""
    m = re.search(r"\n  " + re.escape(level) + r": \{", src)
    if not m:
        raise SystemExit("未找到等级声明: " + level)
    um = re.compile(r"units:\s*\[").search(src, m.end())
    if not um:
        raise SystemExit("未找到 units 数组: " + level)
    open_idx = src.index("[", um.start())
    depth = 0
    for i in range(open_idx, len(src)):
        c = src[i]
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return open_idx, i
    raise SystemExit("括号配对失败: " + level)


def esc(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")


def render_unit(u):
    L = []
    L.append("      { id:'%s', title:'%s', subtitle:'%s', lessons:%d, duration:'%s',"
             % (esc(u['id']), esc(u['title']), esc(u['subtitle']), u['lessons'], esc(u['duration'])))
    L.append("        vocab:[")
    for w in u['vocab']:
        es, zh, ex = w
        L.append("          {es:'%s', zh:'%s', example:'%s'}," % (esc(es), esc(zh), esc(ex)))
    L[-1] = L[-1].rstrip(',')
    L.append("        ],")
    L.append("        grammar:[")
    for g in u['grammar']:
        L.append("          {title:'%s', desc:'%s'}," % (esc(g['title']), esc(g['desc'])))
    L[-1] = L[-1].rstrip(',')
    L.append("        ]")
    L.append("      }")
    return "\n".join(L)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("用法: python3 tools/insert-units.py <batch.py>")
    batch = load_batch(sys.argv[1])
    src = io.open(P, encoding="utf-8").read()

    edits = []
    for level, units in batch.items():
        open_idx, close_idx = find_units_array(src, level)
        body = ",\n".join(render_unit(u) for u in units)
        edits.append((open_idx, close_idx, body, level, units))

    # 从后往前插入，避免前面插入影响后面索引
    edits.sort(key=lambda e: e[0], reverse=True)
    total_units = total_words = 0
    report = []
    for open_idx, close_idx, body, level, units in edits:
        j = close_idx - 1
        while j >= 0 and src[j] in " \t\r\n":
            j -= 1
        if src[j] == ',':
            src = src[:j + 1] + "\n" + body + "\n    " + src[close_idx:]
        else:
            src = src[:j + 1] + ",\n" + body + "\n    " + src[close_idx:]
        total_units += len(units)
        w = sum(len(u['vocab']) for u in units)
        total_words += w
        report.append((level, [u['id'] for u in units], w))

    io.open(P, "w", encoding="utf-8").write(src)
    print("新增单元: %d 个 | 新增词条: %d" % (total_units, total_words))
    for level, ids, w in report:
        print("   %-4s %s  (+%d 词)" % (level, ", ".join(ids), w))

    # 自检：确认没有产生数组空位或孤立逗号
    check = io.open(P, encoding="utf-8").read()
    orphan = len(re.findall(r"\n[ \t]*,[ \t]*\n", check))
    if orphan:
        print("⚠ 检测到孤立逗号 %d 处，请检查" % orphan)
    else:
        print("自检：无孤立逗号 ✓")


if __name__ == '__main__':
    main()
