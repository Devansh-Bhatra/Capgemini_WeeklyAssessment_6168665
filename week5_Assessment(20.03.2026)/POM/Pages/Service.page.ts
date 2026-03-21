import { Page, Locator } from '@playwright/test';
import fs from 'fs';

const data = JSON.parse(
  fs.readFileSync('../Utility/testdata.json', 'utf-8')
);

export class ServicePage {
  page: Page;
  bookappointment: Locator;
  nameInput: Locator;
  phoneInput: Locator;
  emailInput: Locator;
  serviceSelect: Locator;
  dateInput: Locator;
  timeInput: Locator;
  submitButton: Locator;
  bookbtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.emailInput = page.locator('input[name="email"]');
    this.serviceSelect = page.locator('//*[@id="services"]');
    this.dateInput = page.locator('//*[@id="adate"]');
    this.timeInput = page.locator('//*[@id="atime"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.bookappointment = page.locator('text=Book Appointment').nth(1);
    this.bookbtn = page.getByRole('button', { name: 'Book'});
  }

  async clickBook() {
    await this.bookappointment.click();
  }

  async fillForm(
    name: string,
    phone: string,
    email: string,
    service: string,
    date: string,   // pass full date: "2023-06-06"
    time: string,   // pass time: "10:00 AM"
  ) {
    await this.nameInput.fill(name);
    await this.phoneInput.fill(phone);
    await this.emailInput.fill(email);

    await this.serviceSelect.click();
    await this.serviceSelect.selectOption({ label: "O3 Facial" });
    await this.dateInput.fill(date);
    const time24 = convertTo24Hour(time);
    await this.timeInput.fill(time24);

   
  }
async clickbtn() {
  await this.bookbtn.click();
  await this.page.waitForLoadState('networkidle');
}
}

function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = String(parseInt(hours, 10) + 12);
  }
  return `${hours.padStart(2, '0')}:${minutes}`;
}