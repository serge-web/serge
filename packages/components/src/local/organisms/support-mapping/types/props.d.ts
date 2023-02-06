import { TileLayerDefinition } from '@serge/custom-types/mapping-constraints'
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
  perForceAssetsLength?: number
  /** callback, for if a map action is clicked */
  actionCallback?: { (force: string, category: string, actionId: string): void }
  /**
    * Optional mapping structure with children component
    */
  children?: React.ReactElement
  /** toolbar buttons */
  toolbarChildren?: React.ReactElement
  /** where to get the tile data from */
  tileLayer: TileLayerDefinition
}
