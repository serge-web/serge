import React, { useEffect, useState } from 'react'
import { Box, FormControlLabel, FormGroup, Switch } from '@material-ui/core'
/* Import Types */
import PropTypes from './types/props'
import { INFO_MESSAGE_CLIPPED } from 'src/config'
import { ChatMessage as ChatMessageType, MessageChannel, MessageInfoTypeClipped } from 'src/custom-types'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Components */
import ChatMessage from '../../molecules/chat-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
import { formatTurn } from 'src/Helpers'
/* Render component */
export const ChatMessagesList: React.FC<PropTypes> = ({
  messages, icons, colors, names, onMarkAllAsRead, isUmpire,
  playerRole, playerForce, chatContainerHeight, turnPresentation, observing, markUnread, hideForcesInChannel, hideAuthor
}: PropTypes) => {
  const [revMessages, setRevMessages] = useState<Array<ChatMessageType | MessageInfoTypeClipped>>([])
  const [trimMessages, setTrimMessages] = useState<boolean>(true)

  const trimmedLen = 50

  useEffect(() => {
    // cast messages, for type-checking
    const chatMessages = messages as Array<ChatMessageType | MessageInfoTypeClipped>
    // trim messages, if necessary
    const rMessages = trimMessages ? chatMessages.slice(-trimmedLen) : chatMessages
    // note we have to clone it first, since reverse is destructive
    const cMessages = [...rMessages].reverse()
    setRevMessages(cMessages)
  }, [messages, trimMessages])

  const height = chatContainerHeight || 280
  return (
    <Box sx={{ height: '100%' }}>
      {
        !hideForcesInChannel &&
        <Box mb={2} ml={2} mr={3}>
          <ForcesInChannel messages={messages as MessageChannel[]} colors={colors} icons={icons} names={names} onMarkAllAsRead={onMarkAllAsRead} />
        </Box>
      }
      <FormGroup>
        <FormControlLabel control={<Switch id='trim-mgs' color="default" onClick={() => setTrimMessages(!trimMessages)} checked={trimMessages} />} label={'Trim to last ' + trimmedLen + ' messaages'} />
      </FormGroup>
      <Box ml={2} className={styles['messages-list']} style={{ height: observing ? 'unset' : `calc(100% - ${height}px)` }} flexDirection="column-reverse" display="flex">
        {
          revMessages.map((message, key) => {
            if (message.messageType === INFO_MESSAGE_CLIPPED) {
              return (
                <Box mr={2} key={`${message.gameTurn}-turnmarker-${key}`}>
                  <p className={styles['turn-marker']}>Turn {formatTurn(message.gameTurn, turnPresentation)}</p>
                </Box>
              )
            } else {
              const chatMsg = message as ChatMessageType
              return (
                <Box mb={2} mr={2} key={key} display="block">
                  <Box
                    maxWidth={'60%'}
                    minWidth={'40%'}
                    display="inline-block"
                    style={{ float: chatMsg.details.from.roleId === playerRole ? 'right' : 'left' }}
                  >
                    <ChatMessage
                      isUmpire={isUmpire}
                      isOwner={chatMsg.details.from.force === playerForce}
                      message={message}
                      markUnread={markUnread}
                      hideAuthor={hideAuthor}
                    />
                  </Box>
                </Box>
              )
            }
          })
        }
      </Box>
    </Box>
  )
}

export default ChatMessagesList
