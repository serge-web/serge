export interface Item {
  name: string
  [property: string]: any
}

export default interface PropTypes {
  items: Array<Item>
  onClick?: (item: Item, e?: any) => void
  onChange?: (items: Array<Item>) => void
  onCreate?: () => void
  title?: string
}
