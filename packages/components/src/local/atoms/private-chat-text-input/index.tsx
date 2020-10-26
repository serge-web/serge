import React from 'react'
import Collapsible from '../../helper-elements/collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import ChatTextInput from '../chat-text-input'
import { boolean, number } from '@storybook/addon-knobs'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const PrivateChatTextInput: React.FC<Props> = () => {
  const CollapsibleHeader = ({ onExpand, collapsed }: any): React.ReactElement => {
    const handleOnExpand = (): void => {
      onExpand(!collapsed)
    }
    return (
      <div onClick={handleOnExpand} className={styles['header-collapsible']}>
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
    )
  }


const rowValues = {
  range: true,
  min: 1,
  max: 4,
  step: 1
}

  const CollapsibleContent = ({ collapsed }: any): React.ReactElement => {
    return (
      <>
        {!collapsed ? 
          <div className={styles['chat-text-input']}>
            <ChatTextInput multiline={boolean('Multi-Line', true)} fullWidth variant="filled" placeholder="A private message is sent at the same time as the main message, but is only visible to other umpires." rowsMax={number('Max rows', 4, rowValues)}  rows={number('Rows', 2, rowValues)} />
          </div>:null
        }
      </>
    )
  }

  return (
    <div className={styles['private-chat-text-input']}>
      <Collapsible
        header={<CollapsibleHeader />}
        content={<CollapsibleContent />}
      />
    </div>
  )
}

export default PrivateChatTextInput
