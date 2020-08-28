export default interface PropTypes {
  /**
   * left side title
   */
  title?: string
  /**
   * Disable main container padding
   */
  disableOffsets?: boolean
  /**
   * Aligin content
   */
  align?: 'left' | 'center' | 'right' | 'justify' | 'justify-center'
  /**
   * Title position
   */
  titlePosition?: 'absolute' | 'left'
}
