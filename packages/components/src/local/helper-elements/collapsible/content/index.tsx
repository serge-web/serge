import React from 'react'

import cx from 'classnames'
/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const CollapsibleContent: React.FC<PropTypes> = ({ children, onClick, useIndent = true, collapse = true }) => {

  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  let style = {}
  if (useIndent && useIndent !== true) {
    style = {
      paddingLeft: `${useIndent}px`
    }
  }

  return (
    <div
      onClick={handeClick}
      className={cx(
        styles.main,
        useIndent && styles['use-indent'],
        collapse && styles.collapse
      )}
      style={style}
    >
      {children}
    </div>
  )
}

export default CollapsibleContent
