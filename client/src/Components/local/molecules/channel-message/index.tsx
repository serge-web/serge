import React from 'react'
import Collapsible from '../../helper-elements/collapsible'
import MessageListHeader from '../channel-message-header'
import MessageListDetail from '../channel-message-detail'
import { MessageCustom } from 'src/custom-types'
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
      onRead && onRead(message as MessageCustom)
    }
    const markUnread = (): void => {
      if (!collapsed) {
        onExpand(!collapsed)
      }
      onUnread && onUnread(message as MessageCustom)
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
        role={props.roleName}
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

  const hexToRGBA = (hex: string, hasBeenRead: boolean): string => {
    const formatHex = (hexStr: string): string => {
      const c = hexStr.substring(1).split('')
      if (c.length === 3) {
        return `${c[0]}${c[0]}${c[1]}${c[1]}${c[2]}${c[2]}`
      }
      return `${c.join('')}`
    }

    const color = formatHex(hex)
    const r = parseInt(color.slice(0, 2), 16)
    const g = parseInt(color.slice(2, 4), 16)
    const b = parseInt(color.slice(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${hasBeenRead ? 0.6 : 1})`
  }

  return (
    <div className={styles['message-list-wrapper']} style={{ borderColor: hexToRGBA(props.message.details.from.forceColor, !!props.message.hasBeenRead) }}>
      <Collapsible
        header={<CollapsibleHeader />}
        content={<CollapsibleContent />}
      />
    </div>
  )
}

export default ChannelMessage
