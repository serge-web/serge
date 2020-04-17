import React from 'react'

// Import component files
import Dialogue from './index'
import docs from './README.md'
import InputContainer from '../input-container'
import { Input, InputLabel, Button } from '@material-ui/core'

export default {
  title: 'local/Dialogue',
  component: Dialogue,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Dialogue headerText="This is the header">
  <>
    <InputContainer>
      <InputLabel>Test label</InputLabel>
      <Input type="text" id="test" name="test" />
    </InputContainer>
    <Button variant="contained">Do a thing</Button>
  </>
</Dialogue>
