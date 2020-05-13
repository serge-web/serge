import React from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { camelCase, capitalize } from 'lodash'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

import InputContainer from '../../input-container'

/* Render component */
export const Selector: React.FC<PropTypes> = ({ name, label, options, selected, updateState }: PropTypes) => {
  const handleChange = (event: any): void => updateState(event.target.value)

  const inputName = name || camelCase(label)

  return <InputContainer label={label}>
    <Select labelId={label} id={inputName} value={selected} onChange={handleChange}>
      {
        options.map(option => <MenuItem key={option} value={option}>{capitalize(option.toString())}</MenuItem>)
      }
    </Select>
  </InputContainer>
}

export default Selector
