import React from 'react'

import InputContainer from '../../input-container'
import { TextField } from '@material-ui/core'

/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const Turns: React.FC<PropTypes> = ({turns}) =>
  <InputContainer label="For">
    <TextField value={turns}></TextField> Turns
  </InputContainer>

export default Turns
