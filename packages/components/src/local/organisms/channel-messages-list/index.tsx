import React from 'react'

/* Import Types */
import PropTypes from './types/props'
import { CoreMessage } from '@serge/custom-types/message'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import ChannelMessage from '../../molecules/channel-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
import { Box } from '@material-ui/core'

/* Render component */
export const ChannelMessagesList: React.FC<PropTypes> = (props: PropTypes) => {
  const { messages, icons, colors, onMarkAllAsRead, onRead, onRFISubmit, onRFIReject } = props
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel colors={colors} icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
      <Box ml={2} className={styles['messages-list']}>
        {
          messages && messages.map((props, key) => {
            const messageItem = props as unknown as CoreMessage
            const rfiProps = {
              rfiStatus: messageItem.details.collaboration?.status,
              rfiId: messageItem._id,
              collaboration: messageItem.details.collaboration,
              onSubmit: onRFISubmit,
              onReject: onRFIReject,
              // TODO: Use appropriate role checking for RFI managers
              isRFIManager: props.isUmpire
            }
            const isRFI = messageItem.details.messageType === 'RFI'
            if (props.infoType) {
              return (
                <Box mr={2} key={`${props.gameTurn}-turnmarker-${key}`}>
                  <p className={styles['turn-marker']}>Turn {props.gameTurn}</p>
                </Box>
              )
            }
            return (
              <Box mb={2} mr={2} key={key}>
                <ChannelMessage onRead={onRead} {...props} {...isRFI ? rfiProps : {}} />
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default ChannelMessagesList
