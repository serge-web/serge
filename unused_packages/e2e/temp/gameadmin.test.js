import puppeteer from 'puppeteer'
import { DEFAULT_SERVER } from '../consts'

let browser
let page

const backspace = async (qty) => {
  for (let i = 0; i < qty; i++) {
    await page.keyboard.press('Backspace')
  }
}

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

describe('Login to admin and create game', () => {
  test('bad password notification', async () => {
    await page.goto('localhost:8080/serge/admin')
    await page.waitForSelector('.material-input')
    await page.click('.material-input')
    await page.type('input[type=password]', 'wrong')
    await page.click('.link')
    await page.waitFor('#notification')
    const text = await page.evaluate(() => document.querySelector('#notification').innerText)

    expect(text).toEqual('Access code did not match')
  }, 15000)

  test('successful login', async () => {
    await page.goto('localhost:8080/serge/admin')
    await page.waitForSelector('.material-input')
    await page.click('.material-input')
    await page.type('input[type=password]', DEFAULT_SERVER) // cannot import consts file as import statements
    await page.click('.link')
    await page.waitFor('h2')

    const title = await page.evaluate(() => document.querySelector('h2').innerText)

    expect(title).toEqual('Games')
  }, 15000)

  test('Should clear any wargames', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find((tab) => tab.innerText === 'CLEAR WARGAMES').click()
    })
  }, 15000)

  test('Should be no wargames', async () => {
    await page.goto('localhost:8080/serge/admin')
    const wargameTitles = await page.evaluate(() => [...document.querySelectorAll('.searchlist-title')].map((title) => title.innerText))
    expect(wargameTitles).toHaveLength(0)
  }, 15000)

  test('successful login', async () => {
    await page.goto('localhost:8080/serge/admin')
    await page.waitForSelector('.material-input')
    await page.click('.material-input')
    await page.type('input[type=password]', DEFAULT_SERVER) // cannot import consts file as import statements
    await page.click('.link')
    await page.waitFor('h2')

    const title = await page.evaluate(() => document.querySelector('h2').innerText)

    expect(title).toEqual('Games')
  }, 15000)

  test('Should create a wargame', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find(element => element.textContent === 'Create').click()
    })
  }, 15000)
})

describe('Overview tab', () => {
  test('Should input overview data', async () => {
    // input description
    await page.click('textarea.material-input')
    await page.type('textarea.material-input', 'This is a description')

    // wargame turn time
    await page.click('input[name="wargame turn time"]')
    await backspace(5)
    await page.type('input[name="wargame turn time"]', '3000')

    await page.click('input[name="real time planning allowance"]')
    await backspace(5)
    await page.type('input[name="real time planning allowance"]', '1000')

    await page.click('input[name="time warning"]')
    await backspace(5)
    await page.type('input[name="time warning"]', '0030')

    await page.click('#show-access-codes')

    // await page.click('input[name="start time"]');
    //
    // let item1 = await page.evaluate(() => {
    //   return [...document.querySelectorAll('.flatpickr-days .dayContainer .flatpickr-day')].find((element) => element.innerText === "1").click()
    // });
    //
    // await page.waitFor(5000);
    // await page.keyboard.press('Enter');
  }, 15000)

  test('Should try to navigate without saving', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.tab-nav li')][1].click()
    })
    await page.waitFor(250)
    const unsavedNotification = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(unsavedNotification).toEqual('Unsaved changes')
  }, 15000)

  test('Should save the overview page', async () => {
    await page.waitFor(2500)
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find(element => element.textContent === 'save Overview').click()
    })
    await page.waitFor(250)
    const text = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(text).toEqual('Overview saved.')
  }, 15000)
})

describe('Wargame search list', () => {
  test('Should rename the wargame', async () => {
    await page.waitFor(2500)
    await page.click('#title-editable')
    await page.keyboard.press('End')
    await backspace(8)
    await page.type('#title-editable', 'e2e test')

    await page.click('.savewargame-icon')
    await page.waitFor(250)
    const wargameNameSaved = await page.evaluate(() => document.querySelector('#notification').innerText)

    expect(wargameNameSaved).toEqual('Wargame name updated.')
  }, 15000)

  test('Should go back to admin homepage', async () => {
    await page.waitFor(2500) // wait for notification to disappear
    await page.click('#home-btn')
  }, 15000)

  test('Should create another wargame', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find(element => element.textContent === 'Create').click()
    })
  }, 15000)

  test('Should try and save wargame with same name', async () => {
    await page.click('#title-editable')
    await page.keyboard.press('End')
    await backspace(8)
    await page.type('#title-editable', 'e2e test')
    await page.click('.savewargame-icon')
  }, 15000)

  test('Should show same wargame name warning', async () => {
    await page.waitFor(250)
    const uniqueWargameNotification = await page.evaluate(() => document.querySelector('#notification').innerText)

    expect(uniqueWargameNotification).toEqual('Wargame name is not unique.')
  }, 15000)

  test('Should rename the wargame', async () => {
    await page.waitFor(2500)
    await page.click('#title-editable')
    await page.keyboard.press('End')
    await page.type('#title-editable', '-2')
    await page.click('.savewargame-icon')
  }, 15000)

  test('Should successfully save wargame name', async () => {
    await page.waitFor(250)
    const wargameNameSaved = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(wargameNameSaved).toEqual('Wargame name updated.')
  })

  test('Should go back to admin homepage', async () => {
    await page.click('#home-btn')
  }, 15000)

  test('Should see two wargames in wargame list', async () => {
    await page.waitFor(100)

    const wargameTitles = await page.evaluate(() => [...document.querySelectorAll('.searchlist-title')].map((title) => title.innerText))

    expect(wargameTitles).toHaveLength(2)
  }, 15000)

  test('Should duplicate test-2', async () => {
    await page.hover('.searchlist-title')
    await page.click('.wargame-option-menu-btn')

    await page.evaluate(() => {
      [...document.querySelectorAll('.wargame-option-menu span')][1].click()
    })
  })

  test('Should see three wargames in wargame list', async () => {
    await page.waitFor(500)

    const wargameTitles = await page.evaluate(() => [...document.querySelectorAll('.searchlist-title')].map((title) => title.innerText))

    expect(wargameTitles).toHaveLength(3)
  }, 15000)

  test('Should create clean copy of duplicated test-2', async () => {
    await page.hover('.searchlist-title')
    await page.click('.wargame-option-menu-btn')

    await page.evaluate(() => {
      [...document.querySelectorAll('.wargame-option-menu span')][0].click()
    })
  })

  test('Should have correct description in clean copy of duplicate', async () => {
    await page.hover('.searchlist-title')
    await page.click('.searchlist-title span')

    await page.evaluate(() => document.querySelector('textarea.material-input').innerText === 'This is a description')
  })

  test('Should go back to admin homepage', async () => {
    await page.click('#home-btn')
  }, 15000)

  test('Should see four wargames in wargame list', async () => {
    await page.waitFor(500)

    const wargameTitles = await page.evaluate(() => [...document.querySelectorAll('.searchlist-title')].map((title) => title.innerText))

    expect(wargameTitles).toHaveLength(4)
  }, 15000)

  test('Should delete first three wargames', async () => {
    await page.hover('.searchlist-title')
    await page.click('.wargame-option-menu-btn')
    await page.evaluate(() => {
      [...document.querySelectorAll('.wargame-option-menu span')][3].click()
    })
    await page.click('button[name="delete"]')

    await page.hover('.searchlist-title')
    await page.click('.wargame-option-menu-btn')
    await page.evaluate(() => {
      [...document.querySelectorAll('.wargame-option-menu span')][3].click()
    })
    await page.click('button[name="delete"]')

    await page.hover('.searchlist-title')
    await page.click('.wargame-option-menu-btn')
    await page.evaluate(() => {
      [...document.querySelectorAll('.wargame-option-menu span')][3].click()
    })
    await page.click('button[name="delete"]')
  }, 15000)
})

describe('Forces tab', () => {
  test('Should go into wargame setup page', async () => {
    await page.hover('.searchlist-title')
    await page.click('.searchlist-title span')
  }, 15000)

  test('Should navigate to forces tab', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.tab-nav li')].find((tab) => tab.innerText === 'FORCES').click()
    })
  }, 15000)

  test('Should click on white force in list', async () => {
    await page.evaluate(() => document.querySelector('.list-title').click())
  }, 15000)

  test('Should create plain role', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click())
    await page.type('input.material-input', 'plain role')
    await page.click('button[name="add"]')
  }, 15000)

  test('Should create role who is observer', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click())
    await page.type('input.material-input', 'observer role')
    await page.click('input#c1')
    await page.click('button[name="add"]')
  }, 15000)

  test('Should create role with insights', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click())
    await page.type('input.material-input', 'insights role')
    await page.click('input#c2')
    await page.click('button[name="add"]')
  }, 15000)

  test('Should show name already exists warning', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click())
    await page.type('input.material-input', 'insights role')

    const nameexistswarning = await page.evaluate(() => document.querySelector('p.notification').innerText)

    expect(nameexistswarning).toEqual('Name already exists')
  }, 15000)

  test('Should close role modal', async () => {
    await page.evaluate(() => document.querySelector('button[name="cancel"]').click())
  }, 15000)

  test('Should check that roles added successfully to UI', async () => {
    const roleslist = await page.evaluate(() => [...document.querySelectorAll('.roles .group-item')].map((item) => item.innerText))

    expect(roleslist).toEqual(['Game Control', 'plain role', 'observer role', 'insights role'])
  }, 15000)

  test('Should update the white overview & objectives', async () => {
    await page.click('textarea[name="objectives"]')
    await page.keyboard.press('End')
    await page.type('textarea[name="objectives"]', ' Look it has been added to.')

    const objectivesText = await page.evaluate(() => document.querySelector('textarea[name="objectives"]').value)

    expect(objectivesText).toEqual('Umpire force. Look it has been added to.')
  }, 15000)

  test('Should open image upload dialogue box', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'CHANGE ICON').click())
    await page.waitFor('input[type="file"]')
  }, 15000)

  test('Should try to navigate without saving', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.tab-nav li')].find((tab) => tab.innerText === 'CHANNELS').click()
    })
    await page.waitFor(250)
    const unsavedNotification = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(unsavedNotification).toEqual('Unsaved changes')
  }, 15000)

  test('Should show unsaved changes dialogue box', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW FORCE').click())
    await page.waitFor('.modal')

    const modalWarning = await page.evaluate(() => document.querySelector('.modal h3').innerText)
    expect(modalWarning).toEqual('Are you sure?')

    const modalWarning2 = await page.evaluate(() => document.querySelector('.modal p').innerText)
    expect(modalWarning2).toEqual('There are unsaved changes.')
  }, 15000)

  test('Should cancel move from current force', async () => {
    await page.click('button[name="cancel"]')
  }, 15000)

  test('Should leave tab without saving', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW FORCE').click())
    await page.waitFor('.modal')
    await page.click('button[name="continue"]')
  }, 15000)

  test('White should only have one role', async () => {
    await page.evaluate(() => document.querySelector('.list-title').click())

    const roleslist = await page.evaluate(() => [...document.querySelectorAll('.roles .group-item')].map((item) => item.innerText))

    expect(roleslist).toEqual(['Game Control'])
  }, 15000)

  test('Should have a new force in force list', async () => {
    const forcelist = await page.evaluate(() => {
      return [...document.querySelectorAll('.list-title')].map((force) => force.innerText)
    })

    expect(forcelist).toHaveLength(2)
  }, 15000)

  test('Should select newly created force', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.list-title')][1].click())
  }, 15000)

  test('Should rename newly created force', async () => {
    await page.click('input[name="force-name"]')
    await page.keyboard.press('End')
    await backspace(14)
    await page.type('input[name="force-name"]', 'Red force')
  }, 15000)

  test('Should create role for Red force', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW ROLE').click())
    await page.type('input.material-input', 'Second role')
    await page.click('button[name="add"]')
  }, 15000)

  test('Should change color of force to Red', async () => {
    await page.click('.force-color')
    await page.waitFor('.modal')
    await page.click('div[title="#ff4141"]')
    await page.click('button[name="cancel"]')

    const color = await page.evaluate(() => document.querySelector('.force-color').style.background)

    expect(color).toEqual('rgb(255, 65, 65)')
  }, 15000)

  test('Should save Red force', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE FORCE').click())
    await page.waitFor(200)

    const saveNotification = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(saveNotification).toEqual('Force saved.')
  }, 15000)

  test('Should create a new force and be able to delete it', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD A NEW FORCE').click())

    const forcelist = await page.evaluate(() => {
      return [...document.querySelectorAll('.list-title')].map((force) => force.innerText)
    })

    expect(forcelist).toHaveLength(3)

    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'DELETE').click())

    await page.waitFor(200)

    const forcelist2nd = await page.evaluate(() => {
      return [...document.querySelectorAll('.list-title')].map((force) => force.innerText)
    })

    expect(forcelist2nd).toHaveLength(2)
  }, 15000)
})

describe('Channels tab', () => {
  test('Should navigate to channels tab', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.tab-nav li')].find((tab) => tab.innerText === 'CHANNELS').click()
    })
  }, 15000)

  test('Should add a channel', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click())
    await page.waitFor('.list-title')
  }, 15000)

  test('Should duplicate a channel', async () => {
    await page.hover('.list-title')
    await page.click('.list-title svg[data-icon="clone"]')

    const channelList = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText))
    expect(channelList).toHaveLength(2)
  }, 15000)

  test('Should delete duplicated channel', async () => {
    await page.hover('.list-title')
    await page.click('.list-title svg[data-icon="trash"]')

    const channelList = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText))
    expect(channelList).toHaveLength(1)
  }, 15000)

  test('Should rename channel', async () => {
    await page.click('.list-title')
    await page.click('#editable-title[name="channel-name"]')
    await page.keyboard.press('End')
    await backspace(16)
    await page.type('#editable-title[name="channel-name"]', 'White all roles')

    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click())
    await page.waitFor(500)
    const channelNames = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText))

    expect(channelNames[0]).toEqual('White all roles')
  }, 15000)

  test('Should add white as participant of channel', async () => {
    // react select inputs
    const inputs = await page.$$('.css-10nd86i')
    await inputs[0].click()

    await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click())

    await page.click('svg[data-icon="check"]')
  }, 15000)

  test('Should have white force, all roles & Chat if empty in table', async () => {
    const tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText))

    expect(tablecells[0]).toEqual('White')
    expect(tablecells[1]).toEqual('All roles')
    expect(tablecells[2]).toEqual('Chat if empty')
  }, 15000)

  test('Should add white, Game control with Daily intentions as participant of channel', async () => {
    // react select inputs
    const inputs = await page.$$('.css-10nd86i')

    // css-wqgs6e highlighted item (if first item)
    // css-v73v8k items that aren't highlighted.

    await inputs[0].click()
    await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click())

    // roles select
    await inputs[1].click()
    await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Game Control').click())

    // templates select
    await inputs[2].click()
    await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Daily intentions').click())

    await page.click('svg[data-icon="check"]')
  }, 15000)

  test('Should have white force, Game Control & Daily Intentions in table', async () => {
    const tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText))

    expect(tablecells[4]).toEqual('White')
    expect(tablecells[5]).toEqual('Game Control')
    expect(tablecells[6]).toEqual('Daily intentions')
  }, 15000)

  test('Should set participant row to edit', async () => {
    await page.click('svg[data-icon="pencil-alt"]')

    const tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText))

    expect(tablecells[0]).toEqual('White')
    expect(tablecells[1]).toEqual('Select...')
    expect(tablecells[2]).toEqual('Select...')
  }, 15000)

  test('Should cancel edit of participant row', async () => {
    await page.click('svg[data-icon="undo-alt"]')

    const tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText))

    expect(tablecells[0]).toEqual('White')
    expect(tablecells[1]).toEqual('All roles')
    expect(tablecells[2]).toEqual('Chat if empty')
  }, 15000)

  test('Should set participant row to edit', async () => {
    await page.click('svg[data-icon="pencil-alt"]')

    const tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText))

    expect(tablecells[0]).toEqual('White')
    expect(tablecells[1]).toEqual('Select...')
    expect(tablecells[2]).toEqual('Select...')
  }, 15000)

  test('Should confirm edit of participant row', async () => {
    await page.click('svg[data-icon="check"]')

    const tablecells = await page.evaluate(() => [...document.querySelectorAll('td')].map((cell) => cell.innerText))

    expect(tablecells[0]).toEqual('White')
    expect(tablecells[1]).toEqual('All roles')
    expect(tablecells[2]).toEqual('Chat if empty')
  }, 15000)

  test('Should delete second row in table', async () => {
    let tablerows
    tablerows = await page.evaluate(() => [...document.querySelectorAll('tr')].map((row) => row.innerText))

    expect(tablerows.length).toBe(4)

    const deleteIcons = await page.$$('svg[data-icon="trash"]')
    await deleteIcons[1].click()

    tablerows = await page.evaluate(() => [...document.querySelectorAll('tr')].map((row) => row.innerText))

    expect(tablerows.length).not.toBe(4)
  }, 15000)

  test('Should show unsaved changes dialogue box', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click())
    await page.waitFor('.modal')

    const modalWarning = await page.evaluate(() => document.querySelector('.modal h3').innerText)
    expect(modalWarning).toEqual('Are you sure?')

    const modalWarning2 = await page.evaluate(() => document.querySelector('.modal p').innerText)
    expect(modalWarning2).toEqual('There are unsaved changes.')
  }, 15000)

  test('Should cancel unsaved changes dialogue box', async () => {
    await page.click('button[name="cancel"]')
  }, 15000)

  test('Should save channel', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click())
    await page.waitFor(200)

    const saveNotification = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(saveNotification).toEqual('channel saved.')
  }, 15000)

  test('Should add another channel', async () => {
    await page.waitFor(2500)

    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'ADD CHANNEL').click())
    await page.waitFor('.list-title')

    const channelList = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText))
    expect(channelList).toHaveLength(2)
  }, 15000)

  test('Should rename current channel', async () => {
    await page.click('#editable-title[name="channel-name"]')
    await page.keyboard.press('End')
    await backspace(16)
    await page.type('#editable-title[name="channel-name"]', 'Global chat')

    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click())
    await page.waitFor(500)
    const channelNames = await page.evaluate(() => [...document.querySelectorAll('.list-title')].map((channel) => channel.innerText))

    expect(channelNames[1]).toEqual('Global chat')
  }, 15000)

  test('Should add white and red as participants of channel', async () => {
    // react select inputs
    const inputs = await page.$$('.css-10nd86i')

    await inputs[0].click()
    // react select options
    await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'White').click())

    await page.click('svg[data-icon="check"]')

    await inputs[0].click()
    // react select options
    await page.evaluate(() => [...document.querySelectorAll('.css-11unzgr div')].find((option) => option.innerText === 'Red force').click())

    await page.click('svg[data-icon="check"]')
  }, 15000)

  test('Should save channel', async () => {
    await page.evaluate(() => [...document.querySelectorAll('.link')].find((button) => button.innerText === 'SAVE CHANNEL').click())
    await page.waitFor(200)

    const saveNotification = await page.evaluate(() => document.querySelector('#notification').innerText)
    expect(saveNotification).toEqual('channel saved.')
  }, 15000)
})

// afterAll(async () => {
//
//   // Delete wargame after testing
//   await page.click('#home-btn');
//   await page.hover('.searchlist-title');
//   await page.click('.wargame-option-menu-btn');
//
//   await page.evaluate(() => {
//     [...document.querySelectorAll('.wargame-option-menu span')][3].click();
//   });
//
//   await page.click('button[name="delete"]');
// });
