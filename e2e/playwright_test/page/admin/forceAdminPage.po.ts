import { Locator, Page } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class ForceAdminPage extends BasePage{
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
  readonly logo: Locator;
  readonly dragDropLogoText: Locator;
  readonly inputLogo: Locator;
  readonly umprireSelection: Locator;
  readonly gameControlSelection: any;
  readonly canViewAllChannelSelection: any;
  readonly canFeedBackSelection: any;
  readonly canReleaseSelection: any;
  readonly showPasswordIcon: any;
  readonly passwordInput: Locator;
  readonly msgSavedForce: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.gameNameInput = page.locator('input[@name]').first();
    this.addANewForceBtn = page.getByRole('button', { name: 'Add a New Force' });
    this.nameForceInput = page.locator('xpath=//input[@name]').nth(2);
    this.colorSelect = page.locator('xpath=//div[contains(@class,"color-box")]');
    this.changeIconBtn = page.getByText('Change Icon')
    this.saveForceBtn = page.getByRole('button', { name: 'Save Force' });
    this.overViewAndObjBtn = page.getByRole('button', { name: 'Overview & Objectives' });
    this.overViewAndObjInput = page.locator('textarea.MuiInputBase-input').first();
    this.roleTitleBtn = page.locator('p:has-text("Roles")');
    this.addRoleBtn = page.getByRole('button', { name: 'Add Role' }).first();
    this.newRoleBtn = page.getByText('New Role').first();
    this.roleInput = page.locator('input[type="text"]').last();
    this.colorInput = page.getByLabel('hex');
    this.outPage = page.locator('._cover_ioy6f_21');
    this.logo =  page.getByText('Change Icon');
    this.dragDropLogoText =  page.getByText('Drag and drop a png/svg icon, or click to select. 20kb limit.');
    this.inputLogo =  page.locator("//input[@type='file']");
    this.umprireSelection =  page.getByText('Umpire');
    this.passwordInput =  page.getByRole('region').getByRole('textbox').last();
    this.msgSavedForce =  page.getByText('Force saved.');
   
    this.gameControlSelection = (roleName : string): Locator => {
      return page.getByRole('listitem').filter({ hasText: roleName }).getByRole('checkbox').first()
    };
    this.canViewAllChannelSelection =  (roleName : string): Locator => {
      return page.getByRole('listitem').filter({ hasText: roleName }).getByRole('checkbox').nth(1)
    };

    this.canFeedBackSelection =  (roleName : string): Locator => {
      return page.getByRole('listitem').filter({ hasText: roleName }).getByRole('checkbox').nth(2)
    };

    this.canReleaseSelection =  (roleName : string): Locator => {
      return page.getByRole('listitem').filter({ hasText: roleName }).getByRole('checkbox').nth(3)
    };

    this.showPasswordIcon = (roleName :string) : Locator => {
      return page.getByRole('listitem').filter({ hasText: roleName }).locator("xpath=//*[@data-icon='key']");
    }
 }


  async inputGameName(name :string) {
    await this.gameNameInput.fill(name);
  }

  async verifySaveForceSuccess() {
    await this.verifyTextIsvisible(this.msgSavedForce);
  }

  async clickaddANewForceBtn() {
    await this.addANewForceBtn.click();
  }

  async clickRoleSection() {
    await this.roleTitleBtn.click();
  }

  async inputNameForce(name : string) {
    await this.waitForLoadStateWithDomcontentloaded();
    await this.page.waitForTimeout(3000);
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
    await this.page.waitForTimeout(2000);
    if(await this.addRoleBtn.isHidden())
      await this.clickRoleSection();
    await this.addRoleBtn.click();
    await this.newRoleBtn.click();
    await this.roleInput.fill(roleName);
    await this.page.getByText('Roles').nth(1).click();
  }

  async clicksaveForceBtn() {
    await this.saveForceBtn.click();
  } 

  async selectLogo(logoPath : string) {
     await this.changeIconBtn.click();
    const fileInput = await this.page.$('input[type=file]');
    if(fileInput != null)
    // Set the value of the file input to the path of the file you want to upload
      await fileInput.setInputFiles(logoPath);
    await this.changeIconBtn.click();
  }

  async clickUmpireSelection() {
    await this.umprireSelection.click();
  }

  async inputPasswordRole(role :string, password : string) {
    await this.showPasswordIcon(role).click();
    await this.passwordInput.fill(password);
    await this.showPasswordIcon(role).click();
  }

  async giveAccessToRole(role :string, isGameControl : boolean = false, canViewChanges : boolean = false, canFeedback : boolean = false, canRelease : boolean = false) {
    if(isGameControl)
      await this.gameControlSelection(role).check();
    else
      await this.gameControlSelection(role).uncheck();
     if(canViewChanges)
      await this.canViewAllChannelSelection(role).check();
    else
      await this.canViewAllChannelSelection(role).uncheck();
    if(canFeedback)
      await this.canFeedBackSelection(role).check();
    else
      await this.canFeedBackSelection(role).uncheck();
    if(canRelease)
      await this.canReleaseSelection(role).check();
    else
      await this.canReleaseSelection(role).uncheck();
  }



}
