import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage.po';

export class WelcomScreenPage extends BasePage{
  readonly page: Page;
  readonly titleWelcome: Locator;
  readonly welcomeDesc: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.titleWelcome = page.locator('.welcome-desc p').first();
    this.welcomeDesc = page.locator('.welcome-desc div.paragraph').first();
 }

  async verifyTextOfWelcomePageIsCorrect(textContent : string) {
    await this.verifyTextIsvisible(this.titleWelcome);
  }

  async verifyDescOfWelcomePage(textContent : string) {
    await this.welcomeDesc.waitFor({state:"visible"});
    console.log(await this.welcomeDesc.innerText());
    expect(await this.welcomeDesc.innerText()).toEqual(textContent);
  }

}
