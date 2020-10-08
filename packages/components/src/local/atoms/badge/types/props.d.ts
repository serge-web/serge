import { ChipProps } from '@material-ui/core/Chip'

export default interface Props extends ChipProps{
  /**
   * Badge custom types
   */
  type?: 'warning' | 'charcoal' | undefined
}
