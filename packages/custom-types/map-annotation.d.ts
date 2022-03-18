import ForceData from "./force-data"

export default interface MapAnnotation {
  /** unique id for this marker 
   * 
  */
  readonly uniqid: string
  /* short label displayed by marker
   */
  label: string
  /** longer block of descriptive text
   *
  */
  description: string
  /** location of marker (cell index)
   * 
   */
  location: string
  /* which forces see this label 
   * uniqid
   */
  visibleTo: ForceData['uniqid'][]
  /** type of icon to display
   * 
   */
  icon: string
  /** color of icon
   * 
   */
  color: string
  /**
   * (optional) circle of hexes to shade around marker 
   * Either omit or use zero value for no shading
   */
  shadeRadius?: number
}

/** collection of map annotations */
export interface MapAnnotations {
  data: MapAnnotation[]
}