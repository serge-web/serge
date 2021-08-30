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
import { ForceRole } from '@serge/custom-types'
import getAssignees from './helpers/assignees'

/** helper to provide legible version of force & role */
const formatRole = (role: ForceRole): string => {
  return role.forceName + '-' + role.roleName
}

/* Render component */
export const CoaStatusBoard: React.FC<Props> = ({ templates, messages, channel, isUmpire, onChange, role, forces }: Props) => {
  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)

  const assignees = getAssignees(channel.participants, forces)

  // collate list of message owners
  const listofOwners = messages.reduce((filters: any[], message) => {
    if (message.details.collaboration && message.details.collaboration.owner) {
      return [
        ...filters,
        formatRole(message.details.collaboration.owner)
      ]
    } else {
      return filters
    }
  }, [])

  // collate list of sources (From) for messages
  const filtersRoles = messages.reduce((filters: any[], message) => {
    return [
      ...filters,
      message.details.from.roleName
    ]
  }, [])

  const data = messages.map(message => {
    const collab = message.details.collaboration
    const owner = (collab && collab.owner && formatRole(collab.owner)) || 'Pending'
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
          CollaborativeMessageStates.Released
        ],
        label: 'Status'
      },
      {
        filters: listofOwners,
        label: 'Owner'
      }
    ],
    data: data.map((row, rowIndex): any => {
      const [id, mRole, forceColor, content, status, owner] = row
      const statusColors: { [property: string]: string } = {
        [CollaborativeMessageStates.Unallocated]: '#B10303',
        [CollaborativeMessageStates.PendingReview]: '#434343',
        [CollaborativeMessageStates.Finalized]: '#007219',
        [CollaborativeMessageStates.Released]: '#007219',
        [CollaborativeMessageStates.EditResponse]: '#ffc107',
        [CollaborativeMessageStates.Closed]: '#ff0000',
        [CollaborativeMessageStates.EditDocument]: '#ffc107',
        [CollaborativeMessageStates.DocumentPending]: '#0366d6',
        [CollaborativeMessageStates.ResponsePending]: '#0366d6'
      }

      return {
        collapsible: (
          <div className={styles['rfi-form']}>
            <ChannelCoaMessageDetail
              templates={templates}
              message={(messages[rowIndex] as MessageCustom)}
              role={role}
              isUmpire={isUmpire}
              onChange={onChange}
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
