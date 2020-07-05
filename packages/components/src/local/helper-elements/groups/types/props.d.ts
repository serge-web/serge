interface Item {
  uniqid: string | number
  hosting?: Array<Item>
  comprising?: Array<Item>
  [property: string]: any
}

export type type = 'empty' | 'group' | 'group-out'

export default interface PropTypes {
  items?: Array<Item>
  maxDepth?: number
  renderContent?: (item: Item, depth: Array<Item>) => {}
  onSet?: (item: Array<Item>, type: type) => void
}
