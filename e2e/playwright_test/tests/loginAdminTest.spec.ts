import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { LoginAdminPage} from '../page/admin/loginAdminPage.po';

test('Print Hello world from test console', async ({ page }) => {
  console.log("Hello world");
});

test('Verify login serge with correct password successfully', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const loginPage = new LoginAdminPage(page)
  await loginPage.openUrl(config.BASE_URL+'serge/admin');
  await loginPage.inputLoginForm(Constants.defaultPassword);
  await loginPage.verifyLoginPassed();
});

test('Verify login faied with wrong password', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const loginPage = new LoginAdminPage(page)
  await loginPage.openUrl(config.BASE_URL+'serge/admin');
  await loginPage.inputLoginForm('123');
  await loginPage.verifyLoginFailed();
});


