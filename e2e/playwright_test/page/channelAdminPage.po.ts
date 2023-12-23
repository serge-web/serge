import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage.po';

export class ChannelAdminPage extends BasePage{
  readonly page: Page;
  readonly addAChannelBtn: Locator;
  readonly gameNameInput: Locator;
  readonly nameChannelInput: Locator;
  readonly saveChannelBtn: Locator;
  readonly selectForce: Locator;
  readonly selectRole: Locator;
  readonly selectTemplate: Locator;
  readonly selectOption: any;
  readonly editRowChannel: any;
  readonly delRowChannel: any;
  readonly resetRowChannel: any;
  readonly saveRowChannel: any;
  readonly outEmelemtForce: any;
  readonly outEmelemtRole: any;
  readonly outEmelemtTemplate: any;
  readonly msgSaveChannelSuccess: any;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.gameNameInput = page.locator('input[@name]').first();
    this.addAChannelBtn = page.getByRole('button', { name: 'ADD CHANNEL' });
    this.nameChannelInput = page.locator('xpath=//input[contains(@value,"New Channel")]');
    this.saveChannelBtn = page.getByRole('button', { name: 'Save Channel' });
    this.selectForce = page.locator('#mui-component-select-forces');
    this.selectRole = page.locator('#mui-component-select-access');
    this.selectTemplate = page.locator('#mui-component-select-templates');
    this.outEmelemtForce = page.getByText('Participants and messages').first();
    this.outEmelemtRole = page.getByText('Participants and messages').first();
    this.outEmelemtTemplate = page.getByText('Participants and messages').first();
    this.msgSaveChannelSuccess = page.getByText('channel saved.');
    
    this.selectOption = (option :string) : Locator => {
      return page.getByRole('option', { name: option });
    }
    this.editRowChannel = (force :string, role : string) : Locator => {
      return page.getByRole('row', { name: force + ' ' + role }).locator("xpath=//*[@data-icon='pencil']");
    }

    this.editRowChannel = (force :string, role : string) : Locator => {
      return page.getByRole('row', { name: force + ' ' + role }).locator("xpath=//*[@data-icon='trash']");
    }

    this.resetRowChannel = (force :string, role : string) : Locator => {
      return page.getByRole('row', { name: force + ' ' + role }).locator("xpath=//*[@data-icon='rotate-left']");
    }

    this.saveRowChannel = (force :string, role : string) : Locator => {
      return page.locator("xpath=//*[@data-icon='check']");
    }
 }


  async inputGameName(name :string) {
    await this.gameNameInput.fill(name);
  }

  async verifySaveChannelSuccess() {
    await this.verifyTextIsvisible(this.msgSaveChannelSuccess);
  }

  async clickaddAChannelBtn() {
    await this.addAChannelBtn.click();
  }

  async inputNameChannel(name : string) {
    await this.nameChannelInput.fill(name);
  }

  async clickSaveChannelButton() {
    await this.page.waitForTimeout(3000);
    await this.saveChannelBtn.click();
  }

  async clickOutForce() {
    await this.outEmelemtForce.dblclick({force:true});
  }

  async clickOutRole() {
    await this.outEmelemtRole.dblclick({force:true});
  }

  async clickOutTemplate() {
    await this.outEmelemtTemplate.dblclick({force:true});
  }

  async inputAParticipantChannelInfors(force:string , role : String, template : string) {
    await this.selectForce.click();
    await this.selectOption(force).click();
    await this.clickOutForce();
    if(role != ''){
      await this.selectRole.click();
      await this.selectOption(role).click();
      await this.clickOutRole();
    }
    
    if(template != ''){
      await this.selectTemplate.click();
      await this.selectOption(template).click();
      await this.clickOutTemplate();
    }
  }

  async clickSaveRowChannelIcon(force:string , role : String) {
    await this.page.waitForTimeout(3000);
    await this.saveRowChannel(force, role).click();
  }

  async clickEditRowChannelIcon(force:string , role : String) {
    await this.page.waitForTimeout(3000);
    await this.editRowChannel(force, role).click();
  }

  async ClickDeleteRowChannelIcon(force:string , role : String) {
    await this.page.waitForTimeout(3000);
    await this.delRowChannel(force, role).click();
  }

  async ClickResetRowChannelIcon(force:string , role : String) {
    await this.page.waitForTimeout(3000);
    await this.resetRowChannel(force, role).click();
  }

}
