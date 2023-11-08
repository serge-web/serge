import React from 'react'

/* Import Types */
import Props from './types/props'
/* Import Stylesheet */
import styles from './styles.module.scss'
import { serverPath } from 'src/config'
/* Render component */
export const AdminPanelFooter: React.FC<Props> = ({ force, selectedRoleName, byPassUrl, onIconClick }) =>
  <div className={styles['role-info']} data-tour='role-info-step' style={{ backgroundColor: force.color }}>
    <div data-tour='objectives-step' className={styles['force-role']}>
      {
        byPassUrl
          ? <a href={byPassUrl as string} className={styles['role-type']}>{selectedRoleName}</a>
          : <div className={styles['role-type']}>{selectedRoleName}</div>
      }
      <div className={styles['force-type']}>{force.name}</div>
    </div>
    <img className={styles['role-icon']} src={serverPath + force.iconURL || force.icon} alt="" onClick={onIconClick} data-tour="second-step" style={{ backgroundColor: force.color }} />
  </div>

export default AdminPanelFooter
