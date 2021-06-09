import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const HeartbeatChecker: React.FC<Props> = ({ enableHeartbeat }: Props) => {
  console.log(enableHeartbeat)
  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={`${styles['heartbeat-status-icon']} ${styles[enableHeartbeat ? 'start' : 'stop']}`}
    />
  )
}

export default HeartbeatChecker
