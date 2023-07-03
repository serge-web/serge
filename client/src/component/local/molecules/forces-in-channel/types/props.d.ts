import { CoreMessage } from '@serge/custom-types'

export default interface Props {
  /**
   * List of icons generated from each force's icon
   */
  icons: Array<string>
  /**
   * List of colors generated from each force's color
   */
  colors: Array<string>
  /**
   * List of force names
   */
  names: Array<string>
   /**
   * Callback on mark all as read button click event
   */
  onMarkAllAsRead?: { (): void }
  /**
   * Messages in the chahnel. Used to determine whether to
   * show `Mark all as read` button
   */
  messages?: CoreMessage[]
}
