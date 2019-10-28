import { DEFAULT_SERVER } from '../consts'
import {
  wargameAttrs,
  customForces,
  allForces,
  allChannels
} from './demoScreen/config'
import initSetup from './demoScreen/setup'
import ActionFactory from './demoScreen/factory'

let page, networks, delays, factory
factory = new ActionFactory()

beforeAll(async () => {
  ({ page, networks, delays } = await initSetup())
  await factory.init(page, networks, delays)
})

describe('Demo screen admin interface', () => {
  test('Open demo page', async () => {
    await page.setViewport({
      width: 1920,
      height: 1080
    })
    await page.goto('localhost:8080/serge/demo')
  }, 15000)

  test('Login to game setup', async () => {
    let pageTitle
    const anchor = '#form-login-admin'
    const selectors = {
      password: `${anchor} [type=password]`,
      submit: `${anchor} .link`,
      pageTitle: '#page-title'
    }
    await delays.preTest()
    await page.waitForSelector(selectors.password)
    await page.click(selectors.password)
    await page.type(selectors.password, DEFAULT_SERVER)
    await page.click(selectors.submit)
    await page.waitForSelector(selectors.pageTitle)

    pageTitle = await page.$eval(selectors.pageTitle, el => el.innerText)
    expect(pageTitle).toEqual('Games')
  }, 15000)

  test('Create wargame', async () => {
    const selectors = {
      createWargame: '.game-designer-action .link'
    }
    await delays.preTest()
    await page.waitForSelector(selectors.createWargame)
    await factory.filterClickElements(selectors.createWargame, 'Create')
    await networks.updateWargame()
    await networks.getAllWargames()
  }, 15000)

  test('Modify wargame title', async () => {
    let title
    const anchor = '#game-setup-head'
    const selectors = {
      wargameTitle: `${anchor} #title-editable`,
      saveWargame: `${anchor} .savewargame-icon`
    }
    await delays.preTest()
    await page.waitForSelector(anchor)
    await factory.overrideValue(selectors.wargameTitle, wargameAttrs.title)
    await page.waitForSelector(selectors.saveWargame)
    await page.click(selectors.saveWargame)
    await networks.updateWargame()
    await networks.fetchWargame()

    title = await page.$eval(selectors.wargameTitle, el => el.value)
    expect(title).toBe(wargameAttrs.title)
  }, 15000)

  test('Modify wargame overview description', async () => {
    let wargameDesc
    const anchor = '#game-setup-tab-settings'
    const overview = 'Game overview example'
    const selectors = {
      gameDescription: '[name=wargame-overview-desc]',
      saveOverview: `${anchor} [data-qa-type=submit]`
    }
    await delays.preTest()
    await page.waitForSelector(selectors.gameDescription)
    await page.click(selectors.gameDescription)
    await page.type(selectors.gameDescription, overview)
    await page.waitForSelector(selectors.saveOverview)
    await page.click(selectors.saveOverview)
    await networks.updateWargame()

    wargameDesc = await page.$eval(selectors.gameDescription, el => el.value)
    expect(wargameDesc).toBe(overview)
  }, 15000)

  test('Enable access code', async () => {
    let accessCode
    const anchor = '#game-setup-tab-settings'
    const selectors = {
      accessCode: '#show-access-codes',
      saveOverview: `${anchor} [data-qa-type=submit]`
    }
    await delays.preTest()
    await page.waitForSelector(selectors.accessCode)
    await page.click(selectors.accessCode)
    await page.waitForSelector(selectors.saveOverview)
    await page.click(selectors.saveOverview)
    await networks.updateWargame()

    accessCode = await page.$eval(selectors.accessCode, el => el.checked)
    expect(accessCode).toBeTruthy()
  }, 15000)

  test('Create forces', async () => {
    let forces
    const anchor = '#game-setup-tab-forces'
    const selectors = {
      forceTab: '.tab-forces',
      addForce: `${anchor} [data-qa-type=add]`,
      saveForce: `${anchor} [data-qa-type=save]`,
      forceName: `${anchor} #editable-title`,
      listForces: `${anchor} .list-forces .list-title`
    }
    await delays.preTest()
    await page.waitForSelector(selectors.forceTab)
    await page.click(selectors.forceTab)
    await (async () => {
      for (let i = 0; i < customForces.length; i++) {
        await page.waitForSelector(selectors.addForce)
        await page.click(selectors.addForce)
        await networks.updateWargame()
        await networks.fetchWargame()
        await factory.overrideValue(selectors.forceName, customForces[i].name)
        await factory.valueMatched(selectors.forceName, customForces[i].name)
        await page.waitForSelector(selectors.saveForce)
        await page.click(selectors.saveForce)
        await networks.updateWargame()
        await networks.fetchWargame()
      }
    })()

    forces = await page.$$eval(selectors.listForces, el => el.length)
    expect(forces).toBe(allForces.length) // White force auto added
  }, 25000)

  test('Create channels', async () => {
    let channels
    const anchor = '#game-setup-tab-channels'
    const selectors = {
      channelTab: '.tab-channels',
      addChannel: `${anchor} [data-qa-type=add]`,
      saveChannel: `${anchor} [data-qa-type=save]`,
      channelName: `${anchor} #editable-title`,
      listChannels: `${anchor} .list-channels .list-title`
    }
    await delays.preTest()
    await page.waitForSelector(selectors.channelTab)
    await page.click(selectors.channelTab)
    await (async () => {
      for (let i = 0; i < allChannels.length; i++) {
        await page.waitForSelector(selectors.addChannel)
        await page.click(selectors.addChannel)
        await networks.updateWargame()
        await networks.fetchWargame()
        await factory.overrideValue(selectors.channelName, allChannels[i].name)
        await factory.valueMatched(selectors.channelName, allChannels[i].name)
        await page.waitForSelector(selectors.saveChannel)
        await page.click(selectors.saveChannel)
        await networks.updateWargame()
        await networks.fetchWargame()
      }
    })()

    channels = await page.$$eval(selectors.listChannels, el => el.length)
    expect(channels).toBe(allChannels.length)
  }, 25000)

  test('Assign channel to force', async () => {
    const anchors = {
      tab: '#game-setup-tab-channels',
      forceSelection: '#custom-select-force-selection',
      roleSelection: '#custom-select-role-selection',
      templateSelection: '#custom-select-template-selection'
    }
    const selectors = {
      listChannels: `${anchors.tab} .list-channels .list-title`,
      channelName: `${anchors.tab} #editable-title`,
      saveChannel: `${anchors.tab} [data-qa-type=save]`,
      addParticipant: `${anchors.tab} [data-qa-type=add-participant]`,
      listParticipants: `${anchors.tab} .channel-participants-row`,
      channelForceToggle: `${anchors.forceSelection} .react-select__input`,
      channelForceMenu: `${anchors.forceSelection} .react-select__menu`,
      channelForceOptions: `${anchors.forceSelection} .react-select__option`,
      channelRoleToggle: `${anchors.roleSelection} .react-select__input`,
      channelRoleMenu: `${anchors.roleSelection} .react-select__menu`,
      channelRoleOptions: `${anchors.roleSelection} .react-select__option`,
      channelTemplateToggle: `${anchors.templateSelection} .react-select__input`,
      channelTemplateMenu: `${anchors.templateSelection} .react-select__menu`,
      channelTemplateOptions: `${anchors.templateSelection} .react-select__option`
    }
    await delays.preTest()
    await (async () => {
      for (let i = 0; i < allChannels.length; i++) {
        const channelName = allChannels[i].name
        const channelTemplate = allChannels[i].template
        await factory.filterClickElements(selectors.listChannels, channelName)
        await page.waitForSelector(selectors.channelName)
        await factory.valueMatched(selectors.channelName, channelName)
        await (async () => {
          for (let j = 0; j < allForces.length; j++) {
            const forceName = allForces[j].name
            const forceRole = allForces[j].role
            await factory.chooseCustomSelect(
              selectors.channelForceToggle,
              selectors.channelForceMenu,
              selectors.channelForceOptions,
              forceName
            )
            await factory.chooseCustomSelect(
              selectors.channelRoleToggle,
              selectors.channelRoleMenu,
              selectors.channelRoleOptions,
              forceRole
            )
            await factory.chooseCustomSelect(
              selectors.channelTemplateToggle,
              selectors.channelTemplateMenu,
              selectors.channelTemplateOptions,
              channelTemplate
            )
            await page.waitForSelector(selectors.addParticipant)
            await page.click(selectors.addParticipant)
            await page.waitForSelector(selectors.listParticipants)
            await page.waitForFunction(({ selectors, currentIndex }) => {
              return document.querySelectorAll(selectors.listParticipants).length === currentIndex
            }, {}, { selectors, currentIndex: j + 1 })
          }
        })()
        await page.waitForSelector(selectors.saveChannel)
        await page.click(selectors.saveChannel)
        await networks.updateWargame()
        await networks.fetchWargame()
      }
    })()
  }, 25000)
})

describe('Demo umpire screen interface', () => {
  test('Initiate wargame', async () => {
    const anchors = {
      tab: '#demo-player-1',
      wargameSelection: '#custom-select-wargame-selection'
    }
    const selectors = {
      play: `${anchors.tab} button[name=play]`,
      enter: `${anchors.tab} button[name="enter-game"]`,
      initiate: `${anchors.tab} button[name="initiate-game"]`,
      selectWargameToggle: `${anchors.wargameSelection} .react-select__input`,
      selectWargameMenu: `${anchors.wargameSelection} .react-select__menu`,
      selectWargameOptions: `${anchors.wargameSelection} .react-select__option`,
      passwordButtons: `${anchors.tab} [data-qa-force-name="White"] .btn`
    }
    await delays.preTest()
    await page.waitForSelector(anchors.tab)
    await factory.enterGame(selectors, wargameAttrs.title, 'Game Control')
    await page.waitForSelector(selectors.initiate)
    await page.click(selectors.initiate)
    await networks.updateWargame()
  }, 15000)

  test('Complete wargame tour', async () => {
    let tour
    const anchors = {
      tab: '#demo-player-1',
      tour: '#___reactour'
    }
    const selectors = {
      pages: `${anchors.tour} [data-tour-elem="dot"]`,
      close: `${anchors.tour} [data-qa-type="close-tour"]`
    }
    await delays.preTest()
    await page.waitForSelector(anchors.tour)
    await page.waitForSelector(selectors.pages)
    const pages = await page.$$(selectors.pages)
    await (async () => {
      for (let i = 1; i < [...pages].length; i++) {
        await delays.pause()
        await page.evaluate(el => el.click(), pages[i])
        await page.waitForFunction(el => {
          return [...el.classList].indexOf('reactour__dot--is-active') !== -1
        }, {}, pages[i])
      }
    })()
    await page.waitForSelector(selectors.close)
    await page.click(selectors.close)
    tour = await page.$(anchors.tour)
    expect(tour).toBeNull()
  }, 15000)

  test('Send game admin message', async () => {
    let ownMessage
    const anchors = {
      tab: '#demo-player-1',
      popupMenu: '.flexlayout__popup_menu_container',
      get outGameFeed () {
        return `${this.tab} .out-of-game-feed`
      },
      get getAdmin () {
        return `${this.outGameFeed} .contain-game-admin`
      }
    }
    const selectors = {
      buttonTabOverflow: `${anchors.outGameFeed} .flexlayout__tab_button_overflow`,
      buttonTabItems: `${anchors.outGameFeed} .flexlayout__tab_button_content`,
      messageInput: `${anchors.outGameFeed} .new-message-creator [name="root[content]"]`,
      ownMessage: `${anchors.getAdmin} .own-message:first-of-type .message-item-content`,
      buttonSendMessage: `${anchors.getAdmin} .new-message-creator [name="send"]`,
      buttonTabPopupItems: `${anchors.popupMenu} .flexlayout__popup_menu_item`
    }
    const content = 'Hello from White'
    await delays.preTest()
    await page.waitForSelector(anchors.outGameFeed)
    await (async () => {
      if (await page.$(selectors.buttonTabOverflow) !== null) {
        await page.click(selectors.buttonTabOverflow)
        await page.waitForSelector(selectors.buttonTabPopupItems)
        await factory.filterClickElements(selectors.buttonTabPopupItems, 'Game Admin')
      } else {
        await page.waitForSelector(selectors.buttonTabItems)
        await factory.filterClickElements(selectors.buttonTabItems, 'Game Admin')
      }
    })()
    await factory.sendGameAdminMessage(selectors, content)
    ownMessage = await page.$eval(selectors.ownMessage, el => el.innerText)
    expect(ownMessage).toEqual(content)
  }, 15000)

  test('Send message on All chat channels', async () => {
    let latestMessage
    const anchors = {
      tab: '#demo-player-1',
      get inGameFeed () {
        return `${this.tab} .in-game-feed`
      },
      get channelAllChat () {
        return `${this.inGameFeed} .tab-content-all-chat`
      }
    }
    const selectors = {
      channelContainer: `${anchors.inGameFeed} .contain-channel-tabs`,
      activeButtonTab: `${anchors.inGameFeed} .flexlayout__tab_button--selected .flexlayout__tab_button_content`,
      messageCreatorTrigger: `${anchors.channelAllChat} .new-message-creator .Collapsible__trigger`,
      messageCreatorInner: `${anchors.channelAllChat} .new-message-creator .Collapsible__contentInner`,
      messageInput: `${anchors.channelAllChat} .Collapsible__contentInner [name="root[content]"]`,
      privateMessageInput: `${anchors.channelAllChat} #private-message-input`,
      sendMessage: `${anchors.channelAllChat} .Collapsible__contentInner [name="send"]`,
      latestMessage: `${anchors.channelAllChat} .message-item-unread:first-of-type .message-title`
    }
    const dummy = {
      content: 'Message example from White',
      privateContent: 'Private message example from White'
    }
    await delays.preTest()
    await factory.sendAllChatMessage(anchors, selectors, dummy, true)
    await page.waitForSelector(selectors.latestMessage)
    latestMessage = await page.$eval(selectors.latestMessage, el => el.innerText)
    expect(latestMessage).toEqual(dummy.content)
  }, 15000)
})

describe('Demo red force screen interface', () => {
  test('Enter wargame', async () => {
    const anchors = {
      tab: '#demo-player-2',
      wargameSelection: '#custom-select-wargame-selection'
    }
    const selectors = {
      play: `${anchors.tab} button[name=play]`,
      enter: `${anchors.tab} button[name="enter-game"]`,
      selectWargameToggle: `${anchors.wargameSelection} .react-select__input`,
      selectWargameMenu: `${anchors.wargameSelection} .react-select__menu`,
      selectWargameOptions: `${anchors.wargameSelection} .react-select__option`,
      passwordButtons: `${anchors.tab} [data-qa-force-name="Red"] .btn`
    }
    await delays.preTest()
    await page.waitForSelector(anchors.tab)
    await factory.enterGame(selectors, wargameAttrs.title, 'CO')
  }, 15000)

  test('Skip wargame tour', async () => {
    let tour
    const anchors = {
      tab: '#demo-player-2',
      tour: '#___reactour'
    }
    const selectors = {
      close: `${anchors.tour} [data-tour-elem="controls"] + button`
    }
    await delays.preTest()
    await page.waitForSelector(anchors.tour)
    await page.waitForSelector(selectors.close)
    await page.click(selectors.close)
    tour = await page.$(anchors.tour)
    expect(tour).toBeNull()
  }, 15000)

  test('Send game admin message', async () => {
    let ownMessage
    const anchors = {
      tab: '#demo-player-2',
      get outGameFeed () {
        return `${this.tab} .out-of-game-feed`
      },
      get getAdmin () {
        return `${this.outGameFeed} .contain-game-admin`
      }
    }
    const selectors = {
      messageInput: `${anchors.outGameFeed} .new-message-creator [name="root[content]"]`,
      ownMessage: `${anchors.getAdmin} .own-message:first-of-type .message-item-content`,
      buttonSendMessage: `${anchors.getAdmin} .new-message-creator [name="send"]`
    }
    const content = 'Hello from Red'
    await delays.preTest()
    await page.waitForSelector(anchors.outGameFeed)
    await factory.sendGameAdminMessage(selectors, content)
    ownMessage = await page.$eval(selectors.ownMessage, el => el.innerText)
    expect(ownMessage).toEqual(content)
  }, 15000)

  test('Send message on All chat channels', async () => {
    let latestMessage
    const anchors = {
      tab: '#demo-player-2',
      get inGameFeed () {
        return `${this.tab} .in-game-feed`
      },
      get channelAllChat () {
        return `${this.inGameFeed} .tab-content-all-chat`
      }
    }
    const selectors = {
      channelContainer: `${anchors.inGameFeed} .contain-channel-tabs`,
      activeButtonTab: `${anchors.inGameFeed} .flexlayout__tab_button--selected .flexlayout__tab_button_content`,
      messageCreatorTrigger: `${anchors.channelAllChat} .new-message-creator .Collapsible__trigger`,
      messageCreatorInner: `${anchors.channelAllChat} .new-message-creator .Collapsible__contentInner`,
      messageInput: `${anchors.channelAllChat} .Collapsible__contentInner [name="root[content]"]`,
      sendMessage: `${anchors.channelAllChat} .Collapsible__contentInner [name="send"]`,
      latestMessage: `${anchors.channelAllChat} .message-item-unread:first-of-type .message-title`
    }
    const dummy = {
      content: 'Message example from Red'
    }
    await delays.preTest()
    await factory.sendAllChatMessage(anchors, selectors, dummy)
    await page.waitForSelector(selectors.latestMessage)
    latestMessage = await page.$eval(selectors.latestMessage, el => el.innerText)
    expect(latestMessage).toEqual(dummy.content)
  }, 15000)
})

describe('Demo blue force screen interface', () => {
  test('Enter wargame', async () => {
    const anchors = {
      tab: '#demo-player-3',
      wargameSelection: '#custom-select-wargame-selection'
    }
    const selectors = {
      play: `${anchors.tab} button[name=play]`,
      enter: `${anchors.tab} button[name="enter-game"]`,
      selectWargameToggle: `${anchors.wargameSelection} .react-select__input`,
      selectWargameMenu: `${anchors.wargameSelection} .react-select__menu`,
      selectWargameOptions: `${anchors.wargameSelection} .react-select__option`,
      passwordButtons: `${anchors.tab} [data-qa-force-name="Blue"] .btn`
    }
    await delays.preTest()
    await page.waitForSelector(anchors.tab)
    await factory.enterGame(selectors, wargameAttrs.title, 'CO')
  }, 15000)

  test('Skip wargame tour', async () => {
    let tour
    const anchors = {
      tab: '#demo-player-3',
      tour: '#___reactour'
    }
    const selectors = {
      close: `${anchors.tour} [data-tour-elem="controls"] + button`
    }
    await delays.preTest()
    await page.waitForSelector(anchors.tour)
    await page.waitForSelector(selectors.close)
    await page.click(selectors.close)
    tour = await page.$(anchors.tour)
    expect(tour).toBeNull()
  }, 15000)

  test('Send game admin message', async () => {
    let ownMessage
    const anchors = {
      tab: '#demo-player-3',
      get outGameFeed () {
        return `${this.tab} .out-of-game-feed`
      },
      get getAdmin () {
        return `${this.outGameFeed} .contain-game-admin`
      }
    }
    const selectors = {
      messageInput: `${anchors.outGameFeed} .new-message-creator [name="root[content]"]`,
      ownMessage: `${anchors.getAdmin} .own-message:first-of-type .message-item-content`,
      buttonSendMessage: `${anchors.getAdmin} .new-message-creator [name="send"]`
    }
    const content = 'Hello from Blue'
    await delays.preTest()
    await page.waitForSelector(anchors.outGameFeed)
    await factory.sendGameAdminMessage(selectors, content)
    ownMessage = await page.$eval(selectors.ownMessage, el => el.innerText)
    expect(ownMessage).toEqual(content)
  }, 15000)

  test('Send message on All chat channels', async () => {
    let latestMessage
    const anchors = {
      tab: '#demo-player-3',
      get inGameFeed () {
        return `${this.tab} .in-game-feed`
      },
      get channelAllChat () {
        return `${this.inGameFeed} .tab-content-all-chat`
      }
    }
    const selectors = {
      channelContainer: `${anchors.inGameFeed} .contain-channel-tabs`,
      activeButtonTab: `${anchors.inGameFeed} .flexlayout__tab_button--selected .flexlayout__tab_button_content`,
      messageCreatorTrigger: `${anchors.channelAllChat} .new-message-creator .Collapsible__trigger`,
      messageCreatorInner: `${anchors.channelAllChat} .new-message-creator .Collapsible__contentInner`,
      messageInput: `${anchors.channelAllChat} .Collapsible__contentInner [name="root[content]"]`,
      sendMessage: `${anchors.channelAllChat} .Collapsible__contentInner [name="send"]`,
      latestMessage: `${anchors.channelAllChat} .message-item-unread:first-of-type .message-title`
    }
    const dummy = {
      content: 'Message example from Blue'
    }
    await delays.preTest()
    await factory.sendAllChatMessage(anchors, selectors, dummy)
    await page.waitForSelector(selectors.latestMessage)
    latestMessage = await page.$eval(selectors.latestMessage, el => el.innerText)
    expect(latestMessage).toEqual(dummy.content)
  }, 15000)
})
