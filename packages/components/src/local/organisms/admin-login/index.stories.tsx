import React from 'react'

// Import component files
import AdminLogin from './index'
import docs from './README.md'

export default {
  title: 'local/organisms/AdminLogin',
  component: AdminLogin,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <AdminLogin onSubmit={window.alert}/>
