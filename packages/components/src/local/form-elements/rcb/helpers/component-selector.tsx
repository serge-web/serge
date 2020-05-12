import React from 'react'
import { camelCase } from 'lodash'

import { Checkbox, Radio } from '@material-ui/core'
import ComponentSelector from '../types/component-selector'

const componentSelector: ComponentSelector = (type, option, value, postBack, name) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    postBack(event.target)
  }

  const inputName = name || camelCase(option.toString())

  let output = null
  switch (type) {
    case 'checkbox' :
      output = <Checkbox name={inputName.toString()} checked={option === value} onChange={handleChange} />
      break
    case 'radio' :
      output = <Radio />
      break
  }
  return output
}

export default componentSelector
