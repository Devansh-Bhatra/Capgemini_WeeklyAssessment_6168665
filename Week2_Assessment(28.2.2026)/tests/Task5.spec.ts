import {test} from '@playwright/test';
test('Fetch 4th product on amazon',async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    const fourthItem = page.locator('//div[@data-component-type="s-search-result"][4]//span[@class="a-price-whole"]');
    const Name=await fourthItem.textContent();
    const Price=await fourthItem.textContent();
    console.log(`Fourth item name: ${Name}`);
    console.log(`Fourth item price: ${Price}`);
    await page.screenshot({path:"./screenshots/amazon.png"})  
    
})