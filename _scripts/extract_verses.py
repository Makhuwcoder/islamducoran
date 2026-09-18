import re, sys, glob, yaml, os

def extract_from_file(path):
    with open(path, encoding='utf-8') as f:
        content = f.read()
    # Match {% include verset.html ... %} blocks (non-greedy across lines)
    pattern = re.compile(r'\{%\s*include\s+verset\.html\s+(.*?)%\}', re.DOTALL)
    entries = []
    for m in pattern.finditer(content):
        attrs_str = m.group(1)
        # extract ref=, ar=, trl=, trad= each as "...possibly with escaped quotes..."
        def get_attr(name):
            am = re.search(name + r'\s*=\s*"((?:[^"\\]|\\.)*)"', attrs_str, re.DOTALL)
            return am.group(1) if am else None
        ref = get_attr('ref')
        ar = get_attr('ar')
        trl = get_attr('trl')
        trad = get_attr('trad')
        if ref and ref.startswith('S.'):
            entries.append({'ref': ref, 'ar': ar, 'trl': trl, 'trad': trad})
    return entries

def main():
    surah = sys.argv[1]  # e.g. "s1" or "s2"
    pattern = sys.argv[2]  # glob pattern
    outpath = sys.argv[3]
    files = sorted(glob.glob(pattern), key=lambda p: (
        int(re.search(r'bloc(\d+)', p).group(1)) if re.search(r'bloc(\d+)', p) else 0
    ))
    all_entries = []
    for f in files:
        entries = extract_from_file(f)
        print(f"{f}: {len(entries)} entries", file=sys.stderr)
        all_entries.extend(entries)
    print(f"TOTAL: {len(all_entries)} entries", file=sys.stderr)
    with open(outpath, 'w', encoding='utf-8') as out:
        yaml.dump(all_entries, out, allow_unicode=True, default_flow_style=False, sort_keys=False, width=100000)
    print(f"Wrote {outpath}", file=sys.stderr)

if __name__ == '__main__':
    main()
