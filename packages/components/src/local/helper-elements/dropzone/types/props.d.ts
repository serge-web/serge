interface Item {
  uniqid: string | number
  [property: string]: any
}

export default interface PropTypes {
  item: Item
  type?: 'empty' | 'group' | 'group-out'
  title?: string
  description?: string
  onStart?: (item: Item) => void
  onEnd?: (item: Item) => void
  onSet?: (item: Item) => void
  active?: string | number
  mouse?: { x:number, y: number }
}
