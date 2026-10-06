import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

async function captureFooterStates() {
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

  const bannerHandle = await page.$('footer .group\\/title');

  if (bannerHandle) {
    // 1. Capture Default Unhovered State (Pure White)
    await bannerHandle.screenshot({
      path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\footer_default_white.png'
    });
    console.log('Saved footer_default_white.png');

    // 2. Hover over the banner to trigger color transition
    await bannerHandle.hover();
    await new Promise(r => setTimeout(r, 400));

    // Capture Hovered State
    await bannerHandle.screenshot({
      path: 'C:\\Users\\aravi\\.gemini\\antigravity\\brain\\d1b759c8-f01a-45c4-bf8e-c364025eac4c\\footer_hover_color.png'
    });
    console.log('Saved footer_hover_color.png');
  }

  await browser.close();
}

captureFooterStates().catch(console.error);
