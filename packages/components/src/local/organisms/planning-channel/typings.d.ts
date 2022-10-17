/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
}

class Select extends Control {
  constructor(options?: SelectOption);
  addTo(map: Map): this;
  // remove comes from the parent contrlol
  remove(): void
}

declare module 'leaflet' {
  export namespace control {
    function select(options?: SelectOption): Select;
  }
}
