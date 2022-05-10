import React, { ReactElement } from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { camelCase, capitalize } from 'lodash'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

import InputContainer from '../../atoms/input-container'

export const renderOptions = (options: Array<string | number>): Array<ReactElement> => options.map(option => (
  <MenuItem
    key={option}
    value={option.toString()}
  >
    {capitalize(option.toString())}
  </MenuItem>
))

/* Render component */
export const Selector: React.FC<PropTypes> = ({ name, label, options, selected, updateState, className, selectClassName }: PropTypes) => {
  const handleChange = (event: any): void => updateState(event.target.value)

  const inputName = name || camelCase(label)

  return <InputContainer label={label} className={className}>
    <Select labelId={label} id={inputName} value={selected} onChange={handleChange} className={selectClassName}>
      {renderOptions(options)}
    </Select>
  </InputContainer>
}

export default Selector
