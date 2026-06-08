import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3002');
  await page.waitForTimeout(1000);
  await page.setViewportSize({ width: 1280, height: 2000 });
  await page.screenshot({ path: 'screenshot_full.png', fullPage: true });
  await browser.close();
})();
