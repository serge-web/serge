import { ReactNodeArray } from 'react'
import { IconType } from '../header/types/props'
export interface ChildInt {
  props: {
    children: any
  }
  type: {
    displayName: string
  }
}

export default interface PropTypes {
  onClick?: any
  children?: ReactNodeArray | undefined
  openByDefault?: boolean
  collapseOnDragHover?: boolean
  header?: ChildInt
  content?: ChildInt
  iconType?: IconType
  onChange?: (status: boolean) => void
}
