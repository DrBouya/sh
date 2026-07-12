import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('textbox', { name: 'کد کاربری:' }).click();
  await page.getByRole('textbox', { name: 'از تاریخ:' }).fill('3636-12-12');
  await page.getByRole('textbox', { name: 'تا تاریخ:' }).fill('275760-02-05');
  await page.getByRole('textbox', { name: 'دلیل:' }).click();
  await page.getByRole('textbox', { name: 'دلیل:' }).fill('test');

  await expect(page.getByRole('textbox', { name: 'کد کاربری:' })).toHaveValue('');
  await page.getByRole('button', { name: 'ثبت اولیه (Draft)' }).click();
  await expect(page.getByText('پیش‌نویس با موفقیت ایجاد شد. مشاهده درخواست')).not.toBeVisible();

});

