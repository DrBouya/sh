// // @ts-check
// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('textbox', { name: 'کد کاربری:' }).click();
  await page.getByRole('textbox', { name: 'کد کاربری:' }).fill('1254');
  await page.getByRole('textbox', { name: 'از تاریخ:' }).fill('2411-12-05');
  await page.getByRole('textbox', { name: 'تا تاریخ:' }).fill('1225-02-05');
  await page.getByRole('textbox', { name: 'دلیل:' }).click();
  await page.getByRole('textbox', { name: 'دلیل:' }).fill('confirm');
  await page.getByRole('textbox', { name: 'کد کاربری:' }).click();
  await page.getByRole('textbox', { name: 'کد کاربری:' }).fill('zohre');
  await page.getByRole('textbox', { name: 'از تاریخ:' }).fill('2026-01-07');
  await page.getByRole('textbox', { name: 'تا تاریخ:' }).fill('2026-07-02');
  await page.getByRole('button', { name: 'ثبت اولیه (Draft)' }).click();
});