import React from 'react'
import { Box, styled } from '@material-ui/core'

// Import component files
import TextInput from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#394959',
  padding: '20px'
})

export default {
  title: 'local/atoms/TextInput',
  component: TextInput,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <TextInput label="turns" value={5}/>
export const Filled: React.FC = () => (
  <BlueContainer>
    <TextInput variant="filled" placeholder="Enter some value" />
  </BlueContainer>
)
export const FilledWithLabel: React.FC = () => (
  <BlueContainer>
    <TextInput variant="filled" label="Enter a value" labelColor="common.white" labelSize={12} />
  </BlueContainer>
)
