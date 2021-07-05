interface DropItem {
  readonly uniqid: string | number
  [property: string]: any
}

export type DropType = 'empty' | 'group' | 'group-out'

export default interface PropTypes {
  item: DropItem
  type?: DropType
  title?: string
  description?: string
  onStart?: (item: DropItem) => void
  onEnd?: (item: DropItem) => void
  onSet?: (item: Array<DropItem>, type: DropType) => void
  active?: string | number
  mouse?: { x: number, y: number }
  // do not allow to drag item in to dropzone
  disable?: boolean
  // do not render dropzone - use as static html
  disableDrag?: boolean
  group?: string
}
