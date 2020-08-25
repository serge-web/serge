import { LatLng } from 'leaflet'

export default interface PropTypes {
  // main
  map?: any
  // to home control
  showHome?: boolean
  home?: LatLng
  // zoom control
  showZoom?: boolean
  zoomStepSize?: number
  // view as control
  forces?: any
  /** callback for umpire clicking on view-as button */
  viewAsCallback?: {(force: string): void}
  /** current value of `view as` */
  viewAsForce?: string
  /** whether planned routes filtered */
  filterPlannedRoutes?: boolean
  /** callback for toggling planned routes */
  setFilterPlannedRoutes?: {(value: boolean): void}
  /** whether History routes filtered */
  filterHistoryRoutes?: boolean
  /** callback for toggling History routes */
  setFilterHistoryRoutes?: {(value: boolean): void}

}
