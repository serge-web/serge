import React from 'react'
import { CollaborativeMessageStates } from '@serge/config'
import { ChannelData,MessageCustom } from '@serge/custom-types'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import DataTableProps, { RowWithCollapsibleType } from '../../organisms/data-table/types/props'
import styles from '../styles.module.scss'
import { Badge } from '../../atoms/badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChannelRFIMessageDetail from '../../molecules/channel-rfi-message-detail'
import { ROW_WITH_COLLAPSIBLE_TYPE }  from '../../organisms/data-table/index'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { PropsRFI } from '../types/props'
import { getKeyRFI } from '../helpers/get-key'
import { statusColors } from './status-colors'


interface GenData {
    dataTableProps: DataTableProps
    unreadMessagesCount: number
}


export const genRFIData = (
  props:PropsRFI,
  handleUpdateUnreadCount: (nexCount?: number) => boolean
  // onChange?: (nextMessage: MessageCustom) => void,
): GenData => {

  const {channels, rfiMessages, roles,isRFIManager,isUmpire,currentWargame,role,onChange} = props
  const channelDict = new Map<string, string>()
  channels.forEach((channel: ChannelData) => {
    const id = channel.uniqid
    channelDict.set(id, channel.name)
  })

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
    data: rfiMessages.map((message): RowWithCollapsibleType => {

      const status = message.details.collaboration ? message.details.collaboration.status : 'Unallocated'
      const owner= message.details.collaboration && message.details.collaboration.owner ? message.details.collaboration.owner.roleName : undefined

      if (typeof message === 'undefined') throw new Error('messages[rowIndex] not found')

      const messageStateKey = getKeyRFI(message, isRFIManager)
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
            <ChannelRFIMessageDetail
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

      const rowKey = `${message.message.Reference}`

      return {
        type: ROW_WITH_COLLAPSIBLE_TYPE,
        rowKey,
        collapsible,
        cells: [
          {
            component: <><FontAwesomeIcon color={isReaded ? '#838585' : '#69c'} icon={isReaded ? faEnvelopeOpen : faEnvelope} />&nbsp;{message.message.Reference || message._id}</>,
            label: message.message.Reference || message._id
          },
          channelDict.get(message.details.channel),
          {
            component: <Badge customBackgroundColor={message.details.from.forceColor} label={message.details.from.roleName} />,
            label: message.details.from.roleName
          },
          message.message.Title,
          {
            component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} customSize="large" label={status} />,
            label: status
          },
          {
            component: <Badge customBackgroundColor="#434343" label={owner ? owner : '= Unallocated ='} />,
            label: owner
          }
        ]
      }
    })
  }

  return { dataTableProps, unreadMessagesCount }
}
