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
export const ChannelMessagesList: React.FC<PropTypes> = ({ messages, icons, colors, onMarkAllAsRead, onRead }: PropTypes) => {
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel colors={colors} icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
      <Box ml={2} className={styles['messages-list']}>
        {
          messages && messages.map(props => {
            if (props.infoType) {
              return (
                <Box mr={2}>
                  <p className={styles['turn-marker']} key={`${props.gameTurn}-turnmarker`}>Turn {props.gameTurn}</p>
                </Box>
              )
            }
            return (
              <Box mb={2} mr={2}>
                <ChannelMessage onRead={onRead} {...props} />
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default ChannelMessagesList
