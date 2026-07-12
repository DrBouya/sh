import { test, expect } from '@playwright/test';

test('Create Draft Leave Request', async ({ page }) => {
  await page.goto('http://localhost:3001/');

  await page.getByRole('textbox', { name: 'کد کاربری:' }).fill('zohre');

  await page.getByRole('textbox', { name: 'از تاریخ:' }).fill('2026-01-07');

  await page.getByRole('textbox', { name: 'تا تاریخ:' }).fill('2026-07-02');

  await page.getByRole('textbox', { name: 'دلیل:' }).fill('confirm');

  await page.getByRole('button', { name: 'ثبت اولیه (Draft)' }).click();
});