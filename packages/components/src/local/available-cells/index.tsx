import React, { ReactNode } from 'react'
import { LayerGroup } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'
import { MapContext } from '../mapping'

/* Render component */
export const AvailableCells: React.FC<PropTypes> = ({ location, travelMode, range }: PropTypes) =>
  <MapContext.Consumer>
    { (context): ReactNode => {
      console.log("available cells", location, travelMode, range, context)
      return <>
        <LayerGroup key={'hex_route_layer_' + name} >

        </LayerGroup>
      </>
    }}
  </MapContext.Consumer>

export default AvailableCells
