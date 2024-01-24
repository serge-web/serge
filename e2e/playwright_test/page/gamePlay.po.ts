import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage.po';

export class GamePlayPage extends BasePage{
  readonly page: Page;
  readonly gameTabName: any;
  readonly newMessageBtn: Locator;
  readonly closeGuideBtn: Locator;
  readonly sendMessageBtn: Locator;
  readonly cancelMessageBtn: Locator;
  readonly gameNameSelection: Locator;
  readonly dateTempOtherActivityInput: Locator;
  readonly descTempOtherActivityInput: Locator;
  readonly statusTempOtherActivitySelection: Locator;
  readonly titleTempOtherActivityInput: Locator;
  readonly otherActivityTemplateBtn: Locator;
  readonly dateTempOtherActivityLabel: any;
  readonly descTempOtherActivityLabel: any;
  readonly statusTempOtherActivityLabel: any;
  readonly titleTempOtherActivityLabel: any;

  readonly nameLocationTempLaydownInput: Locator;
  readonly locationTempLaydownInput: Locator;
  readonly laydownTemplateBtn: Locator;
  readonly nameLocationTempLaydownLabel: any;
  readonly locationTempLaydownLabel: any;
  readonly addRowTempLaydownButton: Locator;

  readonly chatMessageArea: Locator;

  readonly turnDailyInput: Locator;
  readonly overallIntentionDailyInput: Locator;
  readonly taskDailyInput: any;
  readonly unitDailyInput: any;
  readonly searchPolicyDailyInput: any;
  readonly actionDailySelection: any;
  readonly commentDailyInput: any;
  readonly addRowDailyBtn: Locator;
  readonly turnDailyLabel: any;
  readonly overallIntentionDailyLabel: any;
  readonly taskDailyLabel: any;
  readonly unitDailyLabel: any;
  readonly searchPolicyDailyLabel: any;
  readonly actionDailyLabel: any;
  readonly commentDailyLabel: any;
  readonly contentVerify: any;
  readonly dailyIntentTemplateBtn: Locator;

  readonly chatTemplateBtn: Locator;
  readonly chatMessageLabel: any;

  readonly messageGameAdminArea: Locator;
  readonly sendMessageGameAdminBtn: Locator;
  readonly contentVerifyMessageGameAdmin: any
  readonly messageGameAdminLabel: any

  readonly submitFeedbackBtn: Locator;
  readonly submitFeedbackForm: Locator;
  readonly submitFeedbackDesc: Locator;
  readonly messageFeedbackArea: Locator;
  readonly nameOptionalFeedbackInput: Locator;
  readonly sendMessageFeebackBtn: Locator;
  readonly insightsFeebackTab: Locator;
  readonly messageFeedbackLabel: any;
  readonly nameOptionalFeedbackLabel: any;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.contentVerify = (text :string) : string => {
      let value = "//div[contains(@class,'_wrap-detail-opened')]//span[contains(text(),'"+text+"')]//ancestor::div[contains(@class,'_wrap-detail-opened')]";
      return value;
    }
    this.gameTabName = (name :string) : Locator => {
      return page.locator('div.flexlayout__tab_button_content:has-text("'+name+'")');
    }
    this.newMessageBtn = page.getByRole('button', { name: 'New Message' });
    this.sendMessageBtn = page.getByRole('button', { name: 'Send Message' });
    this.cancelMessageBtn = page.getByRole('button', { name: 'Cancel' });
    this.closeGuideBtn = page.getByLabel('Close');
    this.otherActivityTemplateBtn = page.locator('span').filter({ hasText: 'Other Activity' }).first();

    //Other template
    this.dateTempOtherActivityInput = page.getByLabel('root[Date]');
    this.descTempOtherActivityInput = page.getByLabel('root[Description]');
    this.titleTempOtherActivityInput = page.getByLabel('root[title]');
    this.statusTempOtherActivitySelection = page.getByLabel('Status');
    this.dateTempOtherActivityLabel = (date :string) : Locator => {
      return page.locator(this.contentVerify('Date:')+"//span[contains(text(),'"+date+"')]");
    }
    this.descTempOtherActivityLabel = (desc :string) : Locator => {
      return page.locator(this.contentVerify+"//div[contains(text(),'"+desc+"')]");
    } 
    this.statusTempOtherActivityLabel = (status :string) : Locator => {
      return page.locator(this.contentVerify+"//div[contains(text(),'"+status+"')]");
    }
    this.titleTempOtherActivityLabel = (title :string) : Locator => {
      return page.locator(this.contentVerify+"//div[contains(text(),'"+title+"')]");
    }

    //Laydown template
    this.nameLocationTempLaydownInput = page.getByLabel('root[Initial Locations][0][name]');
    this.locationTempLaydownInput = page.getByLabel('root[Initial Locations][0][location]');
    this.laydownTemplateBtn = page.locator('span').filter({ hasText: 'laydown' }).first();
    this.locationTempLaydownLabel =(location: string) : Locator => {
      return page.locator(this.contentVerify+"//span[contains(text(),'"+location+"')]");
    }
    this.nameLocationTempLaydownLabel =(name: string) : Locator => {
      return page.locator(this.contentVerify+"//span[contains(text(),'"+name+"')]");
    }
    
    this.addRowTempLaydownButton = page.getByTitle('Add row');
    this.chatMessageArea = page.getByPlaceholder('type the text');

    this.turnDailyInput = page.getByLabel('root[TurnNumber]');
    this.overallIntentionDailyInput = page.getByLabel('root[OverallIntentions]');
    this.unitDailyInput = (stt: number) : Locator => {
      return page.getByLabel('root[Orders]['+stt+'][Unit]');
    }
    this.taskDailyInput = (stt: number) : Locator => {
      return page.getByLabel('root[Orders]['+stt+'][Tasking]');
    }
    this.searchPolicyDailyInput = (stt: number) : Locator => {
      return page.getByLabel('root[Orders]['+stt+'][SearchPolicy]');
    }
    this.actionDailySelection = (stt: number) : Locator => {
      return page.locator('//select[@name="root[Orders]['+stt+'][ActionOnContact]"]');
    }
    this.commentDailyInput = (stt: number) : Locator => {
      return page.getByLabel('root[Orders]['+stt+'][AnyOtherComments]');
    }
    
    this.turnDailyLabel = (turn :string) : Locator => {
      return page.locator(this.contentVerify('TurnNumber:')+"//div[contains(text(),'"+turn+"')]");
    }
    this.overallIntentionDailyLabel = (overallIntention :string) : Locator => {
      return page.locator(this.contentVerify('OverallIntentions:')+"//div[contains(text(),'"+overallIntention+"')]");
    }

    this.unitDailyLabel = (unit :string) : Locator => {
      return page.locator(this.contentVerify('Unit')+"//span[contains(text(),'"+unit+"')]");
    }

    this.taskDailyLabel = (task :string) : Locator => {
      return page.locator(this.contentVerify('Tasking:')+"//span[contains(text(),'"+task+"')]");
    }

    this.searchPolicyDailyLabel = (searchPolicy :string) : Locator => {
      return page.locator(this.contentVerify('SearchPolicy:')+"//span[contains(text(),'"+searchPolicy+"')]");
    }

    this.actionDailyLabel = (action :string) : Locator => {
      return page.locator(this.contentVerify('ActionOnContact:')+"//span[contains(text(),'"+action+"')]");
    }

    this.commentDailyLabel = (comment :string) : Locator => {
      return page.locator(this.contentVerify('AnyOtherComments:')+"//span[contains(text(),'"+comment+"')]");
    }
    this.dailyIntentTemplateBtn = page.locator('span').filter({ hasText: 'Daily Intent' }).first();

    this.chatTemplateBtn = page.locator('span').filter({ hasText: 'Chat' }).first();

    this.chatMessageLabel= (content :string) : Locator => {
      return page.locator("//div[contains(text(),'"+content+"')]");
    }

    //-------
    this.messageGameAdminArea = page.locator("//div[@class='contain-game-admin']//textarea");
    this.sendMessageGameAdminBtn = page.locator("//div[@class='contain-game-admin']//button");

    this.contentVerifyMessageGameAdmin = (text :string) : string => {
      let value = "//div[contains(@class,'_message-preview-player')]//span[contains(text(),'"+text+"')]//ancestor::div[contains(@class,'_message-preview-player')]"
      return value;
    }

    this.messageGameAdminLabel = (mes :string, role: string) : Locator => {
      return page.locator(this.contentVerifyMessageGameAdmin(role)+"//div[contains(text(),'"+mes+"')]").last();
    }

    //----Feedback
    this.submitFeedbackBtn = page.getByTitle("Submit lesson learned/feedback");
    this.submitFeedbackForm = page.locator("//div[contains(@class,'_insight-form_')]");
    this.submitFeedbackDesc = page.getByText("Use this form to give private feedback on the game itself.");
    this.messageFeedbackArea = page.locator("//textarea[@name='message']");
    this.sendMessageFeebackBtn = page.locator("//div[contains(@class,'_insight-form')]//span[contains(text(),'Send')]");
    this.nameOptionalFeedbackInput = page.locator("//input[@name='name-optional']");
    this.insightsFeebackTab = page.locator("//div[contains(text(),'Insights')]");
    this.messageFeedbackLabel = (text :string) : Locator => {
      return page.locator("//div[@class='contain-game-insights']//div[contains(text(),'"+text+"')]");
    }
    this.nameOptionalFeedbackLabel = (text :string) : Locator => {
      return page.locator("//div[@class='contain-game-insights']//span[contains(text(),'"+text+"')]");
    }

 }

  async clickNewMessageBtn() {
    await this.clickLocator(this.newMessageBtn);
  }

  async clickOtherActivityTemplateBtn() {
    await this.clickLocator(this.otherActivityTemplateBtn);
  }

  async clickCloseGuideBtn() {
    if (await this.closeGuideBtn.isVisible()) {
      await this.clickLocator(this.closeGuideBtn);
    }
  }

  async selectTabName(name : string) {
    await this.clickLocator(this.gameTabName(name));
  }

  async clickSendMessageBtn() {
    await this.clickLocator(this.sendMessageBtn);
  }

  async clickCancelMessageBtn() {
    await this.clickLocator(this.cancelMessageBtn);
  }

  async inputMessageOtherActivityTemplate(date : string, desc : string, status : string, title : string) {
    await this.clickLocator(this.dateTempOtherActivityInput);
    await this.inputValueLocator(this.dateTempOtherActivityInput, date);
    await this.inputValueLocator(this.descTempOtherActivityInput, desc);
    await this.selectValueLocator(this.statusTempOtherActivitySelection, status);
    await this.inputValueLocator(this.titleTempOtherActivityInput, title);
  }

  async verifyMessageOtherActivityIsShowed(date : string, desc : string, status : string, title : string) {
    await this.verifyLocatorIsvisible(this.dateTempOtherActivityLabel(date));
    await this.verifyLocatorIsvisible(this.descTempOtherActivityLabel(desc));
    await this.verifyLocatorIsvisible(this.statusTempOtherActivityLabel(status));
    await this.verifyLocatorIsvisible(this.titleTempOtherActivityLabel(title));
  }

  async inputMessageLaydownTemplate(nameLocation: string, location: string) {
    await this.clickLocator(this.nameLocationTempLaydownInput);
    await this.inputValueLocator(this.nameLocationTempLaydownInput, nameLocation);
    await this.clickLocator(this.locationTempLaydownInput);
    await this.inputValueLocator(this.locationTempLaydownInput, location);
  }

  async clickLaydownTemplateBtn() {
    await this.clickLocator(this.laydownTemplateBtn);
  }

  async verifyMessageLaydownIsShowed(nameLocation : string, location : string) {
    await this.verifyLocatorIsvisible(this.nameLocationTempLaydownLabel(nameLocation));
    await this.verifyLocatorIsvisible(this.locationTempLaydownLabel(location));
  }

  //-----------New--------
  async inputChatMessageArearTemplate(content : string) {
    await this.clickLocator(this.chatMessageArea);
    await this.inputValueLocator(this.chatMessageArea, content);
  }

  async clickChatTemplateBtn() {
    await this.clickLocator(this.chatTemplateBtn);
  }

  async verifyMessageChatIsShowed(content : string) {
    await this.verifyLocatorIsvisible(this.chatMessageLabel(content));
  }

  async verifyMessageChatListIsEmpty(content : string) {
    await this.verifyLocatorIsNotVisible(this.chatTemplateBtn);
    await this.verifyLocatorIsNotVisible(this.chatMessageLabel(content));
  }

  async inputMessageDailyIntentionsTemplate(row : number, unit : string, task: string, searchPolicy : string, action :string, comment :string) {
    await this.inputValueLocator(this.unitDailyInput(row), unit);
    await this.inputValueLocator(this.taskDailyInput(row), task);
    await this.inputValueLocator(this.searchPolicyDailyInput(row), searchPolicy);
    await this.selectValueLocator(this.actionDailySelection(row), action);
    await this.inputValueLocator(this.commentDailyInput(row), comment);
  }

  async inputTurnMessageDailyIntentionsTemplate(turn: string) {
    await this.clickLocator(this.turnDailyInput);
    await this.inputValueLocator(this.turnDailyInput, turn);
  }

  async inputOverallMessageDailyIntentionsTemplate(overall: string) {
    await this.clickLocator(this.overallIntentionDailyInput);
    await this.inputValueLocator(this.overallIntentionDailyInput, overall);
  }

  async clickDailyIntentTemplateBtn() {
    await this.clickLocator(this.dailyIntentTemplateBtn);
  }

  async verifyDailyIntentTemplateBtnIsEmpty() {
    await this.verifyLocatorIsNotVisible(this.dailyIntentTemplateBtn);
  }

  async clickAddMoreOneRowBtn() {
    await this.clickLocator(this.addRowTempLaydownButton);
  }

  async verifyMessageDailyIntentTurnAndOverallIsShowed(turn : string, overall : string) {
    await this.verifyLocatorIsvisible(this.turnDailyLabel(turn));
    await this.verifyLocatorIsvisible(this.overallIntentionDailyLabel(overall));
  }

  async verifyMessageDailyIntentContentIsShowed(unit : string, task : string, searchPolicy : string, action :string, comment :string) {
    await this.verifyLocatorIsvisible(this.unitDailyLabel(unit));
    await this.verifyLocatorIsvisible(this.taskDailyLabel(task));
    await this.verifyLocatorIsvisible(this.searchPolicyDailyLabel(searchPolicy));
    await this.verifyLocatorIsvisible(this.actionDailyLabel(action));
    await this.verifyLocatorIsvisible(this.commentDailyLabel(comment));
  }

  async inputMessageGameAdmin(mes: string) {
    await this.clickLocator(this.messageGameAdminArea);
    await this.inputValueLocator(this.messageGameAdminArea, mes);
    await this.clickLocator(this.sendMessageGameAdminBtn);
  }

  async verifyMessageGameAdminIsShowed(mes : string, role : string) {
    await this.verifyLocatorIsvisible(this.messageGameAdminLabel(mes, role));
  }

  //Feeback
  async clickSubmitFeedbackBtn() {
    await this.clickLocator(this.submitFeedbackBtn);
  }
  
  async verifyFeedbackFormIsShowed() {
    await this.verifyLocatorIsvisible(this.submitFeedbackForm);
    await this.verifyTextIsvisible(this.submitFeedbackDesc);
  }

  async inputMessageFeedbackArea(message: string) {
    await this.clickLocator(this.messageFeedbackArea);
    await this.inputValueLocator(this.messageFeedbackArea, message);
  }

  async inputNameOptionalFeedback(name: string) {
    await this.clickLocator(this.nameOptionalFeedbackInput);
    await this.inputValueLocator(this.nameOptionalFeedbackInput, name);
  }

  async clickSendMessageFeedbackBtn() {
    await this.clickLocator(this.sendMessageFeebackBtn);
  }

  async clickInsightsFeebackTab() {
    await this.clickLocator(this.insightsFeebackTab);
  }

  async verifyContentFeedbackIsShowed(message : string, nameOptional: string) {
    await this.verifyLocatorIsvisible(this.messageFeedbackLabel(message));
    await this.verifyLocatorIsvisible(this.nameOptionalFeedbackLabel(nameOptional));
  }

}

