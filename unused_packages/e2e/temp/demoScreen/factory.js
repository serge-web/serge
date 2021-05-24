export default class ActionFactory {
  init = async (page, networks) => {
    this.page = page;
    this.networks = networks;
  };

  enterGame = async (selectors, gameTitle, forceRole) => {
    await this.page.waitForSelector(selectors.play);
    await this.page.click(selectors.play);
    await this.chooseCustomSelect(
      selectors.selectWargameToggle,
      selectors.selectWargameMenu,
      selectors.selectWargameOptions,
      gameTitle
    );
    await this.page.waitForSelector(selectors.passwordButtons);
    await this.filterClickElements(selectors.passwordButtons, forceRole);
    await this.page.waitForSelector(selectors.enter);
    await this.page.click(selectors.enter);
  };

  sendGameAdminMessage = async (selectors, content) => {
    await this.page.waitForSelector(selectors.messageInput);
    await this.page.type(selectors.messageInput, content);
    await this.valueMatched(selectors.messageInput, content);
    await this.page.waitForSelector(selectors.buttonSendMessage);
    await this.page.click(selectors.buttonSendMessage);
    await this.networks.postNewMessage();
    await this.page.waitForSelector(selectors.ownMessage);
    await this.valueMatched(selectors.ownMessage, content, 'innerText');
  };

  sendAllChatMessage = async (anchors, selectors, {content, privateContent}, isUmpire) => {
    await this.page.waitForSelector(selectors.channelContainer);
    const forceId = await this.page.$eval(selectors.channelContainer, el => el.dataset.force);
    const channelId = await this.page.$eval(anchors.channelAllChat, el => el.dataset.channelId);
    await this.page.evaluate(async ({forceId, channelId}) => {
      const component = await window.channelTabsContainer[forceId];
      await component.setActiveTab(channelId);
    }, {selectors, forceId, channelId});
    await this.page.waitForSelector(selectors.activeButtonTab);
    await this.valueMatched(selectors.activeButtonTab, 'All chat', 'innerText', false);
    await this.page.waitForSelector(anchors.channelAllChat, {visible: true});
    await this.page.waitForSelector(selectors.messageCreatorTrigger, {visible: true});
    await this.page.click(selectors.messageCreatorTrigger);
    await this.page.waitForSelector(selectors.messageCreatorInner, {visible: true});
    await this.page.waitForSelector(selectors.messageInput);
    await this.page.type(selectors.messageInput, content);
    await this.valueMatched(selectors.messageInput, content);
    if (isUmpire) {
      await this.page.waitForSelector(selectors.privateMessageInput);
      await this.page.type(selectors.privateMessageInput, privateContent);
      await this.valueMatched(selectors.privateMessageInput, privateContent);
    }
    await this.page.waitForSelector(selectors.sendMessage);
    await this.page.click(selectors.sendMessage);
    await this.networks.postNewMessage();
    await this.page.click(selectors.messageCreatorTrigger);
  };

  overrideValue = async (node, value) => {
    await this.page.waitForSelector(node);
    await this.page.click(node, {clickCount: 3});
    await this.page.type(node, value);
  };

  filterClickElements = async (node, label) => {
    await this.page.evaluate(({node, label}) => {
      [...document.querySelectorAll(node)].find(btn => {
        const pattern = new RegExp(label, 'gi');
        return btn.innerText.match(pattern);
      }).click();
    }, {node, label});
  };

  chooseCustomSelect = async (toggle, menu, options, label) => {
    await this.page.waitForSelector(toggle);
    await this.page.click(toggle);
    await this.page.waitForSelector(menu);
    await this.page.waitForSelector(options);
    await this.page.waitForFunction(options => {
      return document.querySelectorAll(options).length > 0;
    }, {}, options);
    await this.filterClickElements(options, label);
  };

  valueMatched = async (node, value, prop = 'value', precise = true) => {
    await this.page.waitForFunction(({node, value, prop, precise}) => {
      const elValue = document.querySelector(node)[prop];
      const pattern = new RegExp(value, 'gi');
      return precise ? elValue === value : elValue.match(pattern);
    }, {}, {node, value, prop, precise});
  };
}