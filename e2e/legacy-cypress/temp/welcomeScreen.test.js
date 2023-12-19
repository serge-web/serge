import puppeteer from 'puppeteer'
import { DEFAULT_SERVER } from '../consts'

let browser
let page

// const backspace = async (qty) => {
//   for (let i = 0; i < qty; i++) {
//     await page.keyboard.press('Backspace')
//   }
// }

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

describe('Welcome screen edit page', () => {
  test('Login to Serge', async () => {
    await page.goto('localhost:8080/serge/admin')
    await page.waitForSelector('.material-input')
    await page.click('.material-input')
    await page.type('input[type=password]', DEFAULT_SERVER) // cannot import consts file as import statements
    await page.click('.link')
    await page.waitFor('h2')

    const title = await page.evaluate(() => document.querySelector('h2').innerText)

    expect(title).toEqual('Games')
  }, 15000)

  test('Go to welcome screen page', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find((tab) => tab.innerText === 'WELCOME SCREEN').click()
    })

    const title = await page.evaluate(() => document.querySelector('h1').innerText)

    expect(title).toEqual('Welcome Screen')
  }, 15000)

  test('Click upload image button', async () => {
    await page.click('.image-upload-link')
    await page.waitFor('.modal')

    // click outside of modal to exit
    await page.click('.image-upload-link')
  }, 15000)

  test('Edit title', async () => {
    await page.click('input[title="Click to edit"]')

    await page.evaluate(() => document.querySelector('input[title="Click to edit"]').value = '')

    await page.type('input[title="Click to edit"]', 'end to end')
  }, 15000)

  test('Edit Serge description text', async () => {
    await page.click('.description')
    await page.click('.description-edit')

    await page.evaluate(() => document.querySelector('.description-edit').value = '')

    await page.type('.description-edit', 'This is a new description for the game.')

    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find((tab) => tab.innerText === 'DONE').click()
    })
  }, 15000)

  test('Should save welcome screen information', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find((tab) => tab.innerText === 'SAVE CHANGES').click()
    })
  }, 15000)

  test('should navigate away from and back to check data saved', async () => {
    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find((tab) => tab.innerText === 'GAMES').click()
    })

    await page.waitFor(200)

    await page.evaluate(() => {
      [...document.querySelectorAll('.link')].find((tab) => tab.innerText === 'WELCOME SCREEN').click()
    })

    await page.waitFor(200)

    const title = await page.$eval('input[title="Click to edit"]', el => el.value)

    expect(title).toEqual('end to end')

    const description = await page.$eval('.description .paragraph', el => el.innerText)

    expect(description).toEqual('This is a new description for the game.')
  }, 15000)
})
