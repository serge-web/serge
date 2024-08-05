import { FeatureCollection } from 'geojson'
import { LatLng, PM } from 'leaflet'
import { ForceStyle } from 'src/Helpers'
import { PanelSize } from 'src/Components/CoreMappingChannel'
import { ChannelMapping, ForceData, MappingMessage, MappingMessageDelta, ParticipantMapping, Role } from 'src/custom-types'

export default interface PropTypes {
  playerForce: ForceData
  playerRole: Role['uniqid']
  currentTurn: number
  currentPhase: Phase
  forceStyles: ForceStyle[]
  channel: ChannelMapping 
  messages: CoreMappingMessage[]
  postBack: (message: MappingMessage | MappingMessageDelta) => void
  openPanelAsDefault: boolean
  panelSize?: PanelSize
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
  permissions: ParticipantMapping[]
  forRenderer: string[]
};

export type GeomanControlProps = {
  toggleShowLabel: (showLabels: boolean) => void
  onCreate: (e: PM.ChangeEventHandler) => void
  onChange: (id: number, lnglat: LatLng) => void
  canAddRemove: boolean
  canMoveResize: boolean
  forRenderer: string[]
}
