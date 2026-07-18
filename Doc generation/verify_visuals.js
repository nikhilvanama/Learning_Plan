// Screenshot the key visual elements from the last render so they can be eyeballed.
const puppeteer = require('puppeteer');
const path = require('path');
const OUT = process.argv[2] || '.';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 860, height: 1100, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(__dirname, 'notes_debug.html').replace(/\\/g, '/'),
                  { waitUntil: 'load', timeout: 60000 });
  await new Promise(r => setTimeout(r, 800));

  const shots = [
    ['.flp', 'shot-flp.png'],
    ['.joule', 'shot-joule.png'],
    ['.ba', 'shot-ba.png'],
    ['figure.fig.med', 'shot-fig-med.png'],   // first medium figure (ERP wheel)
    ['figure.fig.small', 'shot-fig-small.png'],
  ];
  for (const [sel, file] of shots) {
    const el = await page.$(sel);
    if (!el) { console.log('MISSING', sel); continue; }
    await el.screenshot({ path: path.join(OUT, file) });
    console.log('shot', file);
  }
  // also grab all <img> natural sizes to confirm they decoded
  const imgs = await page.evaluate(() =>
    [...document.querySelectorAll('figure.fig img')].map(i => ({
      w: i.naturalWidth, h: i.naturalHeight, src: i.src.slice(0, 30)
    })));
  console.log('img decode:', JSON.stringify(imgs));
  await browser.close();
})();
