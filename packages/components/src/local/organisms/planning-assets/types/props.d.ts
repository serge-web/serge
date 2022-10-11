import { ForceData } from '@serge/custom-types'
import { ForceStyle, PlatformStyle } from '@serge/helpers'
import { LatLng } from 'leaflet'

export type AssetRow = {
  id: string
  icon: string
  name: string
  condition: string
  status: string
  platformType: string
  parentId?: string
  force?: string
  owner?: string
  position?: LatLng
  tableData?: { checked: boolean }
}

export default interface PropTypes {
  /** data for this game */
  forces: ForceData[]
  /** the force to display */
  playerForce: ForceData
  /** now sure what this one is for */
  render: (assets: string[][]) => void
  /** whether to show player perspective of other forces */
  opFor: boolean
  /** list of force color codes */
  forceColors: ForceStyle[]
  /** list of platforms & styles */
  platformStyles: PlatformStyle[]
  /** selection rows callback */
  onSelectionChange?: (rows: AssetRow[]) => void
  /** visible rows change callback */
  onVisibleRowsChange?: (row: AssetRow[]) => void
  /**
   *  set of assets visible to me
   */
  assets: AssetRow[]
}
