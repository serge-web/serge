import React from 'react'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Link from '../../helper-elements/link'

/* Import Icons */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"

/* Render component */
export const AdminLayout: React.FC<PropTypes> = ({ children, onClick }) => {
  const handeClick = (e: any): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }
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
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
