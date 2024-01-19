import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { DashboardAdminPage} from '../page/admin/dashboardAdminPage.po';
import { LoginAdminPage} from '../page/admin/loginAdminPage.po';
import { LoginGamePage} from '../page/loginGamePage.po';
import { MessageTemplatesAdminPage } from '../page/admin/messageTemplatesAdminPage.po';
import dataJson from '../resources/data.json';

test('Verify welcome page can be updated', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  const loginGamePage = new LoginGamePage(page)
  const messageTemplatesAdminPage = new MessageTemplatesAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  dashboardPage.clickMenuLeft('Message Templates');
  await messageTemplatesAdminPage.verifyIsMessageTemplatesPage();
  await messageTemplatesAdminPage.clickCreateNewTemplateBtn();
});


