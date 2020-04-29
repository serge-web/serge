import React from 'react'

import { Checkbox, Radio } from '@material-ui/core'
import ComponentSelector from '../types/component-selector'

const componentSelector: ComponentSelector = (type, option) => {
  let output = null
  switch (type) {
    case 'checkbox' :
      output = <Checkbox name={option.toString().toLowerCase()} />
      break
    case 'radio' :
      output = <Radio />
      break
  }
  return output
}

export default componentSelector