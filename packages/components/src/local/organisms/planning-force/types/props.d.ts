import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  assets: AssetRow[]
  /** TEMPORARY flag used to provide styling for op for icons
   * Will not be necessary once we have PHASE-2 icons
   */
  opFor: boolean
  /** shade to use for clusters for this force */
  forceColor: string
  /** id of selected asset (not clustered, highlighted with pulsing) */
  selectedAssets: string[]
  /** current assets (not clustered) */
  currentAssets: string[] | undefined
  setSelectedAssets: (assets: string[]) => void
  interactive?: boolean
  /** name of this force */
  label: string
  /** whether to cluster icons */
  clusterIcons: boolean
  /** whether to hide asset name for icon */
  hideName?: boolean
  /** whether to paint Mez rings */
  showMezRings: boolean
  /** whether to show icons data (way of turning off this layer) */
  showData: boolean
}
