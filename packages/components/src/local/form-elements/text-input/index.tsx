import React from 'react'
import { kebabCase } from 'lodash'

import InputContainer from '../../input-container'
import { TextField } from '@material-ui/core'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const TextInput: React.FC<PropTypes> = ({ label, name, value, updateState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState(event.target)
  }

  const inputName = name || kebabCase(label)

  return <InputContainer label={label}>
    <TextField name={inputName} value={value} onChange={handleChange}></TextField>
  </InputContainer>
}

export default TextInput
