import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SiteHomePage extends BasePage{
  private loginButton : Locator
  private hudlLogoMark: Locator
  languageSelector : Locator
  hudlLogoHomePage : Locator
  private acceptAllCookies: Locator
  loginPageIdentifier: Locator

  constructor(page: Page) {
    super(page)
    this.loginButton = page.locator('[data-qa-id="login-select"]')
    this.hudlLogoMark = page.locator('[data-qa-id="login-hudl"]')
    this.languageSelector = page.getByLabel('Language selector')
    this.hudlLogoHomePage = page.locator('[data-qa-id="site-logo"]')
    this.loginPageIdentifier = page.locator('#username')
  }

  async launchURL(url: string) {
    await this.navigateTo(url)
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click()
    await this.hudlLogoMark.click()
  }
}