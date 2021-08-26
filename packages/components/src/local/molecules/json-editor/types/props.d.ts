import { MessageCustom, TemplateBody } from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  getJsonEditorValue?: (value: {[property: string]: any}) => void
  message: MessageCustom
  messageTemplates: TemplateBody[]
  disabled: boolean
}
