import React from 'react'

import InputContainer from '../../input-container'
import { FormControlLabel, RadioGroup } from '@material-ui/core'

/* Import types */
import PropTypes from './types/props'

/* Import helpers */
import { ConditionalWrapper, componentSelector } from './helpers'

/* Render component */
export const RCB: React.FC<PropTypes> = ({ type, label, options }) =>
  <InputContainer label={label}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper = {(children: any): React.ReactNode => <RadioGroup aria-label={label} name={label.toLowerCase()}>{children}</RadioGroup> }
    >
      {
        options.map(option => <FormControlLabel key={option.toString()} control={componentSelector(type, option)} label={option} />)
      }
    </ConditionalWrapper>
  </InputContainer>

export default RCB
