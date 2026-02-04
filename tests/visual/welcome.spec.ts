import { test, expect } from '@playwright/test';

test('welcome page visual regression', async ({ page }) => {
  await page.goto('/welcome.html');
  // wait for logo and main image
  await page.waitForSelector('img[alt="Site logo"]');
  await page.waitForSelector('img[alt="Playground Image"]');

  // full page screenshot snapshot
  const screenshot = await page.screenshot({ fullPage: true });
  expect(screenshot).toMatchSnapshot('welcome.png');
});
