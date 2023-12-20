import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage.po';

export class OverViewPage extends BasePage{
  readonly page: Page;
  readonly gameNameInput: any;
  readonly overviewMenu: Locator;
  readonly forcesMenu: Locator;
  readonly channelsMenu: any;
  readonly gameDescField: Locator;
  readonly saveOverViewBtn: Locator;
  readonly saveNameGame: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.gameNameInput = page.locator('input[type="text"]').first();
    this.overviewMenu = page.getByText('overview', { exact: true });
    this.forcesMenu = page.getByText('forces');
    this.channelsMenu = page.getByText('channels');
    this.gameDescField = page.locator('textarea').first();
    this.saveOverViewBtn = page.getByRole('button', { name: 'Save Overview' });
    this.saveNameGame = page.locator('xpath=//*[@data-icon="floppy-disk"]');
 }


 async inputGameName(name :string) {
  await this.overviewMenu.waitFor();
  await this.gameNameInput.fill(name);
  await this.saveNameGame.click();
}

  async clickOverviewMenu() {
    await this.overviewMenu.click();
  }

  async clickForceMenu() {
    await this.forcesMenu.click();
  }

  async clickChannelMenu() {
    await this.channelsMenu.click();
  }

  async inputDescriptionGame(desc:string) {
    await this.gameDescField.fill(desc);
  }

  async saveOverView() {
    await this.saveOverViewBtn.click();
  }

}
