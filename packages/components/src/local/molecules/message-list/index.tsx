import React from 'react'
import Collapsible from '../../helper-elements/collapsible'
import MessageListHeader from '../message-list-header'
import MessageListDetail from '../message-list-detail'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const MessageList: React.FC<Props> = (props: Props) => {
  const CollapsibleHeader = ({ onExpand, collapsed }: any): React.ReactElement => {
    const { onRead } = props
    const handleOnExpand = (): void => {
      onExpand(!collapsed)
      onRead && onRead()
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

  return (
    <div className={styles['message-list-wrapper']} style={{ borderColor: props.borderColor }}>
      <Collapsible
        header={<CollapsibleHeader />}
        content={<CollapsibleContent />}
      />
    </div>
  )
}

export default MessageList
