import { TextFieldProps } from '@material-ui/core/TextField'

export interface ChildInt {
  props: {
    children: any
  }
  type: {
    displayName: string
  }
}

export type PropTypes = TextFieldProps & {
  /**
   * The name of the input, usually matches the state to update. If not used then a kebab-case version of the label will be used.
   */
  name?: string
  /***
   * The label of the text input
   */
  label?: string
  /**
   * The color of the input label
   */
  labelColor?: string
  /**
   * Custom color for base input border and text
   */
  customColor?: string
  /**
   * The size of the input label
   */
  labelSize?: string | number
  /**
   * Text field variants
   */
  variant?: 'standard' | 'filled' | 'outlined'
  /**
   * The default value of the input,
   * can be derived from component state or store
   */
  value?: number | string
  /**
   * The number of lines the input should have (default 1)
   */
  multiline?: boolean
  /**
   * Sets the onChange state on a parent
   */
  updateState?: any
  /**
   * The style assign to the input
   */
  className?: string
  /**
   * The placeholder of the input
   */
  placeholder?: string
  /**
   * Text input full width
   */
  fullWidth?: boolean
  /**
   * Multiline rows length
   */
  rows?: number
  /**
   * Multiline maximum rows length
   */
  maxRows?: number
  /**
   * Is the field input being used as section title as well?
   */
  titleInput?: boolean
  /**
   * Used to add a prefix, a suffix or an action to an input
   */
  endAdornment?: ChildInt
   /**
   * Is isPrivate input?
   */
  isPrivate?: boolean

  options?: any
}
