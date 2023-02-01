import React from 'react'
import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  /** list of assets to show */
  assets: AssetRow[]
  /** color for this force */
  forceCol: string
  /** flag for if this is list of op-for, since we
   * don't show range-rings for op-for
   */
  opFor: boolean
  /** ids of currently selected assets (don't get clustered, and shown with flashing highlight) */
  selectedAssets: string[]
  /** ids of current assets - which don't get clustered */
  currentAssets: string[]
  /** if selected assets are modified (by click) fire thie callback */
  setSelectedAssets: React.Dispatch<React.SetStateAction<string[]>>
  /** whether the assets are clickable */
  interactive?: boolean
}
