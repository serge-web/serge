import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { GamePlayPage} from '../page/gamePlay.po';
import { LoginGamePage} from '../page/loginGamePage.po';
import { generateCode } from '../helpers/uniqueStr';
import { DashboardAdminPage} from '../page/admin/dashboardAdminPage.po';
import { LoginAdminPage} from '../page/admin/loginAdminPage.po';

let content = 'Content text ' + generateCode(5);
test('Create a simple flow game successfully', async ({  browser }) => {
  
  const context = await browser.newContext();
  const page = await context.newPage();
  const gamePlayPage = new GamePlayPage(page)
  const loginGamePage = new LoginGamePage(page)
  await loginGamePage.openUrl(config.BASE_URL);
  await loginGamePage.clickPlayGameBtn();
  await loginGamePage.selectFirstGame('');
  await loginGamePage.selectRoleOfFoceGame("White","Game Control");
  await loginGamePage.clickEnterGameBtn();
  await gamePlayPage.clickCloseGuideBtn();
  await gamePlayPage.selectTabName('Red HQ');
  await gamePlayPage.clickNewMessageBtn();
  // const content = 'content text ' + generateCode(5);
  await gamePlayPage.inputChatMessageArearTemplate(content);
  await gamePlayPage.clickSendMessageBtn();
  await gamePlayPage.clickSendMessageBtn();
  await gamePlayPage.clickChatTemplateBtn();
  await gamePlayPage.verifyMessageChatIsShowed(content);
  await gamePlayPage.selectTabName('Blue HQ');
  await gamePlayPage.clickNewMessageBtn();
  await gamePlayPage.inputTurnMessageDailyIntentionsTemplate("2");
  await gamePlayPage.inputOverallMessageDailyIntentionsTemplate("Testing msg daily intention");
  await gamePlayPage.inputMessageDailyIntentionsTemplate(0,"1","walking around","carefully",'Evade','Do something you like');
  await gamePlayPage.clickAddMoreOneRowBtn();
  await gamePlayPage.inputMessageDailyIntentionsTemplate(1,"2","running","security",'Overt Trail','Checking something');
  await gamePlayPage.clickSendMessageBtn();
  await gamePlayPage.clickDailyIntentTemplateBtn();
  await gamePlayPage.verifyMessageDailyIntentTurnAndOverallIsShowed("2", "Testing msg daily intention");
  await gamePlayPage.verifyMessageDailyIntentContentIsShowed("1","walking around","carefully",'Evade','Do something you like');
  
  const page1 = await context.newPage();
  const loginGamePage1 = new LoginGamePage(page1)
  const gamePlayPage1 = new GamePlayPage(page1)
  await loginGamePage1.openUrl(config.BASE_URL);
  await loginGamePage1.clickPlayGameBtn();
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.selectRoleOfFoceGame("Red","CO");
  await loginGamePage1.clickEnterGameBtn();
  await gamePlayPage1.clickCloseGuideBtn();
  await gamePlayPage1.selectTabName('Red HQ');
  await gamePlayPage1.clickChatTemplateBtn();
  await gamePlayPage1.verifyMessageChatIsShowed(content);

  const page2 = await context.newPage();
  const loginGamePage2 = new LoginGamePage(page2)
  const gamePlayPage2 = new GamePlayPage(page2)
  await loginGamePage2.openUrl(config.BASE_URL);
  await loginGamePage2.clickPlayGameBtn();
  await loginGamePage2.selectFirstGame('');
  await loginGamePage2.selectRoleOfFoceGame("Blue","CO");
  await loginGamePage2.clickEnterGameBtn();
  await gamePlayPage2.clickCloseGuideBtn();
  await gamePlayPage2.selectTabName('Blue HQ');
  await gamePlayPage2.clickDailyIntentTemplateBtn();
  await gamePlayPage2.verifyMessageDailyIntentTurnAndOverallIsShowed("2", "Testing msg daily intention");
  await gamePlayPage2.verifyMessageDailyIntentContentIsShowed("1","walking around","carefully",'Evade','Do something you like');

});

test('Create a simple flow game admin chat successfully', async ({  browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const gamePlayPage = new GamePlayPage(page)
  const loginGamePage = new LoginGamePage(page)

  const sendMessagePerformGameSteps = async (force: string, role: string, content: string) => {
    await loginGamePage.openUrl(config.BASE_URL);
    await loginGamePage.clickPlayGameBtn();
    await loginGamePage.selectFirstGame('');
    await loginGamePage.selectRoleOfFoceGame(force, role);
    await loginGamePage.clickEnterGameBtn();
    await gamePlayPage.clickCloseGuideBtn();
    await gamePlayPage.selectTabName("Game Admin");
    await gamePlayPage.inputMessageGameAdmin(content);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content, role);
  };

  const verifyMessagePerformGameSteps = async (
    forceLogin: string, roleLogin: string, 
    content1: string, role1: string, 
    content2: string, role2: string, 
    content3: string, role3: string, 
    content4: string, role4: string,
    content5: string, role5: string,
    content6: string, role6: string,
    content7: string, role7: string) => {
    await loginGamePage.openUrl(config.BASE_URL);
    await loginGamePage.clickPlayGameBtn();
    await loginGamePage.selectFirstGame('');
    await loginGamePage.selectRoleOfFoceGame(forceLogin, roleLogin);
    await loginGamePage.clickEnterGameBtn();
    await gamePlayPage.clickCloseGuideBtn();
    await gamePlayPage.selectTabName("Game Admin");
    await gamePlayPage.verifyMessageGameAdminIsShowed(content1, role1);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content2, role2);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content3, role3);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content4, role4);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content5, role5);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content6, role6);
    await gamePlayPage.verifyMessageGameAdminIsShowed(content7, role7);
  };
  
  // ----- Send Message ------
  // White - Game Control
  const whiteGameControlContent = 'White - Game Control ' + generateCode(5);
  await sendMessagePerformGameSteps("White", "Game Control", whiteGameControlContent);
  
  // White - Media
  const whiteMediaContent = 'White - Media ' + generateCode(5);
  await sendMessagePerformGameSteps("White", "Media", whiteMediaContent);
  
  // Red - CO
  const redCoContent = 'Red - Co ' + generateCode(5);
  await sendMessagePerformGameSteps("Red", "CO", redCoContent);
  
  // Red - Logs
  const redLogsContent = 'Red - Logs ' + generateCode(5);
  await sendMessagePerformGameSteps("Red", "Logs", redLogsContent);
  
  // Red - Media
  const redMediaContent = 'Red - Media ' + generateCode(5);
  await sendMessagePerformGameSteps("Red", "Media", redMediaContent);
  
  // Blue - CO
  const blueCoContent = 'Blue - Co ' + generateCode(5);
  await sendMessagePerformGameSteps("Blue", "CO", blueCoContent);
  
  // Blue - Logs
  const blueLogsContent = 'Blue - Logs ' + generateCode(5);
  await sendMessagePerformGameSteps("Blue", "Logs", blueLogsContent);
  
  // Blue - Media
  const blueMediaContent = 'Blue - Media ' + generateCode(5);
  await sendMessagePerformGameSteps("Blue", "Media", blueMediaContent);

  // ------- Verify Message ------
  // White
  await verifyMessagePerformGameSteps("White", "Game Control",
    whiteMediaContent, 'Media',
    redCoContent, 'CO', redLogsContent, 'Logs', redMediaContent, 'Media',
    blueCoContent, 'CO', blueLogsContent, 'Logs', blueMediaContent, 'Media');

  await verifyMessagePerformGameSteps("White", "Media", 
    whiteGameControlContent, 'Game Control', 
    redCoContent, 'CO', redLogsContent, 'Logs', redMediaContent, 'Media',
    blueCoContent, 'CO', blueLogsContent, 'Logs', blueMediaContent, 'Media');

  // Red
  await verifyMessagePerformGameSteps("Red", "CO", 
    whiteGameControlContent, 'Game Control', whiteMediaContent, 'Media', 
    redLogsContent, 'Logs', redMediaContent, 'Media',
    blueCoContent, 'CO', blueLogsContent, 'Logs', blueMediaContent, 'Media');

  await verifyMessagePerformGameSteps("Red", "Logs", 
    whiteGameControlContent, 'Game Control', whiteMediaContent, 'Media', 
    redCoContent, 'CO', redMediaContent, 'Media',
    blueCoContent, 'CO', blueLogsContent, 'Logs', blueMediaContent, 'Media');

  await verifyMessagePerformGameSteps("Red", "Media", 
    whiteGameControlContent, 'Game Control', whiteMediaContent, 'Media', 
    redCoContent, 'CO', redLogsContent, 'Logs',
    blueCoContent, 'CO', blueLogsContent, 'Logs', blueMediaContent, 'Media');

  // Blue
  await verifyMessagePerformGameSteps("Blue", "CO", 
    whiteGameControlContent, 'Game Control', whiteMediaContent, 'Media', 
    redCoContent, 'CO', redLogsContent, 'Logs', redMediaContent, 'Media',
    blueLogsContent, 'Logs', blueMediaContent, 'Media');

  await verifyMessagePerformGameSteps("Blue", "Logs", 
    whiteGameControlContent, 'Game Control', whiteMediaContent, 'Media', 
    redCoContent, 'CO', redLogsContent, 'Logs', redMediaContent, 'Media',
    blueCoContent, 'CO', blueMediaContent, 'Media');

  await verifyMessagePerformGameSteps("Blue", "Media", 
    whiteGameControlContent, 'Game Control', whiteMediaContent, 'Media', 
    redCoContent, 'CO', redLogsContent, 'Logs', redMediaContent, 'Media',
    blueCoContent, 'CO', blueLogsContent, 'Logs');           
});

test('Create a simple flow Feedback successfully', async ({  browser }) => {
  
  const context = await browser.newContext();
  const page = await context.newPage();
  const gamePlayPage = new GamePlayPage(page)
  const loginGamePage = new LoginGamePage(page)

  const sendFeedbackSteps = async (force: string, role: string, content: string) => {
    await loginGamePage.openUrl(config.BASE_URL);
    await loginGamePage.clickPlayGameBtn();
    await loginGamePage.selectFirstGame('');
    await loginGamePage.selectRoleOfFoceGame(force, role);
    await loginGamePage.clickEnterGameBtn();
    await gamePlayPage.clickCloseGuideBtn();
    await gamePlayPage.clickSubmitFeedbackBtn();
    await gamePlayPage.verifyFeedbackFormIsShowed();
    await gamePlayPage.inputMessageFeedbackArea('Feedback '+ content);
    await gamePlayPage.inputNameOptionalFeedback('Name '+ content);
    await gamePlayPage.clickSendMessageFeedbackBtn();
    
  };
  const whiteGameControlContent = 'White - Game Control ' + generateCode(5);
  await sendFeedbackSteps("White", "Game Control", whiteGameControlContent);
  
  const whiteMediaContent = 'White - Media ' + generateCode(5);
  await sendFeedbackSteps("White", "Media", whiteMediaContent);
  
  const redCoContent = 'Red - Co ' + generateCode(5);
  await sendFeedbackSteps("Red", "CO", redCoContent);
  
  const redLogsContent = 'Red - Logs ' + generateCode(5);
  await sendFeedbackSteps("Red", "Logs", redLogsContent);
  
  const redMediaContent = 'Red - Media ' + generateCode(5);
  await sendFeedbackSteps("Red", "Media", redMediaContent);
  
  const blueCoContent = 'Blue - Co ' + generateCode(5);
  await sendFeedbackSteps("Blue", "CO", blueCoContent);
  
  const blueLogsContent = 'Blue - Logs ' + generateCode(5);
  await sendFeedbackSteps("Blue", "Logs", blueLogsContent);
  
  const blueMediaContent = 'Blue - Media ' + generateCode(5);
  await sendFeedbackSteps("Blue", "Media", blueMediaContent);

  const page1 = await context.newPage();
  const loginGamePage1 = new LoginGamePage(page1)
  const gamePlayPage1 = new GamePlayPage(page1)
  await loginGamePage1.openUrl(config.BASE_URL);
  await loginGamePage1.clickPlayGameBtn();
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.selectRoleOfFoceGame("White","Game Control");
  await loginGamePage1.clickEnterGameBtn();
  await gamePlayPage1.clickCloseGuideBtn();
  await gamePlayPage1.clickInsightsFeebackTab();
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + whiteGameControlContent, 'Name ' + whiteGameControlContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + whiteMediaContent, 'Name ' + whiteMediaContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + redCoContent, 'Name ' + redCoContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + redLogsContent, 'Name ' + redLogsContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + redMediaContent, 'Name ' + redMediaContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + blueCoContent, 'Name ' + blueCoContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + blueLogsContent, 'Name ' + blueLogsContent);
  await gamePlayPage1.verifyContentFeedbackIsShowed('Feedback ' + blueMediaContent, 'Name ' + blueMediaContent);
});

test('Verify duplicate game will create a new game which is the same', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();

  const name = await dashboardPage.getFirstNameOfGame();
  await dashboardPage.verifyGameNameCount(name, 1);

  const page0 = await context.newPage();
  const loginGamePage0 = new LoginGamePage(page0)
  await loginGamePage0.openUrl(config.BASE_URL);
  await loginGamePage0.clickPlayGameBtn();
  await loginGamePage0.selectFirstGame('');
  await loginGamePage0.verifyGameNameIsVisible(name, true);
  await loginGamePage0.selectSecondGame('');
  // await loginGamePage0.verifyGameNameIsVisible(name, false);

  const pageAdmin0 = await context.newPage();
  const loginAdminPage0 = new LoginAdminPage(pageAdmin0)
  await loginAdminPage0.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage0.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage0.verifyLoginPassed();
  await dashboardPage.clickThreeDotsAtFirstGame();
  await dashboardPage.selectAction('Duplicate');
  await dashboardPage.verifyGameNameCount(name, 2);
  
  const page1 = await context.newPage();
  const loginGamePage1 = new LoginGamePage(page1)
  await loginGamePage1.openUrl(config.BASE_URL);
  await loginGamePage1.clickPlayGameBtn();
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.verifyGameNameIsVisible(name, true);
  await loginGamePage1.selectSecondGame('');
  await loginGamePage1.verifyGameNameIsVisible(name, true);
  
  //-----Verify Data Duplicate is Showed-------
  const gamePlayPage1 = new GamePlayPage(page1)
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.selectRoleOfFoceGame("White","Game Control");
  await loginGamePage1.clickEnterGameBtn();
  await gamePlayPage1.clickCloseGuideBtn();
  await gamePlayPage1.selectTabName('Red HQ');
  await gamePlayPage1.clickChatTemplateBtn();
  await gamePlayPage1.verifyMessageChatIsShowed(content);
  await gamePlayPage1.selectTabName('Blue HQ');
  await gamePlayPage1.clickDailyIntentTemplateBtn();
  await gamePlayPage1.verifyMessageDailyIntentTurnAndOverallIsShowed("2", "Testing msg daily intention");
  await gamePlayPage1.verifyMessageDailyIntentContentIsShowed("1","walking around","carefully",'Evade','Do something you like');
  
  const page2 = await context.newPage();
  const loginGamePage2 = new LoginGamePage(page2)
  const gamePlayPage2 = new GamePlayPage(page2)
  await loginGamePage2.openUrl(config.BASE_URL);
  await loginGamePage2.clickPlayGameBtn();
  await loginGamePage2.selectFirstGame('');
  await loginGamePage2.selectRoleOfFoceGame("Red","CO");
  await loginGamePage2.clickEnterGameBtn();
  await gamePlayPage2.clickCloseGuideBtn();
  await gamePlayPage2.selectTabName('Red HQ');
  await gamePlayPage2.clickChatTemplateBtn();
  await gamePlayPage2.verifyMessageChatIsShowed(content);

  const page3 = await context.newPage();
  const loginGamePage3 = new LoginGamePage(page3)
  const gamePlayPage3 = new GamePlayPage(page3)
  await loginGamePage3.openUrl(config.BASE_URL);
  await loginGamePage3.clickPlayGameBtn();
  await loginGamePage3.selectFirstGame('');
  await loginGamePage3.selectRoleOfFoceGame("Blue","CO");
  await loginGamePage3.clickEnterGameBtn();
  await gamePlayPage3.clickCloseGuideBtn();
  await gamePlayPage3.selectTabName('Blue HQ');
  await gamePlayPage3.clickDailyIntentTemplateBtn();
  await gamePlayPage3.verifyMessageDailyIntentTurnAndOverallIsShowed("2", "Testing msg daily intention");
  await gamePlayPage3.verifyMessageDailyIntentContentIsShowed("1","walking around","carefully",'Evade','Do something you like');
  //-----End Verify Data Duplicate is Showed---

});

test('Verify clean copy game will create a new game which is the same setting but do not have data game play', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();

  const name = await dashboardPage.getFirstNameOfGame();
  await dashboardPage.verifyGameNameCount(name, 1);

  const page0 = await context.newPage();
  const loginGamePage0 = new LoginGamePage(page0)
  await loginGamePage0.openUrl(config.BASE_URL);
  await loginGamePage0.clickPlayGameBtn();
  await loginGamePage0.selectFirstGame('');
  await loginGamePage0.verifyGameNameIsVisible(name, true);
  await loginGamePage0.selectSecondGame('');

  const pageAdmin0 = await context.newPage();
  const loginAdminPage0 = new LoginAdminPage(pageAdmin0)
  await loginAdminPage0.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage0.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage0.verifyLoginPassed();
  await dashboardPage.clickThreeDotsAtFirstGame();
  await dashboardPage.selectAction('Clean copy');
  await dashboardPage.verifyGameNameCount(name, 2);
  
  const page1 = await context.newPage();
  const loginGamePage1 = new LoginGamePage(page1)
  await loginGamePage1.openUrl(config.BASE_URL);
  await loginGamePage1.clickPlayGameBtn();
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.verifyGameNameIsVisible(name, true);
  await loginGamePage1.selectSecondGame('');
  await loginGamePage1.verifyGameNameIsVisible(name, true);

  //-----Verify Data Duplicate is Empty-------
  const gamePlayPage1 = new GamePlayPage(page1)
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.selectRoleOfFoceGame("White","Game Control");
  await loginGamePage1.clickEnterGameBtn();
  await gamePlayPage1.clickCloseGuideBtn();
  await gamePlayPage1.selectTabName('Red HQ');
  await gamePlayPage1.verifyMessageChatListIsEmpty(content);
  await gamePlayPage1.selectTabName('Blue HQ');
  await gamePlayPage1.verifyDailyIntentTemplateBtnIsEmpty();
  
  const page2 = await context.newPage();
  const loginGamePage2 = new LoginGamePage(page2)
  const gamePlayPage2 = new GamePlayPage(page2)
  await loginGamePage2.openUrl(config.BASE_URL);
  await loginGamePage2.clickPlayGameBtn();
  await loginGamePage2.selectFirstGame('');
  await loginGamePage2.selectRoleOfFoceGame("Red","CO");
  await loginGamePage2.clickEnterGameBtn();
  await gamePlayPage2.clickCloseGuideBtn();
  await gamePlayPage2.selectTabName('Red HQ');
  await gamePlayPage2.verifyMessageChatListIsEmpty(content);

  const page3 = await context.newPage();
  const loginGamePage3 = new LoginGamePage(page3)
  const gamePlayPage3 = new GamePlayPage(page3)
  await loginGamePage3.openUrl(config.BASE_URL);
  await loginGamePage3.clickPlayGameBtn();
  await loginGamePage3.selectFirstGame('');
  await loginGamePage3.selectRoleOfFoceGame("Blue","CO");
  await loginGamePage3.clickEnterGameBtn();
  await gamePlayPage3.clickCloseGuideBtn();
  await gamePlayPage3.selectTabName('Blue HQ');
  await gamePlayPage3.verifyDailyIntentTemplateBtnIsEmpty();
  //-----End Verify Data Duplicate is Empty---
});

test('Verify the game is Hide and Show', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();

  const name = await dashboardPage.getFirstNameOfGame()

  await dashboardPage.clickThreeDotsAtFirstGame();
  await dashboardPage.selectAction('Hide wargame');
  await dashboardPage.verifyHideEyeIconIsShowed(name, true);
  
  const page1 = await context.newPage();
  const loginGamePage1 = new LoginGamePage(page1)
  await loginGamePage1.openUrl(config.BASE_URL);
  await loginGamePage1.clickPlayGameBtn();
  await loginGamePage1.selectFirstGame('');
  await loginGamePage1.verifyGameNameIsVisible(name, false);

  const pageAdmin1 = await context.newPage();
  const loginAdminPage1 = new LoginAdminPage(pageAdmin1)
  await loginAdminPage1.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage1.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage1.verifyLoginPassed();
  await dashboardPage.verifyGameNameIsShowed(name, true);
  await dashboardPage.clickThreeDotsAtFirstGame();
  await dashboardPage.selectAction('Show wargame');
  await dashboardPage.verifyHideEyeIconIsShowed(name, false);

  const page2 = await context.newPage();
  const loginGamePage2 = new LoginGamePage(page2)
  await loginGamePage2.openUrl(config.BASE_URL);
  await loginGamePage2.clickPlayGameBtn();
  await loginGamePage2.selectFirstGame('');
  await loginGamePage2.verifyGameNameIsVisible(name, true);

});

test('Delete the game', async ({ page }) => {
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  const name = await dashboardPage.getFirstNameOfGame()
  await dashboardPage.clickThreeDotsAtFirstGame();
  await dashboardPage.selectAction('Delete');
  await dashboardPage.verifyMessageIsVisible('This will permanently delete the wargame. Are you sure?');
  await dashboardPage.clickButtonPopup('Delete');
  await dashboardPage.verifyFirstNameOfGameIsDeleted(name);
});

test.only('Verify Clear wargames is successfully', async ({ page }) => {

  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();

  await dashboardPage.verifyGameListIsNotEmpty();
  await dashboardPage.clickMenuBar('Clear wargames');
  await dashboardPage.verifyMessageIsVisible('This action is permanent. Are you sure?');
  await dashboardPage.clickButtonPopup('Delete');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await dashboardPage.verifyGameListIsEmpty();

});

test.only('Verify downloaded all game is working successfully', async ({ page }) => {

  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();

  await dashboardPage.verifyGameListIsNotEmpty();
  await dashboardPage.clickMenuBar('Clear wargames');
  await dashboardPage.verifyDataIsDownloaded();

});

test('Verify downloaded a game is working successfully', async ({ page }) => {
  const dashboardPage = new DashboardAdminPage(page)
  const loginAdminPage = new LoginAdminPage(page)
  await loginAdminPage.openUrl(config.BASE_URL+'serge/admin');
  await loginAdminPage.inputLoginForm(Constants.defaultPassword);
  await loginAdminPage.verifyLoginPassed();
  const name = await dashboardPage.getFirstNameOfGame()
  await dashboardPage.clickThreeDotsAtFirstGame();
  await dashboardPage.selectAction('Download');
  await dashboardPage.verifyDataOneGameIsDownloaded();
});