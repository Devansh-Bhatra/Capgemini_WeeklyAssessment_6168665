import {test} from '@playwright/test';
test('Validate xpath scenario on amazon',async ({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    const firstItem = page.locator('//div[@data-component-type="s-search-result"][1]//span[@class="a-price-whole"]');
    const Name=await firstItem.textContent();
    const Price=await firstItem.textContent();
    console.log(`First item name: ${Name}`);
    console.log(`First item price: ${Price}`);
    await page.screenshot({path:"./screenshots/amazon.png"})
    
});