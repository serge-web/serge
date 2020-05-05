import React from 'react'

import InputContainer from '../../input-container'
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Render component */
export const ForcePicker: React.FC<PropTypes> = ({ label, options, selected }) =>
  <InputContainer label={label}>
    <RadioGroup aria-label={label} name={label.toLowerCase()} value={selected}>
      {
        options.map(option => <FormControlLabel key={option.name} control={<Radio />} value={option.name} label={<div><span className={styles['color-box']} style={{ backgroundColor: option.colour }}></span>{option.name}</div>} />)
      }
    </RadioGroup>
  </InputContainer>

export default ForcePicker
