import { AttributeTypes, ForceData, PlatformTypeData } from '@serge/custom-types'
import { ForceStyle, PlatformStyle } from '@serge/helpers'
import { LatLng } from 'leaflet'

export type AssetRow = {
  id: string
  icon: string
  name: string
  platformType: string
  parentId?: string
  force?: string
  owner?: string
  position?: LatLng
  tableData?: { checked: boolean }
  health?: number
  attributes: Record<string, any>
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
  /** platform type definitions */
  platformTypes: PlatformTypeData[]
  /** generic attribute types */
  attributeTypes: AttributeTypes
}
