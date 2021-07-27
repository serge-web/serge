import { TemplateBody } from "./template";

export interface TemplateBodysByKey { [property: string]: TemplateBody }

interface MessageTypes {
  loadingDb: boolean
  isLoading: boolean
  messages: TemplateBody[]
  messagesByKey: TemplateBodysByKey
}

export default MessageTypes