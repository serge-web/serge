import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage.po';

export class DashboardPage extends BasePage{
  readonly page: Page;
  readonly signup_LoginLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly searchBtn: Locator;
  readonly searchInput: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.signup_LoginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.productsLink = page.getByRole('link', { name: 'Products' });
    this.cartLink = page.getByRole('link', { name: 'Cart' });
    this.searchBtn = page.locator('#submit_search');
    this.searchInput = page.getByPlaceholder('Search Product');
   
 }

async clickSignUpORLogin() {
  await this.signup_LoginLink.click();
  await this.page.waitForLoadState('domcontentloaded');
}

async clickProductsPage() {
  await this.productsLink.click();
  await this.page.waitForLoadState('domcontentloaded');
}

async clickCartLink() {
  await this.cartLink.click();
  await this.page.waitForLoadState('domcontentloaded');
}

async closeAdsIfHas() {
  if(await this.page.frameLocator('iframe[data-load-complete="true"]').last().getByRole('button', { name: 'Close ad' }).isVisible())
    await this.page.frameLocator('iframe[data-load-complete="true"]').last().getByRole('button', { name: 'Close ad' }).click();
}

async searchProduct(name:string) {
  await this.page.waitForLoadState('domcontentloaded');
  this.closeAdsIfHas();
  await this.searchInput.fill(name);
  await this.searchInput.fill(name);
  await this.searchBtn.click();

}


}
