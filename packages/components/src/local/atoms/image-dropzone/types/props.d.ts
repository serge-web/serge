export default interface PropTypes {
  /**
   * Image dropzone header title
   */
  title?: string
  /**
   * Callback on icon change event
   */
  onChange?: (src: string, file?: any) => void
  /**
   * Callback on rejected icon change event
   */
  onRejected?: (rejected: any) => void
  /**
   * Size limit of the uploaded image in bytes
   */
  limit: number
}
