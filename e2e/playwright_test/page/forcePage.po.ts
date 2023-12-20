import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage.po';

export class ForcePage extends BasePage{
  readonly page: Page;
  readonly addANewForceBtn: Locator;
  readonly gameNameInput: Locator;
  readonly nameForceInput: Locator;
  readonly colorSelect: Locator;
  readonly changeIconBtn: Locator;
  readonly saveForceBtn: Locator;
  readonly overViewAndObjBtn: Locator;
  readonly overViewAndObjInput: Locator;
  readonly roleTitleBtn: Locator;
  readonly addRoleBtn: Locator;
  readonly newRoleBtn: Locator;
  readonly roleInput: Locator;
  readonly colorInput: Locator;
  readonly outPage: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.gameNameInput = page.locator('input[@name]').first();
    this.addANewForceBtn = page.getByRole('button', { name: 'Add a New Force' });
    this.nameForceInput = page.locator('xpath=//input[@name]').nth(1);
    this.colorSelect = page.locator('xpath=//div[contains(@class,"color-box")]');
    this.changeIconBtn = page.getByText('Change Icon')
    this.saveForceBtn = page.getByRole('button', { name: 'Save Force' });
    this.overViewAndObjBtn = page.getByRole('button', { name: 'Overview & Objectives' });
    this.overViewAndObjInput = page.locator('textarea.MuiInputBase-input').first();
    this.roleTitleBtn = page.locator('p:has-text("Roles")');
    this.addRoleBtn = page.getByText('New Role').first();
    this.newRoleBtn = page.getByRole('button', { name: 'Add Role' }).first();
    this.roleInput = page.locator('//input[contains(@class,"value-label")]').first();
    this.colorInput = page.getByLabel('hex');
    this.outPage = page.locator('._cover_ioy6f_21');
 }


  async inputGameName(name :string) {
    await this.gameNameInput.fill(name);
  }

  async clickaddANewForceBtn() {
    await this.addANewForceBtn.click();
  }

  async clickRoleSection() {
    await this.roleTitleBtn.click();
  }

  async inputNameForce(name : string) {
    await this.nameForceInput.fill(name);
  }

  async selectColor(color: string) {
    await this.colorSelect.click();
    await this.colorInput.fill(color);
    await this.colorSelect.press('Enter');
    await this.outPage.click();
  }

  async inputOverviewAndObjective(desc:string) {
    await this.overViewAndObjBtn.click();
    await this.overViewAndObjInput.fill(desc);
  }

  async addRole(roleName:string) {
    await this.addRoleBtn.click();
    await this.newRoleBtn.click();
    await this.roleInput.fill(roleName);
    await this.roleInput.press('Enter');
  }

  async clicksaveForceBtn() {
    await this.saveForceBtn.click();
  } 
}
