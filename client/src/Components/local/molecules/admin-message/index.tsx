import Chip from '@material-ui/core/Chip'
import { CUSTOM_MESSAGE } from 'src/config'
import { formatTime } from 'src/Helpers'
import classNames from 'classnames'
// TODO: change it to src/config
import React, { useRef } from 'react'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const AdminMessage: React.FC<PropTypes> = ({ message, roleId }: PropTypes) => {
  const msgRef = useRef<HTMLDivElement | null>(null)

  if (message.messageType === CUSTOM_MESSAGE) {
    const { details } = message
    const { from } = details
    const isOwnMessage = roleId === from.roleId

    return (
      <div className={classNames([
        styles['message-container'],
        (isOwnMessage ? styles['float-right'] : styles['float-left'])
      ])} ref={msgRef}>
        {!isOwnMessage && <span className={styles['message-bullet']} style={{ backgroundColor: from.forceColor, height: (msgRef.current && msgRef.current.getBoundingClientRect().height) || 60 }} />}
        <div className={classNames([
          styles['message-preview-player'],
          (isOwnMessage ? styles['own-message'] : null)
        ])}>
          <div>
            <div className={message.hasBeenRead ? undefined : styles.bold}>
              {message.message.content}
            </div>
            <div className={classNames([
              styles['info-wrap'],
              (isOwnMessage ? styles['info-wrap--own-message'] : null)
            ])}>
              <time dateTime={message.details.timestamp}>{formatTime(message.details.timestamp)}</time>
              <small><Chip className={styles.role} size="small" color="primary" variant="outlined" label={from.roleName} /></small>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default AdminMessage
