const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });

  // Read all HTML parts
  const part1 = fs.readFileSync(path.join(DIR, 'v3_part1_foundation.html'), 'utf8');
  const part2 = fs.readFileSync(path.join(DIR, 'v3_part2_abap.html'), 'utf8');
  const part3 = fs.readFileSync(path.join(DIR, 'v3_part3_btp.html'), 'utf8');
  const part4 = fs.readFileSync(path.join(DIR, 'v3_part4_jobs.html'), 'utf8');

  // Extract body content from each part (everything between <body> and </body>)
  function extractBody(html) {
    const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return match ? match[1].trim() : '';
  }

  // Extract <style> from head sections to merge
  function extractStyles(html) {
    const matches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
    return matches.map(m => m[1]).join('\n');
  }

  // Extract the cover page from part1 (div#cover)
  function extractCover(html) {
    const body = extractBody(html);
    const coverMatch = body.match(/<div[^>]+id="cover"[^>]*>[\s\S]*?<\/div>\s*(?=\n*\s*<!-- )/);
    if (coverMatch) return coverMatch[0];
    // fallback: first div with id="cover"
    const start = body.indexOf('<div id="cover"');
    if (start === -1) return '';
    // find the matching closing div - count depth
    let depth = 0;
    let i = start;
    while (i < body.length) {
      if (body.slice(i).startsWith('<div')) depth++;
      else if (body.slice(i).startsWith('</div>')) {
        depth--;
        if (depth === 0) {
          return body.slice(start, i + 6);
        }
      }
      i++;
    }
    return body.slice(start);
  }

  // Build TOC with clickable anchors
  // Helper to build a row that links via <a> to a page ID
  const tocRow = (badgeHtml, topicText, dates, anchor, altBg) => {
    const rowBg = altBg ? 'background:#f8fafc;' : '';
    const cellPad = 'padding:6px 9px;border-bottom:1px solid #f1f5f9;';
    const linkStyle = 'color:inherit;text-decoration:none;display:block;';
    return `<tr><td style="${cellPad}${rowBg}">${badgeHtml}</td><td style="${cellPad}${rowBg}"><a href="#${anchor}" style="${linkStyle}">${topicText}</a></td><td style="${cellPad}${rowBg}color:#64748b;">${dates}</td></tr>`;
  };
  const b = (color, label) => `<span style="display:inline-block;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600;color:#fff;background:${color};">${label}</span>`;

  const tocHtml = `
<div class="page" style="page-break-after:always;">
  <div style="padding-bottom:12px;margin-bottom:14px;border-bottom:2px solid #e2e8f0;">
    <div style="font-size:10px;color:#94a3b8;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px;font-weight:600;">Table of Contents</div>
    <h1 style="font-size:20px;font-weight:800;color:#0f172a;">Nikhil Vanama &mdash; Career Roadmap 2026</h1>
    <p style="font-size:12.5px;color:#64748b;margin-top:3px;">Web Developer &rarr; SAP + AI Engineer &bull; Jul 2026 &mdash; Jan/Feb 2027 &bull; <em>Click any row to jump to its page</em></p>
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:12px;">
    <thead><tr style="background:#1e293b;">
      <th style="color:#e2e8f0;padding:6px 9px;text-align:left;font-size:10px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Section</th>
      <th style="color:#e2e8f0;padding:6px 9px;text-align:left;font-size:10px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Topic</th>
      <th style="color:#e2e8f0;padding:6px 9px;text-align:left;font-size:10px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">Dates</th>
    </tr></thead>
    <tbody>
      ${tocRow(b('#38bdf8', 'PART I'), '<strong>50-Day Foundation</strong> &mdash; Master Timeline', 'Jul 6 &mdash; Aug 31', 'overview', false)}
      ${tocRow('', 'Daily Timings &mdash; weekday + weekend rhythm', '&mdash;', 'daily-timings', true)}
      ${tocRow('', 'Mindset &amp; Method &mdash; how to learn effectively', '&mdash;', 'motivation', false)}
      ${tocRow('', 'Prep Week &mdash; Resource Collection', 'Jul 1-5, 2026', 'prep-week', true)}
      ${tocRow('', 'Phase 1: Prompt Engineering', 'Jul 6-8', 'phase-1', false)}
      ${tocRow('', 'Phase 2: Claude Code CLI', 'Jul 9-10', 'phase-2', true)}
      ${tocRow('', 'Phase 3: CS Fundamentals', 'Jul 11-12', 'phase-3', false)}
      ${tocRow('', 'Phase 4: JavaScript Basics Warm-up', 'Jul 13-14', 'phase-4', true)}
      ${tocRow('', 'Phase 5: Advanced JavaScript + OOP', 'Jul 15-19', 'phase-5', false)}
      ${tocRow('', 'Phase 6: React + Tailwind CSS', 'Jul 20-26', 'phase-6', true)}
      ${tocRow('', 'Phase 7: Node.js + Express (Deep Dive)', 'Jul 27 - Aug 4', 'phase-7', false)}
      ${tocRow('', 'Phase 8: REST API Design', 'Aug 5-9', 'phase-8', true)}
      ${tocRow('', 'Phase 9: MySQL + Node Integration', 'Aug 10-18', 'phase-9', false)}
      ${tocRow('', 'Phase 10: Git (Advanced) + Docker + AWS', 'Aug 19-22', 'phase-10', true)}
      ${tocRow('', 'Full-Stack Capstone A &mdash; Deploy the Auth API', 'over Break Aug 22', 'capstone-a', false)}
      ${tocRow('', 'Phase 11: System Design Fundamentals', 'Aug 23-26', 'phase-11', true)}
      ${tocRow('', 'Full-Stack Capstone B &mdash; Scale + Portfolio Polish', 'Buffer / Sep 1-7', 'capstone-b', false)}
      ${tocRow('', 'Phase 12: Agentic AI + n8n + FocusTrack Pro', 'Aug 27-31', 'phase-12', true)}
      ${tocRow('', 'Agentic Capstone C &mdash; Personal Research Agent', 'Buffer week / weekends', 'capstone-c', false)}
      ${tocRow('', 'Agentic Capstone D &mdash; RAG Assistant + Automations', 'Buffer week / weekends', 'capstone-d', true)}
      <tr><td style="padding:6px 9px;border-bottom:1px solid #f1f5f9;background:#fef9c3;">${b('#eab308', 'BUFFER')}</td><td style="padding:6px 9px;border-bottom:1px solid #f1f5f9;background:#fef9c3;"><a href="#buffer-week" style="color:inherit;text-decoration:none;display:block;"><strong>1-Week Buffer</strong> &mdash; wrap capstone + prep for SAP</a></td><td style="padding:6px 9px;border-bottom:1px solid #f1f5f9;background:#fef9c3;color:#78350f;">Sep 1-7, 2026</td></tr>
      ${tocRow(b('#0891b2', 'PART II'), '<strong>Part II Overview</strong> &mdash; SAP Ecosystem + ABAP Institute', 'Sep 8 &rarr; end Nov / mid Dec', 'part2-overview', false)}
      ${tocRow('', 'Phase A: SAP Overview &amp; Ecosystem (self-study)', 'Sep 8-17', 'phase-A', true)}
      ${tocRow('', 'Institute Orientation &mdash; kickoff', 'from Sep 18', 'segment-orientation', false)}
      ${tocRow('', 'Segment 1: ABAP Workbench &amp; Language Basics (M1-M4)', '~Week 1', 'segment-1', true)}
      ${tocRow('', 'Segment 2: ABAP Dictionary (DDIC) (M5-M8)', '~Week 2', 'segment-2', false)}
      ${tocRow('', 'Segment 3: Search Helps, Locks, Open SQL (M9-M12)', '~Week 3', 'segment-3', true)}
      ${tocRow('', 'Segment 4: Internal Tables, Debugging, Sel Screens (M13-M16)', '~Week 4', 'segment-4', false)}
      ${tocRow('', 'Segment 5: Modularization (M17-M20)', '~Week 5', 'segment-5', true)}
      ${tocRow('', 'Segment 6: Reports &mdash; Classical, Interactive, ALV (M21-M24)', '~Week 6', 'segment-6', false)}
      ${tocRow('', 'Segment 7: Dialog Programming / Module Pool (M25-M28)', '~Week 7', 'segment-7', true)}
      ${tocRow('', 'Segment 8: OO ABAP (M29-M31)', '~Week 8', 'segment-8', false)}
      ${tocRow('', 'Segment 9: BDC &amp; LSMW (M32-M34)', '~Week 9', 'segment-9', true)}
      ${tocRow('', 'Segment 10: Scripts, Smart Forms, RFC, ALE, IDocs (M35-M37)', '~Week 10', 'segment-10', false)}
      ${tocRow('', 'Segment 11: BAPIs, Exits, BADIs, CTS + SAPUI5 (M38-M39)', '~Week 11', 'segment-11', true)}
      ${tocRow('', 'Wrap: ABAP on HANA &mdash; CDS, AMDP (M40)', 'Final week', 'segment-wrap', false)}
      ${tocRow(b('#7c3aed', 'PART III'), '<strong>SAP BTP + AI Self-Pace</strong> &mdash; overview', 'Dec 1, 2026 &rarr;', 'part3-overview', true)}
      ${tocRow('', 'Phase 13: BTP Foundation', 'Dec 1-7', 'phase-13', false)}
      ${tocRow('', 'Phase 14: CAP Framework (backend)', 'Dec 8-15', 'phase-14', true)}
      ${tocRow('', 'Phase 15: SAP AI Core + Joule + RAG', 'Dec 16-23', 'phase-15', false)}
      ${tocRow('', 'Phase 16: SBPA + Smart Vendor Hub Capstone', 'Dec 24-31', 'phase-16', true)}
      ${tocRow(b('#be123c', 'PART IV'), '<strong>Job Hunt Strategy</strong>', 'Jan/Feb 2027', 'part4-overview', false)}
      ${tocRow('', 'Resume, Portfolio &amp; LinkedIn Strategy', 'Week 1', 'resume-portfolio', true)}
      ${tocRow('', '90-Question Interview Bank', 'Week 3', 'interview-bank', false)}
    </tbody>
  </table>
</div>`;

  // Merge all styles
  const allStyles = [part1, part2, part3, part4].map(extractStyles).join('\n');

  // Build combined HTML
  const coverHtml = extractCover(part1);
  const part1Body = extractBody(part1).replace(coverHtml, '').trim();
  const part2Body = extractBody(part2);
  const part3Body = extractBody(part3);
  const part4Body = extractBody(part4);

  const combined = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nikhil Vanama - Career Roadmap 2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
${allStyles}
</style>
</head>
<body>
${coverHtml}
${tocHtml}
${part1Body}
${part2Body}
${part3Body}
${part4Body}
</body>
</html>`;

  // Save combined for debugging
  const combinedPath = path.join(DIR, 'roadmap_v3_combined.html');
  fs.writeFileSync(combinedPath, combined, 'utf8');
  console.log('Combined HTML saved to:', combinedPath);

  // Load combined HTML
  console.log('Loading HTML in browser...');
  await page.setContent(combined, { waitUntil: 'networkidle0', timeout: 60000 });

  // Wait for fonts to load
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  // Extra wait for rendering
  await new Promise(r => setTimeout(r, 2000));

  console.log('Generating PDF...');
  const outputPath = path.join(DIR, 'Nikhil_Career_Roadmap_2026_v3.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: { top: '10mm', bottom: '12mm', left: '9mm', right: '9mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="width:100%;font-size:9px;color:#94a3b8;font-family:Inter,sans-serif;
                  display:flex;justify-content:space-between;padding:0 9mm;box-sizing:border-box;">
        <span>Nikhil Vanama &mdash; Career Roadmap 2026</span>
        <span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
      </div>`,
  });

  await browser.close();

  const stats = fs.statSync(outputPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`PDF generated: ${outputPath}`);
  console.log(`File size: ${sizeMB} MB`);
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
