/**
 * list the panels available for the WorldState form
 */
export enum WorldStatePanels {
  /* player performing planning (or adjudication)
   */
  Control = 'control',
  /** player updating perception of target */
  Visibility = 'visibility',
  /** map markers */
  Markers = 'markers',
  /** umpire modifying own platform */
  ControlledBy = 'controlled'
}
