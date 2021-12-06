import React from 'react'
import { MessageCustom, ForceData, ForceRole, TemplateBodysByKey, ChannelCollab } from '@serge/custom-types'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import { ForceColor } from '..'
import ChannelCoaMessageDetail2 from '../../molecules/channel-coa-message-detail-2'
import { Badge } from '../../atoms/badge'
import { CollaborativeMessageStates, CollaborativeMessageStates2, CollaborativePermission, SpecialChannelColumns } from '@serge/config'
import getAssignees from './assignees'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Stylesheet */
import styles from '../styles.module.scss'
import { Column, Row } from '../types/props'
import { capitalize } from 'lodash'
import moment from 'moment'

/** helper to provide legible version of force & role */
export const formatRole = (role: ForceRole): string => {
  return role.forceName + '-' + role.roleName
}

const statusColors: { [property: string]: string } = {
  [CollaborativeMessageStates.Unallocated]: '#B10303',
  [CollaborativeMessageStates.PendingReview]: '#434343',
  [CollaborativeMessageStates.Finalized]: '#007219',
  [CollaborativeMessageStates.Released]: '#007219',
  [CollaborativeMessageStates.Closed]: '#ff0000',
  [CollaborativeMessageStates.BeingEdited]: '#ffc107',
  [CollaborativeMessageStates.Pending]: '#0366d6'
}

interface GenData2 {
  rows: Row[]
  columns: Column[]
  unreadMessagesCount: number
  customStyles: any
}

export const genData2 = (
  messages: MessageCustom[],
  forces: ForceData[],
  role: ForceRole,
  currentWargame: string,
  templates: TemplateBodysByKey,
  isObserver: boolean,
  isUmpire: boolean,
  channelColb: ChannelCollab,
  permission: CollaborativePermission,
  gameDate: string,
  onChange: (msg: MessageCustom) => void
): GenData2 => {
  let unreadMessagesCount = 0

  const assignees: ForceRole[] = getAssignees(channelColb.participants, forces)
  const isCollaborating = permission > CollaborativePermission.CannotCollaborate || isObserver

  const sortCol = (str1: string, str2: string): number => {
    const a = str1.toLowerCase()
    const b = str2.toLowerCase()

    return a > b ? 1 : -1
  }

  const customStyles = {
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: '#3ef1ea',
        fontWeight: 'bold',
        fontSize: 'initial',
        backgroundColor: '#012858',
        color: 'white'
      }
    },
    headCells: {
      style: {
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderRightColor: 'white'
      }
    }
  }

  const columns: Column[] = [
    {
      name: 'ID',
      selector: (row: Row): React.ReactElement => (<><FontAwesomeIcon color={row.isReaded ? '#838585' : '#69c'} icon={row.isReaded ? faEnvelopeOpen : faEnvelope} />&nbsp;{row.id}</>),
      sortable: true,
      sortFunction: (rowA: Row, rowB: Row): number => sortCol(rowA.id, rowB.id),
      center: true
    },
    {
      name: 'From',
      selector: (row: Row): React.ReactElement => (<Badge customBackgroundColor={row.forceColor} label={row.from} />),
      sortable: true,
      sortFunction: (rowA: Row, rowB: Row): number => sortCol(rowA.from, rowB.from),
      center: true
    },
    {
      name: 'Title',
      selector: (row: Row): string => row.title,
      sortable: true,
      center: true
    },
    {
      name: 'Status',
      selector: (row: Row): React.ReactElement => (<Badge customBackgroundColor={row.status ? statusColors[row.status] : '#434343'} label={row.status} />),
      sortable: true,
      sortFunction: (rowA: Row, rowB: Row): number => sortCol(rowA.status, rowB.status),
      center: true,
      grow: 1.2
    },
    {
      name: 'Owner',
      selector: (row: Row): React.ReactElement | null => row.owner ? <Badge customBackgroundColor={row.ownerColor} customSize={'large'} label={isCollaborating && row.owner} /> : null,
      sortable: true,
      sortFunction: (rowA: Row, rowB: Row): number => sortCol(rowA.owner, rowB.owner),
      center: true
    },
    {
      name: 'Updated',
      selector: (row: Row): string => row.updated,
      sortable: true,
      center: true
    }
  ]

  if (channelColb.extraColumns) {
    const newCols = channelColb.extraColumns.map((col: SpecialChannelColumns): Column => {
      return {
        name: capitalize(col),
        selector: (row: Row): string => row[col],
        sortable: true
      }
    })
    columns.push(...newCols)
  }

  const rows: Row[] = messages.map((message): Row => {
    const collab = message.details.collaboration
    const ownerRole = (collab && collab.owner) || undefined

    const ownerForce: ForceData | undefined = ownerRole && forces.find((force: ForceColor) => force.uniqid === ownerRole.forceId)

    const ownerColor: string = ownerForce ? ownerForce.color : '#f00'
    // generate the owner of this document
    const ownerComposite: string | undefined = ownerRole ? formatRole(ownerRole) : undefined
    // am I the owner?
    // const myDocument: boolean = ownerComposite === formatRole(role)
    const lastUpdated = collab ? collab.lastUpdated : 'Pending'
    const status = collab ? collab.status : 'Unallocated'

    const messageStateKey = message._id
    const isReaded = isMessageReaded(currentWargame, role.forceName, role.roleName, messageStateKey)

    if (!isReaded) unreadMessagesCount++

    const messageState = message.details.collaboration?.status2 || CollaborativeMessageStates2.Unallocated

    const collapsible = (onChangeCallback?: () => void): React.ReactElement => {
      // if expanded && message haven't readed status set it as readed
      const handleRead = (): void => {
        setMessageState(currentWargame, role.forceName, role.roleName, messageStateKey)
      }

      return (
        <div className={styles['rfi-form']}>
          <ChannelCoaMessageDetail2
            isReaded={isReaded}
            onRead={handleRead}
            templates={templates}
            message={message}
            state={messageState}
            role={role}
            isObserver={isObserver}
            isUmpire={isUmpire}
            channelColb={channelColb}
            permission={permission}
            assignees={assignees}
            onChange={(newMeesage: MessageCustom): void => {
              onChange && onChange(newMeesage)
            }}
            collapseMe={(): void => {
              typeof onChangeCallback === 'function' && onChangeCallback()
            }}
            gameDate={gameDate}
          />
        </div>
      )
    }

    const row: Row = {
      id: message.message.Reference || message._id,
      from: message.details.from.roleName,
      title: message.message.Title,
      status: status,
      owner: ownerComposite,
      updated: moment(lastUpdated).fromNow(),
      collapsible,
      ownerColor,
      isReaded,
      forceColor: message.details.from.forceColor
    }

    return row
  })

  return { rows, columns, unreadMessagesCount, customStyles }
}

export default genData2
