import React from 'react'

// Import component files
import DataTable from './index'
import DataTableProps from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'
import Badge from '../../atoms/badge'
import RfiForm from '../../molecules/rfi-form'

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

export const Default = Template.bind({})
Default.args = {
  columns: ['First column', 'Second column', 'Third column'],
  data: [
    ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
    ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3']
  ]
}

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
  data: [
    ['RFI-red-33', 'Red Support', 'CO', 'Request for air support', 'Unallocated', ''],
    ['RFI-red-32', 'Red Support', 'Logistic', 'Fuel availability', 'In Progress', 'Fuel specialist'],
    ['RFI-red-28', 'Blue Support', 'Logistic', 'Air drop', 'Pending Review', 'Aeronautic specialist'],
    ['RFI-red-27', 'Blue Support', 'CO', 'Weapon authorization', 'Released', 'Weapons specialist']
  ].map((row): any => {
    const [id, channel, role, content, status, owner] = row
    const roleColors = {
      'Red Support': '#F94248',
      'Blue Support': '#00A3DE'
    }
    const statusColors = {
      Unallocated: '#B10303',
      'In Progress': '#E7740A',
      'Pending Review': '#434343',
      Released: '#007219'
    }
    return {
      collapsible: (
        <RfiForm request={{ title: 'Some title', description: 'Some description' }} />
      ),
      cells: [
        id,
        channel,
        {
          component: <Badge customBackgroundColor={roleColors[channel]} label={role}/>,
          label: role
        },
        content,
        {
          component: <Badge customBackgroundColor={statusColors[status]} customSize="large" label={status}/>,
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
