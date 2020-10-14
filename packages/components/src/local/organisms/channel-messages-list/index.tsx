import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import ChannelMessage from '../../molecules/channel-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
import { Box } from '@material-ui/core'

/* Render component */
export const ChannelMessagesList: React.FC<PropTypes> = ({ messages, icons, colors, onMarkAllAsRead, onRead, plainChat }: PropTypes) => {
  
  const renderChatHeader = () => {
    if (!plainChat) {
      return <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel colors={colors} icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
    } else {
      return null
    }
  }

  const renderChatContainerClass = () => {
    if (plainChat) {
      return styles['messages-list-plain']
    } else {
      return styles['messages-list']
    }
  }
  
  return (
    <div>
      {renderChatHeader()}
      <Box ml={2} className={renderChatContainerClass()}>
        {
          messages && messages.map((props, key) => {
            console.log(props, 'test')
            if (props.infoType) {
              if (plainChat) {
                return null
              }
              return (
                <Box mr={2} key={`${props.gameTurn}-turnmarker-${key}`}>
                  <p className={styles['turn-marker']}>Turn {props.gameTurn}</p>
                </Box>
              )
            }
            return (
              <Box mb={2} mr={2} key={key} className={styles['messageContiner']}>
                <ChannelMessage onRead={onRead} {...props} plainChat={plainChat} />
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default ChannelMessagesList
