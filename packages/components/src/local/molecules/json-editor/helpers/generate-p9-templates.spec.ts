import { generateTemplate } from './generate-p9-templates'
import { coreTemplate } from './p9-core'

it('generates full contact for polygon & point', () => {
  const res = generateTemplate('first', coreTemplate)
  expect(res).toBeTruthy()
  console.log(res)
})
