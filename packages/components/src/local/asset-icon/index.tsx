import cx from 'classnames'
import unfetch from 'node-fetch'
import React, { useEffect, useState } from 'react'
import { lightOrDark } from '../map-control/helpers/lightOrDark'
/* Import Stylesheet */
import styles from './styles.module.scss'
import AssetIconProps from './types/props'

// TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
// error based on some webpack version
const fetch = unfetch.bind(window)

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, destroyed?: boolean, icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
  destroyed ? styles.destroyed : null,
  icSelected ? styles.selected : null
))

const isUrl = (url: string): boolean => {
  return !/base64/.test(url)
}

export const fixUrl = (url: string): string => {
  if (/^https?|^\/\/?|base64|images\/default_img\//.test(url)) {
    return url
  }
  return `/assets/counters/${url}`
}

const getReverce = (color = ''): string | false => (
  color && lightOrDark(color) === 'light' && styles['asset-icon-invert']
)

const checkImageStatus = (imageSrc: string | undefined): Promise<boolean> => {
  if (imageSrc && isUrl(imageSrc)) {
    try {
      const url = fixUrl(imageSrc)
      return fetch(url, { method: 'HEAD' })
        .then(res => res.status !== 404)
    } catch (error) {
      console.warn(`failed to get "${imageSrc}" image`)
    }
  }
  return new Promise((resolve) => resolve(true))
}

const AssetIcon: React.FC<AssetIconProps> = ({ color = '', destroyed, isSelected, imageSrc, onClick }) => {
  const [loadStatus, setLoadStatus] = useState(true)

  useEffect(() => {
    checkImageStatus(imageSrc).then(res => { setLoadStatus(res) }).catch(() => { setLoadStatus(false) })
  }, [imageSrc])

  const typePrefix = (icon: string): string => {
    const ind = icon.indexOf('.')
    const trimmed = ind > 0 ? icon.substring(0, ind) : icon
    return trimmed
  }

  return <div className={styles['asset-icon-background']} style={{ backgroundColor: color }} onClick={onClick}>
    {
      imageSrc &&
      <div className={styles['asset-icon-with-image']}>
        <img src={fixUrl(loadStatus ? imageSrc : 'unknown.svg')} alt={typePrefix(imageSrc)} className={cx(getReverce(color), styles.img, styles['asset-icon'], destroyed ? styles.destroyed : null, isSelected ? styles.selected : null)} />
      </div>
    }
  </div>
}

export default AssetIcon
