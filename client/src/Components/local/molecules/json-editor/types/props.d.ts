import React from 'react'
import { MessageCustom, MessageStructure, TemplateBody, TempletCreatorBody } from 'src/custom-types'
import { IChangeEvent } from '@rjsf/core'

export interface FormData {
  foo?: string
  bar?: number
}

 interface ButtonOptions {
  props: {
    disabled?: boolean
    className: string
  }
  norender: boolean
  submitText?: string
  cancelText?: string
}

export type UISchemas = {
  [key: string]: ButtonOptions
}

export interface FormProps {
  uiSchema: Record<string, unknown>
  schema: Record<string, unknown>
  onSubmit?: any
  formData: formData
  widgets?: CustomWidgets
  className?: string
  onChange: (newSchema: IChangeEvent<FormData>) => void
  onSubmit: (newSchema: IChangeEvent<FormData>) => void
  validator: any
  templates?: any
  disabled: boolean
  formClassName?: string // Optional class name for the form
}

export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  /**
   * handler for any text change
   */
  storeNewValue?: (value: { [property: string]: any }) => void
  /**
   * content of message
   */
  submitNewValue?: (value: { [property: string]: any }, e: React.MouseEvent<HTMLButtonElement>) => void
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
  openCancelConfirmPopup?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
  /** flag from parent class to clear the form, possibly on
   * send or cancel. The value toggles between states on update,
   * rather than requiring a specific true/false value
   */
  clearForm?: boolean
  /** current game time, used for initialising date-time controls */
  // you to specify the default value in the schema, rather than the document itself
  // in that way - validation can be applied to the field - forcing the user
  // to enter dates
  gameDate?: string
  formClassName?: string
  viewSaveButton?: boolean
  /**
   *  modify document prior to rendering in JSON editor
   */
  modifyForEdit?: { (document: Record<string, any>): Record<string, any> }

  /**
   *  modify document prior to being stored
   */
  modifyForSave?: { (document: Record<string, any>): Record<string, any> }

}
