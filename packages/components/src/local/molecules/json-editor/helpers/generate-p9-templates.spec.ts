import { generateTemplate } from './generate-p9-templates'
import { coreTemplate } from './p9-core'
import { landTemplate } from './p9-land'

it('generates full contact for polygon & point', () => {
  const res = generateTemplate('first', coreTemplate, landTemplate)
  expect(res).toBeTruthy()
  console.log(res)
})
