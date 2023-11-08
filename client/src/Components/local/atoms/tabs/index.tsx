import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { kebabCase } from 'lodash'

/* Render component */
export const Tabs: React.FC<PropTypes> = ({ onChange, tabs, activeTab = '', changed }) => {
  const useAsDefault = activeTab || tabs[0]
  const [active, setActive] = useState(useAsDefault || '')

  const handleClick = (tab: string, key: number, e: React.MouseEvent<HTMLDivElement>): void => {
    if (active !== tab) {
      setActive(tab)
      if (typeof onChange === 'function') {
        onChange(tab, key, e)
      }
    }
  }

  /** we had a camel case tab (platformType) which was being presented as PLATFORMTYPE,
   * so we'll convert it to kebaby case first
   */
  const tidyTabName = (tab: string): string => {
    const camel = kebabCase(tab)
    const dropSpace = camel.replace('-', ' ')
    const dropUnderScore = dropSpace.replace(/_/g, ' ')
    return dropUnderScore
  }

  return (
    <div className={styles.main}>
      {
        tabs.map((tab, key) => (
          <div key={key} className={cx(styles.item, tab === active && styles.active)} onClick={(e: React.MouseEvent<HTMLDivElement>): void => { handleClick(tab, key, e) }}>
            {tidyTabName(tab)}
            {tab === active && changed && <div className={styles.asterisk}><FontAwesomeIcon icon={faAsterisk} size="xs"/></div>}
          </div>
        ))
      }
    </div>
  )
}

export default Tabs
