import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import PrivateChatTextInput from '../../atoms/private-chat-text-input'
import ChatTextInput from '../../atoms/chat-text-input'
import { boolean, number } from '@storybook/addon-knobs'

const rowValues = {
  range: true,
  min: 1,
  max: 4,
  step: 1
}

/* Render component */
export const WriteMessagePanel: React.FC<Props> = () => {
  return (
    <div className={styles['write-message-panel']}>
      <ChatTextInput multiline={boolean('Multi-Line', true)} fullWidth variant="filled" placeholder="type the text" rowsMax={number('Max rows', 4, rowValues)}  rows={number('Rows', 2, rowValues)}/>
      <div className={styles['send-message-icon']}>
        <img src="./images/send_message.png" />
      </div>
      <div className={styles['private-chat-text-input']}>
        <PrivateChatTextInput />
      </div>
    </div>
  )
}

export default WriteMessagePanel
