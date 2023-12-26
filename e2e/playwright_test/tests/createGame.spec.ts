import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { DashboardAdminPage} from '../page/admin/dashboardAdminPage.po';
import { LoginAdminPage} from '../page/admin/loginAdminPage.po';
import { LoginGamePage} from '../page/loginGamePage.po';
import { OverViewAdminPage} from '../page/admin/overViewAdminPage.po';
import { ForceAdminPage} from '../page/admin/forceAdminPage.po';
import { ChannelAdminPage} from '../page/admin/channelAdminPage.po';
import { generateCode } from '../helpers/uniqueStr';

test('Create a simple flow game successfully', async ({ page }) => {
  page.setViewportSize({ width: 1500, height: 1000 });
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  const loginGamePage = new LoginGamePage(page)
  const overViewAdminPage = new OverViewAdminPage(page)
  const forceAdminPage = new ForceAdminPage(page)
  const channelAdminPage = new ChannelAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  dashboardPage.clickMenuBar('Create');
  const gameName = 'Tutorial ' + generateCode(5);
  await overViewAdminPage.inputGameName(gameName);
  await overViewAdminPage.verifyNameOfGameIsSaved();
  await overViewAdminPage.inputDescriptionGame('This is the tutorial for basic flow game');
  await overViewAdminPage.saveOverView();

  await overViewAdminPage.clickForceMenu();
  await forceAdminPage.inputOverviewAndObjective('This is the White Force overview');
  await forceAdminPage.clickUmpireSelection();
  await forceAdminPage.addRole('Media');
  await forceAdminPage.clicksaveForceBtn();
  await forceAdminPage.verifySaveForceSuccess();

  await forceAdminPage.clickaddANewForceBtn();
  await forceAdminPage.inputNameForce('Blue');
  await forceAdminPage.selectColor('4A90E2');
  await forceAdminPage.inputOverviewAndObjective('This is the Blue Force overview');
  await forceAdminPage.clickUmpireSelection();
  await forceAdminPage.addRole('Logs');
  await forceAdminPage.inputPasswordRole('Logs', '123');
  await forceAdminPage.giveAccessToRole('Logs',true,true,true,true);
  await forceAdminPage.clicksaveForceBtn();
  await forceAdminPage.verifySaveForceSuccess();
  await forceAdminPage.addRole('Media');
  await forceAdminPage.clicksaveForceBtn();
  await forceAdminPage.verifySaveForceSuccess();

  await forceAdminPage.clickaddANewForceBtn();
  await forceAdminPage.inputNameForce('Red');
  await forceAdminPage.selectColor('D0021B');
  await forceAdminPage.inputOverviewAndObjective('This is the Red Force overview');
  await forceAdminPage.clicksaveForceBtn();
  await forceAdminPage.verifySaveForceSuccess();
  await forceAdminPage.addRole('Logs');
  await forceAdminPage.clicksaveForceBtn();
  await forceAdminPage.verifySaveForceSuccess();
  await forceAdminPage.addRole('Media');
  await forceAdminPage.clicksaveForceBtn();
  await forceAdminPage.verifySaveForceSuccess();

  await overViewAdminPage.clickChannelMenu();
  await channelAdminPage.clickaddAChannelBtn();
  await channelAdminPage.inputNameChannel("Blue HQ");
  await channelAdminPage.inputAParticipantChannelInfors('Blue', 'CO', 'Daily intentions');
  await channelAdminPage.clickSaveRowChannelIcon('Blue', 'CO');
  await channelAdminPage.inputAParticipantChannelInfors('White', 'Game Control', 'State of World');
  await channelAdminPage.clickSaveRowChannelIcon('White', 'Game Control');
  await channelAdminPage.clickSaveChannelButton();
  await channelAdminPage.verifySaveChannelSuccess();

  await channelAdminPage.clickaddAChannelBtn();
  await channelAdminPage.inputNameChannel("Red HQ");
  await channelAdminPage.inputAParticipantChannelInfors('Red', 'CO', 'Daily intentions');
  await channelAdminPage.clickSaveRowChannelIcon('Red', 'CO');
  await channelAdminPage.inputAParticipantChannelInfors('White', 'Game Control', 'State of World');
  await channelAdminPage.clickSaveRowChannelIcon('White', 'Game Control');
  await channelAdminPage.clickSaveChannelButton();
  await channelAdminPage.verifySaveChannelSuccess();

  await channelAdminPage.clickaddAChannelBtn();
  await channelAdminPage.inputNameChannel("Blue Chat");
  await channelAdminPage.inputAParticipantChannelInfors('Blue', '', '');
  await channelAdminPage.clickSaveRowChannelIcon('Blue', '');
  await channelAdminPage.clickSaveChannelButton();
  await channelAdminPage.verifySaveChannelSuccess();

  await channelAdminPage.clickaddAChannelBtn();
  await channelAdminPage.inputNameChannel("Red Chat");
  await channelAdminPage.inputAParticipantChannelInfors('Red', '', '');
  await channelAdminPage.clickSaveRowChannelIcon('Red', '');
  await channelAdminPage.clickSaveChannelButton();
  await channelAdminPage.verifySaveChannelSuccess();

  await channelAdminPage.clickaddAChannelBtn();
  await channelAdminPage.inputNameChannel("Media");
  await channelAdminPage.inputAParticipantChannelInfors('White', 'Media', '');
  await channelAdminPage.clickSaveRowChannelIcon('White', 'Media');
  await channelAdminPage.inputAParticipantChannelInfors('Blue', 'Media', '');
  await channelAdminPage.clickSaveRowChannelIcon('Blue', 'Media');
  await channelAdminPage.inputAParticipantChannelInfors('Red', 'Media', '');
  await channelAdminPage.clickSaveRowChannelIcon('Red', 'Media');
  await channelAdminPage.clickSaveChannelButton();
  await channelAdminPage.verifySaveChannelSuccess();

  await loginGamePage.openUrl(config.BASE_URL);
  await loginGamePage.clickPlayGameBtn();
  await loginGamePage.selectGame(gameName);
  await loginGamePage.verifyRoleOfForceIsVisible("Red","CO");
  await loginGamePage.verifyRoleOfForceIsVisible("Red","Logs");
  await loginGamePage.verifyRoleOfForceIsVisible("Red","Media");
  await loginGamePage.verifyRoleOfForceIsVisible("Blue","Media");
  await loginGamePage.verifyRoleOfForceIsVisible("Blue","Logs");
  await loginGamePage.verifyRoleOfForceIsVisible("Blue","CO");
  await loginGamePage.verifyRoleOfForceIsVisible("White","Game Control");
  await loginGamePage.verifyRoleOfForceIsVisible("White","Media");


});


