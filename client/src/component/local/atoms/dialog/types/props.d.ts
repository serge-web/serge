import { DialogProps } from '@material-ui/core'

export type Props = DialogProps & {
  /**
   * dialog title
   */
  title: string

  /**
   * dialog initial value
   */
  value?: string

  /**
   * on save callback
   */
  onSave?: (data: string) => void

  /**
   * on cancel callback
   */
  onClose?: () => void

  /**
   * on change callback
   */
  onValueChange?: (value: string) => void
}
