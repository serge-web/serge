import { Page } from '@playwright/test';

export class BasePage{
  readonly page: Page;
  readonly productList: any;
  
  constructor(page: Page) {
    this.page = page;
   
 }

 async openUrl(urlPath: string): Promise<void> {
  await this.page.goto(urlPath, { timeout: 50 * 1000 });
}

}
