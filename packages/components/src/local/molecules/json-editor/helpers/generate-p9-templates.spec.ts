import { generateAllTemplates, generateTemplate } from './generate-p9-templates'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'

it('generates full contact for polygon & point', () => {
  const res = generateTemplate('first', true, coreTemplate, landTemplate, 'tmplTransit')
  expect(res).toBeTruthy()
  console.log(res)
})

it('generates full contact for polygon & point', () => {
  const res = generateAllTemplates()
  expect(res).toBeTruthy()
  console.log(res)
})
