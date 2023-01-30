import { SymbolForces } from '@serge/config'
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
      default:
        return SymbolForces.Neutral
    }
  } else {
    return undefined
  }
}

const SymbolAssetIcon: React.FC<AssetIconProps> = ({ onClick, sidc, options = {}, iconName, force, isSelected, assetsCache }) => {
  // update the forc color, if we know it
  const forceVal = forceFor(force)
  const sidc2 = forceVal ? setCharAt(sidc, 1, forceVal) : sidc

  // check if we have cached symbol
  const key = `${sidc2}-${JSON.stringify(options)}`
  let icon = assetsCache.get(key)

  if (!icon) {
    console.log('sym', sidc, sidc2, force)
    icon = new ms.Symbol(sidc2).setOptions(options)
    assetsCache.set(key, icon)
  }

  return <div className={cx({ [styles['asset-icon-background']]: true, [styles.selected]: isSelected })} onClick={onClick}>
    <div className={styles['asset-icon-with-image']}>
      <img src={icon.toDataURL()} className={styles.img} />
      <span>{iconName}</span>
    </div>
  </div>
}

export default SymbolAssetIcon
