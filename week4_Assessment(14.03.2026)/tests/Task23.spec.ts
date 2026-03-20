import { test, expect } from '@playwright/test';
import fs from 'fs';

const data = JSON.parse(
  fs.readFileSync('./testdata/products.json', 'utf-8')
);

test('End-to-End Product Search → Product Details Validation', async ({ page }) => {

  await page.goto("https://www.amazon.in");

  for (const product of data.products) {

    await page.locator('#twotabsearchtextbox').fill(product);

    await page.locator('#nav-search-submit-button').click();

    await page.waitForSelector('div[data-component-type="s-search-result"]');

    const firstProduct = page.locator('div[data-component-type="s-search-result"] h2 a').first();
    const productTitle = await firstProduct.textContent();

    console.log(`Searching for: ${product}`);
    console.log(`First Result: ${productTitle}`);

    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      firstProduct.click()
    ]);

    await newPage.waitForLoadState();

    const title = newPage.locator('#productTitle');
    await expect(title).toBeVisible();

    const price = newPage.locator('.a-price .a-offscreen').first();
    await expect(price).toBeVisible();

    const rating = newPage.locator('span[data-hook="rating-out-of-text"]');
    await expect(rating).toBeVisible();

    console.log("Product Title:", await title.textContent());
    console.log("Price:", await price.textContent());
    console.log("Rating:", await rating.textContent());

    await newPage.close();

    await page.locator('#twotabsearchtextbox').fill('');
  }
});