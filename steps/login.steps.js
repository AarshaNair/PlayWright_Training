const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('chai');

let browser, page;

Given('I open the login page', async function () {
  browser = await chromium.launch({ headless: false, slowMo: 300, timeout: 60000 });
  page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/');
});

When('I enter valid credentials', async function () {
  await page.waitForSelector('input[name="username"]');
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
});

Then('I should see the dashboard', async function () {
  await page.waitForURL('**/dashboard');
  const title = await page.title();
  expect(title).to.include('OrangeHRM');
  await browser.close();
});