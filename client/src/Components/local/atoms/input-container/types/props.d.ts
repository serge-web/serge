import React from 'react'

export default interface PropTypes {
  /**
   * The name of the input label
   */
  label?: string
  /**
   * The color of the input label,
   * Should be one of the palette values defined in Material-UI default theme
   * https://material-ui.com/customization/default-theme/#default-theme
   * or its extended custom colors from the theme configuration (themes/serge)
   */
  labelColor?: string
  /**
   * The size of the input label
   */
  labelSize?: string | number
  /**
   * disable offset for input container
   */
  disableOffset?: boolean
  /**
   * add custom classname for section
   */
  className?: string
  /**
   * Container element ref
   */
  ref?: React.Ref<any>
  /**
   * Optional full width variant
   */
  fullWidth?: boolean
  /**
   * Is isPrivate input?
   */
  isPrivate?: boolean
}
