import { test, expect, Page } from '@playwright/test';
import { ENV } from '../utils/env';
import { LoginPage } from '../pages/loginPage';
import { HudlHomePage } from '../pages/HudlHomePage';
import { SiteHomePage } from '../pages/SiteHomePage';

let hudlHomePage : HudlHomePage
let loginPage : LoginPage
let siteHomePage: SiteHomePage
const gameName = "Test"

test.describe('Hudl Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    hudlHomePage = new HudlHomePage(page);
    loginPage = new LoginPage(page)
    siteHomePage = new SiteHomePage(page)
    loginPage.navigateTo('')
    await siteHomePage.clickLogin();
    await expect(siteHomePage.loginPageIdentifier).toBeVisible()
    await loginPage.loginIntoHudl(ENV.USERNAME, ENV.PASSWORD)
  });

  test('Goto library and check video available', async ({ page }) => {
     const titleOfVideo = await hudlHomePage.clickLibrarySearchGameAndPlay(gameName)
     await expect(titleOfVideo).toContainText(hudlHomePage.nameOfGame)
     await hudlHomePage.backToLibraryBtn.click()
     await expect(hudlHomePage.myClubLibrary).toBeVisible()
  });

  test('Goto team profile and validate team name with club name', async ({ page }) => {
   const profileName = await hudlHomePage.clickTeamsProfilesAndValidateTeamName()
   await profileName.waitFor({state: 'visible'})
   await expect(profileName).toContainText(await hudlHomePage.myClub.first().textContent() ?? "")
 });

});