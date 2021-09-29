/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Badge from '../../atoms/badge'
import RfiForm from '../../molecules/rfi-form'
import { MessageCustom } from '@serge/custom-types/message'
import { GameMessagesMockRFI } from '@serge/mocks'
import { mostRecentOnly } from '@serge/helpers'

import DataTable, { ROW_DATA_TYPE, ROW_WITH_COLLAPSIBLE_TYPE } from './index'
import { RowWithCollapsibleType } from './types/props'

const rfiMessages = (GameMessagesMockRFI as MessageCustom[]).filter((message: MessageCustom) => message.details.messageType === 'RFI')
const newest = mostRecentOnly(rfiMessages) as MessageCustom[]

const rfiData: any[][] = []

const data: RowWithCollapsibleType[] = newest.map((message, rowIndex) => {
  const messageItem = (message as MessageCustom)
  const row = [
    messageItem._id,
    messageItem.details.channel,
    messageItem.details.from.roleName,
    messageItem.details.from.forceColor,
    messageItem.message.Title,
      messageItem.details.collaboration?.status,
      messageItem.details.collaboration?.owner
  ]

  rfiData.push(row)

  const statusColors = {
    Unallocated: '#B10303',
    'In progress': '#E7740A',
    'Pending review': '#434343',
    Released: '#007219'
  }
  return {
    type: ROW_WITH_COLLAPSIBLE_TYPE,
    rowKey: 'rowKey' + rowIndex,
    collapsible: (): React.ReactElement => (
      <RfiForm onSubmit={console.log} onReject={console.log} message={(newest[rowIndex] as MessageCustom)} />
    ),
    cells: [
      {
        rowkey: 'id',
        type: ROW_DATA_TYPE,
        component: null,
        label: messageItem._id
      },
      {
        rowkey: 'channel',
        type: ROW_DATA_TYPE,
        component: null,
        label: messageItem.details.channel
      },
      {
        rowkey: 'roleName',
        type: ROW_DATA_TYPE,
        component: <Badge customBackgroundColor={messageItem.details.from.forceColor} label={messageItem.details.from.roleName}/>,
        label: messageItem.details.from.roleName
      },
      {
        rowkey: 'Title',
        type: ROW_DATA_TYPE,
        component: null,
        label: messageItem.message.Title
      },
      {
        rowkey: 'Status',
        type: ROW_DATA_TYPE,
        component: <Badge customBackgroundColor={messageItem.details.collaboration?.status ? statusColors[messageItem.details.collaboration?.status] : '#434343'} customSize="large" label={messageItem.details.collaboration?.status}/>,
        label: `${messageItem.details.collaboration?.status}`
      },
      {
        rowkey: 'Owner',
        type: ROW_DATA_TYPE,
        component: messageItem.details.collaboration?.owner ? <Badge customBackgroundColor="#434343" label={messageItem.details.collaboration?.owner.roleName} /> : null,
        label: ''
      }
    ]
  }
})

const uniqueFieldValues = (messages: any[], col: number): any => {
  // find items with unique items in set column
  const uniqueValues = messages.filter((elem, index) => rfiData.findIndex(obj => obj[col] === elem[col]) === index)
  // produce array with just field of interest
  const values = uniqueValues.map((item: any) => item && item[col])
  // swap undefined for string
  return values.map((item: any) => item === undefined ? '[Undefined]' : item)
}

const columns = [
  'ID',
  {
    filters: uniqueFieldValues(rfiData, 1),
    label: 'Channel'
  },
  {
    filters: uniqueFieldValues(rfiData, 2),
    label: 'From'
  },
  'Title',
  {
    filters: [
      'Unallocated',
      'In Progress',
      'Pending Review',
      'Released'
    ],
    label: 'Status'
  },
  {
    filters: uniqueFieldValues(rfiData, 6),
    label: 'Owner'
  }
]

describe('DataTable component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DataTable columns={columns} data={data} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
