import { test, expect } from '@playwright/test';

test.describe('Login Form Validation and UI Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/playwright/tests/index.html');
  });

  test('should show error when username is empty', async ({ page }) => {
    await page.fill('#password', 'password123');
    await page.getByRole('button', { name: 'Login' }).click();
    const message = page.locator('#message');
    await expect(message).toHaveText('Invalid credentials');
  });

  test('should show error when password is empty', async ({ page }) => {
    await page.fill('#username', 'testuser');
    await page.getByRole('button', { name: 'Login' }).click();
    const message = page.locator('#message');
    await expect(message).toHaveText('Invalid credentials')
