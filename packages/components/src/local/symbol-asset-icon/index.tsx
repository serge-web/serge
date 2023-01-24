import cx from 'classnames'
import ms from 'milsymbol'
import React, { useMemo } from 'react'
import styles from './styles.module.scss'
import AssetIconProps from './types/props'

const SymbolAssetIcon: React.FC<AssetIconProps> = ({ onClick, className, sidc, options = {}, iconName }) => {
  const icon = useMemo(() => new ms.Symbol(sidc).setOptions(options), [sidc])

  return <div className={cx(styles['asset-icon-background'], className)} onClick={onClick}>
    <div className={styles['asset-icon-with-image']}>
      <img src={icon.toDataURL()} className={styles.img} />
      <span>{iconName}</span>
    </div>
  </div>
}

export default SymbolAssetIcon
