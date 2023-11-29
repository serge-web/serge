import { FeatureCollection } from 'geojson'
import { PM } from 'leaflet'

export default interface PropTypes {
  playerForce: ForceData['id']
  playerRole: Role['id']
  currentTurn: number
  currentPhase: Phase
  forces: ForceStyle[]
  channel: CoreMappingChannel 
  messages: CoreMappingMessage[]
  bounds: L.LatLngBounds
}

export type CoreRendererProps = {
  features: FeatureCollection<Geometry, GeoJsonProperties>
};

export type GeomanControlProps = {
  onCreate: (e: PM.ChangeEventHandler) => void
  onChange: (e: PM.ChangeEventHandler) => void
}
