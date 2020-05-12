import React from 'react'
import { camelCase } from 'lodash'

import InputContainer from '../../input-container'
import { FormControlLabel, RadioGroup } from '@material-ui/core'

/* Import types */
import PropTypes from './types/props'

/* Import helpers */
import { ConditionalWrapper, componentSelector } from './helpers'

/* Render component */
export const RCB: React.FC<PropTypes> = ({ name, type, label, options, value, updateState }) => {
  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target))
  }

  const handleCheckbox = (data: any): void => {
    updateState(data)
  }

  const inputName = name || camelCase(label)

  return <InputContainer label={label}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper = {(children: any): React.ReactNode => <RadioGroup aria-label={label} name={inputName} value={value} onChange={handleRadio}>{children}</RadioGroup> }
    >
      {
        options.map(option => <FormControlLabel key={option.toString()} control={componentSelector(type, option, value, handleCheckbox, inputName)} label={option} value={option}/>)
      }
    </ConditionalWrapper>
  </InputContainer>
}

export default RCB
