import React, { useState } from 'react'
import Collapsible from '../../helper-elements/collapsible'
import CollapsibleHeader from '../../helper-elements/collapsible/header'
import CollapsibleContent from '../../helper-elements/collapsible/content'
// import MessageListHeader from '../channel-message-header'
import ChannelRfiMessageDetail from '../channel-rfi-message-detail'
import { CollaborationDetails } from '@serge/custom-types'
import moment from 'moment'
import { CollaborativeMessageStates } from '@serge/config'
import Badge from '../../atoms/badge'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import cn from 'classnames'

/* Render component */
export const ChannelRFIMessage: React.FC<Props> = ({ message, borderColor = '#32A3CA', onRead, onChange, forceColor, role, isUmpire, isRFIManager }) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleCollapse = (status: boolean): void => {
    setOpen(status)
  }

  const handleRead = (): void => {
    if (!message.hasBeenRead) {
      onRead && onRead(message)
    }
  }

  const renderCollaborationStatus = (collaboration: CollaborationDetails | undefined): React.ReactNode => {
    switch (collaboration ? collaboration.status : '') {
      case CollaborativeMessageStates.InProgress:
        return <div className={cn(styles.badge, styles.orange)}>IN PROGRESS</div>
      case CollaborativeMessageStates.PendingReview:
        return <div className={cn(styles.badge, styles.gray)}>PENDING REVIEW</div>
      case CollaborativeMessageStates.Released:
        return <div className={cn(styles.badge, styles.green)}>RELEASED</div>
      case CollaborativeMessageStates.Unallocated:
        return <div className={cn(styles.badge, styles.red)}>UNALLOCATED</div>
      default:
        return ''
    }
  }
  return (
    <div className={cn(styles['message-list-wrapper'], open && styles.open, message.hasBeenRead && styles.read)} style={{ borderColor }} onClick={handleRead}>
      <Collapsible iconType="channel-icon" onChange={handleCollapse}>
        <CollapsibleHeader>
          <div className={styles.header}>
            <div className={styles.row}>
              <h2><Badge type="charcoal" size="medium" label={message.message.Reference} /> {message.message.title}</h2>
              <div className={styles['rfi-info']}>
                <div className={styles.status}>
                  <p>{message.details.collaboration && message.details.collaboration.status === CollaborativeMessageStates.Released ? 'ANSWERED' : 'PENDING'}</p>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <span className={styles.timestamp}>{moment(message.details.timestamp).format('HH:mm')}</span>
                <Badge size="small" label={role.roleName} customBackgroundColor={forceColor}/>
                <Badge size="small" label={message.details.messageType} />
                {!message.hasBeenRead && <Badge size="small" label="Unread" type="warning" />}
              </div>
              <div className={styles.badges}>{isUmpire && renderCollaborationStatus(message.details.collaboration)}</div>

            </div>
          </div>
        </CollapsibleHeader>
        <CollapsibleContent>
          <ChannelRfiMessageDetail isRFIManager={isRFIManager} message={message} onChange={onChange} role={role} isUmpire={isUmpire}/>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default ChannelRFIMessage
