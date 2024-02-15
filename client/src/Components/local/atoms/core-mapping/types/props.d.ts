import { FeatureCollection } from 'geojson'
import { LatLng, PM } from 'leaflet'
import { ForceStyle } from 'src/Helpers'
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
  onDragged: (id: string, latLngs: L.LatLng | L.LatLng[] | L.LatLng[][]) => void
  onRemoved: (id: string) => void
  onEdited: (id: string, value: string) => void
  onSelect: (id: string[]) => void
  selected: string[]
  showLabels: boolean
  forceStyles: ForceStyle[]
};

export type GeomanControlProps = {
  onShowLabels: (showLabels: boolean) => void
  onCreate: (e: PM.ChangeEventHandler) => void
  onChange: (id: number, lnglat: LatLng) => void
}
