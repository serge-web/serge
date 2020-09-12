import React from 'react'
import moment from 'moment'
import classNames from 'classnames'
import Chip from '@material-ui/core/Chip'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const AdminMessage: React.FC<PropTypes> = ({ message }: PropTypes) => {
  const { details } = message
  const { force, role, name } = details.from
  const isOwnMessage = name === force
  return (
    <div className={classNames([
      styles['message-preview-player'],
      (isOwnMessage ? styles['own-message'] : null)
    ])}>
      {
        isOwnMessage
          ? null
          : <span className={styles['message-bullet']} style={{ backgroundColor: details.from.forceColor }}>&nbsp;</span>
      }
      <div className={message.hasBeenRead ? undefined : styles.bold}>
        {message.message.content}
      </div>
      <div className={classNames([
        styles['info-wrap'],
        (isOwnMessage ? styles['info-wrap--own-message'] : null)
      ])}>
        <time dateTime={message.details.timestamp}>{moment(message.details.timestamp).format('HH:mm')}</time>
        <small><Chip size="small" color="default" label={role} /></small>
      </div>
    </div>
  )
}

export default AdminMessage
