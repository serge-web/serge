import { COLLASIBLE_DEFAULT_ICON, COLLASIBLE_CHANNEL_ICON } from '../'

export type IconType = typeof COLLASIBLE_DEFAULT_ICON | typeof COLLASIBLE_CHANNEL_ICON

export default interface PropTypes {
  onClick?: any
  collapsed?: boolean
  onExpand?: (status?: boolean) => void
  hasContent?: boolean
  collapseOnDragHover?: boolean
  iconType?: IconType
}
