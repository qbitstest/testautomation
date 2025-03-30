import { test, expect, Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { SiteHomePage } from '../pages/SiteHomePage';
import { LoginPage } from '../pages/loginPage';

let siteHomePage : SiteHomePage
let loginPage : LoginPage

test.describe('Hudl Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    siteHomePage = new SiteHomePage(page);
    loginPage = new LoginPage(page)
    await siteHomePage.navigateTo('');
    await expect(siteHomePage.hudlLogoHomePage).toBeVisible()
    await siteHomePage.clickLogin();
    await expect(siteHomePage.loginPageIdentifier).toBeVisible()
  });

  test('Goto site home and Login with valid credentials', async ({ page }) => {
      await loginPage.loginIntoHudl(ENV.USERNAME, ENV.PASSWORD)
      await expect(loginPage.homePageIdentifier).toBeVisible()
  });

  test('Login with invalid credentials should show error', async ({ page }) => {
    await loginPage.loginIntoHudl(ENV.USERNAME, ENV.INVALID_PASSWORD)
    await expect(loginPage.invalidCredsErrorMsg).toContainText("Your email or password is incorrect. Try again")
  });
});