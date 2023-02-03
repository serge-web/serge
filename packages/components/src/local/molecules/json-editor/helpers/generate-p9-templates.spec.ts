import { generateAllTemplates, generateTemplate } from './generate-p9-templates'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'

it('generates full contact for polygon & point', () => {
  const res = generateTemplate('first', true, coreTemplate, landTemplate, 'tmplTransit')
  expect(res).toBeTruthy()
})

it('generates full contact for polygon & point', () => {
  const res = generateAllTemplates()
  expect(res).toBeTruthy()
  expect(res.activities).toBeTruthy()
  expect(res.templates).toBeTruthy()
})
