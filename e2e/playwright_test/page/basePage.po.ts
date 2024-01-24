import { Locator, Page, expect } from '@playwright/test';

export class BasePage{
  readonly page: Page;
  readonly outPage: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.outPage = page.locator('._cover_ioy6f_21');
 }

 async openUrl(urlPath: string): Promise<void> {
  await this.page.goto(urlPath, { timeout: 50 * 1000 });
  await this.waitForLoadStateWithDomcontentloaded();
}

async waitForLoadStateWithDomcontentloaded(): Promise<void> {
  await this.page.waitForLoadState("domcontentloaded", { timeout: 50 * 1000  });
}

async clickOut(): Promise<void> {
  await this.outPage.click();
}

async verifyTextIsvisible(locator : Locator) {
  await locator.first().waitFor({state: "visible"})
  await expect(locator.first()).toBeVisible();
}

async inputValueLocator(locator : Locator, value :string) {
  await locator.first().waitFor({state: "visible"})
  await locator.first().fill(value);
}

async clickLocator(locator : Locator) {
  await locator.first().waitFor({state: "visible"})
  await locator.first().click();
}

async doubleClickLocator(locator : Locator) {
  await locator.first().waitFor({state: "visible"})
  await locator.first().dblclick();
}

async selectValueLocator(locator : Locator, value :string) {
  await locator.first().waitFor({state: "visible"})
  await locator.selectOption(value);
}

async verifyLocatorIsvisible(locator : Locator) {
  await locator.first().waitFor({state: "visible"})
  await expect(locator.first()).toBeVisible();
}

async hoverLocator(locator : Locator) {
  await locator.first().waitFor({state: "visible"})
  await locator.first().hover();
}

async verifyLocatorIshidden(locator : Locator) {
  await locator.waitFor({state: "hidden"})
  await expect(locator).toBeHidden();
}

async verifyLocatorIsNotVisible(locator: Locator) {
  await locator.first().waitFor({ state: "hidden" });
  await expect(locator.first()).not.toBeVisible();
}


}
