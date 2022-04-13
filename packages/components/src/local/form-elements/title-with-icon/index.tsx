import React from 'react'
import { GetIcon } from '../../asset-icon'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const TitleWithIcon: React.FC<PropTypes> = ({ children, forceColor, icon }) => {
  return (
    <div className={styles.main}>
      <h2>{children}</h2>
      <div className={styles.icon}>
        <GetIcon color={forceColor} isSelected={false} imageSrc={icon} />
      </div>
    </div>
  )
}
export default TitleWithIcon
