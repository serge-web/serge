import React from 'react'

import { Checkbox, Radio } from '@material-ui/core'
import ComponentSelector from '../types/component-selector'

const componentSelector: ComponentSelector = (type, option, value, postBack) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    postBack(event.target.value);
  };

  let output = null
  switch (type) {
    case 'checkbox' :
      output = <Checkbox name={option.toString().toLowerCase()} checked={option === value} onChange={handleChange} />
      break
    case 'radio' :
      output = <Radio />
      break
  }
  return output
}

export default componentSelector
