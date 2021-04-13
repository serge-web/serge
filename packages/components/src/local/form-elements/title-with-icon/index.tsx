import React from 'react'
import { getIconClassname } from '../../asset-icon'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const TitleWithIcon: React.FC<PropTypes> = ({ children, forceColor, platformType }) => {
  const iconClassname = getIconClassname(forceColor.toLowerCase(), platformType)
  return (
    <div className={styles.main}>
      <h2>{children}</h2>
      <div className={styles.icon}>
        <div className={iconClassname}/>
      </div>
    </div>
  )
}
export default TitleWithIcon
