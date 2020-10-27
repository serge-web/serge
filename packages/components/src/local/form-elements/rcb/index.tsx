import React, { useState } from 'react'
import { camelCase, kebabCase } from 'lodash'

import InputContainer from '../../atoms/input-container'
import { FormControlLabel, RadioGroup } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Import helpers */
import { ConditionalWrapper, componentSelector } from './helpers'
import Option from './types/option'

/* Render component */
export const RCB: React.FC<PropTypes> = ({ name, type, label, options, value, force, updateState, compact, className, disableOffset }) => {

  const [checkedArray, updateCheckedArray] = useState(
    options.map((o: any) => {
      const opt = o.name || o
      let selected = false
      if (Array.isArray(value)) {
        selected = opt.includes(value)
      } else {
        selected = opt === value
      }
      return {
        name: opt,
        selected
      }
    })
  )

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target))
  }

  const handleCheckbox = (data: any): void => {
    const { name, value } = data

    const updatedArray: any = checkedArray.map((c: any) => {
      if (c.name === value) {
        if (c.selected === true) {
          c.selected = false
        } else {
          c.selected = true
        }
      }
      return c
    })

    updateCheckedArray(
      updatedArray
    )

    updateState(
      {
        name,
        value: checkedArray.filter((c: any) => c.selected === true).map((c: any) => c.name)
      }
    )
  }

  const inputName = name || camelCase(label)

  const getLabel = (option: Option): any => force && option.colour ? <span><span className={styles['color-box']} style={{ backgroundColor: option.colour }}></span>{!compact && option.name}</span> : option

  const getSelected = (o: any): any => Array.isArray(value) ? value.includes(o) : value

  const selectedClassName = (o: string, selected: string): any | undefined => o.toLowerCase() === selected.replace('-', ' ') ? styles.selected : undefined

  return <InputContainer label={label} className={className} disableOffset={disableOffset}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper={(children: any): React.ReactNode => <RadioGroup row={compact} aria-label={label} name={inputName} value={getSelected(value)} onChange={handleRadio}>{children}</RadioGroup>}
    >
      {
        options.map((option: any) => {
          const o = option.name || option
          const selected = getSelected(o)
          return <FormControlLabel
            key={option.name || option.toString()}
            title={option.name || option.toString()}
            control={componentSelector(type, option, selected, handleCheckbox, inputName)}
            label={getLabel(option)}
            value={kebabCase(option.name) || option}
            className={typeof selected === 'string' ? selectedClassName(o, selected) : ''}
          />
        }
        )
      }
    </ConditionalWrapper>
  </InputContainer>
}

export default RCB
