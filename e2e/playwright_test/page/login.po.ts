import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage.po';

export class LoginPage extends BasePage{
  readonly page: Page;
  readonly passwordInput: Locator;
  readonly enterButton: Locator;
  readonly errorMsg: Locator;
  readonly navBar: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.passwordInput = page.locator('xpath=//input[@name="password"]');
    this.enterButton = page.getByRole('button', { name: 'Enter' });
    this.errorMsg = page.locator("xpath=//*[text()='Access code did not match']");
    this.navBar = page.locator('#sidebar_admin');
}

async inputLoginForm(pass :string) {
  await this.passwordInput.fill(pass);
  await this.enterButton.click();
}

async verifyLoginFail() {
  await expect(this.errorMsg).toBeVisible();
}

async verifyLoginPass() {
  await expect(this.navBar.first()).toBeVisible();
}

}
