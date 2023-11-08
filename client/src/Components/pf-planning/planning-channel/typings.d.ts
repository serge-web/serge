/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GeoJsonProperties, Geometry } from 'geojson'
import 'leaflet'

type SelectItem = {
  value: string
  label: string
  items?: SelectItem[]
}

type SelectOption = {
  position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright'
  items: SelectItem[]
  multi?: boolean
  iconMain?: string
  iconGroupChecked?: string
  iconGroupUnchecked?: string
  selectedDefault?: boolean
  onOpen?: () => void
  onClose?: () => void
  onSelect?: (item: any) => void
  onGroupOpen?: (groupItem: any) => void
  additionalClass?: string
  id?: string
  preventClickThrough?: boolean
  showSelectedIcon?: boolean
}

type RulerOption = {
  position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright'
  circleMarker?: { // Leaflet circle marker options for points used in this plugin
    color: string
    radius: number
  }
  lineStyle?: { // Leaflet polyline options for lines used in this plugin
    color: string
    dashArray: string
  }
  lengthUnit?: { // You can use custom length units. Default unit is kilometers.
    display: string // This is the display value will be shown on the screen. Example: 'meters'
    decimal: number // Distance result will be fixed to this value.
    factor: number // This value will be used to convert from kilometers. Example: 1000 (from kilometers to meters)
    label: string
  }
  angleUnit?: {
    display: string // This is the display value will be shown on the screen. Example: 'Gradian'
    decimal: number // Bearing result will be fixed to this value.
    factor: number // This option is required to customize angle unit. Specify solid angle value for angle unit. Example: 400 (for gradian).
    label: string
  }
}

class Select extends Control {
  constructor(options?: SelectOption);
  addTo(map: Map): this;
  // remove comes from the parent contrlol
  remove(): void;
}

class Ruler extends Control {
  constructor(options?: RulerOption);
  addTo(map: Map): this;
  // remove comes from the parent contrlol
  remove(): void;
}

type TimelineControlOption = {
  formatOutput: (date: string | number | Date) => string
}

type TimelineDataOption = {
  pointToLayer?: (data: Feature, latlng: L.LatLngExpression) => void
  style?: (data: Feature) => { [name: string]: any }
  onEachFeature?: (data: Feature, layer: L.Layer) => void
}

class TimelineData extends Control {
  constructor(options?: TimelineDataOption);
  addTo(map: Map): this;
  // remove comes from the parent contrlol
  remove(): void;
  on(event:string, func: { (e: any): void}): void
}

class Timeline extends Control {
  constructor(options?: TimelineControlOption);
  addTo(map: Map): this;
  // remove comes from the parent contrlol
  remove(): void;

  addTimelines: (timelines?: TimelineData) => void
}

declare module 'leaflet' {
  export namespace control {
    function select(options?: SelectOption): Select;
    function ruler(options?: RulerOption): Ruler;
  }
  export function timelineSliderControl(options?: TimelineControlOption): Timeline;
  export function timeline(data?: FeatureCollection<Geometry, GeoJsonProperties>, option?: TimelineDataOption): TimelineData;
  export function markerClusterGroup()
}
