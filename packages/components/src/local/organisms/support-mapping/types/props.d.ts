import { LatLngExpression, LatLngBounds } from 'leaflet'

export default interface PropTypes {
  bounds?: LatLngBounds
  position?: LatLngExpression
  zoom: number
  filterApplied: boolean
  setFilterApplied
  /** tree of menu items */
  actionItems?: MappingMenuItem[]
  /** callback, for if a map action is clicked */
  actionCallback?: {(force: string, category: string, actionId: string): void}
  /**
    * Optional mapping structure with children component
    */
  children?: JSX.Element
  /** toolbar buttons */
  toolbarChildren?: JSX.Element
}

export interface MappingMenuItem {
  name: string
  id: string
  color?: string
  children?: MappingMenuItem[]
}
