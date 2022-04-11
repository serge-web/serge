import React from 'react'
import { GetIcon } from '../../asset-icon'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const TitleWithIcon: React.FC<PropTypes> = ({ children, forceColor, icon }) => {
  // TODO: switch from using `iconClassname` to using the `icon` field in <GetIcon
  // <GetIcon icType={platformType} color={forceColor} isSelected={item.selected} imageSrc={icon} />
  return (
    <div className={styles.main}>
      <h2>{children}</h2>
      <div className={styles.icon}>
        {/* <div className={iconClassname}/> */}
        <GetIcon color={forceColor} isSelected={false} imageSrc={icon} />
      </div>
    </div>
  )
}
export default TitleWithIcon
