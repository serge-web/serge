// import ForceData from './force-data'

/**
 * items that are manipulated via drag/drop in the WorldState panel
*/
export default interface GroupItem {
  /** 
   * id number for this asset
   */
  readonly uniqid: string | number
  /**
   * platforms hosted on this platform
   */
  hosting?: Array<GroupItem>
  /**
   * platforms contained in this group
   */
  comprising?: Array<GroupItem>
  /** 
   * other properties 
   * TODO: I think GroupItem should actually be extending Route.  We should reflect
   * that here, so that the Route parameters become accessible
   */
  [property: string]: any
}
