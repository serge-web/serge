import { ForceData, ForceOption } from '@serge/custom-types'

export default interface PropTypes {
  /**
   * The label to show on the form section
   */
  label?: string
  /**
   * The name of the input, if no input is selected, label is used instead.
   * Should match the value of 'populate' that should be updated in state.
   */
  name?: string
  /**
   * The list of options available to the form section
   */
  options: ForceOption[]
  /**
   * The id's of selected items
   */
  value: Array<ForceData['uniqid']>
  /**
   * Sets the onChange state on a parent
   */
  onChange?: (data: Array<ForceData['uniqid']>) => void
  /*
   * disable offset for input container
   */
  disableOffset?: boolean
  className?: string
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top'
}
