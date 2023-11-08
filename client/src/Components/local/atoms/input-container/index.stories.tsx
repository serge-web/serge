import React from 'react'
import { Box } from '@material-ui/core'

// Import component files
import InputContainer from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/InputContainer',
  component: InputContainer,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <InputContainer label="Input label">Input content</InputContainer>
export const ColorVariant: React.FunctionComponent = () => (
  <Box bgcolor="#394959">
    <InputContainer label="Input label" labelColor="common.white">Input content</InputContainer>
  </Box>
)
export const SizeVariant: React.FunctionComponent = () => (
  <Box bgcolor="#394959">
    <InputContainer label="Input label" labelColor="common.white" labelSize={12}>Input content</InputContainer>
  </Box>
)
