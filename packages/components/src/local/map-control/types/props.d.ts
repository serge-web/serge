import { LatLng, LatLngBounds } from 'leaflet'

export default interface PropTypes {
  // main
  map?: any
  /**
  * Optional child components
  */
  children?: JSX.Element
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

  mapVer?: 'v2' | 'v4'
}
