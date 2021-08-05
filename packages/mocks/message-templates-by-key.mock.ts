import { MessageTemplatesMock } from ".";
import { TemplateBodysByKey } from "../custom-types";

const MessageTemplatesMockByKey: TemplateBodysByKey = {}

for (const template of MessageTemplatesMock) {
  MessageTemplatesMockByKey[template._id] = template
}

export default MessageTemplatesMockByKey