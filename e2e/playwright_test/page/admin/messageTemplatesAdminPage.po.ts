import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class MessageTemplatesAdminPage extends BasePage{
  readonly page: Page;
  readonly welcomeScreenTitle: any;
  readonly title: Locator;
  readonly createNewTemplateBtn : Locator;

  readonly inputDesc: Locator;
  readonly textDesc : Locator;
  readonly saveBtn : Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.title = page.locator('xpath=//div/h1[text()="Message Templates"]');
    this.createNewTemplateBtn = page.getByRole('button', { name: 'Create new template' });
    //--------
    this.inputDesc = page.locator('textarea.description-edit');
    this.textDesc = page.locator('.description');
    this.saveBtn = page.getByRole('button', { name: 'Save changes' });
 }

  async verifyIsMessageTemplatesPage() {
    await this.verifyTextIsvisible(this.title);
  }
  
  async clickCreateNewTemplateBtn() {
    await this.clickLocator(this.createNewTemplateBtn);
  }

  //--------------

  async updateTextOfWelcomePage(textContent : string) {
    await this.inputValueLocator(this.title, textContent)
  }

  async updateDescOfWelcomePage(textContent : string) {
    await this.clickLocator(this.textDesc);
    await this.inputValueLocator(this.inputDesc, textContent)
  }


  async clickSaveChangesBtn() {
    await this.clickLocator(this.saveBtn);
  }
}
