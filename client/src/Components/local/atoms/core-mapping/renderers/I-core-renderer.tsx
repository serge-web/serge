import { Feature, GeoJsonProperties, Geometry } from 'geojson'
import React, { ReactElement } from 'react'
import { GeoJSON } from 'react-leaflet-v4'

export class ICoreRenderer {
  protected feature: Array<Feature<Geometry, GeoJsonProperties>> = []
  // should move to each renderer class incase we need to customization
  render (): ReactElement[] {
    return this.feature.map((f, idx) => <GeoJSON key={idx} data={f}/>)
  }
}
