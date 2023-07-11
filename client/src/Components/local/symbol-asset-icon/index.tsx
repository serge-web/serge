import { SymbolForces } from 'src/config'
import cx from 'classnames'
import ms from 'milsymbol'
import React from 'react'
import styles from './styles.module.scss'
import AssetIconProps from './types/props'

const setCharAt = (str: string, index: number, chr: string): string => {
  if (index > str.length - 1) return str
  return str.substring(0, index) + chr + str.substring(index + 1)
}

const forceFor = (force?: string): SymbolForces | undefined => {
  if (force) {
    switch (force) {
      case 'Blue':
        return SymbolForces.Friend
      case 'Red':
        return SymbolForces.Hostile
      case 'Green':
        return SymbolForces.Neutral
      default:
        return SymbolForces.Unknown
    }
  } else {
    return undefined
  }
}

const SymbolAssetIcon: React.FC<AssetIconProps> = ({ onClick, sidc, options = {}, iconName, health, force, isSelected, assetsCache, hideName }) => {
  // update the forc color, if we know it
  const forceVal = forceFor(force)
  const sidc2 = forceVal ? setCharAt(sidc, 1, forceVal) : sidc

  // check if we have cached symbol
  const key = `${sidc2}-${JSON.stringify(options)}`
  let iconDataUrl = assetsCache.get(key)

  if (!iconDataUrl) {
    const icon = new ms.Symbol(sidc2).setOptions(options)
    iconDataUrl = icon.toDataURL()
    assetsCache.set(key, iconDataUrl)
  }

  // note: health may (mistakenly) be a string
  const healthAny = health as any
  const healthNum = +healthAny

  return <div className={cx({ [styles['asset-icon-background']]: true, [styles.selected]: isSelected })} onClick={onClick}>
    <div className={styles['asset-icon-with-image']}>
      <img src={iconDataUrl} className={styles.img} />
      {(!hideName || isSelected) && <span>{iconName}</span>}
    </div>
    {
      healthNum === 0
        ? <span className={styles['corner-line']} /> : null
    }
  </div>
}

export default SymbolAssetIcon
