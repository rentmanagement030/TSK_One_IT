import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

async function main() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Scroll to services
  await page.evaluate(() => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\services_cleaned.png'
  });
  console.log('Saved services_cleaned.png');

  // 2. Scroll to smart automation
  await page.evaluate(() => {
    const el = document.getElementById('smart-automation');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\smart_automation_cleaned.png'
  });
  console.log('Saved smart_automation_cleaned.png');

  await browser.close();
}

main().catch(console.error);
