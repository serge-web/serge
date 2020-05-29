import React from 'react'
import { kebabCase } from 'lodash'

import InputContainer from '../../input-container'
import { TextField } from '@material-ui/core'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const TextInput: React.FC<PropTypes> = ({ label, name, value, multiline, updateState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState(event.target)
  }

  let isMultiline = false
  const inputName = name || kebabCase(label)

  if (multiline && multiline > 1) {
    isMultiline = true
  }

  return <InputContainer label={label}>
    <TextField multiline={isMultiline} rows={multiline} name={inputName} value={value} onChange={handleChange}></TextField>
  </InputContainer>
}

export default TextInput
