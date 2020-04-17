import { Grid, Hex } from 'honeycomb-grid'

export default interface PropTypes {
  /** 
   * hex cells for this scenario
   */
  gridCells: Grid<Hex<{}>> 
  /**
   * forces in this wargame
   */
  forces: any
  /**
   * force of player viewing the data
   */
  playerForce: string
}