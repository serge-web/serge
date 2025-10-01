import puppeteer from 'puppeteer'

export default async function initSetup () {
  let browser
  let page
  const networks = {}
  const delays = {}

  browser = await puppeteer.launch({
    headless: false,
    slowMo: 25
  })
  page = await browser.newPage()
  networks.updateWargame = async () => {
    await page.waitForResponse(response => {
      const request = response.request()
      return request.url().endsWith('initial_wargame') && request.method() === 'PUT' && response.status() === 201
    })
  }
  networks.fetchWargame = async () => {
    await page.waitForResponse(response => {
      const request = response.request()
      return request.url().endsWith('initial_wargame?') && request.method() === 'GET' && response.status() === 200
    })
  }
  networks.getAllWargames = async () => {
    await page.waitForResponse(response => {
      const request = response.request()
      return request.url().endsWith('_all_docs?descending=true&include_docs=true') && request.method() === 'GET' && response.status() === 200
    })
  }
  networks.getChanges = async () => {
    await page.waitForResponse(response => {
      const request = response.request()
      return request.url().endsWith('_changes?include_docs=true&feed=longpoll&since=3&limit=25') && request.method() === 'GET' && response.status() === 200
    })
  }
  networks.postNewMessage = async () => {
    await page.waitForResponse(response => {
      const request = response.request()
      const pathRegex = /wargame-(.*)\/[\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}%3A[\d]{2}%3A[\d]{2}\.[\d]+Z$/gi
      return request.url().match(pathRegex) && request.method() === 'PUT' && response.status() === 201
    })
  }
  delays.preTest = async () => await page.waitFor(2500)
  delays.pause = async () => await page.waitFor(1500)

  return {
    page,
    networks,
    delays
  }
}
