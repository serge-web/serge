import React from 'react'
import { Select, MenuItem, NativeSelect } from '@material-ui/core'
import { camelCase, capitalize, kebabCase } from 'lodash'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

import InputContainer from '../../input-container'

/* Render component */
export const Selector: React.FC<PropTypes> = ({ name, label, options, selected, updateState, native }: PropTypes) => {
  const handleChange = (event: any): void => updateState(event.target.value)

  const inputName = name || camelCase(label)

  const renderSelect = () => (
    <Select labelId={label} id={inputName} value={selected} onChange={handleChange}>
      {
        options.map(option => <MenuItem key={option} value={kebabCase(option.toString())}>{capitalize(option.toString())}</MenuItem>)
      }
    </Select>
  )

  const renderNativeSelect = () => (
    <NativeSelect id={inputName} value={selected} onChange={handleChange}>
      {
        options.map(option => <option key={option} value={kebabCase(option.toString())}>{capitalize(option.toString())}</option>)
      }
    </NativeSelect>
  )

  return <InputContainer label={label}>
    { native ? renderNativeSelect() : renderSelect() }
  </InputContainer>
}

export default Selector
