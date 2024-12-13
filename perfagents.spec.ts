import { test, expect } from '@playwright/test';


const BASE_PATH = '/home/uncloud/monitorings/screenshots/';

test('test1', async ({ page }) => {
  page
.goto('https://perfagents.com');

  // Navigate to the 'About Us' page
  const aboutUsLink = page.locator('text=About Us');
  await aboutUsLink.waitFor();
  await aboutUsLink.click();
  const aboutUsPage = page.
locator('//div[@class="w-layout-grid grid-container"]');
  await page.screenshot({ path: `${BASE_PATH}about-us.png`, fullPage: true });

  // Navigate to the 'Contact Us' page
  const contactUsLink = page.locator('text=Contact Us');
  await contactUsLink.waitFor();
  await contactUsLink.click();
  const contactUsPage = page.locator('//div[@class="w-layout-grid contact-wrapper-wrapper"]');
  await page.screenshot({ path: `${BASE_PATH
}contact-us.png`, fullPage: true });

  // Navigate to the 'Products' page
  const productsLink = page.locator('text=Products');
  await productsLink.waitFor();
  await productsLink.click();
  const productsPage = page.locator('//div[@class="w-layout-grid grid-container"]');
  await page.screenshot({ path: `${BASE_PATH}products.png`, fullPage: true });

  // Navigate to the 'Pricing' page
  const pricingLink = page.locator('text=Pricing');
  await pricingLink.waitFor();
  await pricingLink.click();
  const pricingPage = page.locator('//div[@class="w-layout-grid grid-container"]');
  await page.screenshot({ path: `${BASE_PATH}pricing.png`, fullPage: true });

  // Click the sign-up button
  const signUpButton = page.locator('text=Sign Up');
  await signUpButton.waitFor();
  await signUpButton.click();
  await page.screenshot({ path: `${BASE_PATH}sign-up.png`, fullPage: true });

  //
 Check that the URL contains 'pricing'
  const currentURL = page.url();
  expect(currentURL).toContain('pricing');
});