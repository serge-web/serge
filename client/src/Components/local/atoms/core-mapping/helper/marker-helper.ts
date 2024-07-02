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

export const createDivIcon = (iconHTML: string, healthColor: string, isSelected: boolean, isMeasuring: boolean): L.DivIcon => {
  return L.divIcon({
    html: `
      <div class="${cx({ [styles['asset-icon']]: true, [styles['pulse']]: isSelected, [styles.measuring]: isMeasuring })}">
        ${iconHTML}
        <div class="${styles['health-bar']}" style="background-color: ${healthColor};"></div>
      </div>
    `,
    className: styles['combined-icon']
  })
}

export const getRGB = (color: string): number[] => {
  const rgbColor = parseInt(color.substring(1), 16)
  const r = rgbColor >> 16
  const g = (rgbColor - (r << 16)) >> 8
  const b = rgbColor - (r << 16) - (g << 8)
  return [r, g, b]
}

export const isSimilar = ([r1, g1, b1]: number[], [r2, g2, b2]: number[]): boolean => {
  return Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2) < 50
}

export const getInvertColor = ([r, g, b]: number[]): string => {
  return `rgb(${255 - r}, ${255 - g}, ${255 - b})`
}
