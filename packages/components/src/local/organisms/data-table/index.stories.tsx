import React from 'react'

// Import component files
import DataTable from './index'
import DataTableProps from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'
import Badge from '../../atoms/badge'
import RfiForm from '../../molecules/rfi-form'
import { MessageCustom } from '@serge/custom-types/message'
import gameMessagesWithRFI from '@serge/mocks/game-messages-rfi.mock'
import { mostRecentOnly } from '@serge/helpers'

export default {
  title: 'local/organisms/DataTable',
  component: DataTable,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const Template: Story<DataTableProps> = args => {
  return (
    <DataTable {...args} />
  )
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Default = Template.bind({})
Default.args = {
  columns: ['First column', 'Second column', 'Third column'],
  data: [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3']
  ]
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const WithFilter = Template.bind({})
WithFilter.args = {
  columns: [
    'First column',
    {
      filters: [
        'Completed',
        'In Progress'
      ],
      label: 'Status'
    },
    'Third column'
  ],
  data: [
    ['Row 1 Cell 1', 'Completed', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Not Completed', 'Row 2 Cell 3'],
    ['Row 2 Cell 1', 'Not Completed', 'Row 2 Cell 3'],
    ['Row 2 Cell 1', 'Completed', 'Row 2 Cell 3'],
    ['Row 2 Cell 1', 'In Progress', 'Row 2 Cell 3'],
    ['Row 2 Cell 1', 'Not Completed', 'Row 2 Cell 3']
  ]
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
const rfiMessages = gameMessagesWithRFI
  .filter(message => (message as MessageCustom).details.messageType === 'RFI')
  // sample data includes multiple versions of RFI messages, ensure we're only
// looking at newest
const newest = mostRecentOnly(rfiMessages)

const rfiData = newest.map((message: any) => {
  const messageItem = (message as MessageCustom)
  return [
    messageItem._id,
    messageItem.details.channel,
    messageItem.details.from.role,
    messageItem.details.from.forceColor,
    messageItem.message.title,
      messageItem.details.collaboration?.status,
      messageItem.details.collaboration?.owner
  ]
})
export const Implementation = Template.bind({})
Implementation.args = {
  columns: [
    'ID',
    {
      filters: [
        'Red Support',
        'Blue Support'
      ],
      label: 'Channel'
    },
    {
      filters: [
        'CO',
        'Logistic'
      ],
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
      filters: [
        'Fuel specialist',
        'Aeronautic specialist',
        'Weapons specialist'
      ],
      label: 'Owner'
    }
  ],
  data: rfiData.map((row, rowIndex): any => {
    const [id, channel, role, forceColor, content, status, owner] = row
    const statusColors = {
      Unallocated: '#B10303',
      'In progress': '#E7740A',
      'Pending review': '#434343',
      Released: '#007219'
    }
    return {
      collapsible: (
        <RfiForm onSubmit={console.log} onReject={console.log} message={(rfiMessages[rowIndex] as MessageCustom)} />
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
}
