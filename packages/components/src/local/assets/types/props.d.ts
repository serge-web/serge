export interface PropTypes {
  /**
   * forces in this wargame
   */
  forces: any,
  /**
   * types of platform in wargame
   */
  platform_types: any,
  /**
   * Force for the current player
   */
  force: string,
  /**
   * View data as another force
   */
  view_as: string
}

export interface AssetInfo {
  position: [number, number],
  name: string,
  force: string,
  type: string
}