interface Item {
  uniqid: string | number
  [property: string]: any
}

export type type = 'empty' | 'group' | 'group-out'

export default interface PropTypes {
  item: Item
  type?: type
  title?: string
  description?: string
  onStart?: (item: Item) => void
  onEnd?: (item: Item) => void
  onSet?: (item: Array<Item>, type: type) => void
  active?: string | number
  mouse?: { x: number, y: number }
}
