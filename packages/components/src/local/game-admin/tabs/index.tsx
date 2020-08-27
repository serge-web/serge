import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const Tabs: React.FC<PropTypes> = ({ onChange, tabs, activeTab = '' }) => {
  const useAsDefault = activeTab || tabs[0]

  const [active, setActive] = useState(useAsDefault || '')

  const handeClick = (tab: string, e: any): void => {
    setActive(tab)
    if (typeof onChange === 'function') {
      onChange(tab, e)
    }
  }
  return (
    <div className={styles.main}>
      {tabs.map(tab => (
        <div className={cx(styles.item, tab === active && styles.active)} onClick={(e): void => { handeClick(tab, e) }}>
          {tab}
        </div>
      ))}
    </div>
  )
}

export default Tabs
