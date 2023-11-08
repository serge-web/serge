import React from 'react'

// Import component files
import Form from './index'
import docs from './README.md'
import InputContainer from '../atoms/input-container'
import { Input, InputLabel, Button } from '@material-ui/core'

export default {
  title: 'local/Form',
  component: Form,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Form headerText="This is the header">
  <>
    <InputContainer>
      <InputLabel>Test label</InputLabel>
      <Input type="text" id="test" name="test" />
    </InputContainer>
    <Button variant="contained">Do a thing</Button>
  </>
</Form>
