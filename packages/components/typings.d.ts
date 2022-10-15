
import * as Leaflet from 'leaflet';

declare module '*.md' {
  const content: string
  export = content;
}

declare module 'react-leaflet-vectorgrid'
declare module '@json-editor/json-editor'
// TODO: Remove the line below when the store package has been converted
declare module '@serge/store'
declare module 'whatwg-fetch'

type SelectOption = {
  position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright',
  items: any[],
  multi?: boolean,
  selectedDefault?: boolean,
  onOpen?: () => void,
  onClose?: () => void,
  onSelect?: (item: any) => void,
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