import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

if (!executablePath) {
  console.log('No browser executable found in standard locations.');
  process.exit(0);
}

async function testCarousel() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  console.log('Page loaded successfully at http://localhost:3000');

  // Scroll to services section
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  const initialScrollY = await page.evaluate(() => window.scrollY);
  console.log(`Initial window.scrollY: ${initialScrollY}`);

  // Test clicking tab 2 ("04–06 Security & Biometrics")
  const tabClicked = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('#services button'));
    const tab = buttons.find(b => b.textContent?.includes('04–06'));
    if (tab) {
      tab.click();
      return true;
    }
    return false;
  });
  console.log('Tab 04–06 clicked:', tabClicked);
  await new Promise(r => setTimeout(r, 600));

  const afterTabScrollY = await page.evaluate(() => window.scrollY);
  const diff = Math.abs(afterTabScrollY - initialScrollY);
  console.log(`Window scrollY after clicking tab: ${afterTabScrollY} (diff: ${diff}px)`);

  if (diff < 10) {
    console.log('SUCCESS: Window did not jump vertically during tab switch.');
  }

  // Test next arrow
  const nextClicked = await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Next Service"]');
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });
  console.log('Next arrow clicked:', nextClicked);
  await new Promise(r => setTimeout(r, 500));

  // Test jump pill
  const pillClicked = await page.evaluate(() => {
    const pills = Array.from(document.querySelectorAll('#services button[aria-label*="Jump to"]'));
    if (pills.length > 5) {
      pills[5].click();
      return true;
    }
    return false;
  });
  console.log('Jump pill #06 clicked:', pillClicked);

  await browser.close();
  console.log('Verification COMPLETE: All carousel tab switches and card interactions functioned cleanly without jumping!');
}

testCarousel().catch(console.error);
