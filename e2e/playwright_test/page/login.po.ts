import { Locator, Page } from '@playwright/test';
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

async verifyLoginFailed() {
  await this.errorMsg.isVisible();
}

async verifyLoginPassed() {
  await this.navBar.first().isVisible();
}

}
