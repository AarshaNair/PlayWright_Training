import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  // Use your local path or hosted page URL
  const url = 'file:///C:/playwright/tests/index.html';

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('should display login form', async ({ page }) => {
    await expect(page.locator('button')).toBeVisible();
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('button')).toHaveText('Login');
  });

  test('should show success message for correct credentials', async ({ page }) => {
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('button');
    await expect(page.locator('#message')).toHaveText('Login successful!');
  });

  test('should show error message for incorrect credentials', async ({ page }) => {
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('button');
    await expect(page.locator('#message')).toHaveText('Invalid credentials');
  });

  test('should require both fields before login', async ({ page }) => {
    await page.click('button');
    await expect(page.locator('#message')).toHaveText(''); // no message yet
  });
});
