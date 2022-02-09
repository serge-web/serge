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

export const Default: React.FC = () => <ReactTable columns={[]} rows={[]} customStyles={{}} />
