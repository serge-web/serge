import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const LeftSide: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className={cx(styles.left)}>
      {children}
    </div>
  )
}
export const RightSide: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className={cx(styles.right)}>
      {children}
    </div>
  )
}

/* Render component */
export const AdminContent: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className={cx(styles.main)}>
      {children}
    </div>
  )
}

export default AdminContent
