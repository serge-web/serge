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
import { ForceData, ForceRole } from '@serge/custom-types'
import getAssignees from './helpers/assignees'
import moment from 'moment'

/** data for a message that is being
 * collaboarively edited
 */
 export interface ForceColor {
   uniqid: string
   color: string
}

/** helper to provide legible version of force & role */
const formatRole = (role: ForceRole): string => {
  return role.forceName + '-' + role.roleName
}

const getForceColors = (forces: ForceData[]): ForceColor[] => {
  return forces.map((force: ForceData) => { 
    return {uniqid: force.uniqid, color: force.color}
   })
}

/* Render component */
export const CoaStatusBoard: React.FC<Props> = ({ templates, messages, channel, isUmpire, onChange, role, forces }: Props) => {
  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)

  const assignees = getAssignees(channel.participants, forces)
  const forceColors: ForceColor[] = getForceColors(forces)

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
    if (!message.details.from) {
      console.warn(message, 'message have no from.roleName')
      return filters
    }
    return [
      ...filters,
      message.details.from.roleName
    ]
  }, [])

  /** cache the formatted version of my role */
  const myRoleFormatted = formatRole(role)

  const data = messages.map(message => {
    const collab = message.details.collaboration
    const ownerRole = collab && collab.owner || undefined
    const ownerName = (ownerRole && ownerRole.roleName) || undefined
    const ownerForce = ownerRole && forceColors.find((fCol:ForceColor) => fCol.uniqid === ownerRole.forceId)
    const ownerColor =  ownerForce && ownerForce.color || '#f00'
    // generate the owner of this document
    const ownerComposite = (ownerRole && formatRole(ownerRole)) || undefined
    // am I the owner?
    const myDocument = ownerComposite === myRoleFormatted
    const lastUpdated = collab ? moment(collab.lastUpdated).fromNow() : 'Pending'
    const res = [
      message.message.Reference || message._id,
      message.details.from.roleName,
      message.details.from.forceColor,
      message.message.Title,
      collab ? collab.status : 'Unallocated',
      ownerName,
      ownerColor,
      myDocument,
      lastUpdated
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
      },
      'Last updated'
    ],
    data: data.map((row, rowIndex): any => {
      const [id, mRole, forceColor, content, status, ownerName, ownerColor, myDocument, lastUpdated] = row
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

      const collapsible = (onChangeCallback?: () => void): React.ReactNode => {
        return (
          <div className={styles['rfi-form']}>
            <ChannelCoaMessageDetail
              templates={templates}
              message={(messages[rowIndex] as MessageCustom)}
              role={role}
              isUmpire={isUmpire}
              channel={channel}
              canCollaborate={canCollaborate}
              canReleaseMessages={canReleaseMessages}
              assignees={assignees}
              onChange={(newMeesage: MessageCustom): void => {
                onChange && onChange(newMeesage)
                typeof onChangeCallback === 'function' && onChangeCallback()
              }}
            />
          </div>
        )
      }

      return {
        collapsible,
        cells: [
          id,
          {
            component: <Badge customBackgroundColor={forceColor} label={mRole} />,
            label: mRole
          },
          content,
          {
            component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} label={status} />,
            label: status
          },
          {
            component: ownerName ? <Badge customBackgroundColor={ ownerColor } customSize={myDocument && 'large'} label={ownerName} /> : null,
            label: ownerName
          },
          lastUpdated
        ]
      }
    })
  }

  return (
    <DataTable {...dataTableProps} />
  )
}

export default CoaStatusBoard
