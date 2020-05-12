import React from 'react'

import InputContainer from '../../input-container'
import { TextField } from '@material-ui/core'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const Turns: React.FC<PropTypes> = ({ turns, updateState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState(event.target)
  }

  return <InputContainer label="for">
    <TextField name="turns" value={turns} onChange={handleChange}></TextField> Turns
  </InputContainer>
}

export default Turns
