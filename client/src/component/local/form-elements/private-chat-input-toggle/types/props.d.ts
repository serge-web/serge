import React from 'react'
export default interface Props {
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * The method for posting messages out of the component
   */
  postBack?: { (value: string): void }
  /**
   * Post messages when ctrl + enter key pressed
   */
  sendMessage?: { (value?: string): void }
  /**
   * Container element ref
   */
  ref?: React.Ref<any>
}
