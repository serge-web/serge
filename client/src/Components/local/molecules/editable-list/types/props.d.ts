export interface Item {
  name?: string
  [property: string]: any
}

export default interface PropTypes {
  items: Array<Item>
  onClick?: (item: Item) => void
  onCreate?: (buttonText: string | undefined) => void
  onDuplicate?: (item: Item) => void
  onDelete?: (item: Item) => void
  title?: string
  qaType?: string
  selectedItem?: string
  filterKey?: string
  labelKey?: string
  searchLabel?: string
  withSearch?: boolean
}
