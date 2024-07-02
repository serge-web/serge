import React from 'react'

// Import component files
import TextField from '@material-ui/core/TextField'
import docs from './README.md'

export default {
  title: 'local/md-text-field/vendor/TextField',
  component: TextField,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <TextField variant="standard" />
export const Number: React.FunctionComponent = () => <TextField variant="standard" type="number"/>
export const Password: React.FunctionComponent = () => <TextField variant="standard" type="password"/>
export const Textarea: React.FunctionComponent = () => <TextField variant="standard" multiline rows="4"/>
export const WithLabel: React.FunctionComponent = () => <TextField variant="standard" id="TextField" name="TextField" label="Example"/>
export const WithError: React.FunctionComponent = () => <TextField variant="standard" id="TextField" name="TextField" label="Example" error helperText="Incorrect entry."/>
export const ReadOnly: React.FunctionComponent = () => <TextField variant="standard" id="TextField" name="TextField" label="Example" InputProps={{ readOnly: true }}/>
export const Disabled: React.FunctionComponent = () => <TextField variant="standard" disabled/>
export const Primary: React.FunctionComponent = () => <TextField variant="standard" color="primary"/>
export const Secondary: React.FunctionComponent = () => <TextField variant="standard" color="secondary"/>
