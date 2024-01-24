import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class DashboardAdminPage extends BasePage{
  readonly page: Page;
  readonly leftNav: any;
  readonly messageTemplatesNav: Locator;
  readonly welcomeScreenNav: Locator;
  readonly customBtn: any;
  readonly searchField: Locator;
  readonly titleGame: Locator;
  readonly customAction: any;
  readonly gameActionMenu: Locator;
  readonly gameName: Locator;
  readonly gameNameText: Locator;
  readonly messagePopup: any;
  readonly buttonPopup: any;

  readonly hideEyeIcon: any;
  readonly showEyeIcon: any;
  readonly gameNameLabel: any;

  readonly gameTable: Locator;
  readonly gameTitleList: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.searchField = page.getByPlaceholder('Search games');
    this.gameActionMenu = page.locator('div').filter({ hasText: 'Wargame menu' }).getByRole('img', { name: 'Wargame menu' });
    this.leftNav = (nameNav : string): Locator => {
      return page.locator('#sidebar_admin').getByText(nameNav);
    };
    
    this.customBtn = (nameBtn : string): Locator => {
      return page.getByRole('button', { name: nameBtn })
    };

    this.customAction = (nameAction : string): Locator => {
      return page.locator("span:has-text('"+nameAction+"')");
    };
    this.gameName = page.locator('//span[contains(@class,"_wargame-title")]');
    this.gameNameText = page.locator('//span[contains(@class,"_wargame-title")]//span[@title]');
    this.messagePopup = (msg : string): Locator => {
      return page.locator("//div[text()='"+msg+"']");
    };
    this.buttonPopup = (name : string): Locator => {
      return page.locator("span.MuiButton-label:has-text('"+name+"')");
    };

    this.hideEyeIcon = (gameName : string): Locator => {
      return page.locator("//span[contains(text(),'"+gameName+"')]//ancestor::div[contains(@class,'_wargame-row')]//*[contains(@class,'fa-eye-slash')]");
    };

    this.showEyeIcon = (gameName : string): Locator => {
      return page.locator("//span[contains(text(),'"+gameName+"')]//ancestor::div[contains(@class,'_wargame-row')]//*[contains(@class,'fa-eye')]");
    };

    this.gameNameLabel = (gameName : string): Locator => {
      return page.locator("//span[contains(@class,'_wargame-title')]//span[@title and contains(text(), '"+gameName+"')]");
    };

    this.gameTable = page.locator("//div[@class='scrollarea-content ']");
    this.gameTitleList = page.locator("//div[@class='scrollarea-content ']//div[contains(@class,'_searchlist-title')]");

 }


  async clickMenuLeft(name :string) {
    await this.leftNav(name).click();
  }

  async clickMenuBar(name :string) {
    await this.customBtn(name).click();
  }

  async selectAction(name :string) {
    await this.customAction(name).click();
  }

  async filterGameName(name :string) {
    await this.searchField.fill(name);
  }

  async clickThreeDotsAtFirstGame() {
    await this.hoverLocator(this.gameName);
    await this.clickLocator(this.gameActionMenu);
  }

  async getFirstNameOfGame() {
    return this.gameNameText.first().innerText();
  }

  async verifyFirstNameOfGameIsDeleted(name: string) {
    await this.page.waitForTimeout(2000);
    expect( await this.gameNameText.first().innerText()).not.toEqual(name);
  }

  async verifyMessageIsVisible(msg: string) {
    await this.clickLocator(this.messagePopup(msg));
  }

  async clickButtonPopup(name: string) {
    await this.clickLocator(this.buttonPopup(name));
  }

  async verifyHideEyeIconIsShowed(name: string, isShowed: boolean) {
    if(isShowed){
      await this.verifyLocatorIsvisible(this.hideEyeIcon(name));
    } else {
      await this.verifyLocatorIsvisible(this.showEyeIcon(name));
    }
  }

  async verifyGameNameIsShowed(name: string, isShow: boolean) {
    if(isShow){
      expect(this.gameNameText.first())
    } else {
      expect(this.gameNameText.first()).not.toHaveText(name);
    }
  }

  async verifyGameNameCount(name: string, expectedCount: number) {
    await this.page.waitForTimeout(2000);
    const countGame = await this.gameNameLabel(name).count();
    expect(countGame).toEqual(expectedCount);
  }

  async verifyGameListIsNotEmpty() {
    const gameTableCount = await this.gameTable.count();
    const gameTitleListCount = await this.gameTitleList.count();

    expect(gameTableCount).toEqual(1);
    expect(gameTitleListCount).toBeGreaterThan(0);
  }


  async verifyGameListIsEmpty() {
    const gameTableCount = await this.gameTable.count();
    const gameTitleListCount = await this.gameTitleList.count();
    expect(gameTableCount).toEqual(1);
    expect(gameTitleListCount).toEqual(0);
  }
  
}
