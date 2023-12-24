import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class DashboardAdminPage extends BasePage{
  readonly page: Page;
  readonly customNav: any;
  readonly messageTemplatesNav: Locator;
  readonly welcomeScreenNav: Locator;
  readonly customBtn: any;
  readonly searchField: Locator;
  readonly titleGame: Locator;
  readonly customAction: any;
  readonly gameActionMenu: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.searchField = page.getByPlaceholder('Search games');
    this.gameActionMenu = page.locator('div').filter({ hasText: 'Wargame menu' }).getByRole('img', { name: 'Wargame menu' });
    this.customNav = (nameNav : string): Locator => {
      return page.locator('#sidebar_admin').getByText(nameNav);
    };
    
    this.customBtn = (nameBtn : string): Locator => {
      return page.getByRole('button', { name: nameBtn })
    };

    this.customAction = (nameAction : string): Locator => {
      return page.locator("span:has-text('"+nameAction+"')");
    };
 }


  async clickMenuLeft(name :string) {
    await this.customNav(name).click();
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

  async clickThreeDots() {
    await this.gameActionMenu.click();
  }

}
