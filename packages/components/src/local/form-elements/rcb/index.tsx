import React, { useState, useEffect } from 'react'

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
  const [checkedArray, updateCheckedArray] = useState<Array<{}>>([])

  // NOTE: we only allow an object for options if force is true
  const firstOption = options && options.length && options[0]
  if (firstOption) {
    if (typeof firstOption === 'object' && !force) {
      throw new Error("RCB control only accept objects as options if force flag is true:" + firstOption)
    }
  }


  useEffect(() => {
    const selection = options.map((o: any) => {
      const opt = o.name || o
      let selected = false
      if (Array.isArray(value)) {
        selected = value.includes(opt)
      } else {
        selected = opt === value
      }
      return {
        name: opt,
        selected
      }
    })
    updateCheckedArray(selection)
  }, [value, options])

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target))
  }

  const handleCheckbox = (data: any): void => {
    const { name, value, checked } = data

    const lowerValue: string = value
    const updatedArray: any = checkedArray.map((c: any) => {
      if (c.name === lowerValue) {
        c.selected = checked
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

  const inputName = name || label

  const getLabel = (option: Option): any => force && option.colour ? <span><span className={styles['color-box']} style={{ backgroundColor: option.colour }}></span>{!compact && option.name}</span> : option

  const getSelected = (o: any): any => {
    const res = Array.isArray(value) ? value.includes(o) : value === o
    return res
  } 
  
  const selectedClassName = (o: string, selected: string): any | undefined => o.toLowerCase() === selected.replace('-', ' ') ? styles.selected : undefined

  const labelPlacement: 'bottom' | 'end' | 'start' | 'top' | undefined = type === 'checkbox' && compact ? 'bottom' : undefined

  const valueFor = (val: any): number | string => val.name || val
  
  return <InputContainer label={label} className={className} disableOffset={disableOffset}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper={(children: any): React.ReactNode => <RadioGroup row={compact} aria-label={label} name={inputName} value={valueFor(value)} onChange={handleRadio}>{children}</RadioGroup>}
    >
      {
        options.map((option: any) => {
          const o = option.name || option
          const selected = getSelected(o)
          return <FormControlLabel
            key={option.name || option.toString()}
            labelPlacement={labelPlacement}
            title={option.name || option.toString()}
            control={componentSelector(type, option, selected, handleCheckbox, inputName)}
            label={getLabel(option)}
            value={option.name || option}
            className={typeof selected === 'string' ? selectedClassName(o, selected) : ''}
          />
        }
        )
      }
    </ConditionalWrapper>
  </InputContainer>
}

export default RCB
