import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import React from 'react'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import Props from './types/props'

/* Render component */
export const ForcesInChannel: React.FC<Props> = ({ icons, colors, names, onMarkAllAsRead, messages = [] }: Props) => {
  const isAllMsgHasBeenRead = messages.every(msg => msg.hasBeenRead)
  return (
    <div className={styles['forces-in-channel']}>
      {icons &&
        icons.map((url, i) => {
          return <img
            key={`indicator${i}`}
            title={names ? names[i] : 'missing'}
            className={`${styles['force-indicator']} ${styles['role-icon']}`}
            style={{
              ...(colors[i] && { borderColor: colors[i], backgroundColor: colors[i] })
            }}
            src={url} alt=""
          />
        })
      }
      {
        !isAllMsgHasBeenRead &&
        onMarkAllAsRead &&
        <Tooltip title='Mark All as Read'>
          <Button onClick={onMarkAllAsRead} className={styles['mark-all-read']}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        </Tooltip>
      }
    </div>
  )
}

export default ForcesInChannel
