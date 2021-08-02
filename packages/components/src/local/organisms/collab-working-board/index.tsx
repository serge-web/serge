import React from 'react'
import { MessageCustom } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChannelRfiMessageDetail from '../../molecules/channel-rfi-message-detail'
import { Badge } from '../../atoms/badge'
import { DataTable } from '../data-table'

/* Render component */
export const CollabWorkingBoard: React.FC<Props> = ({ rfiMessages, roles, onChange, role }: Props) => {

  const data = rfiMessages.map(message => [
    message.message.Reference || message._id,
    message.details.from.roleName,
    message.details.from.forceColor,
    message.message.Title,
    message.details.collaboration ? message.details.collaboration.status : 'Unallocated',
    message.details.collaboration && message.details.collaboration.owner ? message.details.collaboration.owner.roleName : undefined
  ])

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
      const [id, mRole, forceColor, content, status, owner] = row
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
              isRFIManager={true}
              message={(rfiMessages[rowIndex] as MessageCustom)}
              role={role}
              isUmpire={true}
              onChange={onChange}
            />
          </div>
        ),
        cells: [
          id,
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
    <DataTable {...dataTableProps} />
  )
}

export default CollabWorkingBoard
