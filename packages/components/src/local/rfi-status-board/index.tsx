import React from 'react'
import { MessageCustom } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'
import { ChannelData } from '@serge/custom-types'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChannelRfiMessageDetail from '../molecules/channel-rfi-message-detail'
import { Badge } from '../atoms/badge'
import { DataTable, ROW_WITH_COLLAPSIBLE_TYPE } from '../organisms/data-table'
import DataTableProps, { RowWithCollapsibleType } from '../organisms/data-table/types/props'
import cx from 'classnames'

/* Render component */
export const RfiStatusBoard: React.FC<Props> = ({ rfiMessages, roles, channels, isRFIManager, isUmpire, onChange, role }: Props) => {
  // produce dictionary of channels
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

      const collapsible = (onChangeCallback?: () => void): React.ReactElement => {
        return (
          <div className={styles['rfi-form']}>
            <ChannelRfiMessageDetail
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
            component: <><div className={cx(styles.badge, message.hasBeenRead && styles['badge-opened'])} />{id}</>,
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

  return (
    <DataTable {...dataTableProps} noExpand />
  )
}

export default RfiStatusBoard
