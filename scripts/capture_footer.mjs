import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

async function captureFooter() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Scroll to footer
  await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  const footerHandle = await page.$('footer');
  if (footerHandle) {
    await footerHandle.screenshot({
      path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\footer_preview.png'
    });
    console.log('Saved footer_preview.png');
  }

  await browser.close();
}

captureFooter().catch(console.error);
