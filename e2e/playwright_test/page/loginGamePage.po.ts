import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage.po';

export class LoginGamePage extends BasePage{
  readonly page: Page;
  readonly playGameBtn: any;
  readonly gameSelection: Locator;
  readonly gameNameSelection: any;
  readonly firstgameNameSelection: any;
  readonly roleOfForce: any;
  readonly enterBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.playGameBtn = page.getByRole('button', { name: 'Play' });
    this.enterBtn = page.getByRole('button', { name: 'Enter' });
    this.gameSelection = page.locator('div.react-select__dropdown-indicator');
    this.firstgameNameSelection = page.locator('#react-select-2-option-0');
    this.gameNameSelection = (gameName :string) : Locator => {
      return page.getByText(gameName, { exact: true }).first();
    }
    this.roleOfForce = (force :string, role : string) : Locator => {
      return page.locator('//ul[@data-qa-force-name="'+force+'"]//li//button[text()="'+role+'"]');
    }

 }

  async clickPlayGameBtn() {
    await this.clickLocator(this.playGameBtn);
  }

  async verifyRoleOfForceIsVisible(force : string, role : string) {
    await this.verifyTextIsvisible(this.roleOfForce(force, role));
  }

  async selectGame(gameName : string) {
    await this.gameSelection.click();
    await this.gameNameSelection(gameName).click();
  }

  async selectFirstGame(gameName : string) {
    await this.gameSelection.click();
    await this.firstgameNameSelection.click();
  }

  async selectRoleOfFoceGame(force : string, role : string) {
    await this.clickLocator(this.roleOfForce(force, role));
  }

  async clickEnterGameBtn() {
    await this.clickLocator(this.enterBtn);
  }

}
