import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../basePage.po';

export class OpenFauxtonUIAdminPage extends BasePage{
  readonly page: Page;
  readonly leftNav: any;
  readonly menuIcon:Locator;
  readonly closeMenu: Locator;
  readonly apiNavbarBtn: Locator;
  readonly notificationsIconBtn: Locator;
  readonly titlePage: any;
  readonly apiUrlPopup: Locator;
  readonly apiUrlTitle: Locator;
  readonly copyUrlBtn: Locator;
  readonly copyUrlMes: Locator;
  readonly viewJsonBtn: Locator;
  readonly urlInputValue: Locator;
  // readonly jsonPageContent: Locator;
  readonly notificationsTitle: Locator;
  readonly allNotificationsTab: Locator;
  readonly successNotificationsTab: Locator;
  readonly errorNotificationsTab: Locator;
  readonly infoNotificationsTab: Locator;
  readonly notificationList: Locator;
  readonly noNotificationsLabel: Locator;
  readonly clearAllBtn: Locator;
  readonly closeNotificationsBtn: Locator;
  
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.menuIcon = page.locator('xpath = //div[@class="burger"]//div');
    this.leftNav = (name: string): Locator => {
      return page.locator("xpath = //li[@data-nav-name='"+name+"']");
    }
    this.closeMenu = page.locator('.closeMenu');
    this.apiNavbarBtn = page.locator('#api-navbar');
    this.notificationsIconBtn = page.locator('#notification-center-btn');
    this.titlePage = (title: string): Locator => {
      return page.locator("xpath = //header//div[contains(text(),'"+title+"')]");
    }

    this.apiUrlPopup = page.locator('.api-bar-tray');
    this.apiUrlTitle = page.locator("xpath = //div[@class='tray show-tray api-bar-tray']//span[contains(text(),'API URL')]");
    this.copyUrlBtn = page.getByRole('button', { name: 'Copy URL' });
    this.copyUrlMes = page.locator("xpath = //*[text()='The API URL has been copied to the clipboard.']");
    this.viewJsonBtn = page.getByRole('link', { name: 'View JSON' });
    this.urlInputValue = page.locator('xpath = //input[@value="http://localhost:8080/_all_dbs"]');
    // this.jsonPageContent = page.locator('xpath=//pre[contains(text(),"{"msg":"ok","data":[]}")]');

    this.notificationsTitle = page.locator("xpath = //h1[contains(text(),'Notifications')]");
    this.allNotificationsTab = page.getByTitle('All notifications');
    this.successNotificationsTab = page.getByTitle('Success notifications');
    this.errorNotificationsTab = page.getByTitle('Error notifications');
    this.infoNotificationsTab = page.getByTitle('Info notifications');
    this.notificationList = page.locator('.notification-list');
    this.noNotificationsLabel = page.locator('.no-notifications');
    this.clearAllBtn = page.locator("xpath = //input[@value='Clear All']");
    this.closeNotificationsBtn = page.locator("xpath = //div[@id='notification-center']//button[contains(text(),'×')]");
 }

  async clickMenuLeft(name :string) {
    await this.leftNav(name).click();
  }

  async clickMenuIcon(){
    await this.menuIcon.nth(1).click();
  }

  async clickApiNavbarBtn(){
    await this.apiNavbarBtn.click();
  }

  async clickNotificationsBtn(){
    await this.notificationsIconBtn.click();
  }
  
  async verifyLeftMenuListIsShowed(menuList: string[]){
    const locators = menuList.map(menuName => this.leftNav(menuName));
    for (const locator of locators){
      await this.verifyLocatorIsvisible(locator);
    }
  }

  async verifyLeftMenuIsClose(){
    await this.verifyLocatorIsvisible(this.closeMenu);
  }

  async verifyAPIUrlButtonIsDisplay(){
    await this.verifyLocatorIsvisible(this.apiNavbarBtn);
  }

  async verifyNotificationsIsDisplay(){
    await this.verifyLocatorIsvisible(this.notificationsIconBtn);
  }

  async verifyLeftMenuIsActive(menuList: string[]) {
    const locators = menuList.map(menuName => this.leftNav(menuName));
  
    for (let i = 0; i < locators.length; i++) {
      // Click the current menu item
      await locators[i].click();
  
      // Special cases for positions 3 and 6 where 'active' class is not added
      if (i !== 2 && i !== 5) {
        // Verify the current menu item has the 'active' class
        await expect(locators[i]).toHaveClass('active');
      }
  
      // Verify the title is correct // Adjusted for positions 3, 6 and 7
      switch (i) {
        case 2:
          await this.verifyLocatorIsvisible(this.titlePage('Config'));
          break;
        case 5:
          await this.verifyLocatorIsvisible(this.titlePage('Create Admin'));
          break;
        case 6:
          await this.verifyLocatorIsvisible(this.titlePage('Verify CouchDB Installation'));
          break;
        default:
          await this.verifyLocatorIsvisible(this.titlePage(menuList[i]));
          break;
      }
      // Verify other menu items do not have the 'active' class
      for (let j = 0; j < locators.length; j++) {
        if (j !== i) {
          await expect(locators[j]).not.toHaveClass('active');
        }
      }
    }
  }

  //---------- API URL ---------------
  async verifyAPIUrlPopUpIsShowed() {
    await this.verifyLocatorIsvisible(this.apiUrlPopup);
    await this.verifyLocatorIsvisible(this.apiUrlTitle);
    await this.verifyLocatorIsvisible(this.viewJsonBtn);
    await this.verifyLocatorIsvisible(this.copyUrlBtn);
    await this.verifyLocatorIsvisible(this.urlInputValue);
  }

  async clickCopyUrlBtn() {
    await this.copyUrlBtn.click();
  }

  async verifyUrlIsCopyPassed() {
    await this.verifyLocatorIsvisible(this.copyUrlMes);
  }

  async clickViewJsonBtn() {
    await this.viewJsonBtn.click();
  }

//---------- Notifications ---------------
  async clickClearAllBtn () {
    this.clearAllBtn.click()
  }

  async clickCloseNotificationsBtn () {
    this.closeNotificationsBtn.click()
  }

  async verifyNotificationsIsShowed() {
    await this.verifyLocatorIsvisible(this.notificationsTitle);
    await this.verifyLocatorIsvisible(this.allNotificationsTab);
    await this.verifyLocatorIsvisible(this.successNotificationsTab);
    await this.verifyLocatorIsvisible(this.errorNotificationsTab);
    await this.verifyLocatorIsvisible(this.infoNotificationsTab);
    await this.verifyLocatorIsvisible(this.notificationList);
    await this.verifyLocatorIsvisible(this.clearAllBtn);
    await this.verifyLocatorIsvisible(this.closeNotificationsBtn);
  }

  async verifyNotificationsTabIsSelected() {
    const notificationsTabs = [this.allNotificationsTab, this.successNotificationsTab, this.errorNotificationsTab, this.errorNotificationsTab];
    for (let i = 0; i<notificationsTabs.length; i ++){
      await notificationsTabs[i].click();
      await expect(notificationsTabs[i]).toHaveClass('selected');
      for (let j = 0; j < notificationsTabs.length; j++) {
        if (j !== i) {
          await expect(notificationsTabs[j]).not.toHaveClass('selected');
        }
      }
    }
  }
}