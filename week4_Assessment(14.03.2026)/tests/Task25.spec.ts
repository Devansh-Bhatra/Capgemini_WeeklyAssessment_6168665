import {test,expect} from "@playwright/test";
import fs from "fs";
import path from "path";

const Data=JSON.parse(fs.readFileSync('C:/Users/devan/OneDrive/Desktop/Task/tests/testdata/userData.json','utf-8'));
test('Validade user profile ',async({page})=>{
await page.goto('https://demoqa.com/login');
for(const user of Data.users){
    await page.fill('#userName', user.username);
    await page.fill('#password', user.password);

    await page.click('#login');
      await expect(page).toHaveURL(/profile/);

    await page.click('#submit');

    await expect(page).toHaveURL(/login/);
}
})