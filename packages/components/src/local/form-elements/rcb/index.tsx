import React, { useState, useEffect } from 'react'
import { camelCase, kebabCase } from 'lodash'

import InputContainer from '../../atoms/input-container'
import { FormControlLabel, RadioGroup } from '@material-ui/core'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Import helpers */
import { ConditionalWrapper, componentSelector } from './helpers'
import { FormOption } from '@serge/custom-types'

/* Render component */
export const RCB: React.FC<PropTypes> = ({ name, type, label, options, value, force, updateState, compact, className, disableOffset }) => {
  const [checkedArray, updateCheckedArray] = useState<Array<{}>>([])

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
    console.log('update', selection)
    updateCheckedArray(selection)
  }, [value, options])

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateState((event.target))
  }

  const handleCheckbox = (data: any): void => {
    const { name, value, checked } = data

    const lowerValue: string = kebabCase(value)
    const updatedArray: any = checkedArray.map((c: any) => {
      if (kebabCase(c.name) === lowerValue) {
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

  const inputName = name || camelCase(label)

  const getLabel = (option: FormOption): any => force && option.colour ? <span><span className={styles['color-box']} style={{ backgroundColor: option.colour }}></span>{!compact && option.name}</span> : option

  const getSelected = (o: any): any => Array.isArray(value) ? value.includes(o) : value

  const selectedClassName = (o: string, selected: string): any | undefined => {
    const isNumber = typeof o === 'number'
    if (isNumber) {
      return undefined
    } else {
      return o.toLowerCase() === selected.replace('-', ' ') ? styles.selected : undefined
    }
  }

  const labelPlacement: 'bottom' | 'end' | 'start' | 'top' | undefined = type === 'checkbox' && compact ? 'bottom' : undefined

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
            labelPlacement={labelPlacement}
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
