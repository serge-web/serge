import React from 'react'

/* Import Types */
import Props from './types/props'
/* Import Stylesheet */
import styles from './styles.module.scss'
import { resolveImagePath } from 'src/Helpers'
/* Render component */
export const AdminPanelFooter: React.FC<Props> = ({ force, selectedRoleName, onIconClick }) =>
  <div className={styles['role-info']} data-tour='role-info-step' style={{ backgroundColor: force.color }}>
    <div data-tour='objectives-step' className={styles['force-role']}>
      <div className={styles['role-type']}>{selectedRoleName}</div>
      <div className={styles['force-type']}>{force.name}</div>
    </div>
    <img className={styles['role-icon']} src={resolveImagePath(force.icon || force.iconURL)} alt="" onClick={onIconClick} data-tour="second-step" style={{ backgroundColor: force.color }} />
  </div>

export default AdminPanelFooter
