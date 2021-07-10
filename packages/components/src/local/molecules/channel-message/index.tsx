import React from 'react'
import Collapsible from '../../helper-elements/collapsible'
import MessageListHeader from '../channel-message-header'
import MessageListDetail from '../channel-message-detail'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import messageTitleFor from '../../organisms/channel-messages-list/helpers/messageTitleFor'

/* Render component */
export const ChannelMessage: React.FC<Props> = (props: Props) => {
  const CollapsibleHeader = ({ onExpand, collapsed }: any): React.ReactElement => {
    const { onRead, onUnread, message } = props

    const title = messageTitleFor(message)
    const handleOnExpand = (): void => {
      onExpand(!collapsed)
      onRead && onRead(message)
    }
    const markUnread = (): void => {
      if (!collapsed) {
        onExpand(!collapsed)
      }
      onUnread && onUnread(message)
    }

    return (
      <MessageListHeader
        isOpen={!collapsed}
        title={title}
        timestamp={message.details.timestamp}
        messageType={message.details.messageType}
        onExpand={handleOnExpand}
        hasBeenRead={message.hasBeenRead}
        forceColor={props.forceColor}
        role={props.role}
        markUnread={markUnread}
      />
    )
  }

  const CollapsibleContent = ({ collapsed }: any): React.ReactElement => {
    return (
      <MessageListDetail
        {...props}
        collapsed={collapsed}
      />
    )
  }

  return (
    <div className={styles['message-list-wrapper']} style={{ borderColor: props.message.details.from.forceColor }}>
      <Collapsible
        header={<CollapsibleHeader />}
        content={<CollapsibleContent />}
      />
    </div>
  )
}

export default ChannelMessage
