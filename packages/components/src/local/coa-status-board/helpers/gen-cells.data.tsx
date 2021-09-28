import React from 'react'
import { MessageCustom } from '@serge/custom-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge } from '../../atoms/badge'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { statusColors } from './status-colors'
import { CollaborativeMessageStates } from '@serge/config'
import { RowDataType } from '../../organisms/data-table/types/props'
import { ROW_DATA_TYPE } from '../../organisms/data-table'
import ChannelData from '@serge/custom-types/channel-ui'
import getColumns from './get-columns'
import moment from 'moment'

const generateId = (isReaded: boolean, message: MessageCustom): RowDataType => {
  return {
    type: ROW_DATA_TYPE,
    rowkey: 'id',
    component: <><FontAwesomeIcon color={isReaded ? '#838585' : '#69c'} icon={isReaded ? faEnvelopeOpen : faEnvelope} />&nbsp; {message.message.Reference || message._id}</>,
    label: message.message.Reference || message._id
  }
}

const genRoleStatusTitleCells = (message: MessageCustom, status: string): RowDataType[] => {
  return [
    {
      type: ROW_DATA_TYPE,
      rowkey: 'from-roleName',
      component: <Badge customBackgroundColor={message.details.from.forceColor} label={message.details.from.roleName} />,
      label: message.details.from.roleName
    },
    {
      label: message.message.Title,
      component: null,
      type: ROW_DATA_TYPE,
      rowkey: 'message-title'
    },
    {
      type: ROW_DATA_TYPE,
      rowkey: 'status',
      component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} customSize="large" label={status} />,
      label: status
    }
  ]
}

export const genCellsDataCoa = (
  channel: ChannelData,
  isReaded: boolean,
  message: MessageCustom,
  ownerComposite = '',
  ownerColor: string,
  myDocument: boolean,
  isCollaborating: boolean,
  lastUpdated: string,
  status: CollaborativeMessageStates | 'Unallocated'
): RowDataType[] => {
  const cells: RowDataType[] = [
    generateId(isReaded, message),
    ...genRoleStatusTitleCells(message, status),
    {
      type: ROW_DATA_TYPE,
      rowkey: 'channel',
      component: ownerComposite ? <Badge customBackgroundColor={ownerColor} customSize={myDocument ? 'large' : undefined} label={isCollaborating && ownerColor} /> : null,
      label: ownerComposite
    },
    {
      type: ROW_DATA_TYPE,
      rowkey: 'lastUpdated',
      component: <>{moment(`${lastUpdated}`).fromNow()}</>,
      label: lastUpdated
    }
  ]

  if (channel.collabOptions && channel.collabOptions.extraColumns) {
    const extraCols = getColumns(message, channel.collabOptions.extraColumns)

    const cols: string[][] = extraCols
    const newCols: RowDataType[] = cols.map((entries: string[], index: number) => {
      const res = entries.map((entry: string) => {
        // todo: try to return a `Badge` like above for each country
        return entry + ' '
      })

      return {
        type: ROW_DATA_TYPE,
        rowkey: 'extra' + index,
        component: null,
        label: res.join(' ')
      }
    })

    cells.push(...newCols)
  }

  return cells
}
