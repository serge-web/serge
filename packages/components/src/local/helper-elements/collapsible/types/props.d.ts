import { ReactNodeArray } from 'react'

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
  children: ReactNodeArray
  openByDefault?: boolean
}
