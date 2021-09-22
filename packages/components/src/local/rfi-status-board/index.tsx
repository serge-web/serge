import React, { useState } from 'react'
import { MessageCustom } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'
import { ChannelData } from '@serge/custom-types'
import { Button } from '@material-ui/core'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChannelRfiMessageDetail from '../molecules/channel-rfi-message-detail'
import { Badge } from '../atoms/badge'
import { DataTable, ROW_WITH_COLLAPSIBLE_TYPE } from '../organisms/data-table'
import DataTableProps, { RowWithCollapsibleType } from '../organisms/data-table/types/props'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getKey = (message: MessageCustom, isRfiManager: boolean): string => {
  return isRfiManager ? message._id + '-' + message.message.Reference : message._id
}


/* Render component */
export const RfiStatusBoard: React.FC<Props> = ({ rfiMessages, roles, channels, isRFIManager, isUmpire, onChange, role, onMessageRead, currentWargame }: Props) => {
  // produce dictionary of channels
  const [unreadCount, setUnreadCount] = useState<{ count: number }>({ count: -1 })
  const updateUreanMessagesCount = (nextUnreadCount: number): void => setUnreadCount(Object.assign({}, unreadCount, { count: nextUnreadCount }))

  const handleUpdateUnreadCount = (nexCount?: number): boolean => {
    const count = typeof nexCount === 'undefined' ? unreadCount.count - 1 : nexCount
    const shouldBeUpdated = unreadCount.count !== count

    if (shouldBeUpdated) {
      onMessageRead && onMessageRead(count)
      updateUreanMessagesCount(count)
    }
    return shouldBeUpdated
  }

  const channelDict = new Map<string, string>()
  channels.forEach((channel: ChannelData) => {
    const id = channel.uniqid
    channelDict.set(id, channel.name)
  })

  const data = rfiMessages.map(message => [
    message.message.Reference || message._id,
    channelDict.get(message.details.channel),
    message.details.from.roleName,
    message.details.from.forceColor,
    message.message.Title,
    message.details.collaboration ? message.details.collaboration.status : 'Unallocated',
    message.details.collaboration && message.details.collaboration.owner ? message.details.collaboration.owner.roleName : undefined
  ])
  const filtersChannel = rfiMessages.reduce((filters: any[], message) => {
    return [
      ...filters,
      channelDict.get(message.details.channel)
    ]
  }, [])

  const filtersRoles = rfiMessages.reduce((filters: any[], message) => {
    return [
      ...filters,
      message.details.from.roleName
    ]
  }, [])
  
  let unreadMessagesCount = 0
  const dataTableProps: DataTableProps = {
    columns: [
      'ID',
      {
        filters: [...new Set(filtersChannel)],
        label: 'Channel'
      },
      {
        filters: [...new Set(filtersRoles)],
        label: 'From'
      },
      'Title',
      {
        filters: [
          CollaborativeMessageStates.Unallocated,
          CollaborativeMessageStates.InProgress,
          CollaborativeMessageStates.PendingReview,
          CollaborativeMessageStates.Released,
          CollaborativeMessageStates.Closed
        ],
        label: 'Status'
      },
      {
        filters: roles,
        label: 'Owner'
      }
    ],
    data: data.map((row, rowIndex): RowWithCollapsibleType => {
      const [id, channel, mRole, forceColor, content, status, owner] = row
      const statusColors = {
        [CollaborativeMessageStates.Unallocated]: '#B10303',
        [CollaborativeMessageStates.InProgress]: '#E7740A',
        [CollaborativeMessageStates.PendingReview]: '#434343',
        [CollaborativeMessageStates.Released]: '#007219',
        [CollaborativeMessageStates.Closed]: '#434343'
      }

      const message = rfiMessages[rowIndex] as MessageCustom | undefined
      if (typeof message === 'undefined') throw new Error('messages[rowIndex] not found')

      const messageStateKey = getKey(message, isRFIManager)
      const isReaded = isMessageReaded(currentWargame, role.forceName, role.roleName, messageStateKey)
      if (!isReaded) unreadMessagesCount++
      
      const collapsible = (onChangeCallback?: () => void): React.ReactElement => {
        // if expanded && message haven't readed status set it as readed
        const handleRead = (): void => {
          setMessageState(currentWargame, role.forceName, role.roleName, messageStateKey)
          handleUpdateUnreadCount()
        }

        return (
          <div className={styles['rfi-form']}>
            <ChannelRfiMessageDetail
              isReaded={isReaded}
              onRead={handleRead}
              isRFIManager={isRFIManager}
              message={message}
              role={role}
              isUmpire={isUmpire}
              onChange={(newMeesage: MessageCustom): void => {
                onChange && onChange(newMeesage)
                typeof onChangeCallback === 'function' && onChangeCallback()
              }}
            />
          </div>
        )
      }

      const rowKey = `${message._id}-${message.message.Reference}`

      return {
        type: ROW_WITH_COLLAPSIBLE_TYPE,
        rowKey,
        collapsible,
        cells: [
          {
            component: <><FontAwesomeIcon color={isReaded ? '#838585' : '#69c'} icon={isReaded ? faEnvelopeOpen : faEnvelope} />&nbsp;{id}</>,
            label: id
          },
          channel,
          {
            component: <Badge customBackgroundColor={forceColor} label={mRole} />,
            label: mRole
          },
          content,
          {
            component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} customSize="large" label={status} />,
            label: status
          },
          {
            component: <Badge customBackgroundColor="#434343" label={owner ? owner.roleName : '= Unallocated ='} />,
            label: owner
          }
        ]
      }
    })
  }

  if (handleUpdateUnreadCount(unreadMessagesCount)) {
    return <></>
  }

  const handleMarkAllAsRead = (): void => {
    for (const message of rfiMessages) {
      const key = getKey(message, isRFIManager)
      setMessageState(currentWargame, role.forceName, role.roleName, key)
    }
    handleUpdateUnreadCount(0)
  }

  return (
    <>
      <div className={styles.btn}><span><Button onClick={handleMarkAllAsRead}>Mark All As Read</Button></span></div>
      <DataTable {...dataTableProps} noExpand />
    </>
  )
}

export default RfiStatusBoard
