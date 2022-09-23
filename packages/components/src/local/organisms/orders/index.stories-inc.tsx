import { planningMessages } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import Orders from './index'
import docs from './README.md'
import OrdersProps, { OrderRow } from './types/props'

console.clear()

export default {
  title: 'local/organisms/Orders',
  component: Orders,
  decorators: [(story: Function): JSX.Element => (
    <div style={{ overflow: 'hidden' }}>{story()}</div>
  )],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false
    },
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const detailPanel = (rowData: OrderRow): any => {
  return <div>message: {JSON.stringify(rowData)}</div>
}

const Template: Story<OrdersProps> = ({ columns, rows }) =>
  <Orders detailPanelFnc={detailPanel} columns={columns} rows={rows}/>

export const Default = Template.bind({})
Default.args = {
  columns: [
    { title: 'ID', field: '_id' },
    { title: 'Title', field: 'title' },
    { title: 'Role', field: 'role' },
    { title: 'Activity', field: 'activity' },
    { title: 'Start Date', field: 'startDate' },
    { title: 'Finish Date', field: 'endDate' }
  ],
  rows: [{
    id: planningMessages[0]._id,
    title: 'Title 1',
    role: 'Role 1',
    activity: 'Read',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString()
  },
  {
    id: planningMessages[1]._id,
    title: 'Title 2',
    role: 'Role 2',
    activity: 'UnRead',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString()
  }]
}
