import React from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const Tabs: React.FC<PropTypes> = ({ onChange, tabs }) => {
  const handeClick = (tab: string, e: any): void => {
    if (typeof onChange === 'function') {
      onChange(tab, e)
    }
  }
  return (
    <div className={cx(styles.main)}>
      {tabs.map(tab => (
        <div onClick={e => { handeClick(tab, e) }}>
          {tab}
        </div>
      ))}
    </div>
  )
}

export default Tabs
