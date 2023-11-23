import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import { CoreRenderer } from '../renderers/core-renderer'
import { MilSymbolRenderer } from '../renderers/milsymbol-renderer'
import { ICoreRenderer } from '../renderers/I-core-renderer'

export class CoreRendererHelper {  
  static from (type: string, features: FeatureCollection<Geometry, GeoJsonProperties>): ICoreRenderer {
    switch (type) {
      case RENDERER_CORE:
        return new CoreRenderer().from(features)
      case RENDERER_MILSYM:
        return new MilSymbolRenderer().from(features)
      default:
        throw Error('Invalid type of renderer')
    }
  }
}
