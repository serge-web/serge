export default interface Visibility {
  /** asset that is becoming visible/not visible */
  assetId: string,
  /** force that is observing asset */
  by: string,
  /** whether the asset is now visible/not visible */
  newVis: boolean
}
