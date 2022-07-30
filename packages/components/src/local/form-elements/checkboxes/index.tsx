import { Checkbox, FormControlLabel } from '@material-ui/core'
import cx from 'classnames'
import { camelCase } from 'lodash'
import React, { ChangeEvent, useEffect, useState } from 'react'
import InputContainer from '../../atoms/input-container'
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const CheckBoxes: React.FC<PropTypes> = ({
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
  const [checkedArray, updateCheckedArray] = useState<SelectionItem[]>([])

  useEffect(() => {
    const opt = options.length && options[0]
    if (opt) {
      if (typeof opt === 'object') {
        throw new Error('CheckBoxes control does not accept objects as options')
      }
    }
  }, [options])

  useEffect(() => {
    const selection: SelectionItem[] = options.map(
      (option: string | number) => ({
        name: option,
        selected: option === value
      })
    )
    updateCheckedArray(selection)
  }, [value, options])

  const handleCheckbox = (data: ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = data.target
    const visibleTo: (string | number)[] = []

    const updatedArray: any = checkedArray.map(
      (item: SelectionItem): SelectionItem => {
        if (item.name.toString() === value.toString()) {
          item.selected = checked
        }
        if (item.selected) {
          visibleTo.push(item.name)
        }
        return item
      }
    )

    updateCheckedArray(updatedArray)
    onChange && onChange({ visibleTo })
  }

  const inputName = name || camelCase(label)

  return (
    <InputContainer
      label={label}
      className={cx(className, styles['input-container'])}
      disableOffset={disableOffset}
    >
      {options.map((option, idx) => {
        const selected = checkedArray.find(item => item.selected && item.name === option)
        return (
          <FormControlLabel
            key={idx}
            labelPlacement={labelPlacement}
            title={option.toString()}
            control={
              <Checkbox
                name={inputName.toString()}
                value={option}
                checked={!!selected}
                onChange={handleCheckbox}
                size="small"
              />
            }
            label={option}
            value={option}
            className={selected ? styles.selected : ''}
          />
        )
      })}
    </InputContainer>
  )
}

export default CheckBoxes
