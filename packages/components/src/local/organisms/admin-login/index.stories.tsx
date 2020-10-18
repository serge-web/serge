import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// Import component files
import AdminLogin from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px'
})

export default {
  title: 'local/organisms/AdminLogin',
  component: AdminLogin,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <AdminLogin onSubmit={window.alert}/>
