# -*- coding: utf-8 -*-
import re, sys, importlib.util

spec = importlib.util.spec_from_file_location("g", sys.argv[1] if len(sys.argv) > 1 else "gramatica_practica_7temas.py")
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)

errors = []
total = 0
lens = []
idx_count = {0: 0, 1: 0, 2: 0, 3: 0}
for gi, (title, qs) in enumerate(m.GROUPS):
    if len(qs) != 5:
        errors.append(f"组{gi} {title}: 题数 {len(qs)} != 5")
    for qi, q in enumerate(qs):
        total += 1
        if len(q) != 4:
            errors.append(f"[{title}#{qi+1}] 元组长度 {len(q)} != 4")
            continue
        stem, opts, ans, exp = q
        tag = f"[{title}#{qi+1}]"
        if '___' not in stem:
            errors.append(f"{tag} 题干缺少 ___")
        if stem.count('___') != 1:
            errors.append(f"{tag} 题干 ___ 数量 = {stem.count('___')}")
        if not isinstance(ans, int) or not 0 <= ans <= 3:
            errors.append(f"{tag} 答案索引非法 {ans}")
        else:
            idx_count[ans] += 1
        low = [o.strip().lower() for o in opts]
        if len(set(low)) != 4:
            errors.append(f"{tag} 选项重复(忽略大小写): {opts}")
        for o in opts:
            if not o.strip():
                errors.append(f"{tag} 空选项")
            if '___' in o:
                errors.append(f"{tag} 选项含 ___")
        n = len(exp)
        lens.append(n)
        if not (30 <= n <= 80):
            errors.append(f"{tag} 解析长度 {n}: {exp}")
        if not re.search(r'[\u4e00-\u9fff]', exp):
            errors.append(f"{tag} 解析无中文")
        # 简单英文检测：常见英文虚词
        for w in [' the ', ' that ', ' because ', ' which ', ' is ', ' are ']:
            if w in exp.lower():
                errors.append(f"{tag} 解析疑似含英文: {w.strip()}")
print("组数:", len(m.GROUPS), "题数:", total)
print("解析长度 min/max:", min(lens), max(lens))
print("答案索引分布:", idx_count)
print("错误数:", len(errors))
for e in errors:
    print(" -", e)
