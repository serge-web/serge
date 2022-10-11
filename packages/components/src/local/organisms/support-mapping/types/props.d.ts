import { LatLngBounds, LatLngExpression } from 'leaflet'
import React from 'react'

export interface MappingMenuItem {
  name: string
  id: string
  color?: string
  children?: MappingMenuItem[]
}

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
  children?: React.ReactElement
  /** toolbar buttons */
  toolbarChildren?: React.ReactElement

  setDrawingMode?: (status: boolean) => void
}
