import React from 'react'

import cx from 'classnames'
/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const CollapsibleContent: React.FC<PropTypes> = (props) => {
  const { children, onClick } = props
  // str.replace is not a function: es default values (for boolean) not works with storybook
  // define default values
  const useIndent: boolean | number = typeof props.useIndent === 'undefined' ? true : props.useIndent
  const collapsed: boolean = typeof props.collapsed === 'undefined' ? true : props.collapsed

  const handleClick = (e: React.MouseEvent<HTMLImageElement>): void => {
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
      onClick={handleClick}
      className={cx(
        styles.main,
        useIndent && styles['use-indent'],
        !collapsed && styles.expanded
      )}
      style={style}
    >
      {children}
    </div>
  )
}

CollapsibleContent.displayName = 'CollapsibleContent'

export default CollapsibleContent
