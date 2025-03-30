import { Locator, Page, expect } from '@playwright/test';
import { SiteHomePage } from './SiteHomePage';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
 private email : Locator
 private continueBtn : Locator
 private password : Locator
 homePageIdentifier: Locator
 invalidCredsErrorMsg: Locator
 
 constructor(page: Page) {
    super(page);
    this.email  = this.page.locator("#username")
    this.password = this.page.locator("#password")
    this.continueBtn = this.page.getByRole("button", {name: 'Continue', exact: true})
    this.homePageIdentifier = this.page.getByText('Home', {exact: true})
    this.invalidCredsErrorMsg = this.page.locator("#error-element-password")
  }
  
  async loginIntoHudl(username: string, password: string) {
    await this.fillInput(this.email, username)
    await this.clickElement(this.continueBtn)
    await this.fillInput(this.password, password)
    await this.clickElement(this.continueBtn)
  }

  async verifyLoginError() {
    // await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}