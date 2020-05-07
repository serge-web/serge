import React from 'react'

import InputContainer from '../../input-container'
import { FormControlLabel, RadioGroup } from '@material-ui/core'

/* Import types */
import PropTypes from './types/props'

/* Import helpers */
import { ConditionalWrapper, componentSelector } from './helpers'

/* Render component */
export const RCB: React.FC<PropTypes> = ({ type, label, options, value, updateState }) =>{
  
  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target as HTMLInputElement).value)
  }

  const handleCheckbox = (data: any): void => {
    console.log(data)
    updateState(data)
  }

  return <InputContainer label={label}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper = {(children: any): React.ReactNode => <RadioGroup aria-label={label} name={label.toLowerCase()} value={value} onChange={handleRadio}>{children}</RadioGroup> }
      >
      {
        options.map(option => <FormControlLabel key={option.toString()} control={componentSelector(type, option, value, handleCheckbox)} label={option} value={option}/>)
      }
    </ConditionalWrapper>
  </InputContainer>
}

export default RCB
