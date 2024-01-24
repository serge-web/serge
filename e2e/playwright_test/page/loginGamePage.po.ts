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
  readonly gameNameValue: any;
  readonly secondGameNameSelection: any;

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
    this.gameNameValue = (name :string) : Locator => {
      return page.locator("//div[contains(@class, 'react-select__single-value') and contains(text(), '"+name+"')]");
    }
    this.secondGameNameSelection = page.locator('#react-select-2-option-1');


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

  async selectSecondGame(gameName : string) {
    await this.gameSelection.click();
      const secondGameCount = await this.secondGameNameSelection.count();
      if (secondGameCount > 0) {
          await this.secondGameNameSelection.click();
      } 
  }
  
  async selectRoleOfFoceGame(force : string, role : string) {
    await this.clickLocator(this.roleOfForce(force, role));
  }

  async clickEnterGameBtn() {
    await this.clickLocator(this.enterBtn);
  }

  async verifyGameNameIsVisible(name: string, IsVisible: boolean) {
    await this.page.waitForTimeout(2000);
    if(IsVisible){
      await this.verifyLocatorIsvisible(this.gameNameValue(name));
    } else {
      await this.verifyLocatorIsNotVisible(this.gameNameValue(name));
    }
  }

}
