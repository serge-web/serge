import React from 'react'

// Import component files
import Speed from './index'
import docs from './README.md'
import { Box, styled } from '@material-ui/core'

const BlueContainer = styled(Box)({
  backgroundColor: '#394959',
  padding: '20px'
})

export default {
  title: 'local/form-elements/Speed',
  component: Speed,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <BlueContainer><Speed colCount={6} options={[0, 10, 20, 30]} value={10}/></BlueContainer>
export const SingleSpeed: React.FC = () => <BlueContainer><Speed colCount={1} options={[10]} value={10}/></BlueContainer>
export const Disabled: React.FC = () => <BlueContainer><Speed colCount={6} disabled={true} options={[0, 10, 20, 30]} value={10}/></BlueContainer>
