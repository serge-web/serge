export default interface PropTypes {
  /**
   * Image dropzone header title
   */
  title?: string
  /**
   * Callback on icon change event
   */
  onChange?: (src: string) => void
  /**
   * Size limit of the uploaded image in bytes
   */
  limit: number
}
