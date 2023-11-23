
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { RENDERER_MILSYM } from 'src/custom-types'
import { ICoreRenderer } from './I-core-renderer'

export class MilSymbolRenderer extends ICoreRenderer {
  from (features: FeatureCollection<Geometry, GeoJsonProperties>): ICoreRenderer {
    this.feature = features.features.filter((f: any): boolean => f.properties._type === RENDERER_MILSYM)
    return this
  }
}
