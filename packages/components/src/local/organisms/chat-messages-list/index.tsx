import React from 'react'
import { Box } from '@material-ui/core'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import ChatMessage from '../../molecules/chat-message'
import ForcesInChannel from '../../molecules/forces-in-channel'

/* Render component */
export const ChatMessagesList: React.FC<PropTypes> = ({ messages, icons, colors, onMarkAllAsRead }: PropTypes) => {
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel colors={colors} icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
      <Box ml={2} className={styles['messages-list']} flexDirection="column-reverse" display="flex">
        {
          messages && messages.map((props, key) => {
            return (
              <Box mb={2} mr={2} key={key} justifyContent="flex-end" display="block">
                <Box maxWidth={'60%'} minWidth={'40%'} display="inline-block" style={{ float: props.isOwner ? 'right' : 'left' }}>
                  <ChatMessage {...props} />
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default ChatMessagesList
