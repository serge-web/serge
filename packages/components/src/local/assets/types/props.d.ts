import { Grid } from 'honeycomb-grid'
import SergeHex from '../../mapping/types/serge-hex'

export default interface PropTypes {
  /** 
   * hex cells for this scenario
   */
  gridCells: Grid<SergeHex<{}>> 
  /**
   * forces in this wargame
   */
  forces: any
  /**
   * force of player viewing the data
   */
  playerForce: string
}