import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const Link: React.FC<PropTypes> = ({ children, onClick, disabled, className = '', href = '#' }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }
  return (
    <a href={href}
      onClick={handleClick}
      className={cx(className && className, styles.main, disabled && styles.disabled)}>
      {children}
    </a>
  )
}

export default Link
