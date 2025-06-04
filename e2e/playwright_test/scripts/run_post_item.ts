import { chromium } from '@playwright/test'

async function runPostItemScript() {
  // Get password from environment variable or use a default for local development
  const password = process.env.GOOGLE_PASSWORD || ''
  
  console.log('pwd', password)

  if (!password) {
    throw new Error('GOOGLE_PASSWORD environment variable must be set')
  }
  
  // Launch browser
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage()
  
  try {
    await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fsites.google.com%2F&followup=https%3A%2F%2Fsites.google.com%2F&ifkv=AdBytiOHH5fFA6x0iwNEDsAQ4gYdtFjUwMtyMCBK9PExe2pKUiCeQ-MlGXOePbxWFIrC9c6CBgIang&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1127657804%3A1748965749419134')
    await page.getByLabel('Email or phone').click()
    await page.getByLabel('Email or phone').fill('ian@planetmayo.com')
    await page.getByLabel('Email or phone').press('Enter')
    await page.getByLabel('Enter your password').fill(password)
    await page.getByLabel('Enter your password').press('Enter');
    // pause the script
    await page.pause()
    await page.goto('https://sites.google.com/u/0/?authuser=0');
    await page.goto('https://sites.google.com/u/0/?authuser=0&tgif=d');
    await page.locator('.docs-homescreen-grid-item-thumbnail').first().click();
    await page.getByRole('tab', { name: 'Pages' }).click();
    // get `input` field with a value of `Blog`
    const blogInput= await page.locator('input[value="Blog"]');
    console.log('blogInput', blogInput)
    // click the blogInput
    await page.getByLabel('Blog. Child pages available.').getByLabel('Page actions').click();
    await page.getByText('Add subpage').click();
    await page.getByLabel('Name', { exact: true }).fill('tmp-title');
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByLabel('', { exact: true }).click();
    await page.getByRole('tab', { name: 'Insert' }).click();
    await page.getByLabel('Text box').locator('div').first().click();
    await page.getByRole('menuitem', { name: 'Images' }).locator('div').first().click();
    await page.getByText('Select').click();
    // find a button with a role of `tab` containing a span with the text `Link`.
    const linkButton = await page.locator('button[role="tab"]').filter({ has: page.locator('span', { hasText: 'Link' }) }).first();
    console.log('linkButton', linkButton)
    await linkButton.click();
    // find the `input` with the type of `text` containing an aria-label that says `Paste URL of image...`
    const urlInput = await page.locator('input[type="text"]').filter({ has: page.locator('input', { hasText: 'Paste URL of image...' }) }).first();
    console.log('urlInput', urlInput)
    await urlInput.fill('https://i.gyazo.com/841790d916296276aace06412a65c773.gif');
    
    console.log('Script completed successfully')
  } catch (error) {
    console.error('Script failed:', error)
  } finally {
    // Close the browser
    await browser.close()
  }
}

// Run the script
runPostItemScript().catch(console.error)
