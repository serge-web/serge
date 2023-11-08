import { MessageTemplatesMock } from '.'
import { TemplateBodysByKey } from '../custom-types'

export const MessageTemplatesMockByKey: TemplateBodysByKey = {}
export const MessageTemplatesMoskByTitle: TemplateBodysByKey = {}

for (const template of MessageTemplatesMock) {
  MessageTemplatesMockByKey[template._id] = template
  MessageTemplatesMoskByTitle[template.title] = template
}
