#!/usr/bin/env python3
"""
Reformats "Notes lexicales" blocks (both the markdown "**Notes lexicales**"
form and the HTML <div class="notes-lexicales"> form) into a structured
<dl class="lexique"> list, one <dt>/<dd> pair per term, with:
  - internal tracking phrases ("déjà validé/connu/rencontré/établi(e/s)")
    stripped from each entry's gloss (kept content: root info + refs)
  - a trailing "Ce que le texte dit / ne dit pas" synthesis pulled into
    its own <div class="notes-lexicales__synthese">
Any block that does not parse cleanly (few/no entries detected, or too
much leftover unparsed text) is left UNTOUCHED and reported, rather than
risk corrupting content.
"""
import re, sys, glob

ARABIC = r'[؀-ۿـً-ٰٟ]'
ARABIC_RUN = ARABIC + r'+(?:(?:\s*[/…]\s*|\s+)' + ARABIC + r'+)*'
TRL_RUN = r'[^\s؀-ۿ—]+(?:\s+(?:[/·…]\s+)?[^\s؀-ۿ—]+){0,14}'
# headword = a run of Arabic tokens, then a short latin transliteration
# (word chars, hyphens, apostrophes, macrons), then an em-dash. A second
# "AR2 TRL2" pair joined by " / " (paired convention, as opposed to the
# grouped "AR1 / AR2 TRL1 / TRL2" convention already covered by the runs
# above) is optionally matched and merged into one combined headword.
HEADWORD_RE = re.compile(
    # negative lookbehind: never START a headword match on an Arabic letter
    # that is itself part of a hyphen-joined Arabic root code (e.g. the "ك"
    # inside "م-ل-ك"). Without this, such a letter — followed by a space and
    # then a long ASCII gloss ending in " — " — can be mis-parsed as its own
    # bogus one-letter headword, truncating the real root code.
    r'(?<!-)'
    r'(?P<ar>' + ARABIC_RUN + r')'
    r'\s+'
    r'(?P<trl>' + TRL_RUN + r')'
    r'(?:\s*/\s*(?P<ar2>' + ARABIC_RUN + r')\s+(?P<trl2>' + TRL_RUN + r'))?'
    r'\s+—\s+'
)

TRACKING_RE = re.compile(
    r'déjà (?:validée?s?|connue?s?|rencontrée?s?|établie?s?)'
    r'(?:\s+à plusieurs reprises)?'
    # "déjà connue PAR X" / "déjà validé PAR X" — the "par X" clause is a
    # sub-reference tied to the same internal-tracking verb (explains how/
    # where it was previously established), so it is dropped as one unit
    # rather than left dangling with no verb ("(forme II, par X)").
    r'(?:\s+par\s+[^,()—]+)?'
    r'\s*'
)

SYNTH_DIT_RE = re.compile(r'Ce que le texte dit\s*:?\s*')
SYNTH_NONDIT_RE = re.compile(r'Ce que le texte ne dit pas\s*:?\s*')


def strip_tracking(text):
    # "— déjà validé (X) : def" -> "(X) : def"  (drop the discourse verb,
    # and its "par X" sub-clause when present)
    text = TRACKING_RE.sub('', text)
    text = clean_orphaned_punctuation(text)
    return text.strip()


def clean_orphaned_punctuation(text):
    """Repairs punctuation left behind after TRACKING_RE removed a phrase
    from inside/around parentheses, e.g. "(déjà connue)" -> "()",
    "(déjà connue, X)" -> "(, X)", "(X, déjà connue)" -> "(X, )",
    "X, déjà connu — Y" -> "X, — Y"."""
    # comma immediately after an opening paren: "(, X)" -> "(X)"
    text = re.sub(r'\(\s*,\s*', '(', text)
    # comma immediately before a closing paren: "(X, )" -> "(X)"
    text = re.sub(r',\s*\)', ')', text)
    # comma immediately before an em-dash: "X, — Y" -> "X — Y"
    text = re.sub(r',\s*—\s*', ' — ', text)
    # comma immediately before the definition's " : " separator:
    # "racine k-f-r, : def" -> "racine k-f-r : def"
    text = re.sub(r',\s*:', ' :', text)
    # now-empty parentheses left with nothing (or only whitespace) inside
    text = re.sub(r'\(\s*\)\s*', '', text)
    # a bare "racine"/"racines" with no root code left after it (the whole
    # root reference was itself "déjà connue/validée" with nothing else
    # given), e.g. "; racine ." -> "."
    text = re.sub(r'\s*[;,]?\s*\bracines?\b\s*(?=[.;,)]|$)', '', text)
    # collapse doubled spaces left by any of the above
    text = re.sub(r'[ \t]{2,}', ' ', text)
    # a space stranded right before a final period
    text = re.sub(r'[ \t]+\.', '.', text)
    # nothing was left to introduce the definition's leading " : " (the
    # whole gloss was just the now-removed tracking phrase, e.g.
    # "déjà connu : ce qui ...") -> drop the now-orphaned leading colon
    text = re.sub(r'^\s*:\s*', '', text)
    return text


def split_entries(body):
    """Split a notes-lexicales paragraph body into (entries, trailing_text).
    entries = list of (ar, trl, gloss). trailing_text = unmatched tail
    (usually the 'Ce que le texte dit/ne dit pas' synthesis, or '' )."""
    matches = list(HEADWORD_RE.finditer(body))
    if not matches:
        return [], body
    entries = []
    for i, m in enumerate(matches):
        start_gloss = m.end()
        end_gloss = matches[i + 1].start() if i + 1 < len(matches) else len(body)
        gloss = body[start_gloss:end_gloss].strip()
        ar, trl = m.group('ar').strip(), m.group('trl').strip()
        if m.group('ar2'):
            ar = f"{ar} / {m.group('ar2').strip()}"
            trl = f"{trl} / {m.group('trl2').strip()}"
        entries.append((ar, trl, gloss))
    # leading text before first match should be empty/whitespace; if not,
    # something is off (treat whole block as unparsed)
    prefix = body[:matches[0].start()].strip()
    return entries, prefix


def carve_synthesis(gloss_tail_from_last_entry):
    """The synthesis text is usually appended to the LAST entry's gloss.
    Detect and carve it out, returning (clean_last_gloss, synthesis_html)."""
    text = gloss_tail_from_last_entry
    idx_dit = None
    m = SYNTH_DIT_RE.search(text)
    if m:
        idx_dit = m.start()
    if idx_dit is None:
        m2 = SYNTH_NONDIT_RE.search(text)
        if m2:
            idx_dit = m2.start()
    if idx_dit is None:
        return text, None
    clean = text[:idx_dit].strip()
    synth = text[idx_dit:].strip()
    # split dit / nondit into two <p> if both present
    parts = []
    m_nondit = SYNTH_NONDIT_RE.search(synth)
    if m_nondit and SYNTH_DIT_RE.search(synth):
        dit_part = synth[:m_nondit.start()].strip()
        nondit_part = synth[m_nondit.start():].strip()
        dit_part = SYNTH_DIT_RE.sub('', dit_part, count=1).strip()
        nondit_part = SYNTH_NONDIT_RE.sub('', nondit_part, count=1).strip()
        parts.append(f'<p><strong>Ce que le texte dit :</strong> {dit_part}</p>')
        parts.append(f'<p><strong>Ce que le texte ne dit pas :</strong> {nondit_part}</p>')
    elif m_nondit:
        nondit_part = SYNTH_NONDIT_RE.sub('', synth, count=1).strip()
        parts.append(f'<p><strong>Ce que le texte ne dit pas :</strong> {nondit_part}</p>')
    else:
        dit_part = SYNTH_DIT_RE.sub('', synth, count=1).strip()
        parts.append(f'<p><strong>Ce que le texte dit :</strong> {dit_part}</p>')
    return clean, '\n'.join(parts)


def build_html(entries, synthesis_html, subtitle=None, intro=None):
    out = ['<div class="notes-lexicales">']
    out.append('<span class="notes-lexicales__titre">Notes lexicales</span>')
    if subtitle:
        out.append(f'<span class="notes-lexicales__sous-titre">{subtitle}</span>')
    if intro:
        out.append(f'<p class="notes-lexicales__intro">{intro}</p>')
    out.append('<dl class="lexique">')
    for ar, trl, gloss in entries:
        gloss = strip_tracking(gloss)
        out.append('<div class="lex-entree">')
        ar_span = f'<span class="lex-ar">{ar}</span>' if ar else ''
        out.append(f'<dt>{ar_span}<span class="lex-trl">{trl}</span></dt>')
        out.append(f'<dd>{gloss}</dd>')
        out.append('</div>')
    out.append('</dl>')
    if synthesis_html:
        out.append(f'<div class="notes-lexicales__synthese">\n{synthesis_html}\n</div>')
    out.append('</div>')
    return '\n'.join(out)


def process_markdown_block(match_text):
    """match_text is like '**Notes lexicales**\\n\\n<body>' possibly with a
    subtitle '**Notes lexicales — subtitle**' form."""
    header_m = re.match(r'\*\*(Notes? lexicales?)(?:\s*[—-]\s*(.*?))?\*\*\s*\n+', match_text)
    if not header_m:
        return None, 'no-header-match'
    subtitle = header_m.group(2)
    body = match_text[header_m.end():].strip()
    entries, prefix = split_entries(body)
    if not entries:
        return None, 'no-entries'
    intro = None
    if prefix.strip():
        if re.search(ARABIC, prefix):
            # Arabic script in the leftover prefix means a headword failed
            # to match (real parsing gap) — don't guess, leave untouched.
            return None, 'leftover-prefix'
        intro = prefix.strip()
    ar, trl, gloss = entries[-1]
    clean_gloss, synth = carve_synthesis(gloss)
    entries[-1] = (ar, trl, clean_gloss)
    html = build_html(entries, synth, subtitle, intro)
    return html, f'ok:{len(entries)}-entries'


BULLET_RE = re.compile(r'^- \*\*(?P<term>[^*]+)\*\*\s*—\s*(?P<def>.*)$')


def process_bullet_block(match_text):
    """match_text is '**Notes lexicales**\\n\\n- **term** — def\\n- **term2** — def2...'
    (the older pre-Arabic-headword style used in S1 and early S2 blocs)."""
    header_m = re.match(r'\*\*(Notes? lexicales?)(?:\s*[—-]\s*(.*?))?\*\*\s*\n+', match_text)
    if not header_m:
        return None, 'no-header-match'
    subtitle = header_m.group(2)
    body = match_text[header_m.end():].strip()
    lines = body.split('\n')
    entries = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        m = BULLET_RE.match(line)
        if not m:
            return None, 'bullet-parse-fail'
        entries.append((None, m.group('term').strip(), m.group('def').strip()))
    if not entries:
        return None, 'no-entries'
    ar, trl, gloss = entries[-1]
    clean_gloss, synth = carve_synthesis(gloss)
    entries[-1] = (ar, trl, clean_gloss)
    html = build_html(entries, synth, subtitle)
    return html, f'ok:{len(entries)}-entries'


P_TAG_RE = re.compile(r'<p><strong>(?P<label>[^<]*)</strong>\s*(?P<body>.*?)</p>', re.DOTALL)


def process_div_block(div_text):
    """div_text = '<div class="notes-lexicales">...</div>' (S3 bloc2-7 style)."""
    ps = list(P_TAG_RE.finditer(div_text))
    if not ps:
        return None, 'no-p-tags'
    kept_verbatim = []
    term_html = None
    subtitle = None
    for pm in ps:
        label = pm.group('label').strip()
        body = pm.group('body').strip()
        if label in ('Notes lexicales.', 'Note lexicale.'):
            entries, prefix = split_entries(body)
            if not entries:
                return None, 'no-entries'
            intro = None
            if prefix.strip():
                if re.search(ARABIC, prefix):
                    return None, 'leftover-prefix'
                intro = prefix.strip()
            ar, trl, gloss = entries[-1]
            clean_gloss, synth = carve_synthesis(gloss)
            entries[-1] = (ar, trl, clean_gloss)
            term_html = build_html(entries, synth, None, intro)
            # strip the outer <div class="notes-lexicales">...</div> wrapper
            # build_html already adds it; unwrap so we can re-wrap once below
            term_html = term_html[len('<div class="notes-lexicales">\n'):-len('\n</div>')]
        else:
            # a standalone methodological/policy note — keep verbatim
            kept_verbatim.append(pm.group(0))
    if term_html is None:
        return None, 'no-term-paragraph'
    out = ['<div class="notes-lexicales">']
    out.extend(kept_verbatim)
    out.append(term_html)
    # preserve trailing content after the last </p> up to </div> (e.g. the
    # "↑ Haut de fiche" back-link), unchanged
    tail = div_text[ps[-1].end():-len('</div>')].strip()
    if tail:
        out.append(tail)
    out.append('</div>')
    return '\n'.join(out), f'ok:{len(ps)}-p-tags'


def process_file_div(path, apply=False):
    with open(path, encoding='utf-8') as f:
        content = f.read()
    report = []
    pattern = re.compile(r'<div class="notes-lexicales">.*?</div>', re.DOTALL)
    new_content = content
    offset = 0
    for m in pattern.finditer(content):
        block_text = m.group(0)
        html, status = process_div_block(block_text)
        report.append((path, 'div', status, len(block_text)))
        if html and apply:
            start = m.start() + offset
            end = m.end() + offset
            new_content = new_content[:start] + html + new_content[end:]
            offset += len(html) - (end - start)
    if apply and new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    return report


def process_file(path, apply=False):
    with open(path, encoding='utf-8') as f:
        content = f.read()

    report = []

    # --- Format A: markdown "**Notes lexicales**" blocks ---
    # Each block runs from "**Notes lexicales...**" up to the next blank-line
    # followed by "---", "{% include", "##", or end of file.
    pattern = re.compile(
        r'\*\*Notes? lexicales?(?:\s*[—-]\s*[^*]*)?\*\*\s*\n\n.*?'
        r'(?=\n\n(?:---|\{%|\{:\.callout|<div class="callout|<a href="#top-fiche"|##|\Z))',
        re.DOTALL
    )
    new_content = content
    offset = 0
    for m in pattern.finditer(content):
        block_text = m.group(0)
        html, status = process_markdown_block(block_text)
        if html is None and status == 'no-entries':
            html2, status2 = process_bullet_block(block_text)
            if html2 is not None:
                html, status = html2, status2 + ':bullet'
        report.append((path, 'md', status, len(block_text)))
        if html and apply:
            start = m.start() + offset
            end = m.end() + offset
            new_content = new_content[:start] + html + new_content[end:]
            offset += len(html) - (end - start)

    if apply and new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return report


if __name__ == '__main__':
    apply = '--apply' in sys.argv
    files = [a for a in sys.argv[1:] if not a.startswith('--')]
    if not files:
        files = sorted(glob.glob('trad-s1*.md') + glob.glob('trad-s2-bloc*.md') + glob.glob('trad-s3-bloc*.md'))
    total_ok, total_fail = 0, 0
    for f in files:
        rep = process_file(f, apply=apply) + process_file_div(f, apply=apply)
        for path, fmt, status, ln in rep:
            if status.startswith('ok'):
                total_ok += 1
            else:
                total_fail += 1
                print(f'{path} [{fmt}] FAIL={status} len={ln}')
    print(f'\nTOTAL ok={total_ok} fail={total_fail} apply={apply}')
