import React from 'react'

/* Import Types */
import Props from './types/props'
import AdminPanelFooter from '../admin-panel-footer'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const ForceObjective: React.FC<Props> = ({ force, selectedRole, onIconClick }: Props) =>
  <div className={styles['force-objectives']} style={{ borderColor: force.color }}>
    <h3>Objectives</h3>
    <div className={styles['objective-text']}>
      { force.overview }
    </div>
    <div className={styles['role-info']}>
      <AdminPanelFooter
        force={force}
        selectedRoleName={selectedRole}
        onIconClick={onIconClick}
      />
    </div>
  </div>

export default ForceObjective
