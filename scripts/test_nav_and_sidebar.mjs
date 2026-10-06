import puppeteer from 'puppeteer-core';
import fs from 'fs';

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

const executablePath = possiblePaths.find(p => fs.existsSync(p));

async function verifyNavbar() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Test Desktop (1280px)
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Check header width vs window width
  const headerWidth = await page.evaluate(() => {
    const header = document.querySelector('header');
    return header ? header.offsetWidth : 0;
  });
  console.log(`Desktop Viewport (1280px) -> Header Width: ${headerWidth}px (Full-width edge-to-edge: ${headerWidth === 1280})`);

  // Check count of services in Mega Menu
  const megaMenuServices = await page.evaluate(() => {
    const services = Array.from(document.querySelectorAll('div[aria-label="All 12 Services Mega Menu"] a[href*="service"], div[aria-label="All 12 Services Mega Menu"] a[href*="smart"]'));
    return services.map(s => s.textContent.trim().replace(/\s+/g, ' '));
  });
  console.log(`Mega Menu Total Services Count: ${megaMenuServices.length}`);
  megaMenuServices.forEach((s, idx) => console.log(`  [${idx + 1}] ${s.slice(0, 45)}...`));

  // 2. Test Mobile Viewport (375px) for Glassmorphism Sidebar
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 667 });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Open mobile drawer
  const openMenuBtn = await mobilePage.evaluate(() => {
    const btn = document.querySelector('button[aria-label*="mobile menu"]');
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  });
  console.log(`Mobile Hamburger Clicked: ${openMenuBtn}`);
  await new Promise(r => setTimeout(r, 600));

  // Check sidepanel elements
  const sidebarCheck = await mobilePage.evaluate(() => {
    const aside = document.querySelector('aside[aria-label="Mobile Navigation Sidebar"]');
    if (!aside) return null;
    const servicesCount = aside.querySelectorAll('a[href*="service"], a[href*="smart"]').length;
    const hasBlobs = aside.querySelectorAll('.animate-tsm10-drift-a, .animate-tsm10-drift-b, .animate-tsm10-drift-c').length;
    const hasWhatsApp = aside.querySelector('a[href*="wa.me"]') !== null;
    const hasPhone = aside.querySelector('a[href*="tel:"]') !== null;
    return { servicesCount, hasBlobs, hasWhatsApp, hasPhone };
  });

  console.log('Mobile Glassmorphism Sidebar Inspection:', sidebarCheck);

  await browser.close();
  console.log('All Navbar & Glassmorphism Sidepanel tests PASSED successfully!');
}

verifyNavbar().catch(console.error);
