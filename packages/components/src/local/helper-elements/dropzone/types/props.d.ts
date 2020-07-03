interface Item {
  uniqid: string | number
  [property: string]: any
}

export default interface PropTypes {
  item: Item
  type?: 'empty' | 'group' | 'group-out'
  title?: string
  description?: string
}
