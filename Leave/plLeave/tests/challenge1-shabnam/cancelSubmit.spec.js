import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('textbox', { name: 'کد کاربری:' }).click();
  await page.getByRole('textbox', { name: 'کد کاربری:' }).fill('123');
  await page.getByRole('textbox', { name: 'از تاریخ:' }).fill('1234-02-03');
  await page.getByRole('textbox', { name: 'تا تاریخ:' }).fill('1234-01-02');
  await page.getByRole('textbox', { name: 'دلیل:' }).click();
  await page.getByRole('textbox', { name: 'دلیل:' }).fill('yes');

  await expect(page.getByRole('button', { name: 'ثبت اولیه (Draft)' })).toBeEnabled();

  await page.getByRole('button', { name: 'ثبت اولیه (Draft)' }).click();

  await expect(page.getByText('پیش‌نویس با موفقیت ایجاد شد. مشاهده درخواست')).toBeVisible();
  await expect(page.getByText('Draft')).toBeVisible();
  await expect(page.getByRole('link', { name: 'مشاهده درخواست' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'ثبت اولیه (Draft)' })).toBeEnabled();
  await expect(page.getByRole('heading', { name: 'درخواست مرخصی جدید' })).toBeVisible();

  await page.getByRole('link', { name: 'مشاهده درخواست' }).click();

await expect(page.getByRole('heading', { name: 'جزئیات درخواست مرخصی' })).toBeVisible();
await expect(page.getByText('draft')).toBeVisible();
await expect(page.getByText(/کد کاربری:/)).toBeVisible();
await expect(page.getByText('از تاریخ:')).toBeVisible();
await expect(page.getByText('تا تاریخ:')).toBeVisible();
await expect(page.getByText('دلیل:')).toBeVisible();
await expect(page.getByText('وضعیت:')).toBeVisible();
await expect(page.getByRole('button', { name: 'ارسال درخواست' })).toBeEnabled();
await expect(page.getByRole('button', { name: 'لغو' })).toBeEnabled();


  await page.getByRole('button', { name: 'ارسال درخواست' }).click();

await expect(page.getByText('submitted')).toBeVisible();



await expect(page.getByRole('button', { name: 'تأیید' })).toBeEnabled();
await expect(page.getByRole('button', { name: 'رد'  })).toBeEnabled();
await expect(page.getByRole('button', { name: 'لغو' })).toBeEnabled();


  await page.getByRole('button', { name: 'لغو' }).click();



await expect(page.getByText('درخواست لغو شد')).toBeVisible();
await expect(page.getByText('cancelled')).toBeVisible();
await expect(page.getByRole('heading', { name: 'جزئیات درخواست مرخصی' })).toBeVisible();


});