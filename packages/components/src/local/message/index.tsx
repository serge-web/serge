import React from 'react'
import moment from 'moment'
import Chip from '@material-ui/core/Chip'
import DoneAllIcon from '@material-ui/icons/DoneAll'

import { CUSTOM_MESSAGE } from '@serge/config'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const Message: React.FC<PropTypes> = ({ message }: PropTypes) => {
  // MessageInfoType has no those fields
  if (message.messageType === CUSTOM_MESSAGE) {
    const { force, roleName, name } = message.details.from
    return (<>
      <div className={styles['info-wrap']}>
        <Chip color="primary" label={force} />
        <Chip color="secondary" label={roleName} />
        {name && <Chip color="default" label={name} />}
        <span>{moment(message.details.timestamp).format('YYYY-MMM-DD HH:mm')}</span>
      </div>
      <div>
        {message.message.content}
        {message.hasBeenRead && <DoneAllIcon />}
      </div>
      <p className="feedback-marker" style={{ borderColor: message.details.from.forceColor }}></p>
    </>)
  }

  return null
}

export default Message
