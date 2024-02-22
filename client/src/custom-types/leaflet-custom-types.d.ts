import 'leaflet'

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

class Ruler extends Control {
  constructor(options?: RulerOption);
  addTo(map: Map): this;
  // remove comes from the parent contrlol
  remove(): void
}

declare module 'leaflet' {
  export namespace control {
    function ruler(options?: RulerOption): Ruler;
  }
}
