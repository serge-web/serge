import React from 'react'
import { camelCase } from 'lodash'

import { Checkbox, Radio } from '@material-ui/core'
import ComponentSelector from '../types/component-selector'

const componentSelector: ComponentSelector = (type, option, selected, handleCheckbox, name) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCheckbox(event.target)
  }

  const inputName = name || camelCase(option.toString())

  let output = null
  switch (type) {
    case 'checkbox' :
      output = <Checkbox name={inputName.toString()} checked={selected} onChange={handleChange} />
      break
    case 'radio' :
      output = <Radio />
      break
  }
  return output
}

export default componentSelector
