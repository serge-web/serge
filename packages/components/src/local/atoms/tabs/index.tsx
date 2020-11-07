import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Render component */
export const Tabs: React.FC<PropTypes> = ({ onChange, tabs, activeTab = '', changed }) => {
  const useAsDefault = activeTab || tabs[0]

  const [active, setActive] = useState(useAsDefault || '')

  const handleClick = (tab: string, key: number, e: any): void => {
    if (activeTab !== tab) {
      setActive(tab)
      if (typeof onChange === 'function') {
        onChange(tab, key, e)
      }
    }
  }
  return (
    <div className={styles.main}>
      {tabs.map((tab, key) => (
        <div key={key} className={cx(styles.item, tab === active && styles.active)} onClick={(e): void => { handleClick(tab, key, e) }}>
          {tab}
          {tab === active && changed && <div className={styles.asterisk}><FontAwesomeIcon icon={faAsterisk} size="xs"/></div>}
        </div>
      ))}
    </div>
  )
}

export default Tabs
