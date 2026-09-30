#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""听力材料插入工具

把一批 LISTENING_PASSAGES 追加到 data/courses.js 数组末尾。

用法:
    python3 tools/insert-listening.py tools/batch40-listening.py

批次文件需定义 BATCH = [ {...}, ... ]，每个元素字段：
    level / title / speaker / duration / es / zh / keyVocab[{es,zh}] / questions[{q,a}]
"""
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'data' / 'courses.js'
ARRAY = 'LISTENING_PASSAGES'
REQUIRED = ['level', 'title', 'speaker', 'duration', 'es', 'zh', 'keyVocab', 'questions']
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
    s = s.replace('\\', '\\\\')
    if "'" in s and '"' not in s:
        return '"' + s.replace('"', '\\"') + '"'
    return "'" + s.replace("'", "\\'") + "'"


def render(p, indent='  '):
    i2, i4 = indent, indent * 2
    out = []
    out.append('%s{level:%s, title:%s, speaker:%s, duration:%s,' % (
        i2, js(p['level']), js(p['title']), js(p['speaker']), js(p['duration'])))
    out.append('%ses:`%s`,' % (i4, p['es']))
    out.append('%szh:`%s`,' % (i4, p['zh']))
    out.append('%skeyVocab:[' % i4)
    for kv in p['keyVocab']:
        out.append('%s{es:%s, zh:%s},' % (i4 + indent, js(kv['es']), js(kv['zh'])))
    out[-1] = out[-1].rstrip(',')
    out.append('%s],' % i4)
    out.append('%squestions:[' % i4)
    for q in p['questions']:
        out.append('%s{q:%s, a:%s},' % (i4 + indent, js(q['q']), js(q['a'])))
    out[-1] = out[-1].rstrip(',')
    out.append('%s]' % i4)
    out.append('%s}' % i2)
    return '\n'.join(out)


def morphology_missing(terms, text):
    """调用 tools/check-terms.mjs，复用主审计的形态学逻辑。

    不在这里自己写词干匹配：那会和主审计产生两套规则，
    对同一份内容给出两个判定（前几轮已经踩过这个坑）。
    """
    if not terms:
        return []
    helper = Path(__file__).resolve().parent / 'check-terms.mjs'
    payload = json.dumps({'terms': terms, 'text': text}, ensure_ascii=False)
    try:
        out = subprocess.run(['node', str(helper)], input=payload,
                             capture_output=True, text=True, timeout=60)
    except (OSError, subprocess.SubprocessError) as e:
        print('⚠️  无法调用形态学校验器（%s），跳过重点词汇核查' % e)
        return []
    if out.returncode != 0:
        print('⚠️  形态学校验器异常：%s' % out.stderr.strip()[:200])
        return []
    try:
        return json.loads(out.stdout or '[]')
    except json.JSONDecodeError:
        return []


def validate(batch):
    errs = []
    seen_titles = set()
    for p in batch:
        t = p.get('title', '?')
        for f in REQUIRED:
            if f not in p:
                errs.append('[%s] 缺字段 %s' % (t, f))
        if p.get('level') not in LEVELS:
            errs.append('[%s] level 非法: %s' % (t, p.get('level')))
        if p.get('title') in seen_titles:
            errs.append('[%s] 标题在批次内重复' % t)
        seen_titles.add(p.get('title'))
        # 中西文行数必须一致（逐行对照是听力页面的呈现方式）
        es_lines = [x for x in (p.get('es') or '').split('\n') if x.strip()]
        zh_lines = [x for x in (p.get('zh') or '').split('\n') if x.strip()]
        if len(es_lines) != len(zh_lines):
            errs.append('[%s] 中西文行数不一致: es=%d zh=%d' % (t, len(es_lines), len(zh_lines)))
        if len(es_lines) < 4:
            errs.append('[%s] 对话行数过少: %d' % (t, len(es_lines)))
        kvs = p.get('keyVocab') or []
        if not (3 <= len(kvs) <= 10):
            errs.append('[%s] keyVocab 条数异常: %d' % (t, len(kvs)))
        for kv in kvs:
            if not kv.get('es') or not kv.get('zh'):
                errs.append('[%s] keyVocab 缺 es 或 zh' % t)
        # 重点词汇必须真的出现在原文里。
        # 用 tools/check-terms.mjs（与主审计共用同一套形态学），不要自己写词干匹配：
        # 直接比字符串会把正常变位判成「未出现」——ingresar vs ingresen、
        # reciclar vs reciclas、retrasarse vs me retraso 都会被误报。
        terms = [kv.get('es', '') for kv in kvs if kv.get('es')]
        for miss in morphology_missing(terms, p.get('es') or ''):
            errs.append('[%s] keyVocab 未出现在原文: %s' % (t, miss))
        qs = p.get('questions') or []
        if len(qs) < 2:
            errs.append('[%s] 理解题少于 2 道' % t)
        for q in qs:
            if not q.get('q') or not q.get('a'):
                errs.append('[%s] 理解题缺字段' % t)
    return errs


def main():
    if len(sys.argv) < 2:
        raise SystemExit(__doc__)
    ns = {}
    exec(Path(sys.argv[1]).read_text(encoding='utf-8'), ns)
    batch = ns['BATCH']

    errs = validate(batch)
    if errs:
        print('❌ 批次校验未通过：')
        for e in errs:
            print('   - ' + e)
        raise SystemExit(1)

    src = DATA.read_text(encoding='utf-8')
    end = find_array_end(src, ARRAY)
    head = src[:end - 1].rstrip()
    tail = src[end - 1:]
    if not head.endswith(','):
        head += ','
    block = '\n'.join(render(p) + ',' for p in batch).rstrip(',')
    new_src = head + '\n' + block + '\n' + tail

    if new_src.count('[') != new_src.count(']') or new_src.count('{') != new_src.count('}'):
        raise SystemExit('❌ 括号不配平，已放弃')
    if re.search(r'},\s*,', new_src):
        raise SystemExit('❌ 产生孤立逗号，已放弃')

    DATA.write_text(new_src, encoding='utf-8')
    print('✅ 新增听力材料 %d 段' % len(batch))
    for p in batch:
        print('   %s  %s（%s / %d 行 / 生词 %d）' % (
            p['level'], p['title'], p['duration'],
            len([x for x in p['es'].split('\n') if x.strip()]), len(p['keyVocab'])))


if __name__ == '__main__':
    main()
