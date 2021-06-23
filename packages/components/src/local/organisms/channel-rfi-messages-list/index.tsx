import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import ChannelRFIMessage from '../../molecules/channel-rfi-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
import { Box } from '@material-ui/core'

/* Render component */
export const ChannelRFIMessagesList: React.FC<PropTypes> = ({ messages, icons, colors, onMarkAllAsRead, onRead, onChange, roleId, roleName, isUmpire, isRFIManager }) => {
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel colors={colors} icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
      <Box ml={2} className={styles['messages-list']}>
        {messages.map(message => (
          <Box mb={2} mr={2} key={message._id}>
            <ChannelRFIMessage
              borderColor={message.details.from.forceColor}
              message={message}
              onRead={onRead}
              onChange={onChange}
              roleId={roleId}
              roleName={roleName}
              isRFIManager={isRFIManager}
              isUmpire={isUmpire}
            />
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default ChannelRFIMessagesList
