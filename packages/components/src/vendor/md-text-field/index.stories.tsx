import React from 'react'

// Import component files
import TextField from '@material-ui/core/TextField'
import docs from './README.md'

export default {
  title: 'vendor/TextField',
  component: TextField,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <TextField variant="filled" />
export const Number: React.FunctionComponent = () => <TextField variant="filled" type="number"/>
export const Password: React.FunctionComponent = () => <TextField variant="filled" type="password"/>
export const Textarea: React.FunctionComponent = () => <TextField variant="filled" multiline rows="4"/>
export const WithLabel: React.FunctionComponent = () => <TextField variant="filled" id="TextField" name="TextField" label="Example"/>
export const WithError: React.FunctionComponent = () => <TextField variant="filled" id="TextField" name="TextField" label="Example" error helperText="Incorrect entry."/>
export const ReadOnly: React.FunctionComponent = () => <TextField variant="filled" id="TextField" name="TextField" label="Example" InputProps={{ readOnly: true }}/>
export const Disabled: React.FunctionComponent = () => <TextField variant="filled" disabled/>
export const Primary: React.FunctionComponent = () => <TextField variant="filled" color="primary"/>
export const Secondary: React.FunctionComponent = () => <TextField variant="filled" color="secondary"/>
