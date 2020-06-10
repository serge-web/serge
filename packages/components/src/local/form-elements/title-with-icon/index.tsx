import React from 'react'
import { getIconClassname } from '../../asset-icon'
import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const PlannedRoute: React.FC<PropTypes> = ({ children, force, type }) => {
  return (
    <div className={styles.main}>
      <h2>{children}</h2>
      <div className={cx(styles.icon, getIconClassname(force, type))}/>
    </div>
  )
}
export default PlannedRoute
