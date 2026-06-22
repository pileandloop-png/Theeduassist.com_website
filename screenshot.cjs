const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:4321');
  await page.screenshot({ path: 'homepage-desktop-final.png', fullPage: true });

  // Mobile
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'homepage-mobile-final.png', fullPage: true });

  await browser.close();
  console.log("Screenshots captured");
})();
