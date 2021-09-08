import React, { useState, useEffect } from 'react'
import { DataTable } from '../organisms/data-table'
import { Badge } from '../atoms/badge'
import { MessageCustom } from '@serge/custom-types/message'
import { CollaborativeMessageStates, SpecialChannelColumns } from '@serge/config'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChannelCoaMessageDetail from '../molecules/channel-coa-message-detail'
import { ForceData, ForceRole } from '@serge/custom-types'
import getAssignees from './helpers/assignees'
import moment from 'moment'
import getColumns from './helpers/get-columns'
import { capitalize } from 'lodash'

/** combine force id and color
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
    return { uniqid: force.uniqid, color: force.color }
  })
}

const getListOfOwners = (messages: MessageCustom[]): string[] => {
  const roles = messages.reduce((filters: string[], message) => {
    const collab = message.details.collaboration
    if (collab && collab.owner) {
      return [
        ...filters,
        formatRole(collab.owner)
      ]
    } else {
      return filters
    }
  }, [])
  // just the unique sources
  return [...new Set(roles)]
}

const getListOfSources = (messages: MessageCustom[]): string[] => {
  return messages.reduce((filters: any[], message) => {
    if (!message.details.from) {
      console.warn(message, 'message have no from.roleName')
      return filters
    }
    return [
      ...filters,
      message.details.from.roleName
    ]
  }, [])
}

/* Render component */
export const CoaStatusBoard: React.FC<Props> = ({ parentRef, templates, messages, channel, isUmpire, onChange, role, forces }: Props) => {
  const [forceColors, setForceColors] = useState<ForceColor[]>([])
  const [assignees, setAssignees] = useState<ForceRole[]>([])

  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)

  // whether this user should see metadata about the message being edited
  const isCollaborating = canCollaborate || canReleaseMessages || isUmpire

  useEffect(() => {
    setAssignees(getAssignees(channel.participants, forces))
  }, [channel, forces])

  useEffect(() => {
    setForceColors(getForceColors(forces))
  }, [forces])

  // collate list of message owners
  const listofOwners = getListOfOwners(messages)

  // collate list of sources (From) for messages
  const filtersRoles = getListOfSources(messages)

  /** cache the formatted version of my role */
  const myRoleFormatted = formatRole(role)

  const data = messages.map(message => {
    const collab = message.details.collaboration
    const ownerRole = (collab && collab.owner) || undefined
    // const ownerName = (ownerRole && ownerRole.roleName) || undefined
    const ownerForce = ownerRole && forceColors.find((fCol: ForceColor) => fCol.uniqid === ownerRole.forceId)
    const ownerColor = (ownerForce && ownerForce.color) || '#f00'
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
      ownerComposite,
      ownerColor,
      myDocument,
      lastUpdated
    ]

    // see if there are any other columns required
    if (channel.collabOptions && channel.collabOptions.extraColumns) {
      const newCols = getColumns(message, channel.collabOptions.extraColumns)
      res.push(newCols)
    }

    return res
  })

  const columnHeaders = [
    'ID',
    {
      filters: [...new Set(filtersRoles)],
      label: 'From'
    },
    'Title',
    {
      filters: [
        CollaborativeMessageStates.Unallocated,
        CollaborativeMessageStates.BeingEdited,
        CollaborativeMessageStates.BeingEdited,
        CollaborativeMessageStates.PendingReview,
        CollaborativeMessageStates.Released
      ],
      label: 'Status'
    },
    {
      filters: listofOwners,
      label: 'Owner'
    },
    'Updated'
  ]

  if (channel.collabOptions && channel.collabOptions.extraColumns) {
    const newCols = channel.collabOptions.extraColumns.map((col: SpecialChannelColumns): string => {
      return capitalize(col)
    })
    columnHeaders.push(...newCols)
  }

  const dataTableProps = {
    columns: columnHeaders,
    data: data.map((row, rowIndex): any => {
      const [id, mRole, forceColor, content, status, ownerName, ownerColor, myDocument, lastUpdated, extraCols] = row
      const statusColors: { [property: string]: string } = {
        [CollaborativeMessageStates.Unallocated]: '#B10303',
        [CollaborativeMessageStates.PendingReview]: '#434343',
        [CollaborativeMessageStates.Finalized]: '#007219',
        [CollaborativeMessageStates.Released]: '#007219',
        [CollaborativeMessageStates.BeingEdited]: '#ffc107',
        [CollaborativeMessageStates.Closed]: '#ff0000',
        [CollaborativeMessageStates.BeingEdited]: '#ffc107',
        [CollaborativeMessageStates.Pending]: '#0366d6',
        [CollaborativeMessageStates.Pending]: '#0366d6'
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
              parentRef={parentRef}
            />
          </div>
        )
      }

      const cells = [
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
          component: ownerName ? <Badge customBackgroundColor={ownerColor} customSize={myDocument && 'large'} label={isCollaborating && ownerName} /> : null,
          label: ownerName
        },
        lastUpdated
      ]

      // extra cols?
      if (extraCols) {
        const cols: string[][] = extraCols
        const newCols = cols.map((entries: string[]) => {
          return entries.map((entry: string) => {
            // todo: try to return a `Badge` like above for each country
            return entry + ' '
          })
        })
        cells.push(...newCols)
      }

      return {
        collapsible,
        cells: cells
      }
    })
  }

  return (
    <DataTable {...dataTableProps} />
  )
}

export default CoaStatusBoard
