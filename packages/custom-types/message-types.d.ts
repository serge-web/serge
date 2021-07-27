import { TemplateBody } from "./template";

export interface TemplateBodysByKey { [property: string]: TemplateBody }

interface MessageTypes {
  isLoading: boolean
  messages: TemplateBody[]
  messagesByKey: TemplateBodysByKey
}

export default MessageTypes