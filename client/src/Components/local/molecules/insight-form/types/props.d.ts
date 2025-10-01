export default interface Props {
  /**
   * Callback on cancel button click event
   */
  onCancel: VoidFunction
  /**
   * Callback on send button click event
   */
  onSend: (message: { message: string, name: string }) => void
  /**
   * Whether to show form in dark mode
   */
  darkMode?: boolean
}
