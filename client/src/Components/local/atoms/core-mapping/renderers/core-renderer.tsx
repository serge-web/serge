
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { RENDERER_CORE } from 'src/custom-types'
import { CoreRendererProps } from '../types/props'
import { Feature, Geometry } from 'geojson'

export class CoreRenderer extends React.Component<CoreRendererProps> {
  render (): React.ReactElement {
    const filter = (feature: Feature<Geometry, any>): boolean => feature.properties._type === RENDERER_CORE
    return <GeoJSON data={this.props.features} filter={filter} key={'feature_no_contact' + Math.random()}/>
  }
}
