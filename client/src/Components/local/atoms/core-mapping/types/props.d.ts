import { FeatureCollection } from 'geojson'
import { LatLng, PM } from 'leaflet'
import { ChannelMapping, ForceData } from 'src/custom-types'

export default interface PropTypes {
  playerForce: ForceData
  playerRole: Role['id']
  currentTurn: number
  currentPhase: Phase
  forces: ForceStyle[]
  channel: ChannelMapping 
  messages: CoreMappingMessage[]
}

export type CoreRendererProps = {
  features: FeatureCollection<Geometry, GeoJsonProperties>
  onDragged: (id: number | string, latLngs: L.LatLng | L.LatLng[] | L.LatLng[][]) => void
  onRemoved: (id: number) => void
};

export type GeomanControlProps = {
  onCreate: (e: PM.ChangeEventHandler) => void
  onChange: (id: number, lnglat: LatLng) => void
}
