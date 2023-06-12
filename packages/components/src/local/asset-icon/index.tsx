import cx from 'classnames'
import unfetch from 'node-fetch'
import React, { useEffect, useState } from 'react'
import { lightOrDark } from '../p9legacy/map-control/helpers/lightOrDark'
/* Import Stylesheet */
import styles from './styles.module.scss'
import AssetIconProps from './types/props'

// TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
// error based on some webpack version
const fetch = unfetch.bind(window)

const isUrl = (url: string): boolean => {
  return !/base64/.test(url)
}

/* Export divIcon classname generator to use icons in to other sections */
export const getIconClassname = (icForceClass: string, destroyed?: boolean, icSelected?: boolean): string => (cx(
  styles['asset-icon'],
  styles[icForceClass],
  destroyed ? styles.destroyed : null,
  icSelected ? styles.selected : null
))

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
      return new Promise((resolve) => {
        return fetch(url, { method: 'HEAD' })
          .then(res => resolve(res.status !== 404))
      })
    } catch (error) {
      console.warn(`failed to get "${imageSrc}" image`)
    }
  }
  return new Promise((resolve) => resolve(true))
}

const AssetIcon: React.FC<AssetIconProps> = ({ color = '', destroyed, isSelected, imageSrc, onClick, className, health }) => {
  const [loadStatus, setLoadStatus] = useState(true)

  useEffect(() => {
    const handle = setTimeout(() => {
      return checkImageStatus(imageSrc)
        .then(res => setLoadStatus(res))
        .catch(() => setLoadStatus(false))
    }, 1000)

    return (): void => clearTimeout(handle)
  }, [imageSrc])

  const typePrefix = (icon: string): string => {
    const ind = icon.indexOf('.')
    const trimmed = ind > 0 ? icon.substring(0, ind) : icon
    return trimmed
  }

  /** note: we only fill in the background for icons that require shading.  The NATO assets,
   * that begin with `n_` don't require background shading
   */
  const shadeBackground = !imageSrc?.startsWith('n_')
  const combinedClassName = cx(getReverce(color), styles.img, destroyed ? styles.destroyed : null, isSelected ? styles.selected : null)
  const backgroundColor = shadeBackground ? { backgroundColor: color } : {}

  return <div className={cx(styles['asset-icon-background'], className)} style={backgroundColor} onClick={onClick}>
    {
      imageSrc &&
      <div className={styles['asset-icon-with-image']}>
        <img src={fixUrl(loadStatus ? imageSrc : 'unknown.svg')} alt={typePrefix(imageSrc)} className={combinedClassName} />
      </div>
    }
    {
      health === 0
        ? <span className={styles['corner-line']} /> : null
    }

  </div>
}

export default AssetIcon
