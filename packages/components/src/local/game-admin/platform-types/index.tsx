import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { Content, LeftSide, RightSide } from '../content'
import EditableList from '../editable-list'

/* Render component */
export const PlatformTypes: React.FC<PropTypes> = ({ children, onClick, disabled, className = '', href = '#' }) => {
  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }
  return (
    <Content>
      <LeftSide>
        <EditableList items={[]}/>
      </LeftSide>
      <RightSide>
        <a href={href}
          onClick={handeClick}
          className={cx(className && className, styles.main, disabled && styles.disabled)}>
          {children}
        </a>
      </RightSide>
    </Content>
  )
}

export default PlatformTypes
