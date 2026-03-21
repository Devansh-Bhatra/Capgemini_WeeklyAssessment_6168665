import { Page, Locator } from '@playwright/test';

export class HomePage {
  page: Page;
  serviceLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.serviceLink = page.getByRole('link', { name: 'SERVICE LIST' });
  }

  async navigateToHome(url: string) {
    await this.page.goto(url);
  }

  async clickServiceLink(): Promise<void> {
  await Promise.all([
    this.page.waitForNavigation(),
    this.serviceLink.click()
  ]);

  await this.page.waitForLoadState();
}
}