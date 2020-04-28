import React from 'react'

import InputContainer from '../../input-container'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import PropTypes from './types/props'

/* Render component */
export const CheckboxType: React.FC<PropTypes> = ({ label, options }) => 
  <InputContainer label={label}>
      {
        options.map(option => <FormControlLabel control={<Checkbox name={option.toLowerCase()} />} label={option} />)
      }
  </InputContainer>

export default CheckboxType
