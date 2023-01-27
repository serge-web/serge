import cx from 'classnames'
import LRUCache from 'lru-cache'
import ms from 'milsymbol'
import React, { useContext } from 'react'
import { SupportPanelContext } from '../organisms/support-panel'
import { LRU_CACHE_OPTION } from '../organisms/support-panel/constants'
import styles from './styles.module.scss'
import AssetIconProps from './types/props'

const SymbolAssetIcon: React.FC<AssetIconProps> = ({ onClick, sidc, options = {}, iconName, isSelected }) => {
  const { assetsCache } = process.env.JEST_WORKER_ID ? { assetsCache: new LRUCache<string, ms.Symbol>(LRU_CACHE_OPTION) } : useContext(SupportPanelContext)
  const key = `${sidc}-${JSON.stringify(options)}`

  let icon = assetsCache.get(key)
  if (!icon) {
    icon = new ms.Symbol(sidc).setOptions(options)
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
