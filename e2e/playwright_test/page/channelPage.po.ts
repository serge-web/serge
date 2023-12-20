import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage.po';

export class ChannelPage extends BasePage{
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
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.gameNameInput = page.locator('input[@name]').first();
    this.addAChannelBtn = page.getByRole('button', { name: 'ADD CHANNEL' });
    this.nameChannelInput = page.locator('xpath=//input[@value="New Channel"]');
    this.saveChannelBtn = page.getByRole('button', { name: 'Save Channel' });
    this.selectForce = page.locator('#mui-component-select-forces');
    this.selectRole = page.locator('#mui-component-select-access');
    this.selectTemplate = page.locator('#mui-component-select-templates');
    
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
      return page.getByRole('row', { name: force + ' ' + role }).locator("xpath=//*[@data-icon='check']");
    }
 }


  async inputGameName(name :string) {
    await this.gameNameInput.fill(name);
  }

  async clickaddAChannelBtn() {
    await this.addAChannelBtn.click();
  }

  async inputNameChannel(name : string) {
    await this.nameChannelInput.fill(name);
  }

  async clickSaveChannelButton() {
    await this.saveChannelBtn.click();
  }

  async inputAParticipantChannelInfors(force:string , role : String, template : string) {
    await this.selectForce.click();
    await this.selectOption(force).click();
    if(role != ''){
      await this.selectRole.click();
      await this.selectOption(role).click();
    }
    
    if(template != ''){
      await this.selectTemplate.click();
      await this.selectOption(template).click();
    }
  }

  async clickSaveRowChannelIcon(force:string , role : String) {
    await this.saveRowChannel(force, role).click();
  }

  async clickEditRowChannelIcon(force:string , role : String) {
    await this.editRowChannel(force, role).click();
  }

  async ClickDeleteRowChannelIcon(force:string , role : String) {
    await this.delRowChannel(force, role).click();
  }

  async ClickResetRowChannelIcon(force:string , role : String) {
    await this.resetRowChannel(force, role).click();
  }

}
