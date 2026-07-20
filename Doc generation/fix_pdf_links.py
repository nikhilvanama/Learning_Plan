"""
fix_pdf_links.py — repair internal (TOC / cross-reference) links in a notes PDF.

Chromium's print-to-PDF computes named-destination pages BEFORE it redistributes
`page-break-inside: avoid` blocks (mermaid diagrams, tables, code) to the next
page. The result: every internal link lands a page or more too early, and the
drift grows through the document.

This script ignores Chrome's broken destinations and rebuilds them from ground
truth: it finds the page where each heading's TEXT actually renders, then rewrites
every link annotation pointing at that slug to an explicit [page, /Fit] target.

Usage:  python fix_pdf_links.py <file.pdf> <file.md>
"""
import sys, re
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, NameObject, NumberObject

pdf_path, md_path = sys.argv[1], sys.argv[2]

# ---- slugify: must match notes_to_pdf.js exactly -------------------------
def slugify(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'&[a-z]+;', '', text)
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = text.strip()
    text = re.sub(r'[\s-]+', '-', text)
    return text

def norm(s):
    """Collapse to lowercase alphanumerics for robust page-text matching."""
    return re.sub(r'[^a-z0-9]', '', s.lower())

# ---- read headings from the markdown, in document order ------------------
raw = open(md_path, encoding='utf-8').read().replace('\r\n', '\n')
# body starts after the first horizontal rule (mirrors the generator)
body = raw.split('\n---\n', 1)[-1]

headings = []            # (slug, normalized_text) in order
seen = {}
for line in body.split('\n'):
    m = re.match(r'^(#{1,2})\s+(.*)$', line)
    if not m:
        continue
    title = m.group(2).strip()
    slug = slugify(title)
    if slug in seen:
        seen[slug] += 1
        slug = f"{slug}-{seen[slug]}"
    else:
        seen[slug] = 0
    headings.append((slug, norm(title)))

# ---- locate each heading's real page -------------------------------------
reader = PdfReader(pdf_path)
page_text = [norm(p.extract_text() or '') for p in reader.pages]

# Find where the TOC ends, because scanning for heading text must start AFTER
# it — the TOC lists every heading, so a scan that starts too early matches
# every heading on the TOC page and sends all links to page 1.
#
# Primary signal: link density. A TOC page carries dozens of /Link annotations;
# a body page carries none or a handful. Walk the leading pages and take the
# contiguous run of link-heavy ones.
def link_count(page):
    annots = page.get('/Annots')
    if not annots:
        return 0
    return sum(1 for r in annots if r.get_object().get('/Subtype') == '/Link')

toc_pages = []
for i in range(min(25, len(reader.pages))):
    if link_count(reader.pages[i]) >= 5:
        toc_pages.append(i)
    elif toc_pages:
        break                      # the contiguous TOC block has ended

# Secondary signal (kept as a union): a page listing BOTH the first and the
# last Part heading can only be a TOC page.
first_h = next((t for _, t in headings if t and 'part' in t), '')
last_h  = next((t for _, t in reversed(headings) if t and 'part' in t), '')
toc_pages += [i for i, t in enumerate(page_text)
              if first_h and last_h and first_h in t and last_h in t
              and i not in toc_pages]

FIRST_BODY = (max(toc_pages) + 1) if toc_pages else 1
print(f"  TOC pages: {toc_pages or 'none'}  ->  body starts at page idx {FIRST_BODY}")

slug_page = {}
cursor = FIRST_BODY
located = 0
for slug, ntext in headings:
    if slug == 'table-of-contents':
        continue
    found = None
    if ntext:
        for pi in range(cursor, len(page_text)):
            if ntext in page_text[pi]:
                found = pi
                break
    if found is not None:
        cursor = found            # headings are ordered; never scan backward
        located += 1
    # Fallback: a heading whose glyphs the text-extractor drops/misorders
    # (typically the big H1 pages) inherits the current forward cursor, so it
    # still lands on the right page rather than keeping Chrome's drifted target.
    slug_page[slug] = cursor if found is None else found
print(f"  located {located}/{len(headings)} by text; "
      f"{len(slug_page)} total targets mapped (rest via forward-cursor fallback)")

# ---- rewrite every link annotation to its correct explicit destination ---
writer = PdfWriter(clone_from=reader)
page_refs = [p.indirect_reference for p in writer.pages]

def target_slug(o):
    d = o.get('/Dest')
    if isinstance(d, str):
        return d.lstrip('/')
    a = o.get('/A')
    if a is not None:
        d = a.get_object().get('/D')
        if isinstance(d, str):
            return d.lstrip('/')
    return None

fixed = 0
for page in writer.pages:
    annots = page.get('/Annots')
    if not annots:
        continue
    for ref in annots:
        o = ref.get_object()
        if o.get('/Subtype') != '/Link':
            continue
        slug = target_slug(o)
        if slug is None or slug not in slug_page:
            continue
        pg = slug_page[slug]
        explicit = ArrayObject([page_refs[pg], NameObject('/Fit')])
        if '/A' in o:
            del o[NameObject('/A')]
        o[NameObject('/Dest')] = explicit
        fixed += 1

with open(pdf_path, 'wb') as f:
    writer.write(f)
print(f"  rewired {fixed} link(s) to correct pages  ->  {pdf_path}")
