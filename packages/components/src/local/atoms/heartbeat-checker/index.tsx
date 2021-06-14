import React, { useEffect, useState } from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const HeartbeatChecker: React.FC<Props> = ({ enableHeartbeat, animate, onAnimateComplete }: Props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (animate) {
      setLoading(true)
      setTimeout(() => {
        onAnimateComplete && onAnimateComplete()
        setLoading(false)
      }, 2000)
    }
  }, [animate])

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={`${styles['heartbeat-status-icon']} ${!enableHeartbeat ? styles.disabled : styles[loading ? 'start' : 'stop']}`}
    />
  )
}

export default HeartbeatChecker
