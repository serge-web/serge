import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage.po';

export class LoginGamePage extends BasePage{
  readonly page: Page;
  readonly playGameBtn: any;
  readonly gameSelection: Locator;
  readonly gameNameSelection: any;
  readonly roleOfForce: any;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.playGameBtn = page.getByRole('button', { name: 'Play' });
    this.gameSelection = page.locator('div.react-select__dropdown-indicator');
    this.gameNameSelection = (gameName :string) : Locator => {
      return page.getByText(gameName, { exact: true });
    }
    this.roleOfForce = (force :string, role : string) : Locator => {
      return page.locator('//ul[@data-qa-force-name="'+force+'"]//li//button[text()="'+role+'"]');
    }

 }

  async clickPlayGameBtn() {
    await this.playGameBtn.waitFor();
    await this.playGameBtn.click();
  }

  async verifyRoleOfForceIsVisible(force : string, role : string) {
    await this.verifyTextIsvisible(this.roleOfForce(force, role));
  }

  async selectGame(gameName : string) {
    await this.gameSelection.click();
    await this.gameNameSelection(gameName).click();
  }

}
