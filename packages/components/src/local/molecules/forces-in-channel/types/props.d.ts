export default interface Props {
  /**
   * List of icons generated from each force's icon
   */
  icons: Array<string>
  /**
   * Callback on mark all as read button click event
   */
  onMarkAllAsRead: {(): void}
}
