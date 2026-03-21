import { test } from '@playwright/test';
import { HomePage } from '../POM/Pages/home.page';
import { ServicePage } from '../POM/Pages/Service.page';
import fs from 'fs';

const data = JSON.parse(
  fs.readFileSync('../Utility/testdata.json', 'utf-8')
);

test('salon test', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateToHome(data[0].url);

  const newPage = await homePage.clickServiceLink();

  const servicePage = new ServicePage(page);
   await servicePage.clickBook();
  await servicePage.fillForm(
    data[0].name,
    data[0].phone,
    data[0].email,
    data[0].service,
    data[0].date,
    data[0].time
  );

  await servicePage.clickbtn();
});