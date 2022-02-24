export default interface InformationMarker {
  /** 
   * label to display alongside marker 
   */
  label: string
  /** 
   * h3 index to control marker location
   */
  location: string
  /** 
   * optional extra details to show for marker
   */
  description?: string
  /** name of icon to use for marker.  Optional, if 
   * not present then plain text label shown
   */
  icon?: string
  /**
   *  color to use for icon & shading
   */ 
  color: string
  /** 
   * (optional) circle of hexes to shade around marker 
   * Either omit or use zero value for no shading
   * */
  radius?: number
  /**
   *  the forces (uniqid) that can see this marker
   */
  visibleTo: string[]
}

/**
 *  collection of information markers
 */
export type InformationMarkers = InformationMarker[]
