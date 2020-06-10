import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const PlannedRoute: React.FC<PropTypes> = ({ children, title }) => {
  return (
    <div className={styles.group}>
      {title && <div className={cx(styles.container, styles.title)}>{title}</div>}
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default PlannedRoute
