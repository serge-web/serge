import { CUSTOM_MESSAGE } from '@serge/config'
// TODO: change it to @serge/config

import React from 'react'
import moment from 'moment'
import classNames from 'classnames'
import Chip from '@material-ui/core/Chip'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AdminMessage: React.FC<PropTypes> = ({ message, force }: PropTypes) => {
  if (message.messageType === CUSTOM_MESSAGE) {
    const { details } = message
    const { from } = details
    const isOwnMessage = force === from.force
    return (
      <div className={classNames([
        styles['message-preview-player'],
        (isOwnMessage ? styles['own-message'] : null)
      ])}>
        {
          isOwnMessage
            ? null
            : <span className={styles['message-bullet']} style={{ backgroundColor: from.forceColor }}>&nbsp;</span>
        }
        <div className={message.hasBeenRead ? undefined : styles.bold}>
          {message.message.content}
        </div>
        <div className={classNames([
          styles['info-wrap'],
          (isOwnMessage ? styles['info-wrap--own-message'] : null)
        ])}>
          <time dateTime={message.details.timestamp}>{moment(message.details.timestamp).format('HH:mm')}</time>
          <small><Chip size="small" color="default" label={from.roleName} /></small>
        </div>
      </div>
    )
  }
  return null
}

export default AdminMessage
