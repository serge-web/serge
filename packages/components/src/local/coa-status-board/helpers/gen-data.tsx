import React from 'react'
import { MessageCustom, ForceData, ForceRole, TemplateBodysByKey, ChannelData } from '@serge/custom-types'
import { isMessageReaded, setMessageState } from '@serge/helpers'
import { ForceColor } from '..'
import ChannelCoaMessageDetail from '../../molecules/channel-coa-message-detail'
import { Badge } from '../../atoms/badge'
import { CollaborativeMessageStates, SpecialChannelColumns } from '@serge/config'
import getAssignees from './assignees'
import getKey from './get-key'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Stylesheet */
import styles from '../styles.module.scss'
import { Column, ExtraCellProps, Row } from '../types/props'
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

interface GenData {
  rows: Row[]
  columns: Column[]
  unreadMessagesCount: number
  customStyles: any
}

export const genData = (
  messages: MessageCustom[],
  forces: ForceData[],
  role: ForceRole,
  currentWargame: string,
  templates: TemplateBodysByKey,
  isUmpire: boolean,
  channel: ChannelData,
  canCollaborate: boolean,
  canReleaseMessages: boolean,
  canUnClaimMessages: boolean,
  gameDate: string,
  isCollaborating: boolean,
  isObserver: boolean,
  onChange: (msg: MessageCustom) => void
): GenData => {
  let unreadMessagesCount = 0

  const assignees: ForceRole[] = getAssignees(channel.participants, forces)

  const isCollabEditChannel = !!channel.collabOptions && channel.collabOptions.mode === 'edit'

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

  const ExtraCellComponent = ({ row, name }: ExtraCellProps): React.ReactElement => (
    <div style={{ wordWrap: 'break-word' }}>
      {row[name]}
    </div>
  )

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

  const extraCols: Column[] = []
  if (channel.collabOptions && channel.collabOptions.extraColumns) {
    const newCols = channel.collabOptions.extraColumns.map((col: SpecialChannelColumns): Column => {
      return {
        name: capitalize(col),
        selector: (row: Row): string => row[col],
        sortable: true,
        cell: (row: Row): React.ReactElement => <ExtraCellComponent row={row} name={col.toLowerCase()} />
      }
    })
    extraCols.push(...newCols)
  }
  columns.push(...extraCols)

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

    // flag for if we tell original sender of RFI that it has been responded to
    const isFinalised = status === CollaborativeMessageStates.Closed ||
      status === CollaborativeMessageStates.Finalized ||
      status === CollaborativeMessageStates.Released

    const messageStateKey = getKey(message, canCollaborate, canReleaseMessages, canUnClaimMessages, isFinalised, isCollabEditChannel, isObserver)
    const isReaded = isMessageReaded(currentWargame, role.forceName, role.roleName, messageStateKey)

    if (!isReaded) unreadMessagesCount++

    const collapsible = (onChangeCallback?: () => void): React.ReactElement => {
      // if expanded && message haven't readed status set it as readed
      const handleRead = (): void => {
        setMessageState(currentWargame, role.forceName, role.roleName, messageStateKey)
      }

      return (
        <div className={styles['rfi-form']}>
          <ChannelCoaMessageDetail
            isReaded={isReaded}
            onRead={handleRead}
            templates={templates}
            message={message}
            role={role}
            isUmpire={isUmpire}
            channel={channel}
            canCollaborate={canCollaborate}
            canReleaseMessages={canReleaseMessages}
            canUnClaimMessages={canUnClaimMessages}
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

    extraCols.forEach((col: Column) => {
      const colName = (col.name as string || '').toUpperCase()
      const cellData: string[] = []
      if (colName === 'LOCATION') {
        const rawData = message.message[colName]
        Object.keys(rawData).forEach((key: string) => {
          Object.keys(rawData[key]).forEach((childKey: string) => {
            cellData.push(`${key}-${rawData[key][childKey].Country}`)
          })
        })
      }
      row[colName.toLowerCase()] = cellData.join(', ')
    })

    return row
  })

  return { rows, columns, unreadMessagesCount, customStyles }
}

export default genData
