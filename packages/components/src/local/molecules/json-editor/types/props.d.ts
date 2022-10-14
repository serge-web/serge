import { MessageCustom, MessageStructure } from '@serge/custom-types'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  /**
   * handler for any text change
   */
  storeNewValue?: (value: { [property: string]: any }) => void
  /**
   * content of message
   */
  messageContent: MessageStructure | null
  /**
   * id for message (used for tracking message read)
   */
  messageId: string
  /**
   * template ID
   */
  template: TemplateBody
  /**
   * title to display above the form
   */
  title?: string
  cachedName?: string | boolean
  clearCachedName?: Dispatch<SetStateAction<string>>
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
  formClassName?: string
  /**
   *  method to customize template, potentially filling any drop-downs
   */
  customiseTemplate?: { (schema: Record<string, any>): Record<string, any> }
}
