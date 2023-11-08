import { ButtonProps } from '@material-ui/core/Button'

type Icons = 'add' | 'save' | 'delete' | 'edit' | 'copy' | 'functions'
export type Props = ButtonProps & {
  /**
   * Button custom color
   */
  customColor?: 'warning' | 'charcoal' | string
  /**
   * Button start icon
   */
  icon?: Icons
  /**
   * Button predefined custom variant
   */
  customVariant?: 'form-action' | string
}
