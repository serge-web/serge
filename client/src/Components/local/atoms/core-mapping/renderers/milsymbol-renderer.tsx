
import React from 'react'
import { GeoJSON } from 'react-leaflet-v4'
import { RENDERER_MILSYM } from 'src/custom-types'
import { CoreRendererProps } from '../types/props'

export class MilSymbolRenderer extends React.Component<CoreRendererProps> {
  render (): React.ReactElement {
    return <GeoJSON data={this.props.features} filter={(feature): boolean => feature.properties._type === RENDERER_MILSYM} key={'feature_no_contact' + Math.random()}/>
  }
}
