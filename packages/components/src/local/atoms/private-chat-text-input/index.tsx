import React from 'react'
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import ChatTextInput from '../chat-text-input'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const PrivateChatTextInput: React.FC<Props> = ({ onChange, privateMessage }: Props) => {
  return (
    <div className={styles['private-chat-text-input']}>
      <Collapsible transitionTime={300} trigger={<>
        <div className={styles['header-collapsible']}>
        <span>
          <span className={styles['icon-paperclip']}>
            <FontAwesomeIcon size='1x' icon={faPaperclip} />
          </span>
          <span className={styles['icon-private']}>
            <FontAwesomeIcon size='1x' icon={faUserSecret} />
          </span>
          Private message
        </span>
      </div>
      </>}>
      <ChatTextInput multiline={true} fullWidth variant="filled"
              placeholder="A private message is sent at the same time as the main message, but is only visible to other umpires."
              rowsMax={4} rows={2} content={privateMessage} updateState={(event: HTMLInputElement): void => onChange(event)}/>
      </Collapsible>
    </div>
  )
}
export default PrivateChatTextInput
