/*
 * One-off: shift the 50-day challenge +7 days.
 *   Phases:  Jul 6 - Aug 31   ->  Jul 13 - Sep 7   (pure +7, weekdays preserved)
 *   Prep:    Jul 1-5          ->  Jul 8-12
 * Every pattern below is anchored on a leading Jul/Aug/July/August, so the
 * existing "Sep ..." strings (buffer + SAP blocks) are never matched here --
 * those are re-authored explicitly in a separate pass.
 */
const fs = require('fs');
const path = require('path');

const MDAYS = { Jul: 31, Aug: 31, Sep: 30 };
const ORDER = ['Jul', 'Aug', 'Sep'];
const LONG = { Jul: 'July', Aug: 'August', Sep: 'September' };

const isLong = (s) => s.length > 3;
const short = (s) => s.slice(0, 3);

function shift(m, d, n = 7) {
  d += n;
  let i = ORDER.indexOf(m);
  while (d > MDAYS[ORDER[i]]) {
    d -= MDAYS[ORDER[i]];
    i++;
  }
  return { m: ORDER[i], d };
}

// wrap output so later passes cannot re-match (and thus re-shift) it
const tok = (s) => '@@' + s + '@@';

function shiftFile(file) {
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;

  // 1. cross-month explicit range: "Jul 27 - Aug 4"
  s = s.replace(
    /\b(Jul|Aug|July|August)\s+(\d{1,2})\s*(?:-|&ndash;|&mdash;|–|—)\s*(Jul|Aug|July|August)\s+(\d{1,2})\b/g,
    (_, m1, d1, m2, d2) => {
      const a = shift(short(m1), +d1);
      const b = shift(short(m2), +d2);
      const A = isLong(m1) ? LONG[a.m] : a.m;
      const B = isLong(m2) ? LONG[b.m] : b.m;
      return a.m === b.m
        ? tok(A + ' ' + a.d + '-' + b.d)
        : tok(A + ' ' + a.d + ' - ' + B + ' ' + b.d);
    }
  );

  // 2. same-month range: "Jul 6-8", "Aug 27-31"
  s = s.replace(
    /\b(Jul|Aug|July|August)\s+(\d{1,2})\s*(?:-|&ndash;|–)\s*(\d{1,2})\b/g,
    (_, m, d1, d2) => {
      const a = shift(short(m), +d1);
      const b = shift(short(m), +d2);
      const A = isLong(m) ? LONG[a.m] : a.m;
      const B = isLong(m) ? LONG[b.m] : b.m;
      // range may straddle a month boundary after shifting -> spell both months
      return a.m === b.m
        ? tok(A + ' ' + a.d + '-' + b.d)
        : tok(A + ' ' + a.d + ' - ' + B + ' ' + b.d);
    }
  );

  // 3. single date: "Mon Jul 6", "Jul 6", "August 31"
  s = s.replace(/\b(Jul|Aug|July|August)\s+(\d{1,2})\b/g, (_, m, d) => {
    const a = shift(short(m), +d);
    const M = isLong(m) ? LONG[a.m] : a.m;
    return tok(M + ' ' + a.d);
  });

  // 4. unwrap
  s = s.replace(/@@(.+?)@@/g, '$1');

  fs.writeFileSync(file, s);
  console.log(s !== orig ? 'shifted: ' : 'no change: ', path.basename(file));
}

['v3_part1_foundation.html', 'to_pdf_v3.js'].forEach((f) =>
  shiftFile(path.join(__dirname, f))
);
