export default interface Props {
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * The method for posting messages out of the component
   */
   postBack?: {(messageType: string): void}
  /**
   * The method for posting messages out of the component on text change
   */
   chatInputvalue: (value: string) => string
   onMessageChange?: (value: string, messageType: string) => void
   /**
   * Container element ref
   */
   ref?: React.Ref<any>
}
