import { MessageCustom, MessageStructure, TemplateBody, TempletCreatorBody } from '@serge/custom-types'
import { EditCallback } from '../helpers/setupEditor'

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  /**
   * handler for any text change
   */
  storeNewValue?: (value: { [property: string]: any }) => void
  /**
   * content of message
   */
  messageContent?: MessageStructure
  /**
   * id for message (used for tracking message read)
   */
  messageId: string
  /**
   * template ID
   */
  template: TemplateBody | TempletCreatorBody
  /**
   * title to display above the form
   */
  title?: string
  saveMessage?: () => void
  onCancelEdit?: () => void
  confirmCancel?: boolean
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
  /** flag from parent class to clear the form, possibly on
   * send or cancel. The value toggles between states on update,
   * rather than requiring a specific true/false value
   */
  clearForm?: boolean
  /** current game time, used for initialising date-time controls */
  // NOTE: provide game date using `customiseTemplate` helper. This allows
  // you to specify the default value in the schema, rather than the document itself
  // in that way - validation can be applied to the field - forcing the user
  // to enter dates
  gameDate?: string
  /** disable/enable Array tools with form */
  disableArrayToolsWithEditor?: boolean
  formClassName?: string
  formId?: string
  viewSaveButton?: boolean
  /**
   *  method to customize template, potentially filling any drop-downs
   */
  customiseTemplate?: { (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }

  /**
   *  modify document prior to rendering in JSON editor
   */
  modifyForEdit?: { (document: Record<string, any>): Record<string, any> }

  /**
   *  modify document prior to being stored
   */
  modifyForSave?: { (document: Record<string, any>): Record<string, any> }

  /**
   *  user has clicked on custom edit button
   */
  editCallback?: EditCallback

  onLocationEditorLoaded?: (editorElm: HTMLDivElement) => void
}
