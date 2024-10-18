import puppeteer from 'puppeteer'

let browser
let page

let pageWhiteGameControl
let pageWhiteSargent
let pageRedSpecial
let pageRedRecon
let pageBlueCo
let pageBlueArtillery

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: false, // headless mode set to false so browser opens up with visual feedback
    slowMo: 25 // how slow actions should be
  })

  page = await browser.newPage()

  await page.setViewport({
    width: 1920,
    height: 1080
  })
})

describe('PlayerUi', () => {
  // test('Login to Serge', async () => {
  //
  //   await page.goto('localhost:8080/serge/admin');
  //   await page.waitForSelector('.material-input');
  //   await page.click('.material-input');
  //   await page.type('input[type=password]', DEFAULT_SERVER); // cannot import consts file as import statements
  //   await page.click('.link');
  //   await page.waitFor('h2');
  //
  //   const title = await page.evaluate(() => document.querySelector('h2').innerText);
  //
  //   expect(title).toEqual('Games');
  //
  // }, 15000);
  //
  // test('Should create a wargame', async () => {
  //
  //   await page.evaluate(() => {
  //     [...document.querySelectorAll('.link')].find(element => element.textContent === 'Create').click();
  //   });
  //
  // }, 15000);
  //
  // test('Should rename the wargame', async () => {
  //
  //   await page.click('#title-editable');
  //   await page.keyboard.press('End');
  //   await backspace(8);
  //   await page.type('#title-editable', 'e2e playerUi');
  //
  //   await page.click('.savewargame-icon');
  //   await page.waitFor(250);
  //   const wargameNameSaved = await page.evaluate(() => document.querySelector("#notification").innerText);
  //
  //   expect(wargameNameSaved).toEqual("Wargame name updated.");
  //
  // }, 15000);
  //
  // test('Should click show access codes', async () => {
  //
  //   await page.click('#show-access-codes');
  //
  // }, 15000);
  //
  // test('Should save Overview tab', async () => {
  //
  //   await page.waitFor(2500);
  //
  //   await page.evaluate(() => {
  //     [...document.querySelectorAll('.link')].find(element => element.textContent === 'save Overview').click();
  //   });
  //   await page.waitFor(250);
  //   const text = await page.evaluate(() => document.querySelector("#notification").innerText);
  //   expect(text).toEqual("Overview saved.");
  //
  // }, 15000);
  //
  // describe('Build wargame', () => {
  //
  //   test('Should navigate to forces tab', async () => {
  //
  //     await page.evaluate(() => {
  //       [...document.querySelectorAll('.tab-nav li')].find((tab) => tab.innerText === 'FORCES').click();
  //     });
  //
  //   }, 15000);
  //
  //   test('Should click on white force in list', async () => {
  //
  //     await page.evaluate(() => document.querySelector('.list-title').click());
  //
  //   }, 15000);
  //
  //   test('Should create plain role', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click());
  //     await page.type('input.material-input', 'Sargent');
  //     await page.click('button[name="add"]');
  //
  //   }, 15000);
  //
  //   test('Should create role who is Observing', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click());
  //     await page.type('input.material-input', 'Observer');
  //     await page.click('input#c1');
  //     await page.click('button[name="add"]');
  //
  //   }, 15000);
  //
  //   test('Should check that roles added successfully to UI', async () => {
  //
  //     let roleslist = await page.evaluate(() => [...document.querySelectorAll('.roles .group-item')].map((item) => item.innerText));
  //
  //     expect(roleslist).toEqual(["Game Control", "Sargent", "Observer"]);
  //
  //   }, 15000);
  //
  //   test('Should save white force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE FORCE').click());
  //
  //   }, 15000);
  //
  //   test('Should add two new forces', async () => {
  //
  //     await page.waitFor(500);
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW FORCE').click());
  //     await page.waitFor(500);
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW FORCE').click());
  //     await page.waitFor(250);
  //
  //   }, 15000);
  //
  //   test('Should have three forces in force list', async () => {
  //
  //     let forcelist = await page.evaluate(() => {
  //       return [...document.querySelectorAll('.list-title')].map((force) => force.innerText);
  //     });
  //
  //     expect(forcelist).toHaveLength(3);
  //
  //   }, 15000);
  //
  //   test('Should select newly created force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.list-title')][1].click());
  //
  //   }, 15000);
  //
  //   test('Should rename newly created force to Red', async () => {
  //
  //     await page.waitFor('input[name="force-name"]');
  //     await page.click('input[name="force-name"]');
  //     await page.keyboard.press('End');
  //     await backspace(14);
  //     await page.type('input[name="force-name"]', 'Red');
  //
  //   }, 15000);
  //
  //   test('Should rename CO force in Red', async () => {
  //
  //
  //     let editBtn = await page.$('svg[data-icon="pencil-alt"]');
  //     await editBtn.click();
  //
  //     await backspace(2);
  //     await page.type('input.material-input', 'Special forces');
  //     await page.click('button[name="add"]');
  //
  //   }, 15000);
  //
  //   test('Should create two roles for Red force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click());
  //     await page.type('input.material-input', 'Reconnaissance');
  //     await page.click('button[name="add"]');
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click());
  //     await page.type('input.material-input', 'Medical');
  //     await page.click('button[name="add"]');
  //
  //   }, 15000);
  //
  //   test('Should change color of force to Red', async () => {
  //
  //     await page.click('.force-color');
  //     await page.waitFor('.modal');
  //     await page.click('div[title="#ff4141"]');
  //     await page.click('button[name="cancel"]');
  //
  //     let color = await page.evaluate(() => document.querySelector('.force-color').style.background);
  //
  //     expect(color).toEqual('rgb(255, 65, 65)');
  //
  //   }, 15000);
  //
  //   test('Should save Red force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE FORCE').click());
  //     await page.waitFor(200);
  //
  //     const saveNotification = await page.evaluate(() => document.querySelector("#notification").innerText);
  //     expect(saveNotification).toEqual("Force saved.");
  //
  //   }, 15000);
  //
  //   test('Should select final force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.list-title')][2].click());
  //
  //   }, 15000);
  //
  //   test('Should rename newly created force', async () => {
  //
  //     await page.waitFor('input[name="force-name"]');
  //     await page.click('input[name="force-name"]');
  //     await page.keyboard.press('End');
  //     await backspace(14);
  //     await page.type('input[name="force-name"]', 'Blue');
  //
  //   }, 15000);
  //
  //   test('Should create two roles for Blue force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click());
  //     await page.type('input.material-input', 'Artillery');
  //     await page.click('button[name="add"]');
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click());
  //     await page.type('input.material-input', 'Air support');
  //     await page.click('button[name="add"]');
  //
  //   }, 15000);
  //
  //   test('Should save Blue force', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE FORCE').click());
  //     await page.waitFor(200);
  //
  //     const saveNotification = await page.evaluate(() => document.querySelector("#notification").innerText);
  //     expect(saveNotification).toEqual("Force saved.");
  //
  //   }, 15000);
  //
  //   test('Should navigate to channels tab', async () => {
  //
  //     await page.evaluate(() => {
  //       [...document.querySelectorAll('.tab-nav li')].find((tab) => tab.innerText === 'CHANNELS').click();
  //     });
  //
  //   }, 15000);
  //
  //   test('Should create channel named "Global chat"', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click());
  //
  //     await page.waitFor(250);
  //     await page.click('#editable-title[name="channel-name"]');
  //     await page.keyboard.press('End');
  //     await backspace(16);
  //     await page.type('#editable-title[name="channel-name"]', 'Global chat');
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(500);
  //     let channelNames = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText));
  //
  //     expect(channelNames[0]).toEqual("Global chat");
  //
  //   }, 15000);
  //
  //   test('Should add all forces & all roles into "Global chat" channel', async () => {
  //
  //     let inputs;
  //     // ADD WHITE
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click());
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //     // ADD RED
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Red').click());
  //
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //     // ADD BLUE
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Blue').click());
  //
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //   }, 15000);
  //
  //   test('Should have white force, Game Control & Daily Intentions in table', async () => {
  //
  //     let tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText));
  //
  //     expect(tablecells[0]).toEqual('White');
  //     expect(tablecells[1]).toEqual('All roles');
  //     expect(tablecells[2]).toEqual('Chat if empty');
  //
  //     expect(tablecells[4]).toEqual('Red');
  //     expect(tablecells[5]).toEqual('All roles');
  //     expect(tablecells[6]).toEqual('Chat if empty');
  //
  //     expect(tablecells[8]).toEqual('Blue');
  //     expect(tablecells[9]).toEqual('All roles');
  //     expect(tablecells[10]).toEqual('Chat if empty');
  //
  //   }, 15000);
  //
  //   test('Should save "Global chat" channel', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(200);
  //
  //     const saveNotification = await page.evaluate(() => document.querySelector("#notification").innerText);
  //     expect(saveNotification).toEqual("channel saved.");
  //
  //   }, 15000);
  //
  //   test('Should create channel named "White Links"', async () => {
  //
  //     await page.waitFor(2500);
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click());
  //
  //     await page.waitFor(250);
  //     await page.click('#editable-title[name="channel-name"]');
  //     await page.keyboard.press('End');
  //     await backspace(16);
  //     await page.type('#editable-title[name="channel-name"]', 'White Links');
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(500);
  //     let channelNames = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText));
  //
  //     expect(channelNames[1]).toEqual("White Links");
  //
  //   }, 15000);
  //
  //   test('Should add all roles of White force into "White Links" channel with Link & Chat template', async () => {
  //
  //     let inputs;
  //     // ADD WHITE
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click());
  //
  //     // add Link Template
  //     await inputs[2].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Link').click());
  //
  //     // add Chat Template
  //     await inputs[2].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Chat').click());
  //
  //     // save participant
  //     await page.click('svg[data-icon="check"]');
  //
  //   }, 15000);
  //
  //   test('Should save "White Links" channel', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(200);
  //
  //     const saveNotification = await page.evaluate(() => document.querySelector("#notification").innerText);
  //     expect(saveNotification).toEqual("channel saved.");
  //
  //   }, 15000);
  //
  //   test('Should create channel named "Red White Comms"', async () => {
  //
  //     await page.waitFor(2500);
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click());
  //
  //     await page.waitFor(250);
  //     await page.click('#editable-title[name="channel-name"]');
  //     await page.keyboard.press('End');
  //     await backspace(16);
  //     await page.type('#editable-title[name="channel-name"]', 'Red White Comms');
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(500);
  //     let channelNames = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText));
  //
  //     expect(channelNames[2]).toEqual("Red White Comms");
  //
  //   }, 15000);
  //
  //   test('Should add White Sargent role & Red all roles into "Red White Comms" channel', async () => {
  //
  //     let inputs;
  //     // ADD WHITE
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click());
  //
  //     // add Sargent role
  //     await inputs[1].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Sargent').click());
  //
  //     // add Message template
  //     await inputs[2].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Message').click());
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //     // ADD RED
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Red').click());
  //
  //     // add Message template
  //     await inputs[2].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Message').click());
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //   }, 15000);
  //
  //   test('Should save "Red White Comms" channel', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(200);
  //
  //     const saveNotification = await page.evaluate(() => document.querySelector("#notification").innerText);
  //     expect(saveNotification).toEqual("channel saved.");
  //
  //   }, 15000);
  //
  //   test('Should create channel named "Blue White Comms"', async () => {
  //
  //     await page.waitFor(2500);
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click());
  //
  //     await page.waitFor(250);
  //     await page.click('#editable-title[name="channel-name"]');
  //     await page.keyboard.press('End');
  //     await backspace(16);
  //     await page.type('#editable-title[name="channel-name"]', 'Blue White Comms');
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(500);
  //     let channelNames = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText));
  //
  //     expect(channelNames[3]).toEqual('Blue White Comms');
  //
  //   }, 15000);
  //
  //   test('Should add White Sargent role & Blue all roles into "Blue White Comms" channel', async () => {
  //
  //     let inputs;
  //     // ADD WHITE
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click());
  //
  //     // add Sargent role
  //     await inputs[1].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Sargent').click());
  //
  //     // add Message template
  //     await inputs[2].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Message').click());
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //     // ADD RED
  //     inputs = await page.$$('.css-10nd86i');
  //     await inputs[0].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Blue').click());
  //
  //     // add Message template
  //     await inputs[2].click();
  //     await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Message').click());
  //
  //     await page.click('svg[data-icon="check"]');
  //
  //   }, 15000);
  //
  //   test('Should save "Blue White Comms" channel', async () => {
  //
  //     await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click());
  //     await page.waitFor(200);
  //
  //     const saveNotification = await page.evaluate(() => document.querySelector("#notification").innerText);
  //     expect(saveNotification).toEqual("channel saved.");
  //
  //   }, 15000);
  //
  // });
  //
  // describe('PlayerUi login and control Ui checks', () => {
  //
  //   let selectWargame = async () => {
  //     await page.goto('localhost:8080/serge/player');
  //
  //     await page.waitFor(500);
  //
  //     await page.bringToFront();
  //
  //     let play = await page.$('button[name="play"]');
  //     play.click();
  //
  //     await page.waitFor(500);
  //
  //     await page.evaluate(() => {
  //       [...document.querySelector('select').options].find((opt) => opt.innerText === "wargame-e2e playerUi").selected = true;
  //     });
  //
  //     await page.waitFor(500);
  //
  //     await page.evaluate(() => {
  //       let event = new Event('change', { bubbles: true });
  //       event.simulated = true;
  //       document.querySelector('select').dispatchEvent(event);
  //     });
  //   };
  //
  //   let selectPassword = async (role) => {
  //     await page.evaluate((role) => {
  //       [...document.querySelectorAll('.demo-passwords ul li')].find((r) => r.innerText === role).click();
  //     }, role);
  //
  //     await page.waitFor(250);
  //
  //     let accessCodeLength = await page.evaluate(() => document.querySelector('input[type="text"]').value.length);
  //
  //     expect(accessCodeLength).toBeGreaterThan(0);
  //
  //     let enterBtn = await page.$('button[name="add"]');
  //     enterBtn.click();
  //   };
  //
  //   test('Should select wargame-e2e playerUI wargame', async () => {
  //
  //     await selectWargame();
  //
  //   }, 15000);
  //
  //   test('Should select Game Control password and enter', async () => {
  //
  //     await selectPassword("Game Control");
  //
  //   }, 15000);
  //
  //   test('Should display "INITIATE GAME" button', async () => {
  //
  //     await page.waitFor('button[name="initiate-game"]');
  //
  //     let initiateButton = await page.evaluate(() => document.querySelector('button[name="initiate-game"]').innerText);
  //
  //     expect(initiateButton).toEqual('INITIATE GAME');
  //
  //   }, 15000);
  //
  //   test('Should select wargame-e2e playerUI wargame', async () => {
  //
  //     await selectWargame();
  //
  //   }, 15000);
  //
  //   test('Should select Sargent password and enter', async () => {
  //
  //     await selectPassword("Sargent");
  //
  //   }, 15000);
  //
  //   test('Should display LOADER while game not initiated', async () => {
  //
  //     await page.waitFor('#loader');
  //
  //   }, 15000);
  //
  //   test('Should select wargame-e2e playerUI wargame', async () => {
  //
  //     await selectWargame();
  //
  //   }, 15000);
  //
  //   test('Should select Reconnaissance password and enter', async () => {
  //
  //     await selectPassword("Reconnaissance");
  //
  //   }, 15000);
  //
  //   test('Should display LOADER while game not initiated', async () => {
  //
  //     await page.waitFor('#loader');
  //
  //   }, 15000);
  //
  //   test('Should select wargame-e2e playerUI wargame', async () => {
  //
  //     await selectWargame();
  //
  //   }, 15000);
  //
  //   test('Should select Artillery password and enter', async () => {
  //
  //     await selectPassword("Artillery");
  //
  //   }, 15000);
  //
  //   test('Should display LOADER while game not initiated', async () => {
  //
  //     await page.waitFor('#loader');
  //
  //   }, 15000);
  // });

  describe('PlayerUi login all players', async () => {
    const loginToWargame = async (page, role) => {
      await page.bringToFront()

      const play = await page.$('button[name="play"]')
      play.click()

      await page.waitFor(500)

      await page.evaluate(() => {
        [...document.querySelector('select').options].find((opt) => opt.innerText === 'wargame-e2e playerUi').selected = true
      })

      await page.waitFor(500)

      await page.evaluate(() => {
        const event = new Event('change', { bubbles: true })
        event.simulated = true
        document.querySelector('select').dispatchEvent(event)
      })

      await page.evaluate((role) => {
        [...document.querySelectorAll('.demo-passwords ul li')].find((r) => r.innerText === role).click()
      }, role)

      await page.waitFor(250)

      const enterBtn = await page.$('button[name="add"]')
      enterBtn.click()
    }

    beforeAll(async () => {
      pageWhiteGameControl = await browser.newPage()
      await pageWhiteGameControl.goto('localhost:8080/serge/player')
      pageWhiteSargent = await browser.newPage()
      await pageWhiteSargent.goto('localhost:8080/serge/player')
      pageRedSpecial = await browser.newPage()
      await pageRedSpecial.goto('localhost:8080/serge/player')
      pageRedRecon = await browser.newPage()
      await pageRedRecon.goto('localhost:8080/serge/player')
      pageBlueCo = await browser.newPage()
      await pageBlueCo.goto('localhost:8080/serge/player')
      pageBlueArtillery = await browser.newPage()
      await pageBlueArtillery.goto('localhost:8080/serge/player')

      await pageWhiteGameControl.setViewport({
        width: 1920,
        height: 1080
      })
      await pageWhiteSargent.setViewport({
        width: 1920,
        height: 1080
      })

      await pageRedSpecial.setViewport({
        width: 1920,
        height: 1080
      })
      await pageRedRecon.setViewport({
        width: 1920,
        height: 1080
      })

      await pageBlueCo.setViewport({
        width: 1920,
        height: 1080
      })
      await pageBlueArtillery.setViewport({
        width: 1920,
        height: 1080
      })
    }, 15000)

    test('Should login White Game Control', async () => {
      await loginToWargame(pageWhiteGameControl, 'Game Control')
    }, 15000)

    test('Should login White Sargent', async () => {
      await loginToWargame(pageWhiteSargent, 'Sargent')
    }, 15000)

    test('Should login Red Special forces', async () => {
      await loginToWargame(pageRedSpecial, 'Special forces')
    }, 15000)

    test('Should login Red Reconnaissance', async () => {
      await loginToWargame(pageRedRecon, 'Reconnaissance')
    }, 15000)

    test('Should login Blue CO', async () => {
      await loginToWargame(pageBlueCo, 'CO')
    }, 15000)

    test('Should login Blue Artillery', async () => {
      await loginToWargame(pageBlueArtillery, 'Artillery')
    }, 15000)

    test('Should initiate-game', async () => {
      await pageWhiteGameControl.bringToFront()

      await pageWhiteGameControl.waitFor('button[name="initiate-game"]')
      await pageWhiteGameControl.evaluate(() => document.querySelector('button[name="initiate-game"]').click())

      // check is game UI
      await pageWhiteGameControl.$('.turn-progression-ui')
    }, 15000)

    test('Should check game started for all players', async () => {
      await pageWhiteSargent.bringToFront()
      await pageWhiteSargent.$('.turn-progression-ui')

      await pageWhiteSargent.waitFor(2000)

      await pageRedSpecial.bringToFront()
      await pageRedSpecial.$('.turn-progression-ui')

      await pageRedRecon.bringToFront()
      await pageRedRecon.$('.turn-progression-ui')

      await pageBlueCo.bringToFront()
      await pageBlueCo.$('.turn-progression-ui')

      await pageBlueArtillery.bringToFront()
      await pageBlueArtillery.$('.turn-progression-ui')
    }, 15000)
  })
})
