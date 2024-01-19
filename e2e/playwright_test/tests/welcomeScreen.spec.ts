import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { DashboardAdminPage} from '../page/admin/dashboardAdminPage.po';
import { LoginAdminPage} from '../page/admin/loginAdminPage.po';
import { LoginGamePage} from '../page/loginGamePage.po';
import { WelcomScreenAdminPage} from '../page/admin/welcomeScreenAdminPage.po';
import { WelcomScreenPage} from '../page/welcomeScreenPage.po';
import { generateCode } from '../helpers/uniqueStr';
import dataJson from '../resources/data.json';

test('Verify welcome page can be updated', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  const loginGamePage = new LoginGamePage(page)
  const welcomeScreenAdminPage = new WelcomScreenAdminPage(page)
  const welcomScreenPage = new WelcomScreenPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  dashboardPage.clickMenuLeft('Welcome Screen');
  const descriptionWelcome = 'Testing description welcome page ' + generateCode(5);
  const titleWelcome = 'Testing title welcome page ' + generateCode(5);
  await welcomeScreenAdminPage.verifyIsWelcomePage();
  await welcomeScreenAdminPage.updateTextOfWelcomePage(titleWelcome);
  await welcomeScreenAdminPage.updateDescOfWelcomePage(descriptionWelcome);
  await welcomeScreenAdminPage.clickDoneBtn();
  await welcomeScreenAdminPage.clickSaveChangesBtn();

  await welcomeScreenAdminPage.openUrl(config.BASE_URL);
  await welcomScreenPage.verifyTextOfWelcomePageIsCorrect(titleWelcome);
  await welcomScreenPage.verifyDescOfWelcomePage(descriptionWelcome);

  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  dashboardPage.clickMenuLeft('Welcome Screen');
  await welcomeScreenAdminPage.verifyIsWelcomePage();
  await welcomeScreenAdminPage.updateTextOfWelcomePage(dataJson.textTitleWelcome);
  await welcomeScreenAdminPage.updateDescOfWelcomePage(dataJson.descWelcome);
  await welcomeScreenAdminPage.clickDoneBtn();
  await welcomeScreenAdminPage.clickSaveChangesBtn();
});


