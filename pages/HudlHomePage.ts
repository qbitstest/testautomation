import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HudlHomePage extends BasePage{
  myClub : Locator
  myClubLibrary: Locator
  private myClubTeam: Locator
  private myClubTeamProfile : Locator
  private librarySearch : Locator
  private libraryGridItems : Locator
  private videoTitle : Locator
  backToLibraryBtn : Locator
  teamProfileName : Locator
  nameOfGame: string
  gametitle: string  

  constructor(page: Page) {
    super(page)
    this.myClub = this.page.locator('.hui-primaryteamswitcher__display-name span')
    this.myClubLibrary = this.page.locator('[data-qa-id="webnav-primarynav-video"]')
    this.myClubTeam = this.page.locator('[data-qa-id="webnav-primarynav-team"]')
    this.myClubTeamProfile = this.page.locator('[data-qa-id="webnav-primarynav-teamprofile"]')
    this.librarySearch = this.page.getByPlaceholder("Search...")
    this.libraryGridItems = this.page.locator("[data-qa-id='grid-library-item']")
    this.videoTitle = this.page.locator(".drawerHeaderTitle--fF4TBsEw")
    this.backToLibraryBtn = this.page.getByRole("button", {name: 'Back to the Library'})
    this.teamProfileName = this.page.locator(".uni-headline--1")
  }
  
  async clickLibrarySearchGameAndPlay(gameName: string): Promise<Locator> {
    await this.clickElement(this.myClubLibrary)
    await this.librarySearch.waitFor({state: 'visible'})
    await this.fillInput(this.librarySearch, gameName)
    await this.libraryGridItems.first().waitFor()
    const countOfGames = await this.libraryGridItems.count()
    for(let i=0; i< countOfGames; i++){
        this.nameOfGame = await this.getText(this.libraryGridItems.nth(i).locator("div.styles_gridItemInfo__AHy4H p").first())
        if(this.nameOfGame.includes(gameName.toLowerCase())){
            await this.clickElement(this.libraryGridItems.nth(i))
            break
        }
    } 
    return this.videoTitle
  }

  async clickTeamsProfilesAndValidateTeamName(): Promise<Locator> {
    await this.clickElement(this.myClubTeam)
    await this.clickElement(this.myClubTeamProfile)
    return this.teamProfileName
    }
}