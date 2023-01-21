import cx from 'classnames'
import ms from 'milsymbol'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import AssetIconProps from './types/props'

const SymbolAssetIcon: React.FC<AssetIconProps> = ({ onClick, className, sidc, options = {}, iconName }) => {
  const [icon, setIcon] = useState<string>('')

  useEffect(() => {
    const icon = new ms.Symbol(sidc).setOptions(options)
    setIcon(icon.toDataURL())
  }, [])

  if (!icon) {
    return <></>
  }

  return <div className={cx(styles['asset-icon-background'], className)} onClick={onClick}>
    <div className={styles['asset-icon-with-image']}>
      <img src={icon} className={styles.img} />
      <span>{iconName}</span>
    </div>
  </div>
}

export default SymbolAssetIcon
