
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { RENDERER_CORE } from 'src/custom-types'
import { ICoreRenderer } from './I-core-renderer'

export class CoreRenderer extends ICoreRenderer {
  from (features: FeatureCollection<Geometry, GeoJsonProperties>): ICoreRenderer {
    this.feature = features.features.filter((f: any): boolean => f.properties._type === RENDERER_CORE)
    return this
  }
}
