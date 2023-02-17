import { AssetRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  assets: AssetRow[]
  /** TEMPORARY flag used to provide styling for op for icons
   * Will not be necessary once we have PHASE-2 icons
   */
  opFor: boolean
  /** shade to use for clusters for this force */
  forceColor: string
  /** current assets (not clustered) */
  currentAssets: string[]
  setSelectedAssets: (assets: string[]) => void
  interactive?: boolean
  /** name of this force */
  label: string
  /** whether to cluster icons */
  clusterIcons: boolean
}
