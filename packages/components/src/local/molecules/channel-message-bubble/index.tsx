import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import Badge from '../../atoms/badge'

/* Render component */
export const ChannelMessageBubble: React.FC<Props> = ({
  title,
  timestamp,
  role,
  messageType,
  hasBeenRead
}: Props) => {
  return (
    <div className={!hasBeenRead ? styles["message-item-unread"] : ""}>
      <div className={styles["message-title-wrap"]}>
        <div className={styles["message-title"]}>{title}</div>
        <Box display="flex" alignItems="center">
          <span className={styles["info-body"]}>
            {moment(timestamp).format("HH:mm")}
          </span>
          <Badge size="small" type="charcoal" label={role} />
          <Badge size="small" label={messageType} />
        </Box>
      </div>
    </div>
  );
}

export default ChannelMessageBubble
