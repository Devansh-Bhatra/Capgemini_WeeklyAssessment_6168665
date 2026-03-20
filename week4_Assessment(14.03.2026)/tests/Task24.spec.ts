import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const data = JSON.parse(
  fs.readFileSync('C:/Users/devan/OneDrive/Desktop/Task/tests/testdata/studentdata.json', 'utf-8')
);

test('End-to-End Student Registration Workflow', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  const filePath = path.join(__dirname, '../Files/profile.jpg');

  for (const student of data.students) {

    await page.fill('#firstName', student.firstName);
    await page.fill('#lastName', student.lastName);
    await page.fill('#userEmail', student.email);
    await page.fill('#userNumber', student.phone);

    await page.locator('label[for="gender-radio-1"]').click();

    await page.locator('label[for="hobbies-checkbox-1"]').click();

    await page.locator('#dateOfBirthInput').click();
    await page.locator('.react-datepicker__year-select').selectOption('2000');
    await page.locator('.react-datepicker__month-select').selectOption('4');
    await page.locator('.react-datepicker__day--015').click();

    await page.setInputFiles('#uploadPicture', filePath);

    await page.fill('#currentAddress', student.address);

    await page.locator('#state').click();
    await page.locator('text=NCR').click();

    await page.locator('#city').click();
    await page.locator('text=Delhi').click();

    await page.click('#submit');

    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();

    await expect(modal).toContainText(student.firstName);
    await expect(modal).toContainText(student.lastName);
    await expect(modal).toContainText(student.email);
    await expect(modal).toContainText(student.phone);
    await expect(modal).toContainText(student.address);

    await page.click('#closeLargeModal');
  }
});