import { Checkbox, FormControlLabel } from '@material-ui/core'
import { ForceOption } from 'src/custom-types'
import cx from 'classnames'
import { camelCase } from 'lodash'
import React, { ChangeEvent, useEffect, useState } from 'react'
import InputContainer from '../../atoms/input-container'
import styles from './styles.module.scss'
import PropTypes from './types/props'
import { makeStyles } from '@material-ui/styles'

const buildStyles = (options: ForceOption[]): any => {
  const opts = {}
  options.forEach((option, idx) => {
    opts[`root-${idx}`] = {}
    opts[`root-${idx}`].color = `${option.colour} !important`
  })
  return makeStyles(opts)
}

export const Forces: React.FC<PropTypes> = ({
  options,
  value,
  onChange,
  name,
  label,
  labelPlacement,
  disableOffset,
  className
}) => {
  type SelectionItem = { id: string, selected: boolean };
  const [selectionItems, updateSelectionItems] = useState<SelectionItem[]>([])
  const classes = buildStyles(options)()

  useEffect(() => {
    const selection: SelectionItem[] = options.map(
      (option: ForceOption) => {
        return {
          id: option.id,
          selected: value.includes(option.id)
        }
      }
    )
    updateSelectionItems(selection)
  }, [value, options])

  const handleForcesChange = (data: ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = data.target
    const visibleTo: string[] = []

    const updatedArray: SelectionItem[] = selectionItems.map(
      (item: SelectionItem): SelectionItem => {
        if (item.id === value) {
          item.selected = checked
        }
        if (item.selected) {
          visibleTo.push(item.id)
        }
        return item
      }
    )

    updateSelectionItems(updatedArray)
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
        const selected = selectionItems.find(item => item.selected && item.id === option.id)
        const childClass = { root: classes[`root-${idx}`] }
        return (
          <FormControlLabel
            key={idx}
            labelPlacement={labelPlacement}
            title={option.name}
            control={
              <Checkbox
                classes={childClass}
                name={inputName.toString()}
                value={option.id}
                checked={!!selected}
                onChange={handleForcesChange}
                size="small"
              />
            }
            label={option.name}
            value={option.id}
            className={selected ? styles.selected : ''}
          />
        )
      })}
    </InputContainer>
  )
}

export default Forces
