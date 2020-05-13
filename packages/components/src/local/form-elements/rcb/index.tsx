import React from 'react'
import { camelCase } from 'lodash'

import InputContainer from '../../input-container'
import { FormControlLabel, RadioGroup } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Import helpers */
import { ConditionalWrapper, componentSelector } from './helpers'
import Option from './types/option'

/* Render component */
export const RCB: React.FC<PropTypes> = ({ name, type, label, options, value, force, updateState }) => {

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target))
  }

  const handleCheckbox = (data: any): void => {
    
    const { name, value } = data

    updateState(
      {
        name,
        value: [value]
      }
    )
  }

  const inputName = name || camelCase(label)
  const getLabel = (option: Option) => force && option.colour ? <div><span className={styles['color-box']} style={{ backgroundColor: option.colour }}></span>{option.name}</div> : option
  const getSelected = (o: any) => Array.isArray(value) ? value.includes(o) : value

  return <InputContainer label={label}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper = {(children: any): React.ReactNode => <RadioGroup aria-label={label} name={inputName} value={getSelected(value)} onChange={handleRadio}>{children}</RadioGroup> }
    >
      {
        options.map((option: any) => {

          const o = option.name || option
          const selected = getSelected(o)
          
          return <FormControlLabel 
            key={option.name || option.toString()} 
            control={componentSelector(type, option, selected, handleCheckbox, inputName)} 
            label={getLabel(option)} 
            value={option.name || option}/>
          }
        )
      }
    </ConditionalWrapper>
  </InputContainer>
}

export default RCB
