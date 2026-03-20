import {test} from '@playwright/test';
test('Navigate to the medal list section',async({page})=>{
  await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
  await page.locator('//a[@data-cy="link" and text()="Athletes"]').click();
  await page.locator('//section[@data-cy="all-athletes-table"]').click();
  await page.screenshot({ path: 'medal_list.png' });
})