import getTemplateById from '../getTemplateById'
import { MessageTemplatesMock, MessageTemplatesMockByKey } from 'src/mocks'

describe('getTemplateById:', () => {
  it('find template by template._id from templates array or from templates object[_id]', () => {
    expect(getTemplateById(MessageTemplatesMock, 'k16eedki')).toEqual(MessageTemplatesMock[6])
    expect(getTemplateById(MessageTemplatesMockByKey, 'k16eedki')).toEqual(MessageTemplatesMockByKey.k16eedki)
    expect(getTemplateById(MessageTemplatesMock, 'wrongid')).toEqual(undefined)
    expect(getTemplateById(MessageTemplatesMockByKey, 'wrongid')).toEqual(undefined)
  })
})
