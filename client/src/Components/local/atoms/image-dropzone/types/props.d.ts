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
  /**
   * Custom upload url if not exist then will used base64
   */
  iconUploadUrl?: string
  /**
   * Use base64 if server down or on wrong url
   */
  use64onApiEror?: boolean
}
