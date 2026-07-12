import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('textbox', { name: 'کد کاربری:' }).click();
  await page.getByRole('textbox', { name: 'کد کاربری:' }).fill('zohre1');
  await page.getByRole('textbox', { name: 'از تاریخ:' }).fill('2025-02-03');
  await page.getByRole('textbox', { name: 'تا تاریخ:' }).fill('2026-01-02');
  await page.getByRole('textbox', { name: 'دلیل:' }).click();
  await page.getByRole('textbox', { name: 'دلیل:' }).fill('yes');
  await page.getByRole('button', { name: 'ثبت اولیه (Draft)' }).click();
  await page.getByRole('link', { name: 'مشاهده درخواست' }).click();
  await page.getByRole('button', { name: 'ارسال درخواست' }).click();
  await page.getByRole('button', { name: 'رد' }).click();
});