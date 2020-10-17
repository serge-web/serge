import { ButtonTypeMap } from '@material-ui/core/Button'

type ButtonType = ButtonTypeMap['props']
type Icons = 'add' | 'save'
export default interface Props extends ButtonType {
  /**
   * Button custom types
   */
  type?: 'warning' | 'charcoal' | undefined
  /**
   * Button start icon
   */
  icon?: Icons
}
