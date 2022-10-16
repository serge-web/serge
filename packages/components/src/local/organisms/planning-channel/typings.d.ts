/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Leaflet from 'leaflet'

type SelectOption = {
  position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright'
  items: any[]
  multi?: boolean
  selectedDefault?: boolean
  onOpen?: () => void
  onClose?: () => void
  onSelect?: (item: any) => void
  onGroupOpen?: (groupItem: any) => void
}

class Select extends Control {
  constructor(options?: SelectOption);
  addTo(map: Map): this;
}

declare module 'leaflet' {
  export namespace control {
    function select(options?: SelectOption): Select;
  }
}
