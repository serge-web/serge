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
  const collapse: boolean = typeof props.collapse === 'undefined' ? true : props.collapse

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

CollapsibleContent.displayName = 'CollapsibleContent'

export default CollapsibleContent
