export interface Option {
  name: string
  [property: string]: any
}
export interface Item {
  uniqid: string
  title?: string
  active?: Array<number>
  multiple?: boolean
  emptyTitle?: string
  options: Array<Option>
}

export default interface PropTypes {
  items: Array<Item>
  onChange: (nextItems: Array<Item>, changedKey: number) => Array<Item>
  onSave?: (nextItems: Array<Item>) => void
  onRemove?: () => void
  actions?: boolean
  defaultMode: 'view' | 'edit'
  noSwitchOnReset?: boolean
  isGenerator?: boolean
}
