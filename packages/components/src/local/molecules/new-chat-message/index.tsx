import React from 'react'
import PrivateChatTextInput from '../../atoms/private-chat-text-input'
import ChatTextInput from '../../atoms/chat-text-input'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const NewChatMessage: React.FC<Props> = ({ isUmpire, content, privateMessage, onSendMessage, onChange }: Props) => {
  return (
    <div className={styles['write-message-panel']}>
      <ChatTextInput
        multiline={true}
        fullWidth
        variant="filled"
        rowsMax={4}
        rows={2}
        placeholder="type the text"
        updateState={(event: HTMLInputElement): void => onChange(event,'content')}
        content={content}
      />
      <div className={styles['send-message-icon']} onClick={(): void => onSendMessage()}>
        <img src="./images/send_message.png" />
      </div>
      { isUmpire &&
      <div className={styles['private-chat-text-block']}>
        <PrivateChatTextInput privateMessage={privateMessage} onChange={(event: HTMLInputElement): void => onChange(event,'privateMessage')}/>
      </div>
      }
    </div>
  )
}

export default NewChatMessage
