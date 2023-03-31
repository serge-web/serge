import { Asset, GroupItem } from '@serge/custom-types'
import React from 'react'

export type NodeType = 'empty' | 'group' | 'group-out'

export default interface PropTypes {
  items?: Array<GroupItem>
  maxDepth?: number
  renderContent?: (item: GroupItem, depth: Array<GroupItem>) => React.ReactElement
  onSet?: (item: Array<GroupItem>, type: NodeType, depth: Array<GroupItem>) => void
  /** helper function to indicate if draggingItem can be combined with item
   */
  canCombineWith?: (draggingItem: GroupItem, item: GroupItem, parents: Array<GroupItem>, type: NodeType) => boolean
  /**
   * whether the current user can reorganise the assets
   */
  canOrganise?: boolean
  group?: string
  setList?: (newList: GroupItem) => void
  onDeleteAsset?: ((newList: (item: GroupItem) => void, item: GroupItem) => void)
  selectedAssetItem?: Asset
}
