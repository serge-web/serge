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
}
