import React from 'react'
import { Badge, DataTable } from '@serge/components'
import { MessageCustom } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'
import { ChannelData } from '@serge/custom-types'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChannelRfiMessageDetail from '../molecules/channel-rfi-message-detail'

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
    message.details.collaboration ? message.details.collaboration.owner : '= Pending ='
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
  const dataTableProps = {
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
          CollaborativeMessageStates.Rejected
        ],
        label: 'Status'
      },
      {
        filters: roles,
        label: 'Owner'
      }
    ],
    data: data.map((row, rowIndex): any => {
      const [id, channel, mRole, forceColor, content, status, owner] = row
      const statusColors = {
        [CollaborativeMessageStates.Unallocated]: '#B10303',
        [CollaborativeMessageStates.InProgress]: '#E7740A',
        [CollaborativeMessageStates.PendingReview]: '#434343',
        [CollaborativeMessageStates.Released]: '#007219',
        [CollaborativeMessageStates.Rejected]: '#434343'
      }

      return {
        collapsible: (
          <div className={styles['rfi-form']}>
            <ChannelRfiMessageDetail
              isRFIManager={isRFIManager}
              message={(rfiMessages[rowIndex] as MessageCustom)}
              role={role}
              isUmpire={isUmpire}
              onChange={onChange}
            />
          </div>
        ),
        cells: [
          id,
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
            component: owner ? <Badge customBackgroundColor="#434343" label={owner} /> : null,
            label: owner
          }
        ]
      }
    })
  }

  return (
    <DataTable {...dataTableProps} />
  )
}

export default RfiStatusBoard
