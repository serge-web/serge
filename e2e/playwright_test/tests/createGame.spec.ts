import { Page, expect, test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { DashboardPage} from '../page/dashboardPage.po';
import { LoginPage} from '../page/login.po';
import { OverViewPage} from '../page/overViewPage.po';
import { ForcePage} from '../page/forcePage.po';
import { ChannelPage} from '../page/channelPage.po';
import { generateCode } from '../helpers/uniqueStr';

test('Create a simple flow game successfully', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardPage(page)
  const loginPage = new LoginPage(page)
  const overViewPage = new OverViewPage(page)
  const forcePage = new ForcePage(page)
  const channelPage = new ChannelPage(page)
  await loginPage.openUrl(config.BASE_URL+'serge/admin');
  await loginPage.inputLoginForm(Constants.defaultPassword);
  await loginPage.verifyLoginPassed();
  dashboardPage.clickMenuBar('Create');
  await overViewPage.inputGameName('Tutorial ' + generateCode(5));
  await overViewPage.verifyNameOfGameIsSaved();
  await overViewPage.inputDescriptionGame('This is the tutorial for basic flow game');
  await overViewPage.saveOverView();

  await overViewPage.clickForceMenu();
  await forcePage.inputOverviewAndObjective('This is the White Force overview');
  await forcePage.clickUmpireSelection();
  await forcePage.addRole('Media');
  await forcePage.clicksaveForceBtn();
  await forcePage.verifySaveForceSuccess();

  await forcePage.clickaddANewForceBtn();
  await forcePage.inputNameForce('Blue');
  await forcePage.selectColor('4A90E2');
  await forcePage.inputOverviewAndObjective('This is the Blue Force overview');
  await forcePage.clickUmpireSelection();
  await forcePage.addRole('Logs');
  await forcePage.inputPasswordRole('Logs', '123');
  await forcePage.giveAccessToRole('Logs',true,true,true,true);
  await forcePage.clicksaveForceBtn();
  await forcePage.verifySaveForceSuccess();
  await forcePage.addRole('Media');
  await forcePage.clicksaveForceBtn();
  await forcePage.verifySaveForceSuccess();

  await forcePage.clickaddANewForceBtn();
  await forcePage.inputNameForce('Red');
  await forcePage.selectColor('D0021B');
  await forcePage.inputOverviewAndObjective('This is the Red Force overview');
  await forcePage.clicksaveForceBtn();
  await forcePage.verifySaveForceSuccess();
  await forcePage.addRole('Logs');
  await forcePage.clicksaveForceBtn();
  await forcePage.verifySaveForceSuccess();
  await forcePage.addRole('Media');
  await forcePage.clicksaveForceBtn();
  await forcePage.verifySaveForceSuccess();

  await overViewPage.clickChannelMenu();
  await channelPage.clickaddAChannelBtn();
  await channelPage.inputNameChannel("Blue HQ");
  await channelPage.inputAParticipantChannelInfors('Blue', 'CO', 'Daily intentions');
  await channelPage.clickSaveRowChannelIcon('Blue', 'CO');
  await channelPage.inputAParticipantChannelInfors('White', 'Game Control', 'State of World');
  await channelPage.clickSaveRowChannelIcon('White', 'Game Control');
  await channelPage.clickSaveChannelButton();
  await channelPage.verifySaveChannelSuccess();

  await channelPage.clickaddAChannelBtn();
  await channelPage.inputNameChannel("Red HQ");
  await channelPage.inputAParticipantChannelInfors('Red', 'CO', 'Daily intentions');
  await channelPage.clickSaveRowChannelIcon('Red', 'CO');
  await channelPage.inputAParticipantChannelInfors('White', 'Game Control', 'State of World');
  await channelPage.clickSaveRowChannelIcon('White', 'Game Control');
  await channelPage.clickSaveChannelButton();
  await channelPage.verifySaveChannelSuccess();

  await channelPage.clickaddAChannelBtn();
  await channelPage.inputNameChannel("Blue Chat");
  await channelPage.inputAParticipantChannelInfors('Blue', '', '');
  await channelPage.clickSaveRowChannelIcon('Blue', '');
  await channelPage.clickSaveChannelButton();
  await channelPage.verifySaveChannelSuccess();

  await channelPage.clickaddAChannelBtn();
  await channelPage.inputNameChannel("Red Chat");
  await channelPage.inputAParticipantChannelInfors('Red', '', '');
  await channelPage.clickSaveRowChannelIcon('Red', '');
  await channelPage.clickSaveChannelButton();
  await channelPage.verifySaveChannelSuccess();

  await channelPage.clickaddAChannelBtn();
  await channelPage.inputNameChannel("Media");
  await channelPage.inputAParticipantChannelInfors('White', 'Media', '');
  await channelPage.clickSaveRowChannelIcon('White', 'Media');
  await channelPage.inputAParticipantChannelInfors('Blue', 'Media', '');
  await channelPage.clickSaveRowChannelIcon('Blue', 'Media');
  await channelPage.inputAParticipantChannelInfors('Red', 'Media', '');
  await channelPage.clickSaveRowChannelIcon('Red', 'Media');
  await channelPage.clickSaveChannelButton();
  await channelPage.verifySaveChannelSuccess();
});


