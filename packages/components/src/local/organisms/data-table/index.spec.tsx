/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import Badge from '../../atoms/badge'
import { MessageCustom } from '@serge/custom-types/message'
import { GameMessagesMockRFI } from '@serge/mocks'
import { mostRecentOnly } from '@serge/helpers'

import DataTable, { ROW_WITH_COLLAPSIBLE_TYPE } from './index'
import { RowWithCollapsibleType } from './types/props'
import { RfiForm } from '../../molecules/rfi-form'

const rfiMessages = (GameMessagesMockRFI as MessageCustom[]).filter((message: MessageCustom) => message.details.messageType === 'RFI')
const newest = mostRecentOnly(rfiMessages) as MessageCustom[]

const rfiData = newest.map((message: any) => {
  const messageItem = (message as MessageCustom)
  return [
    messageItem._id,
    messageItem.details.channel,
    messageItem.details.from.roleName,
    messageItem.details.from.forceColor,
    messageItem.details.from.forceId,
    messageItem.message.Title,
    messageItem.details.collaboration?.status,
    messageItem.details.collaboration?.owner
  ]
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

const data = rfiData.map((row: any, rowIndex: any): RowWithCollapsibleType => {
  const [id, channel, role, forceColor, content, status, owner] = row
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
      id,
      channel,
      {
        component: <Badge customBackgroundColor={forceColor} label={role}/>,
        label: role
      },
      content,
      {
        component: <Badge customBackgroundColor={status ? statusColors[status] : '#434343'} customSize="large" label={status}/>,
        label: status
      },
      {
        component: owner ? <Badge customBackgroundColor="#434343" label={owner}/> : null,
        label: owner
      }
    ]
  }
})

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
