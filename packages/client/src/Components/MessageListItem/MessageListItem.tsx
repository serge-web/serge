import React, { memo } from 'react'
import moment from 'moment'
import { ChannelMessage } from '@serge/components'
import '@serge/themes/App.scss'
import { usePlayerUiState } from '../../Store/PlayerUi'
import Props from './types'

const MessageListItem: React.FC<Props> = ({ detail, key, open }) => {
  let itemTitle
  const state = usePlayerUiState()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const { details, message, isOpen, hasBeenRead } = detail
  if (message.title) {
    itemTitle = message.title
  } else if (message.content) {
    // yes, we have content (probably chat) use it
    itemTitle = message.content
  } else {
    // no content, just use message-type
    itemTitle = details.messageType
  }

  return (
    <React.Fragment key={key}>
      <div style={{ margin: '0 15px 8px' }}>
        <ChannelMessage
          isOpen={isOpen}
          title={itemTitle}
          timestamp={`${moment(details.timestamp)}`}
          // @ts-ignore
          role={details.from.role}
          messageType={details.messageType}
          hasBeenRead={hasBeenRead}
          privateMessage={details.privateMessage}
          isUmpire={selectedForce.umpire}
          detail={message}
          onRead={(): void => { open(detail) }}
        />
      </div>
    </React.Fragment>
  )
}

const areEqual = (prevProps: Props, nextProps: Props): boolean => (
  prevProps.detail._id !== nextProps.detail._id ||
  prevProps.detail.isOpen !== nextProps.detail.isOpen ||
  prevProps.detail.hasBeenRead !== nextProps.detail.hasBeenRead // used in mark all read button only
)

export default memo(MessageListItem, areEqual)
