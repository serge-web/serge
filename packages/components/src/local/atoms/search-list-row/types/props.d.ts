export default interface Props {
  /**
   * Active status of the list row
   */
  active: boolean
  /**
   * Callback on list row click event
   */
  onClick: () => void
  /**
   * Callback on duplicate menu click event
   */
  onDuplicate?: () => void
  /**
   * Callback on delete menu click event
   */
  onDelete?: (event: MouseEvent<SVGSVGElement>) => void
  /**
   * The title text or node
   */
  children: any
}
