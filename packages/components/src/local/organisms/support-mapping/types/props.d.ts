import { LatLngExpression, LatLngBounds, LatLng } from 'leaflet'

export default interface PropTypes {
  bounds?: LatLngBounds
  position?: LatLngExpression
  mapWidth?: string
  /** tree of menu items */
  actionItems?: MappingMenuItem[]
  /** callback, for if a map action is clicked */
  actionCallback?: { (force: string, category: string, actionId: string): void }
  /**
    * Optional mapping structure with children component
    */
  children?: JSX.Element
  /** toolbar buttons */
  toolbarChildren?: JSX.Element

  setDrawingMode?: (status: boolean) => void
  polylineLatlgn?: LatLng[]
}

export interface MappingMenuItem {
  name: string
  id: string
  color?: string
  children?: MappingMenuItem[]
}
