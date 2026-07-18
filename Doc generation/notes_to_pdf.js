/**
 * notes_to_pdf.js — Markdown → styled PDF for the 50-Day Challenge phase notes.
 *
 * Styling is matched to Phase-1-Prompt-Engineering-Notes.pdf:
 *   Letter page, no footer, Segoe UI, indigo H1 + magenta gradient rule,
 *   violet H2 with left bar, gradient table headers, dark rounded code blocks,
 *   full-bleed gradient cover with a two-tone title and a stat row.
 *
 * Usage:
 *   node notes_to_pdf.js <file.md> "<Line1|Line2>" "<subtitle>" "<eyebrow>" \
 *                        "<bottom caption>" '<[["10","PARTS"],...]>'
 */
const puppeteer = require('puppeteer');
const MarkdownIt = require('markdown-it');
const fs = require('fs');
const path = require('path');

const [, , mdPathArg, titleArg, subtitleArg, eyebrowArg, captionArg, statsArg, modeArg] = process.argv;
if (!mdPathArg) {
  console.error('Usage: node notes_to_pdf.js <file.md> "<Line1|Line2>" "<subtitle>" "<eyebrow>" "<caption>" "<statsJSON>"');
  process.exit(1);
}

const mdPath = path.resolve(mdPathArg);
const outPath = mdPath.replace(/\.md$/i, '.pdf');

const [line1, line2] = (titleArg || path.basename(mdPath, '.md')).split('|');
const SUBTITLE = subtitleArg || '';
const EYEBROW = eyebrowArg || 'COMPLETE GUIDE';
const CAPTION = captionArg || '';
const STATS = statsArg ? JSON.parse(statsArg) : [];
const COMPACT = modeArg === 'compact';

// Compact mode: long TABLES and blockquotes may flow across pages rather than
// jumping whole to the next page and stranding half-empty pages behind them.
// Table headers repeat on each page; single rows stay intact.
//
// Code blocks are deliberately EXCLUDED from that: a <pre> split across a page
// boundary reads as broken/cut-off code, so it keeps page-break-inside:avoid
// from the base stylesheet and moves whole to the next page. (A block taller
// than one page is broken by the browser regardless — nothing is ever lost.)
const COMPACT_CSS = `
  table, blockquote { page-break-inside: auto; }
  thead { display: table-header-group; }
  tr, li { page-break-inside: avoid; }
  pre { page-break-inside: avoid; }
  h1 { page-break-before: auto; padding-top: 14px; }
  #cover + h1, .mermaid-wrap + h1 { padding-top: 0; }
`;
const QUOTE_RE = /^>\s*\*?"([\s\S]*?)"\*?\s*$/m;

// ---------------------------------------------------------------- markdown

const md = new MarkdownIt({ html: true, linkify: true, typographer: false });

// Normalise line endings — a CRLF file silently breaks the mermaid fence regex.
const raw = fs.readFileSync(mdPath, 'utf8').replace(/\r\n/g, '\n');

const quoteMatch = raw.match(QUOTE_RE);
const QUOTE = quoteMatch ? quoteMatch[1] : '';

// Pull mermaid fences out before markdown-it sees them, so it can't escape
// the arrow glyphs / quotes inside. Re-inject as <pre class="mermaid">.
const mermaidBlocks = [];
const withPlaceholders = raw.replace(/```mermaid\r?\n([\s\S]*?)```/g, (_, code) => {
  mermaidBlocks.push(code.trim());
  return `\n<!--MERMAID_${mermaidBlocks.length - 1}-->\n`;
});

// GitHub-style heading slugs, with runs of hyphens collapsed.
// Without these, every #anchor in the TOC and the cross-links points at nothing.
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')          // strip inline tags (<code>, <strong>)
    .replace(/&[a-z]+;/g, '')         // strip entities
    .replace(/[^\w\s-]/g, '')         // drop punctuation
    .trim()
    .replace(/[\s-]+/g, '-');         // spaces / hyphen runs -> single hyphen
}

// Give every heading an id, tracking duplicates.
const seenSlugs = new Map();
const headingIds = new Set();
md.renderer.rules.heading_open = (tokens, i, opts, env, self) => {
  const raw = tokens[i + 1].content;
  let slug = slugify(raw);
  if (seenSlugs.has(slug)) {
    const n = seenSlugs.get(slug) + 1;
    seenSlugs.set(slug, n);
    slug = `${slug}-${n}`;
  } else {
    seenSlugs.set(slug, 0);
  }
  headingIds.add(slug);
  tokens[i].attrSet('id', slug);
  return self.renderToken(tokens, i, opts);
};

let body = md.render(withPlaceholders);

// Report any internal link that points at a heading that doesn't exist.
const broken = [];
for (const m of body.matchAll(/href="#([^"]+)"/g)) {
  if (!headingIds.has(m[1])) broken.push(m[1]);
}
if (broken.length) {
  console.warn(`  ⚠ ${broken.length} broken anchor(s):`);
  [...new Set(broken)].forEach(b => console.warn(`      #${b}`));
} else {
  console.log(`  all internal links resolve (${headingIds.size} headings).`);
}
body = body.replace(/<!--MERMAID_(\d+)-->/g, (_, i) =>
  `<div class="mermaid-wrap"><pre class="mermaid">${mermaidBlocks[Number(i)]
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></div>`
);

// Inline every LOCAL image as a base64 data URI so the PDF is self-contained
// (Puppeteer's setContent has no base URL, so relative <img src> can't load;
// and hotlinked remote images render unreliably). Remote/data URIs are left
// untouched. Paths resolve relative to the markdown file's own directory.
const MIME = { png:'image/png', jpg:'image/jpeg', jpeg:'image/jpeg',
               gif:'image/gif', webp:'image/webp', svg:'image/svg+xml' };
let imgOK = 0, imgMiss = 0;
body = body.replace(/(<img\b[^>]*\bsrc=")([^"]+)("[^>]*>)/g, (m, pre, src, post) => {
  if (/^(https?:|data:)/i.test(src)) return m;
  const p = path.resolve(path.dirname(mdPath), src);
  if (!fs.existsSync(p)) { imgMiss++; console.warn(`  ⚠ image not found: ${src}`); return m; }
  const ext = path.extname(p).slice(1).toLowerCase();
  const b64 = fs.readFileSync(p).toString('base64');
  imgOK++;
  return `${pre}data:${MIME[ext] || 'application/octet-stream'};base64,${b64}${post}`;
});
if (imgOK || imgMiss) console.log(`  inlined ${imgOK} image(s)${imgMiss ? `, ${imgMiss} missing` : ''}.`);

// The document's own H1 title + tagline + quote become the cover; drop the duplicate.
body = body.replace(/^[\s\S]*?<hr>\n/, '');

const statHtml = STATS.map(([n, label]) =>
  `<div class="stat"><div class="stat-n">${n}</div><div class="stat-l">${label}</div></div>`
).join('');

// ---------------------------------------------------------------- template

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${line1} ${line2 || ''}</title>
<style>
  * { box-sizing: border-box; }

  /* Page margins live in CSS so the cover can claim its own zero-margin page
     and bleed to the paper edge, exactly as Phase 1 does. */
  @page { size: Letter; margin: 13mm 12mm; }
  @page cover { margin: 0; }

  body {
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    font-size: 14.5px;   /* 10.9pt — matches Phase 1 */
    line-height: 1.5;
    color: #1f2333;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  /* ---------------- cover ---------------- */
  #cover {
    page: cover;                 /* full-bleed: no page margin on this page only */
    page-break-after: always;
    position: relative;
    width: 216mm; height: 279mm; /* US Letter */
    margin: 0;
    padding: 0 18mm;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(150deg, #4338ca 0%, #6d28d9 42%, #a21caf 78%, #c026d3 100%);
    color: #fff;
  }
  #cover .eyebrow {
    font-size: 13px; letter-spacing: 3.4px; text-transform: uppercase;
    font-weight: 600; color: #d8d0f5; margin-bottom: 12px;
  }
  #cover h1 {
    font-size: 58px; font-weight: 900; line-height: 1.06;
    margin: 0 0 18px; padding: 0; border: none; color: #fff;
    page-break-before: avoid;   /* must not inherit the global h1 page break */
  }
  #cover h1 .l1 { display: block; color: #4f6ae0; }   /* muted indigo, as in Phase 1 */
  #cover h1 .l2 { display: block; color: #fff; }
  #cover .sub {
    font-size: 18px; font-weight: 400; line-height: 1.45;
    max-width: 122mm; color: #f3eeff;
  }
  #cover .quote {
    margin: 22px 0 34px;
    font-size: 15px; font-style: italic; line-height: 1.55;
    max-width: 122mm; color: #ece6fb;
    border-left: 3px solid rgba(255,255,255,.55); padding-left: 13px;
  }
  #cover .stats { display: flex; gap: 38px; }
  #cover .stat-n { font-size: 34px; font-weight: 900; line-height: 1.1; }
  #cover .stat-l {
    font-size: 12px; letter-spacing: 1.6px; text-transform: uppercase;
    color: #d8d0f5; margin-top: 2px; font-weight: 500;
  }
  #cover .caption {
    position: absolute; left: 18mm; bottom: 18mm;
    font-size: 12.5px; color: #d8d0f5;
  }

  /* ---------------- headings ---------------- */
  h1 {
    font-size: 27px; font-weight: 900; color: #4338ca;
    margin: 0 0 8px; padding: 0 0 10px;
    border-bottom: 2px solid #c026d3;
    page-break-before: always; page-break-after: avoid;
  }
  h2 {
    font-size: 20px; font-weight: 700; color: #7c3aed;
    margin: 18px 0 8px; padding-left: 12px;
    border-left: 3.5px solid #c026d3;
    page-break-after: avoid;
  }
  h3 {
    font-size: 16.5px; font-weight: 700; color: #2b2f45;
    margin: 14px 0 6px; page-break-after: avoid;
  }
  h1 + p, h1 + p + h2 { margin-top: 9px; }

  p { margin: 0 0 7px; }
  strong { font-weight: 700; color: #14172a; }
  em { color: #464b63; }
  a { color: #6d28d9; text-decoration: none; }

  ul, ol { margin: 0 0 8px; padding-left: 20px; }
  li { margin-bottom: 2px; }

  hr { border: none; border-top: 1px solid #e6e4ee; margin: 14px 0; }

  /* ---------------- code ---------------- */
  code {
    font-family: 'Cascadia Mono', Consolas, 'Courier New', monospace;
    font-size: 12.5px;
    background: #f2effa; color: #6d28d9;
    padding: 1.5px 5px; border-radius: 3px;
  }
  pre {
    background: #1e2338; color: #e6e8f2;
    padding: 11px 14px; border-radius: 9px;
    overflow-x: auto; margin: 0 0 9px;
    page-break-inside: avoid;
  }
  pre code {
    background: none; color: inherit; padding: 0;
    font-size: 12.4px; line-height: 1.55; white-space: pre;
  }
  /* ASCII-art blocks (fences with no language) stay light so box-drawing reads cleanly */
  pre.plain { background: #f7f6fb; color: #2b2f45; border: 1px solid #e9e6f5; }
  pre.plain code { color: #2b2f45; }

  /* ---------------- tables ---------------- */
  table {
    width: 100%; border-collapse: collapse;
    font-size: 13px; margin: 0 0 14px;
    page-break-inside: avoid;
    border-radius: 7px; overflow: hidden;
  }
  thead tr { background: linear-gradient(90deg, #5b21b6 0%, #a21caf 65%, #c026d3 100%); }
  th {
    color: #fff; text-align: left; padding: 8px 10px;
    font-size: 13px; font-weight: 600;
  }
  td { padding: 6px 10px; border-bottom: 1px solid #efedf6; vertical-align: top; }
  tbody tr:nth-child(even) { background: #f8f7fc; }
  td code, th code { font-size: 11.6px; }

  /* ---------------- Telugu (Tenglish) notes ---------------- */
  /* Authored as raw <p class="te"> so they stay compact — a blockquote per
     concept would add ~3 pages of margins across the document. */
  .te {
    background: #f6f1fe;
    border-left: 3px solid #a78bfa;
    padding: 6px 11px;
    margin: 0 0 9px;
    border-radius: 0 6px 6px 0;
    font-size: 13.6px;
    line-height: 1.5;
    color: #3b3355;
    page-break-inside: avoid;
  }
  .te strong { color: #6d28d9; }
  .te code { background: #ece4fb; font-size: 12px; }

  /* ---------------- blockquote ---------------- */
  blockquote {
    margin: 13px 0; padding: 12px 16px;
    background: #f6f1fe; border-left: 4px solid #c026d3;
    border-radius: 0 7px 7px 0;
    page-break-inside: avoid;
  }
  blockquote p { margin: 0 0 6px; }
  blockquote p:last-child { margin-bottom: 0; }

  /* ---------------- mermaid ---------------- */
  /* .mermaid is a <pre>, so it must shed every dark-code-block style */
  pre.mermaid {
    background: transparent; color: inherit;
    border: none; padding: 0; margin: 0;
    overflow: visible; white-space: normal;
  }
  .mermaid-wrap {
    text-align: center; margin: 10px 0 12px;
    page-break-inside: avoid;
  }
  /* Deliberately NO max-width:100% !important here. Mermaid emits width="100%",
     so an !important max-width lets small diagrams stretch to the full page
     (labels ballooning to ~28px) while wide ones shrink (~8px). The script
     below pins each svg to its viewBox width instead, so every label renders
     at the same ~13px. */
  .mermaid svg {
    max-height: 195mm !important;
    height: auto !important;
  }

  /* ---------------- figures & real images ---------------- */
  img { max-width: 100%; height: auto; }
  figure.fig {
    margin: 12px 0 14px; text-align: center;
    page-break-inside: avoid;
  }
  figure.fig img {
    max-width: 100%; border-radius: 8px;
    border: 1px solid #e2ddf0;
    box-shadow: 0 1px 5px rgba(40,25,80,.10);
  }
  figure.fig.small img { max-width: 260px; }
  figure.fig.med img   { max-width: 400px; }
  figcaption {
    font-size: 12.3px; color: #6b6785; font-style: italic;
    margin-top: 6px; line-height: 1.4;
  }
  .fig-credit { font-style: normal; color: #9a95ad; font-size: 11px; }

  /* ---------------- before / after panels ---------------- */
  .ba { display: flex; gap: 12px; margin: 12px 0 14px; page-break-inside: avoid; }
  .ba-col { flex: 1; border-radius: 8px; padding: 10px 13px; font-size: 13px; }
  .ba-col h4 { margin: 0 0 5px; font-size: 13.5px; }
  .ba-col ul { margin: 0; padding-left: 17px; }
  .ba-col li { margin-bottom: 1px; }
  .ba-before { background: #fef4f2; border: 1px solid #f6cfc6; }
  .ba-before h4 { color: #b91c1c; }
  .ba-after { background: #edfbf4; border: 1px solid #b6ecd0; }
  .ba-after h4 { color: #047857; }

  /* ---------------- Fiori Launchpad mockup ---------------- */
  .flp {
    max-width: 540px; margin: 12px auto 6px;
    border: 1px solid #cfd6de; border-radius: 10px; overflow: hidden;
    box-shadow: 0 2px 8px rgba(30,40,60,.12); page-break-inside: avoid;
  }
  .flp-bar {
    background: #354a5f; color: #fff; padding: 7px 13px;
    font-size: 12px; display: flex; justify-content: space-between; align-items: center;
  }
  .flp-bar .flp-search { background: rgba(255,255,255,.18); border-radius: 10px; padding: 2px 12px; font-size: 11px; }
  .flp-body { background: #eceff2; padding: 12px 13px 14px; }
  .flp-grp { font-size: 10.5px; color: #5a6b7b; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 7px; font-weight: 600; }
  .flp-grid { display: flex; flex-wrap: wrap; gap: 9px; }
  .tile {
    background: #fff; border-radius: 6px; width: 112px; height: 78px;
    padding: 8px 9px; box-shadow: 0 1px 2px rgba(0,0,0,.14);
    font-size: 10.8px; color: #32363a; line-height: 1.25;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .tile .t-ic { font-size: 15px; }
  .tile b { font-size: 21px; color: #0a6ed1; font-weight: 800; }
  .tile.kpi-amber b { color: #df6e0c; }
  .tile.kpi-green b { color: #107e3e; }

  /* ---------------- Joule chat mockup ---------------- */
  .joule {
    max-width: 460px; margin: 12px auto 6px;
    border: 1px solid #d9d5ea; border-radius: 12px; overflow: hidden;
    box-shadow: 0 2px 8px rgba(60,20,80,.12); page-break-inside: avoid;
  }
  .joule-bar {
    background: linear-gradient(90deg, #5b21b6 0%, #a21caf 60%, #c026d3 100%);
    color: #fff; padding: 8px 13px; font-weight: 600; font-size: 13px;
    display: flex; align-items: center; gap: 7px;
  }
  .joule-body { background: #faf9ff; padding: 12px 13px; }
  .jq {
    background: #0a6ed1; color: #fff; border-radius: 13px 13px 3px 13px;
    padding: 7px 12px; margin: 0 0 9px 64px; font-size: 12.4px; line-height: 1.4;
  }
  .ja {
    background: #fff; border: 1px solid #eadff9;
    border-radius: 13px 13px 13px 3px; padding: 8px 12px; margin: 0 64px 4px 0;
    font-size: 12.4px; color: #2b2f45; line-height: 1.45;
  }
  .ja .ja-do { color: #107e3e; font-weight: 700; }

  /* ---------------- "picture it" callout ---------------- */
  .pic {
    background: #eef4ff; border: 1px solid #cfe0ff; border-radius: 8px;
    padding: 8px 13px; margin: 0 0 10px; font-size: 13.4px; color: #1e3a5f;
    page-break-inside: avoid;
  }
  .pic strong { color: #0a4a8f; }

  ${COMPACT ? COMPACT_CSS : ''}
</style>
</head>
<body>

<div id="cover">
  <div class="eyebrow">${EYEBROW}</div>
  <h1><span class="l1">${line1}</span>${line2 ? `<span class="l2">${line2}</span>` : ''}</h1>
  <div class="sub">${SUBTITLE}</div>
  ${QUOTE ? `<div class="quote">"${QUOTE}"</div>` : ''}
  <div class="stats">${statHtml}</div>
  ${CAPTION ? `<div class="caption">${CAPTION}</div>` : ''}
</div>

${body}

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      fontFamily: '"Segoe UI", system-ui, sans-serif',
      fontSize: '13px',
      primaryColor: '#ede9fe',
      primaryTextColor: '#1f2333',
      primaryBorderColor: '#a78bfa',
      lineColor: '#9aa0b4',
      secondaryColor: '#f5f3ff',
      tertiaryColor: '#faf5ff',
    },
    flowchart: { htmlLabels: true, curve: 'basis', padding: 12 },
    sequence: { actorMargin: 45, width: 150, mirrorActors: false },
  });
  await mermaid.run({ querySelector: '.mermaid' });

  // Render every diagram at its NATURAL size (from the viewBox), shrinking
  // only the ones genuinely wider than the page. Without this, mermaid's
  // width="100%" scales each diagram by a different factor and label sizes
  // range from 8px to 28px across the document.
  for (const svg of document.querySelectorAll('.mermaid svg')) {
    const vb = svg.viewBox.baseVal;
    if (!vb || !vb.width) continue;
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.style.width = vb.width + 'px';
    svg.style.maxWidth = '100%';
    svg.style.height = 'auto';
  }
  window.__mermaidDone = true;
</script>
</body>
</html>`;

// ---------------------------------------------------------------- render

(async () => {
  fs.writeFileSync(path.join(__dirname, 'notes_debug.html'), html, 'utf8');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 816, height: 1056, deviceScaleFactor: 2 });
  page.on('pageerror', e => console.error('  page error:', e.message));

  console.log('Loading HTML (fetching mermaid from CDN)...');
  // Timeouts are generous: the ABAP notes are ~38k lines / 175 diagrams, and a
  // document that size needs minutes, not seconds, to parse and lay out.
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 600000 });

  console.log('Rendering mermaid diagrams...');
  await page.waitForFunction('window.__mermaidDone === true', { timeout: 600000 });

  // Light background for ASCII-art code blocks (fences with no language class).
  await page.evaluate(() => {
    document.querySelectorAll('pre > code:not([class])').forEach(c =>
      c.parentElement.classList.add('plain'));
  });

  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1200));

  const diagrams = await page.evaluate(() => document.querySelectorAll('.mermaid svg').length);
  console.log(`  ${diagrams} diagrams rendered.`);

  console.log('Writing PDF...');
  await page.pdf({
    path: outPath,
    format: 'Letter',                                   // Phase 1 is Letter, not A4
    margin: { top: 0, bottom: 0, left: 0, right: 0 },   // margins come from @page
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: false,                         // Phase 1 has no page footer
  });

  await browser.close();

  // Repair internal (TOC / cross-reference) links. Chromium computes anchor
  // destinations BEFORE it pushes page-break-inside:avoid blocks (diagrams,
  // tables, code) to the next page, so every internal link lands a page or
  // more too early and the drift grows through the document. fix_pdf_links.py
  // rebuilds each destination from the page where the heading actually renders.
  // Best-effort: if python/pypdf is missing, the PDF is still fine minus this.
  try {
    const { execFileSync } = require('child_process');
    const fixer = path.join(__dirname, 'fix_pdf_links.py');
    if (fs.existsSync(fixer)) {
      console.log('Repairing internal links...');
      const py = process.platform === 'win32' ? 'python' : 'python3';
      const out = execFileSync(py, [fixer, outPath, mdPath], { encoding: 'utf8' });
      process.stdout.write(out);
    }
  } catch (e) {
    console.warn('  ⚠ link repair skipped (need: pip install pypdf):', e.message.split('\n')[0]);
  }

  const mb = (fs.statSync(outPath).size / 1048576).toFixed(2);
  console.log(`\n✅ ${outPath}\n   ${mb} MB · ${diagrams} diagrams`);
})().catch(err => { console.error('FAILED:', err); process.exit(1); });
