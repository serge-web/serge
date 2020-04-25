import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'

export default interface PropTypes {
  /** 
   * name of this platform 
   */
  name: string
  /**
   * the grid of hex cells
   */
  gridCells?: SergeGrid<SergeHex<{}>>
  /** 
   * current position of this asset (hex coords)
   */
  location: string
  /** 
   * past positions for this asset 
   */
  history: [any]
  /** 
   * planned turns for this asset
   */
  planned: [any]
  /** 
   * whether to show trimmed or full routes
   */
  trimmed: boolean
  /** 
   * color for this route
   */
  color: string
  /** 
   * if this is for the selected track
   */
  selected: boolean
}
