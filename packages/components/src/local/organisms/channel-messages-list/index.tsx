import React from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import Components */
import ChannelMessage from '../../molecules/channel-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
import { Box } from '@material-ui/core'

/* Render component */
export const ChannelMessagesList: React.FC<PropTypes> = ({ messages, icons, onMarkAllAsRead }: PropTypes) => {
  return (
    <div>
      <Box mb={2}>
        <ForcesInChannel icons={icons} onMarkAllAsRead={onMarkAllAsRead} />
      </Box>
      {
        messages && messages.map(props => (
          <ChannelMessage {...props} />
        ))
      }
    </div>
  )
}

export default ChannelMessagesList
