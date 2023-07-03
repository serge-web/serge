export interface Item {
  name: string
  [property: string]: any
}

export default interface PropTypes {
  items: Array<Item>
  onClick?: (item: Item) => null
  onChange?: (items: Array<Item>) => null
}
