import {test} from "@playwright/test";
import { HomePage } from "../POM/Pages/home.page";
import {LoginPage} from "../POM/Pages/login.page";
import fs from 'fs';
const data = JSON.parse(
  fs.readFileSync('../Utility/testdata.json', 'utf-8')
);

test('Login page',async({page})=>{
  await page.goto(data[0].adminlink);
    const loginPage = new LoginPage(page);
    await loginPage.fillname(data[0].User, data[0].password); 
    await loginPage.clickbtn();
})