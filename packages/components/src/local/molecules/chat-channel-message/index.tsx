import React from 'react'
import ChatMessageBubble from '../chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { boolean, radios } from '@storybook/addon-knobs'
import { forceColors } from '@serge/helpers'
import { forces } from '@serge/mocks'
import WriteMessagePanel from '../write-message-panel'

const forceColorList = forceColors(forces)

const forceValues = {
  Blue: 'Blue',
  White: 'White',
  Red: 'Red'
}

/* Render component */
export const ChatChannelMessage: React.FC<Props> = () => {
  return (
    <div
      className={`${styles['chat-channel-message']}`}
    >
      <ChatMessageBubble
        title="lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet lorem ipsum do lor sit amet"
        timestamp="2020-09-18T05:41:17.349Z"
        role="CO"
        messageType="Chat"
        hasBeenRead={boolean('Has been read', false)}
        authorForceId={radios('Author force', forceValues, 'Blue')}
        playerForceId={radios('Player force', forceValues, 'Blue')}
        forceColors={forceColorList}
      />
      <WriteMessagePanel isUmpire={boolean('Player from umpire force', true)}/>
    </div>
  )
}

export default ChatChannelMessage
