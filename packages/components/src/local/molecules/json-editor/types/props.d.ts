import { MessageCustom, MessageStructure, TemplateBodysByKey } from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  /** 
   * handler for any text change 
   */
  storeNewValue?: (value: { [property: string]: any }) => void
  /**
   * content of message
   */
  messageContent: MessageStructure
  /**
   * id for message (used for tracking message read)
   */
  messageId: string
  /**
   * template
   */
  template: string
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
  /** current game time, used for initialising date-time controls */
  gameDate: string
  /** disable/enable Array tools with form */
  disableArrayToolsWithEditor?: boolean
}
