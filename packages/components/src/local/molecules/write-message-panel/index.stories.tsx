import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// Import component files
import WriteMessagePanel from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/molecules/WriteMessagePanel',
  component: WriteMessagePanel,
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

export const Default: React.FC = () => {
  return (
    <WriteMessagePanel />
  )
}
