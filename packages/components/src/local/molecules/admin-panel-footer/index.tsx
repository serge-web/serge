import React from 'react'
import Badge from 'react-bootstrap/Badge'

/* Import Types */
import Props from './types/props'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AdminPanelFooter: React.FC<Props> = ({ force, selectedRole, byPassUrl, onIconClick }: Props) =>
  <div className={styles['role-info']} data-tour='role-info-step' style={{ backgroundColor: force.color }}>
    {
      byPassUrl
        ? <Badge variant="light"><a href={byPassUrl} className={styles['role-type']}>{ selectedRole }</a></Badge>
        : <span className={styles['role-type']}>{ selectedRole }</span>
    }
    <div className={styles['contain-force-skin']} data-tour='objectives-step'>
      <div className={styles['force-skin']}>
        <span className={styles['force-type']}>{ force.name }</span>
        <img className={styles['role-icon']} src={force.iconURL || force.icon} alt="" onClick={onIconClick} data-tour="second-step" style={{ backgroundColor: force.color }}/>
      </div>
    </div>
  </div>

export default AdminPanelFooter
