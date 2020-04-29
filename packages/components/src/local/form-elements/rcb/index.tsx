import React from 'react'

import InputContainer from '../../input-container'
import { FormControlLabel, Checkbox, Radio, RadioGroup } from '@material-ui/core'
import PropTypes from './types/props'

const componentSelector = (type: any, option: any): any => {
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

const ConditionalWrapper = ({ condition, wrapper, children }: any): any => 
  condition ? wrapper(children) : children;

/* Render component */
export const RCB: React.FC<PropTypes> = ({ type, label, options }) => 
  <InputContainer label={label}>
    <ConditionalWrapper 
      condition={type === 'radio'}
      wrapper = {(children: any) => <RadioGroup aria-label={label} name={label.toLowerCase()}>{children}</RadioGroup> }
      >
    {
      options.map(option => <FormControlLabel control={componentSelector(type, option)} label={option} />)
    }
    </ConditionalWrapper>
  </InputContainer>

export default RCB
