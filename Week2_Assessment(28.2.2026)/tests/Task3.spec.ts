import {test} from '@playwright/test';
test('Validate xpath on qspider app',async({page})=>{
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.locator('//input[@id="name"]').fill('Devansh');
  await page.locator('//input[@id="password"]').fill('123456');
  await page.locator('//input[@id="email"]').fill("abc@gmail.com");
  await page.locator('//button[@type="submit"]').click();
  await page.locator('//input[@id="password"]').fill('123456');
  await page.locator('//input[@id="email"]').fill("abc@gmail.com");
  await page.locator('//button[@type="submit"]').click();
  await page.screenshot({path:"./screenshots/qspider.png"})
})