import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const StatusBar: React.FC<PropTypes> = ({ children, onClick }) => {
  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }
  return (
    <div
      onClick={handeClick}
      className={cx(styles.main)}>
      {children}
    </div>
  )
}

export default StatusBar
