import { messageDataCollaborativeEditing, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import Orders from './index'
import docs from './README.md'
import OrdersProps from './types/props'

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
const templates = Object.values(MessageTemplatesMockByKey)

const Template: Story<OrdersProps> = ({ columns, rows }) => 
  <Orders columns={columns} messages={messageDataCollaborativeEditing}  
    gameDate={WargameMock.data.overview.gameDate} rows={rows} templates={templates} />

export const Default = Template.bind({})
Default.args = {
  columns: [
    { title: 'ID', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Role', field: 'role' },
    { title: 'Status', field: 'status' },
    { title: 'Start Date', field: 'startDate' },
    { title: 'Finish Date', field: 'endDate' }
  ],
  rows: [{
    id: '1',
    title: 'Title 1',
    role: 'Role 1',
    status: 'Read',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Title 2',
    role: 'Role 2',
    status: 'UnRead',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString()
  }]
}
