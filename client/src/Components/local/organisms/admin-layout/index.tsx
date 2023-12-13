import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'
import { Wargame } from 'src/custom-types'
import { AdminTabs } from 'src/config'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Link from '../../helper-elements/link'
import Tabs from '../../atoms/tabs'
import StatusBar from '../../molecules/statusbar'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const AdminLayout: React.FC<PropTypes> = ({ children, onTabChange, wargame, tabs = [], wargameChanged, activeTab = '', onPressBack, ...statusBarProps }) => {
  const handleTabChange = (changedTab: string, key: number, e?: React.MouseEvent<HTMLDivElement>): void => {
    if (typeof onTabChange === 'function') {
      onTabChange(changedTab, key, e)
    }
  }

  const contentTabs = [
    AdminTabs.Overview,
    AdminTabs.Forces,
    AdminTabs.Channels
  ]

  const renderContainer = (reqWargame: Wargame): React.ReactNode => {
    return (
      <>
        <div className={styles.header}>
          <StatusBar wargame={reqWargame} {...statusBarProps} />
          {tabs.length > 0 && <Tabs activeTab={activeTab} onChange={handleTabChange} tabs={contentTabs} changed={wargameChanged} />}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </>
    )
  }
  const renderLoading = (): React.ReactNode => (
    // TODO add some loader
    <div className={styles.loading}>Loading</div>
  )

  return (
    <div className={styles.main}>
      <div className={styles['left-panel']}>
        <Link className={styles.link} onClick={onPressBack}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
      </div>

      <div className={styles.container}>
        {wargame ? renderContainer(wargame) : renderLoading()}
      </div>
    </div>
  )
}

export default AdminLayout
