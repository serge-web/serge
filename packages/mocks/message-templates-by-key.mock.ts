import { MessageTemplatesMock } from ".";
import { TemplateBodysByKey } from "../custom-types";

const MessageTemplatesMockByKey: TemplateBodysByKey = {}

for (const template of MessageTemplatesMock) {
  MessageTemplatesMockByKey[template.title] = template
}

export default MessageTemplatesMockByKey