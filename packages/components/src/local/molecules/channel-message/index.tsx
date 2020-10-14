import React from 'react'
import Collapsible from '../../helper-elements/collapsible'
import MessageListHeader from '../channel-message-header'
import MessageListDetail from '../channel-message-detail'
import ChannelMessageBubble from '../channel-message-bubble'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const ChannelMessage: React.FC<Props> = (props: Props) => {
  const CollapsibleHeader = ({ onExpand, collapsed }: any): React.ReactElement => {
    const { onRead } = props
    const handleOnExpand = (): void => {
      onExpand(!collapsed)
      onRead && onRead(props)
    }
    return (
      <MessageListHeader
        {...props}
        isOpen={!collapsed}
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

  const renderMessageContainerStyle = () => {
    if (props.plainChat) {
      return { borderColor: props.borderColor, borderLeftWidth: 0, borderRightWidth: 8 }
    } else {
      return { borderColor: props.borderColor, borderLeftWidth: 4 }
    }
  }

  const renderClassName = () => {
    if (props.plainChat) {
      return styles['plain-message-list-wrapper']
    } else {
      return styles['message-list-wrapper']
    }
  }

  const renderMessageContainer = () => {
    if (props.plainChat) {
      return <ChannelMessageBubble {...props} />
    } else {
      return <Collapsible
        header={<CollapsibleHeader />}
        content={<CollapsibleContent />}
      />
    }
  }

  return (
    <div className={renderClassName()} style={renderMessageContainerStyle()}>
      {renderMessageContainer()}
    </div>
  )
}

export default ChannelMessage
