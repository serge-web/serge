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
    expect(this.gameNameText.first().innerText()).not.toEqual(name);
  }

  async verifyMessageIsVisible(msg: string) {
    await this.clickLocator(this.messagePopup(msg));
  }

  async clickButtonPopup(name: string) {
    await this.clickLocator(this.buttonPopup(name));
  }
}
