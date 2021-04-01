import React from 'react'
import Collapsible from '../../helper-elements/collapsible'
import MessageListHeader from '../channel-message-header'
import MessageListDetail from '../channel-message-detail'
import { MessageCustom } from '@serge/custom-types'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import messageTitleFor from '../../organisms/channel-messages-list/helpers/messageTitleFor'

/* Render component */
export const ChannelMessage: React.FC<Props> = (props: Props) => {
  const CollapsibleHeader = ({ onExpand, collapsed }: any): React.ReactElement => {
    const { onRead, message } = props
    const title = messageTitleFor(message)
    const handleOnExpand = (): void => {
      onExpand(!collapsed)
      onRead && onRead(props as unknown as MessageCustom)
    }
    return (
      <MessageListHeader
        isOpen={!collapsed}
        title={title}
        timestamp={message.details.timestamp}
        messageType={message.details.messageType}
        onExpand={handleOnExpand}
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
