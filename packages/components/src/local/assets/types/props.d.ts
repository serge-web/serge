import SergeHex from '../../mapping/types/serge-hex'
import SergeGrid from '../../mapping/types/serge-grid'

export default interface PropTypes {
  /** 
   * hex cells for this scenario
   */
  gridCells: SergeGrid<SergeHex<{}>> 
  /**
   * forces in this wargame
   */
  forces: any
  /**
   * force of player viewing the data
   */
  playerForce: string
}