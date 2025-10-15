import { test, expect } from '@playwright/test';

test.describe('Login Form Validation and UI Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///C:/playwright/tests/index.html'); 
  });

  test('should show error when username is empty', async ({ page }) => {
    await page.fill('#password', 'password123');
    await page.click('#login-button');
    const error = await page.locator('#error-message');
    await expect(error).toHaveText('Username is required');
  });

  test('should show error when password is empty', async ({ page }) => {
    await page.fill('#username', 'testuser');
    await page.click('#login-button');
    const error = await page.locator('#error-message');
    await expect(error).toHaveText('Password is required');
  });

  test('should disable login button when fields are empty', async ({ page }) => {
    const loginButton = await page.locator('#login-button');
    await expect(loginButton).toBeDisabled();
  });

  test('should enable login button when both fields are filled', async ({ page }) => {
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'password123');
    const loginButton = await page.locator('#login-button');
    await expect(loginButton).toBeEnabled();
  });

  test('should clear error message on input change', async ({ page }) => {
    await page.click('#login-button');
    await page.fill('#username', 'testuser');
    const error = await page.locator('#error-message');
    await expect(error).toBeHidden();
  });
});
