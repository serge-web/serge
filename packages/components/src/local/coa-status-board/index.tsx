import React from 'react'
import { DataTable } from '../organisms/data-table'
import { Badge } from '../atoms/badge'
import { MessageCustom } from '@serge/custom-types/message'
import { CollaborativeMessageStates } from '@serge/config'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChannelCoaMessageDetail from '../molecules/channel-coa-message-detail'
import getAssignees from './helpers/assignees'

/* Render component */
export const CoaStatusBoard: React.FC<Props> = ({ rfiMessages, roles, channel, isUmpire, onChange, role, forces }: Props) => {
  const participants = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!participants.find(p => p.canCollaborate)
  const canReleaseMessages = !!participants.find(p => p.canReleaseMessages)

  const data = rfiMessages.map(message => {
    const collab = message.details.collaboration
    const owner = (collab && collab.owner && collab.owner.roleName) || 'Pending'
    const res = [
      message.message.Reference || message._id,
      message.details.from.roleName,
      message.details.from.forceColor,
      message.message.Title,
      message.details.collaboration ? message.details.collaboration.status : 'Unallocated',
      owner
    ]
    return res
  })

  const filtersRoles = rfiMessages.reduce((filters: any[], message) => {
    return [
      ...filters,
      message.details.from.roleName
    ]
  }, [])

  const handleChange = (nextMessage: MessageCustom): void => {
    const index = rfiMessages.findIndex(message => message._id === nextMessage._id)
    if (index !== -1) {
      const nextMessages = [...rfiMessages]
      nextMessages[index] = nextMessage
      onChange(nextMessages)
    }
  }

  const assignees = getAssignees(participants, forces || [])

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
          CollaborativeMessageStates.EditDocument,
          CollaborativeMessageStates.EditResponse,
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
      const statusColors: { [property: string]: string } = {
        [CollaborativeMessageStates.Unallocated]: '#B10303',
        [CollaborativeMessageStates.PendingReview]: '#434343',
        [CollaborativeMessageStates.Released]: '#007219',
        [CollaborativeMessageStates.Rejected]: '#434343',
        [CollaborativeMessageStates.EditResponse]: '#ffc107',
        [CollaborativeMessageStates.Closed]: '#ff0000',
        [CollaborativeMessageStates.EditDocument]: '#ffc107',
        [CollaborativeMessageStates.DocumentPending]: '#0366d6',
        [CollaborativeMessageStates.ResponsePending]: '#0366d6'
      }

      // TODO: can we reduce the message detail processing when the control is collapsed?
      return {
        collapsible: (
          <div className={styles['rfi-form']}>
            <ChannelCoaMessageDetail
              message={(rfiMessages[rowIndex] as MessageCustom)}
              role={role}
              isUmpire={isUmpire}
              onChange={handleChange}
              channel={channel}
              canCollaborate={canCollaborate}
              canReleaseMessages={canReleaseMessages}
              assignees={assignees}
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

export default CoaStatusBoard
