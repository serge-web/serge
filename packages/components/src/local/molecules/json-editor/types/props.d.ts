import { MessageCustom, TemplateBodysByKey } from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  getJsonEditorValue?: (value: {[property: string]: any}) => void
  message: MessageCustom
  messageTemplates: TemplateBodysByKey
  disabled?: boolean
  saveEditedMessage?: boolean
}
