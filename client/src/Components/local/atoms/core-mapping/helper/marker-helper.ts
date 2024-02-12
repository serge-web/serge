import L, { Marker, icon } from 'leaflet'
import styles from '../styles.module.scss'
import cx from 'classnames'

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

export const createDivIcon = (iconHTML: string, healthColor: string, isSelected: boolean): L.DivIcon => {
  return L.divIcon({
    html: `
      <div class="${cx({ [styles['asset-icon']]: true, [styles['pulse-milsymbol']]: isSelected })}">
        ${iconHTML}
        <div class="${styles['health-bar']}" style="background-color: ${healthColor};"></div>
      </div>
    `,
    className: styles['combined-icon']
  })
}
