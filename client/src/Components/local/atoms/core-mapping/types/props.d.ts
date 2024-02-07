import { FeatureCollection } from 'geojson'
import { LatLng, PM } from 'leaflet'
import { ChannelMapping, ForceData, MappingMessage, MappingMessageDelta } from 'src/custom-types'

export default interface PropTypes {
  playerForce: ForceData
  playerRole: Role['id']
  currentTurn: number
  currentPhase: Phase
  forceStyles: ForceStyle[]
  channel: ChannelMapping 
  messages: CoreMappingMessage[]
  postBack: (message: MappingMessage | MappingMessageDelta) => void
  openPanelAsDefault: boolean
}

export type CoreRendererProps = {
  features: FeatureCollection<Geometry, GeoJsonProperties>
  onDragged: (id: number | string, latLngs: L.LatLng | L.LatLng[] | L.LatLng[][]) => void
  onRemoved: (id: number) => void
  onEdited: (id: number | string, value: string) => void
  onSelect: (id: number | string) => void
  showLabels: boolean
};

export type GeomanControlProps = {
  onShowLabels: (showLabels: boolean) => void
  onCreate: (e: PM.ChangeEventHandler) => void
  onChange: (id: number, lnglat: LatLng) => void
}
