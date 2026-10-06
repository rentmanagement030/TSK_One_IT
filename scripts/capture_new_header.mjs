import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

async function captureNewHeader() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // 1. Hover on "Our Services"
  const serviceBtn = await page.$('button[aria-haspopup="true"]');
  if (serviceBtn) {
    await serviceBtn.hover();
    await new Promise(r => setTimeout(r, 500));
  }

  await page.screenshot({
    path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\header_services_clean.png',
    clip: { x: 0, y: 0, width: 1440, height: 580 }
  });
  console.log('Saved header_services_clean.png');

  // 2. Hover on "Solutions"
  const buttons = await page.$$('button[aria-haspopup="true"]');
  if (buttons[1]) {
    await buttons[1].hover();
    await new Promise(r => setTimeout(r, 500));
  }

  await page.screenshot({
    path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\header_solutions_clean.png',
    clip: { x: 0, y: 0, width: 1440, height: 450 }
  });
  console.log('Saved header_solutions_clean.png');

  await browser.close();
}

captureNewHeader().catch(console.error);
