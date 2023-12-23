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
}

async waitForLoadStateWithDomcontentloaded(): Promise<void> {
  await this.page.waitForLoadState("domcontentloaded", { timeout: 50 * 1000  });
}

async clickOut(): Promise<void> {
  await this.outPage.click();
}

async verifyTextIsvisible(locator : Locator) {
  // await locator.first().waitFor({state: "visible"})
  // await expect(locator.first()).toBeVisible();
}

}
