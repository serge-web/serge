import { Marker, icon } from 'leaflet'

export const loadDefaultMarker = (): void => {
  const iconRetinaUrl = 'images/marker-icon-2x.png'
  const iconUrl = 'images/marker-icon.png'
  const shadowUrl = 'images/marker-shadow.png'
  const iconDefault = icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl
  })
  Marker.prototype.options.icon = iconDefault
}
