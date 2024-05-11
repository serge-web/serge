import React from 'react'

// Import component files
import ReactTable from './index'
import docs from './README.md'

export default {
  title: 'local/react-table',
  component: ReactTable,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const tableActivity = (getRoleId: string, activityType: string): void => {
  console.log(getRoleId, activityType)
}

export const Default: React.FC = () => <ReactTable tableActivity={tableActivity} columns={[]} rows={[]} customStyles={{}} />
