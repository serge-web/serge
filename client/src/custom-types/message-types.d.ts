import { TemplateBody } from "./template";

export interface TemplateBodysByKey { [property: string]: TemplateBody }

interface MessageTypes {
  isLoading: boolean
  messages: TemplateBody[]
  templatesByKey: TemplateBodysByKey
}

export default MessageTypes