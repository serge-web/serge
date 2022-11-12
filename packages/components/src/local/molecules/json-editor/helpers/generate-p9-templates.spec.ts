import { generateTemplate } from './generate-p9-templates'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'
import { tmplTransit } from './p9-specific'

it('generates full contact for polygon & point', () => {
  const res = generateTemplate('first', true, coreTemplate, landTemplate, tmplTransit)
  expect(res).toBeTruthy()
  console.log(res)
})
