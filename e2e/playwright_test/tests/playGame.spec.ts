import { test } from '@playwright/test';
import { Constants, config } from '../helpers/constants';
import { GamePlayPage} from '../page/gamePlay.po';
import { LoginGamePage} from '../page/loginGamePage.po';
import { generateCode } from '../helpers/uniqueStr';

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
  const content = 'content text ' + generateCode(5);
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