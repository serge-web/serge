import React from 'react'
import { MessageCustom, ForceData, ForceRole, TemplateBodysByKey, ChannelCollab } from 'src/custom-types'
import { ForceColor } from '..'
import CollabMessageDetail from '../../molecules/collab-message-detail'
import { Badge } from '../../atoms/badge'
import { CollaborativeMessageStates, CollaborativePermission, SpecialChannelColumns } from 'src/config'
import getAssignees from './assignees'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Import Stylesheet */
import styles from '../styles.module.scss'
import { Column, Row } from '../../react-table/types/props'
import { capitalize } from 'lodash'
import moment from 'moment'

/** helper to provide legible version of force & role */
export const formatRole = (role: ForceRole): string => {
  return role.forceName + '-' + role.roleName
}

const statusColors: { [property: string]: string } = {
  [CollaborativeMessageStates.Unallocated]: '#B10303',
  [CollaborativeMessageStates.PendingReview]: '#434343',
  [CollaborativeMessageStates.Released]: '#007219',
  [CollaborativeMessageStates.Closed]: '#ff0000',
  [CollaborativeMessageStates.InProgress]: '#ffc107'
}

interface GenData {
  rows: Row[]
  columns: Column[]
  customStyles: any
}

export const genData = (
  messages: MessageCustom[],
  forces: ForceData[],
  role: ForceRole,
  templates: TemplateBodysByKey,
  isObserver: boolean,
  isUmpire: boolean,
  channelColb: ChannelCollab,
  permission: CollaborativePermission,
  gameDate: string,
  onChange: (msg: MessageCustom) => void,
  onMessageRead?: (message: MessageCustom) => void
): GenData => {
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
      center: true,
      colFilter: true
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
      grow: 1.2,
      colFilter: true
    },
    {
      name: 'Updated',
      selector: (row: Row): string => row.updated,
      sortable: true,
      center: true
    }
  ]

  // only show the owner column if the player can collaborate in the channel
  if (isCollaborating) {
    columns.push(
      {
        name: 'Owner',
        selector: (row: Row): React.ReactElement | null => (row.owner && isCollaborating) ? <Badge customBackgroundColor={row.ownerColor} customSize={'large'} label={row.owner} /> : null,
        sortable: true,
        sortFunction: (rowA: Row, rowB: Row): number => sortCol(rowA.owner, rowB.owner),
        center: true
      }
    )
  }

  const extraCols: Column[] = []
  if (channelColb.extraColumns) {
    const newCols = channelColb.extraColumns.map((col: SpecialChannelColumns): Column => {
      return {
        name: capitalize(col),
        selector: (row: Row): string => row[col],
        sortable: true
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
    const isReaded = message.hasBeenRead
    const messageState = message.details.collaboration?.status || CollaborativeMessageStates.Unallocated

    const collapsible = (): React.ReactElement => {
      // if expanded && message haven't readed status set it as readed
      const handleRead = (): void => {
        onMessageRead && onMessageRead(message)
      }

      const collapseMe = (msg: MessageCustom): void => {
        /**
         * cause the react data table does not support any api to collapse selected row.
         * solution: click on this row to collapse it.
         */
        const cellId = `cell-1-${msg.message.Reference}`
        const cellElm = document.getElementById(cellId)
        if (cellElm) {
          cellElm.click()
        }
      }

      return (
        <div className={styles['rfi-form']}>
          <CollabMessageDetail
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
            collapseMe={collapseMe}
            gameDate={gameDate}
          />
        </div>
      )
    }
    
    const row: Row = {
      id: message.message.Reference || message._id, // for showing on the row
      _id: message._id, // tracking data
      from: message.details.from.roleName,
      title: message.message.Title || message.message.title,
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

  return { rows, columns, customStyles }
}

export default genData
