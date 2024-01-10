import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class WelcomScreenAdminPage extends BasePage{
  readonly page: Page;
  readonly welcomeScreenTitle: any;
  readonly title: Locator;
  readonly inputDesc: Locator;
  readonly textDesc : Locator;
  readonly doneBtn : Locator;
  readonly saveBtn : Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.title = page.locator('#setup-title-editable');
    this.inputDesc = page.locator('textarea.description-edit');
    this.textDesc = page.locator('.description');
    this.doneBtn = page.getByText('Done');
    this.saveBtn = page.getByRole('button', { name: 'Save changes' });
 }

  async verifyIsWelcomePage() {
    await this.verifyTextIsvisible(this.title);
  }

  async updateTextOfWelcomePage(textContent : string) {
    await this.inputValueLocator(this.title, textContent)
  }

  async updateDescOfWelcomePage(textContent : string) {
    await this.clickLocator(this.textDesc);
    await this.inputValueLocator(this.inputDesc, textContent)
  }

  async clickDoneBtn() {
    await this.clickLocator(this.doneBtn);
  }

  async clickSaveChangesBtn() {
    await this.clickLocator(this.saveBtn);
  }
}
