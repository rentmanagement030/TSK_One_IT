import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Desktop Mega Menu Screenshot
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Hover over Our Services button to show mega menu
  const serviceBtn = await page.$('button[aria-haspopup="true"]');
  if (serviceBtn) {
    await serviceBtn.hover();
    await new Promise(r => setTimeout(r, 600));
  }

  await page.screenshot({
    path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\desktop_megamenu.png',
    clip: { x: 0, y: 0, width: 1440, height: 600 }
  });
  console.log('Saved desktop_megamenu.png');

  // 2. Mobile Responsive Glassmorphism Sidepanel Screenshot
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const mobileBtn = await mobilePage.$('button[aria-label*="mobile menu"]');
  if (mobileBtn) {
    await mobileBtn.click();
    await new Promise(r => setTimeout(r, 600));
  }

  await mobilePage.screenshot({
    path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\mobile_glassmorphic_sidebar.png',
    fullPage: false
  });
  console.log('Saved mobile_glassmorphic_sidebar.png');

  await browser.close();
}

captureScreenshots().catch(console.error);
