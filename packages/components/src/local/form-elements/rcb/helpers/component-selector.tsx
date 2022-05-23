import { Checkbox, Radio } from '@material-ui/core'
import { camelCase } from 'lodash'
import React from 'react'
import ComponentSelector from '../types/component-selector'

const componentSelector: ComponentSelector = (type, option, selected, handleCheckbox, name, classes) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCheckbox(event.target)
  }

  const inputName = name || camelCase(option.toString())

  let output = null
  switch (type) {
    case 'checkbox':
      output = <Checkbox classes={classes} name={inputName.toString()} value={option.id} checked={selected} onChange={handleChange} size="small" />
      break
    case 'radio':
      output = <Radio />
      break
  }
  return output
}

export default componentSelector
