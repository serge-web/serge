import React from 'react'
import PrivateChatTextInput from '../../atoms/private-chat-text-input'
import ChatTextInput from '../../atoms/chat-text-input'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const WriteMessagePanel: React.FC<Props> = ({ isUmpire }: Props) => {
  return (
    <div className={styles['write-message-panel']}>
      <ChatTextInput
        multiline={true}
        fullWidth
        variant="filled"
        rowsMax={4}
        rows={2}
      />
      <div className={styles['send-message-icon']}>
        <img src="./images/send_message.png" />
      </div>
      { isUmpire &&
      <div className={styles['private-chat-text-block']}>
        <PrivateChatTextInput />
      </div>
      }
    </div>
  )
}

export default WriteMessagePanel
