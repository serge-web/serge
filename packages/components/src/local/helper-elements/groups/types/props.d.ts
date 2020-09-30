export interface GroupItem {
  uniqid: string | number
  hosting?: Array<GroupItem>
  comprising?: Array<GroupItem>
  [property: string]: any
}

export type NodeType = 'empty' | 'group' | 'group-out'

export default interface PropTypes {
  items?: Array<GroupItem>
  maxDepth?: number
  renderContent?: (item: GroupItem, depth: Array<GroupItem>) => {}
  onSet?: (item: Array<GroupItem>, type: NodeType, depth: Array<GroupItem>) => void
  /** helper function to indicate if draggingItem can be combined with item
   */
  canCombineWith?: (draggingItem: GroupItem, item: GroupItem, parents: Array<GroupItem>, type: NodeType) => boolean
}
