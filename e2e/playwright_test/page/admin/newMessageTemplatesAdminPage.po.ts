import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class NewMessageTemplatesAdminPage extends BasePage{
  readonly page: Page;
  readonly messageTemplatesTitlePage: Locator;
  readonly backHomeBtn: Locator;
  readonly saveMessageBtn: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.messageTemplatesTitlePage = page.locator("xpath=//div/h1[text()='Message template']");
    this.backHomeBtn = page.locator('#home-btn');
    this.saveMessageBtn = page.getByRole('button', { name: 'Save Message' });
 }
 
  async verifyNewMessageTemplatesPageDisplay() {
   await expect(this.messageTemplatesTitlePage).toBeVisible();
   await expect(this.backHomeBtn).toBeVisible();
  }

  async clickBackHomeButton() {
    await this.backHomeBtn.click();
  }

  async clickSaveMessageButton() {
    await this.saveMessageBtn.click();
  }
}
