import { test } from "@playwright/test";
import { LoginPage } from "../POM/Pages/login.page";
import fs from 'fs';

const data = JSON.parse(
  fs.readFileSync('../Utility/testdata.json', 'utf-8')
);

test('e2e second', async ({ page }) => {
  await page.goto(data[0].adminlink);
  const loginPage = new LoginPage(page);
  await loginPage.fillname(data[0].User, data[0].password); 
  await loginPage.clickbtn();
  await loginPage.selectsetting();
  await loginPage.fillpass(data[0].password,data[1].NewPassword,data[1].ConfirmPassword);
  await loginPage.selectadmin();
  await loginPage.logout();
  
});