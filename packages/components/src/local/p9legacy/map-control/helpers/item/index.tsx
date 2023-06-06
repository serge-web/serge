import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const MapControlItem: React.FC<PropTypes> = ({ children, onClick, contentTheme = 'dark', title }) => {
  const handleClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }
  return (
    <button
      onClick={handleClick}
      type='button'
      className={cx(styles.main, styles[contentTheme + '-content'])}
      title={title}
    >
      {children}
    </button>
  )
}

export default MapControlItem
