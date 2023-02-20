import { AttributeTypes, ForceData, PlatformTypeData } from '@serge/custom-types'
import { ForceStyle, PlatformStyle } from '@serge/helpers'
import { Column } from '@material-table/core'
import { LatLng } from 'leaflet'

export type AssetRow = {
  id: string
  icon: string
  /* the milSymbol for this asset type */
  sidc?: string
  name: string
  platformType: string
  subType: string
  parentId?: string
  force?: string
  owner?: string
  position?: LatLng
  tableData?: { checked: boolean }
  health?: number
  c4: string
  attributes: Record<string, any>
  domain: string
  taskGroup: string
  // how long since last update
  lastUpdated: string
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
  onVisibleColumnsChange?: (columns: Column<any>[]) => void
  /**
   *  set of assets visible to me
   */
  assets: AssetRow[]
  /** platform type definitions */
  platformTypes: PlatformTypeData[]
  /** generic attribute types */
  attributeTypes: AttributeTypes
}
