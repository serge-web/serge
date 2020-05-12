import React from 'react'
import { camelCase } from 'lodash'

import InputContainer from '../../input-container'
import { FormControlLabel, RadioGroup, Radio } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Render component */
export const ForcePicker: React.FC<PropTypes> = ({ name, label, options, selected, updateState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target as HTMLInputElement))
  }

  const inputName = name || camelCase(label)

  return <InputContainer label={label}>
    <RadioGroup aria-label={label} name={inputName} value={selected.toLowerCase()} onChange={handleChange}>
      {
        options.map(option => <FormControlLabel key={option.name} control={<Radio />} value={option.name.toLowerCase()} label={<div><span className={styles['color-box']} style={{ backgroundColor: option.colour }}></span>{option.name}</div>} />)
      }
    </RadioGroup>
  </InputContainer>
}

export default ForcePicker
