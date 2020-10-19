export interface Item {
  name: string
  [property: string]: any
}

export default interface PropTypes {
  items: Array<Item>
  onClick?: (item: Item, key: number, e?: any) => void
  onChange?: (items: Array<Item>) => void
  onCreate?: () => void
  title?: string
  search?: boolean
}
