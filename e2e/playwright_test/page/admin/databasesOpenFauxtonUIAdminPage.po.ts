import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class DatabasesOpenFauxtonUIAdminPage extends BasePage{
  readonly page: Page;
  readonly databasesTitle: Locator;
  readonly selectPlaceholderLabel: Locator;
  readonly selectArrowBtn: Locator;
  readonly selectInput: Locator;
  readonly createDatabasesBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.databasesTitle = page.locator("xpath=//header//div[contains(text(),'Databases')]");
    this.selectPlaceholderLabel = page.locator(".Select-placeholder");
    // this.selectPlaceholderLabel = page.locator("xpath=//div[contains(@class, 'Select-placeholder') and text() = 'Database name']");
    this.selectArrowBtn = page.locator('.Select-arrow-zone');
    this.selectInput = page.locator('.Select-input');
    this.createDatabasesBtn = page.getByTitle("Create Database");
    
 }

  async clickSelectArrowBtn() {
    await this.selectArrowBtn.click();
  }

  async clickCreateDatabasesBtn() {
    await this.createDatabasesBtn.click();
  }
  
  async verifyDatabasesPageIsShowed(){
    await this.verifyLocatorIsvisible(this.databasesTitle);
    await this.verifyLocatorIsvisible(this.selectPlaceholderLabel);
    await expect(this.selectPlaceholderLabel).toHaveText('Database name');
    await this.verifyLocatorIsvisible(this.selectPlaceholderLabel);
  }

}

