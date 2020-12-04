import { ButtonProps } from '@material-ui/core/Button'

type Icons = 'add' | 'save' | 'delete' | 'edit' | 'copy'
export type Props = ButtonProps & {
  /**
   * Button custom color
   */
  customColor?: 'warning' | 'charcoal' | string
  /**
   * Button start icon
   */
  icon?: Icons
}
