/**
 * list the forms that can be displayed when an asset is selected
 */
export enum MapBarForms {
  /* Umpire is adjudicating world  */
  Adjudicaton = 'adjudicate',
  /* Player is planning their next turn */
  Planning = 'planning',
  /** player updating perception of target */
  Perception = 'perception',
  /** Umpire changing visibility of asset */
  Visibility = 'visibility',
  /** Umpire editing map annotation */
  Marker = 'marker'
}
