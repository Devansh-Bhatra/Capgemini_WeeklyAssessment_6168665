import { Page, Locator } from "@playwright/test";

export class LoginPage {
  page: Page;
  username: Locator;
  password: Locator;
  signbtn: Locator;
  administrator: Locator;
  profileOption: Locator;
  logoutOption: Locator;
  settingOption: Locator;
  currentPass:Locator;
  NewPass:Locator;
  ConfirmPass:Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[name="username"]');
    this.password = page.locator('input[name="password"]');
    this.signbtn = page.locator('input[type="submit"]'); 
    this.administrator = page.locator('//div[@class="user-name"]');
    this.profileOption = page.getByText('Profile');
    this.settingOption=page.getByText('Setting');
    this.currentPass=page.locator('input[name="currentpassword"]');
    this.NewPass=page.locator('input[name="newpassword"]');
    this.ConfirmPass=page.locator('input[name="confirmpassword"]');
    this.logoutOption = page.getByText('Logout');
  }

  async fillname(User: string, password: string) {
    await this.username.fill(User);
    await this.password.fill(password);
  }

  async clickbtn() {
    await this.signbtn.click();
    await this.page.waitForLoadState('networkidle'); 
  }

  async selectadmin() {
    await this.administrator.click();
    await this.profileOption.click();
  }
  async selectsetting(){
    await this.administrator.click();
    await this.settingOption.click();
  }
  async fillpass(password:string,NewPassword:string,ConfirmPassword:string){
    await this.currentPass.fill(password);
    await this.NewPass.fill(NewPassword);
    await this.ConfirmPass.fill(ConfirmPassword);
  }


  async logout() {
    await this.administrator.click();
    await this.logoutOption.click();
  }
}