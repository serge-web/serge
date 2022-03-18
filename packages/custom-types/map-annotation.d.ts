import ForceData from "./force-data"

export default interface MapAnnotation {
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
  /** radius of shaded area to show behind icon
   * 
   */
  shadeRadius?: number
}

/** collection of map annotations */
export interface MapAnnotations {
  data: MapAnnotation[]
}