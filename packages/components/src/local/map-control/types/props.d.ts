import { CellLabelStyle } from '@serge/config'
import { ForceData } from '@serge/custom-types'
import { LatLng, LatLngBounds } from 'leaflet'

export default interface PropTypes {
  // main
  map?: any
  // whether to show home control
  showHome?: boolean
  // current map centre
  home?: LatLng
  // outer bounds of whole map
  bounds?: LatLngBounds
  // whether to show zoom control
  showZoom?: boolean
  // size of zoom in/out increment
  zoomStepSize?: number
  // view as control
  forces?: ForceData[]
  /** callback for umpire clicking on view-as button */
  viewAsCallback?: {(force: string): void}
  /** current value of `view as` */
  viewAsForce?: string
  /** callback for umpire clicking on view-as button */
  cellLabelCallback?: {(style: CellLabelStyle): void}
  /** current value of `view as` */
  cellLabelType?: CellLabelStyle
  /** whether planned routes filtered */
  filterPlannedRoutes?: boolean
  /** callback for toggling planned routes */
  setFilterPlannedRoutes?: {(value: boolean): void}
  /** whether History routes filtered */
  filterHistoryRoutes?: boolean
  /** callback for toggling History routes */
  setFilterHistoryRoutes?: {(value: boolean): void}
  /** callback for adding a new information marker */
  addInfoMarker?: {(): void}
}
