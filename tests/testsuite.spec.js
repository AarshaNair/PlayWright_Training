import { test, expect } from '@playwright/test';

test.describe('Personal Website for Playwright', () => {

  test('should load the homepage correctly', async ({ page }) => {
    await page.goto('file:///C:/playwright/tests/index%20-%20Portfolio.html');  // Adjust URL if needed
    const title = await page.title();
    expect(title).toBe('Aarsha Radhakrishnan- Playwright');
  });

  test('should have navigation links working', async ({ page }) => {
    await page.goto('file:///C:/playwright/tests/index%20-%20Portfolio.html');
    
    // Test if the Bio section is navigable
    await page.click('text=Bio');
    await expect(page).toHaveURL('#bio');
    
    // Test if the Portfolio section is navigable
    //await page.click('text=Portfolio');
    //await expect(page).toHaveURL('#portfolio');
    
    // Test if the Contact section is navigable
    //await page.click('text=Contact');
   // await expect(page).toHaveURL('#contact');
  });

  test('should display Bio section correctly', async ({ page }) => {
    await page.goto('file:///C:/playwright/tests/index%20-%20Portfolio.html');
    const bioHeading = await page.locator('h2').textContent();
    expect(bioHeading).toBe('About Me');
  });

  test('should have a sticky footer', async ({ page }) => {
    await page.goto('file:///C:/playwright/tests/index%20-%20Portfolio.html');
    const footer = await page.locator('footer');
    const position = await footer.evaluate((footerElement) => {
      return footerElement.getBoundingClientRect().top;
    });
    expect(position).toBeGreaterThanOrEqual(0);
  });

});

