import { FormControlLabel, Radio } from '@material-ui/core'
import cx from 'classnames'
import { camelCase } from 'lodash'
import React, { ChangeEvent, useEffect, useState } from 'react'
import InputContainer from '../../atoms/input-container'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const RadioButtons: React.FC<PropTypes> = ({
  options,
  value,
  onChange,
  name,
  label,
  labelPlacement,
  disableOffset,
  className
}) => {
  type SelectionItem = { name: number | string, selected: boolean };
  const [checkedItem, updateCheckedItem] = useState<SelectionItem>()

  useEffect(() => {
    const opt = options.length && options[0]
    if (opt) {
      if (typeof opt === 'object') {
        throw new Error('RadioButtons control does not accept objects as options')
      }
    }
  }, [options])

  useEffect(() => {
    const checkedItem = options.find(option => option.toString() === value.toString())
    if (checkedItem) {
      updateCheckedItem({
        name: checkedItem,
        selected: true
      })
    }
  }, [value, options])

  const onRadioButtonChange = (data: ChangeEvent<HTMLInputElement>): void => {
    const { value } = data.target
    let visibleTo: string | number = ''

    const checkedItem = options.find(option => option.toString() === value.toString())
    if (checkedItem) {
      updateCheckedItem({
        name: checkedItem,
        selected: true
      })
      visibleTo = checkedItem
    }
    onChange && onChange(visibleTo)
  }

  const inputName = name || camelCase(label)

  return (
    <InputContainer
      label={label}
      className={cx(className, styles['input-container'])}
      disableOffset={disableOffset}
    >
      {options.map((option, idx) => {
        const selected = checkedItem?.name === option
        return (
          <FormControlLabel
            key={idx}
            labelPlacement={labelPlacement}
            title={option.toString()}
            control={
              <Radio
                name={inputName.toString()}
                value={option}
                checked={!!selected}
                onChange={onRadioButtonChange}
                size="small"
              />
            }
            label={option}
            value={option}
          />
        )
      })}
    </InputContainer>
  )
}

export default RadioButtons
