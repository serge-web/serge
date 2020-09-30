import ForceData from './force-data'

/**
 * items that are manipulated via drag/drop in the WorldState panel
*/
export default interface GroupItem {
  /** 
   * id number for this asset
   */
  uniqid: string | number
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
   */
  [property: string]: any
}