import json, re, sys

p = "/Volumes/Elliot's SSD/HARNESS/Spanish/c2_lecturas_set2.json"
data = json.load(open(p, encoding="utf-8"))
assert isinstance(data, list) and len(data) == 3, "must be array of 3"

ok = True
def bad(msg):
    global ok
    ok = False
    print("FAIL:", msg)

for i, d in enumerate(data):
    tag = f"[{i+1}] {d.get('title')}"
    print("=" * 70)
    print(tag, "| topic:", d.get("topic"), "| level:", d.get("level"), "| minutes:", d.get("minutes"))
    for k in ("level", "title", "topic", "minutes", "paragraphs", "glossary", "structures", "questions"):
        if k not in d:
            bad(f"{tag} missing key {k}")
    # title length
    cn = re.findall(r"[\u4e00-\u9fff]", d["title"])
    print("  title CJK chars:", len(cn))
    if not (10 <= len(cn) <= 16):
        bad(f"{tag} title length {len(cn)}")
    # paragraphs
    full = " ".join(x["es"] for x in d["paragraphs"])
    if len(d["paragraphs"]) != 5:
        bad(f"{tag} paragraphs={len(d['paragraphs'])}")
    for j, par in enumerate(d["paragraphs"]):
        w = len(par["es"].split())
        z = len(re.findall(r"[\u4e00-\u9fff]", par["zh"]))
        flag = "" if 100 <= w <= 160 else "  <-- OUT OF RANGE"
        print(f"  p{j+1}: es_words={w} zh_cjk={z}{flag}")
        if not (100 <= w <= 160):
            bad(f"{tag} p{j+1} words {w}")
        for k in ("es", "zh"):
            if k not in par:
                bad(f"{tag} p{j+1} missing {k}")
    # glossary
    g = d["glossary"]
    print("  glossary:", len(g))
    if not (12 <= len(g) <= 14):
        bad(f"{tag} glossary {len(g)}")
    for e in g:
        if e["es"] not in full:
            bad(f"{tag} glossary '{e['es']}' NOT in text")
        if set(e.keys()) != {"es", "zh"}:
            bad(f"{tag} glossary keys {e.keys()}")
    # structures
    s = d["structures"]
    print("  structures:", len(s))
    if len(s) != 3:
        bad(f"{tag} structures {len(s)}")
    for e in s:
        if set(e.keys()) != {"es", "note"}:
            bad(f"{tag} structure keys {sorted(e.keys())}")
        if e["es"] not in full:
            bad(f"{tag} structure NOT verbatim: {e['es'][:60]}...")
        n = len(re.findall(r"[\u4e00-\u9fff]", e["note"]))
        print(f"    note CJK chars={n} | verbatim={e['es'] in full}")
        if not (60 <= n <= 130):
            bad(f"{tag} note length {n}")
    # questions
    q = d["questions"]
    print("  questions:", len(q))
    if len(q) != 3:
        bad(f"{tag} questions {len(q)}")
    for e in q:
        if set(e.keys()) != {"q", "a"}:
            bad(f"{tag} question keys {e.keys()}")
        if not e["a"].strip().endswith((".", "?", "!")):
            bad(f"{tag} answer not complete sentence: {e['a'][:40]}")
    # english words check (crude): words containing typical english-only patterns
    for m in re.finditer(r"\b(?:the|and|with|which|that|this|when|from|into|not|is|are|of|to)\b", full + " " + " ".join(e["zh"] for e in d["paragraphs"])):
        bad(f"{tag} possible english word: {m.group(0)}")

print("=" * 70)
print("RAW file bytes:", len(open(p, "rb").read()))
print("ALL CHECKS PASSED" if ok else "SOME CHECKS FAILED")
sys.exit(0 if ok else 1)
