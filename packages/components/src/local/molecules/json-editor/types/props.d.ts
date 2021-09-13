import { MessageCustom, TemplateBodysByKey } from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  getJsonEditorValue?: (value: { [property: string]: any }) => void
  message: MessageCustom
  /**
   * dictionary of templates, indexed by template name
   */
  messageTemplates: TemplateBodysByKey
  /**
   * whether the form is editable (disable for read-only view)
   */
  disabled?: boolean
  /**
   * persist fields in local storage, restore them on render.
   * This was introduced to overcome rendering issue, but then
   * the underlying issue was fixed.
   */
  saveEditedMessage?: boolean
  /**
   * in read view (disabled) make textarea items tall enough to view all contents
   */
  expandHeight?: boolean
}
