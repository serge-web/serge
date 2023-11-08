import React from 'react'
export default interface Props {
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * The method for posting messages out of the component
   */
  postBack?: { (): void }
  /**
   * The method for posting messages out of the component on text change
   */
  onMessageChange?: (value: string) => void
  /**
  * Container element ref
  */
  ref?: React.Ref<any>

  onCancel?: () => void
}
