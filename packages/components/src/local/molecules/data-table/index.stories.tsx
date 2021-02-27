import React from 'react'

// Import component files
import DataTable from './index'
import docs from './README.md'


export default {
  title: 'local/DataTable',
  component: DataTable,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <DataTable name="test" colour="green"/>

