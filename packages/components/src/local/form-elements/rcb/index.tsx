import { FormControlLabel, RadioGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { FormOption } from '@serge/custom-types'
import cx from 'classnames'
import { camelCase } from 'lodash'
import React, { useEffect, useState } from 'react'
import InputContainer from '../../atoms/input-container'
/* Import helpers */
import { componentSelector, ConditionalWrapper } from './helpers'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import types */
import PropTypes from './types/props'

const buildStyles = (options: any[]): any => {
  const opts = {}
  options.forEach((option, idx) => {
    opts[`root-${idx}`] = {}
    opts[`root-${idx}`].color = `${option.colour} !important`
  })
  return makeStyles(opts)
}

/* Render component */
export const RCB: React.FC<PropTypes> = ({ name, type, label, options, value, force, updateState, compact, className, disableOffset }) => {
  type SelectionItem = { name: number | string, selected: boolean }
  const classes = buildStyles(options)()
  const [checkedArray, updateCheckedArray] = useState<Array<SelectionItem>>([])

  // NOTE: we only allow an object for options if force is true
  const firstOption = options.length && options[0]
  if (firstOption) {
    if (typeof firstOption === 'object' && !force) {
      throw new Error('RCB control only accept objects as options if force flag is true:' + firstOption)
    }
  }

  useEffect(() => {
    const selection = options.map((option: string | number | FormOption) => {
      const opt = valueFor(option)
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
    updateState && updateState(event.target)
  }

  const handleCheckbox = (data: HTMLInputElement): void => {
    const { value, checked } = data
    const updatedArray: any = checkedArray.map((c: SelectionItem): SelectionItem => {
      if (c.name === value) {
        c.selected = checked
      }
      return c
    })

    updateCheckedArray(updatedArray)
    updateState && updateState(
      {
        visibleTo: checkedArray.filter((c: SelectionItem) => c.selected).map((c: SelectionItem) => c.name)
      }
    )
  }

  const inputName = name || camelCase(label)

  const getLabel = (option: FormOption): any => force && option.colour ? <span>{!compact && option.name}</span> : option

  const getSelected = (o: string | number): boolean => {
    const res = Array.isArray(value) ? value.includes(o) : value === o
    return res
  }

  const labelPlacement: 'bottom' | 'end' | 'start' | 'top' | undefined = type === 'checkbox' && compact ? 'bottom' : undefined

  const valueFor = (val: any): number | string => val.id || val

  return <InputContainer label={label} className={cx(className, styles['input-container'])} disableOffset={disableOffset}>
    <ConditionalWrapper
      condition={type === 'radio'}
      wrapper={(children: any): React.ReactNode => <RadioGroup row={compact} aria-label={label} name={inputName} value={valueFor(value)} onChange={handleRadio}>{children}</RadioGroup>}
    >
      {
        options.map((option, idx) => {
          const o = option.id || option
          const selected = getSelected(o)
          const childClass = { root: classes[`root-${idx}`], checked: classes[`checked-${idx}`] }
          return <FormControlLabel
            key={option.name || option.toString()}
            labelPlacement={labelPlacement}
            title={option.name || option.toString()}
            control={componentSelector(type, option, selected, handleCheckbox, inputName, childClass)}
            label={getLabel(option)}
            value={option.name || option}
            className={selected ? styles.selected : ''}
          />
        })
      }
    </ConditionalWrapper>
  </InputContainer>
}

export default RCB
