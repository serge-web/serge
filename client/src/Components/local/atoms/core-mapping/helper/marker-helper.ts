import L, { Marker, icon } from 'leaflet'
import styles from '../styles.module.scss'

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

export const createDivIcon = (iconHTML: string, healthColor: string): L.DivIcon => {
  return L.divIcon({
    html: `
      <div class="${styles['asset-icon']}">
        ${iconHTML}
        <div class="${styles['health-bar']}" style="background-color: ${healthColor};"></div>
      </div>
    `,
    className: styles['combined-icon']
  })
}
