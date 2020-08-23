import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'
import { Wargame } from '@serge/custom-types'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Link from '../../helper-elements/link'
import Tabs from '../tabs'
import StatusBar from '../statusbar'

/* Import Icons */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

/* Render component */
export const AdminLayout: React.FC<PropTypes> = ({ children, onClick, wargame, tabs = [] }) => {
  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }
  const handeTabChange = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const renderContainer = (reqWargame: Wargame) => {
    return <>
      <div className={styles.header}>
        <StatusBar wargame={reqWargame}>test</StatusBar>
        {tabs.length && <Tabs onChange={handeTabChange} tabs={tabs} />}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </>
  }
  const renderLoading = () => (
    // TODO add some loader
    <div className={styles.loading}>Loading</div>
  )

  return (
    <div
      className={styles.main}
    >
      <div className={styles['left-panel']} onClick={handeClick}>
        <Link className={styles.link}>
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
