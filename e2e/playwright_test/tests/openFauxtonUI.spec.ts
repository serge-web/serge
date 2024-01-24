import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { DashboardAdminPage} from '../page/admin/dashboardAdminPage.po';
import { LoginAdminPage} from '../page/admin/loginAdminPage.po';
import { OpenFauxtonUIAdminPage } from '../page/admin/openFauxtonUIAdminPage.po';


const menuList = ['Databases', 'Active Tasks', 'Configuration', 'Replication', 'Documentation', 'Admin Party!', 'Verify'];

test.skip('Verify Dashboard Fauxton UI Admin Page Is Showed', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page);
  const loginAdminPage = new LoginAdminPage(page);
  
  // Login to the admin page
  await loginAdminPage.openUrl(config.BASE_URL + 'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  
  // Open Fauxton UI
  const newPagePromise = page.waitForEvent('popup');
  await dashboardPage.clickMenuBar('Open Fauxton UI');
  const newPage = await newPagePromise;
  const openFauxtonUIAdminPage = new OpenFauxtonUIAdminPage(newPage);


  await openFauxtonUIAdminPage.verifyLeftMenuListIsShowed(menuList);
  await openFauxtonUIAdminPage.clickMenuIcon();
  await openFauxtonUIAdminPage.verifyLeftMenuIsClose();
  await openFauxtonUIAdminPage.verifyAPIUrlButtonIsDisplay();
  await openFauxtonUIAdminPage.verifyNotificationsIsDisplay();
});

test('Verify Menu Is Active When Click', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page);
  const loginAdminPage = new LoginAdminPage(page);
  
  // Login to the admin page
  await loginAdminPage.openUrl(config.BASE_URL + 'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  
  // Open Fauxton UI
  const newPagePromise = page.waitForEvent('popup');
  await dashboardPage.clickMenuBar('Open Fauxton UI');
  const newPage = await newPagePromise;

  const openFauxtonUIAdminPage = new OpenFauxtonUIAdminPage(newPage);

  await openFauxtonUIAdminPage.verifyLeftMenuIsActive(menuList);
});

test.skip('Verify API URL successfully ', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page);
  const loginAdminPage = new LoginAdminPage(page);
  
  // Login to the admin page
  await loginAdminPage.openUrl(config.BASE_URL + 'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  
  // Open Fauxton UI
  const newPagePromise = page.waitForEvent('popup');
  await dashboardPage.clickMenuBar('Open Fauxton UI');
  const newPage = await newPagePromise;

  const openFauxtonUIAdminPage = new OpenFauxtonUIAdminPage(newPage);

  await openFauxtonUIAdminPage.clickApiNavbarBtn();
  await openFauxtonUIAdminPage.verifyAPIUrlPopUpIsShowed();
  await openFauxtonUIAdminPage.clickCopyUrlBtn();
  await openFauxtonUIAdminPage.verifyUrlIsCopyPassed();

});

test('Verify Notifications successfully ', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page);
  const loginAdminPage = new LoginAdminPage(page);
  
  // Login to the admin page
  await loginAdminPage.openUrl(config.BASE_URL + 'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  
  // Open Fauxton UI
  const newPagePromise = page.waitForEvent('popup');
  await dashboardPage.clickMenuBar('Open Fauxton UI');
  const newPage = await newPagePromise;

  const openFauxtonUIAdminPage = new OpenFauxtonUIAdminPage(newPage);

  await openFauxtonUIAdminPage.clickNotificationsBtn();
  await openFauxtonUIAdminPage.verifyNotificationsIsShowed();
  await openFauxtonUIAdminPage.verifyNotificationsTabIsSelected();
  await openFauxtonUIAdminPage.clickCloseNotificationsBtn();

  // await openFauxtonUIAdminPage.clickApiNavbarBtn();
  // await openFauxtonUIAdminPage.clickCopyUrlBtn();
  // await openFauxtonUIAdminPage.verifyUrlIsCopyPassed();
  
});

