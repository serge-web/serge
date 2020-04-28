import React from 'react'

import InputContainer from '../../input-container'
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import PropTypes from './types/props'

/* Render component */
export const RadioType: React.FC<PropTypes> = ({ label, options }) => 
  <InputContainer label={label}>
    <RadioGroup aria-label={label} name={label.toLowerCase()}>
      {
        options.map(option => <FormControlLabel value={option.toLowerCase()} control={<Radio />} label={option} />)
      }
      </RadioGroup>
  </InputContainer>

export default RadioType
