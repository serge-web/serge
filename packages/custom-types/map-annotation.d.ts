import ForceData from "./force-data"
import IconOption from "./icon-option"

export interface MapAnnotation {
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

/**
 * collection of map annotations
 */
export type MapAnnotations = MapAnnotation[]

/**
 * collection of icon definitions
 */
export type AnnotationIcons = IconOption[]

export interface AnnotationMarkerData {
  markers: AnnotationIcons
}

/** collection of map annotations */
export interface MapAnnotationData {
  annotations: MapAnnotations
}