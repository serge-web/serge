import { MenuItem, Select } from '@material-ui/core'
import { IconOption } from 'src/custom-types'
import React, { ChangeEvent, ReactElement } from 'react'
import AssetIcon from '../../asset-icon'
import InputContainer from '../../atoms/input-container'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

export const renderOptions = (options: Array<string | number | IconOption>): Array<ReactElement> => options.map(option => {
  if (['string', 'number'].includes(typeof option)) {
    return (
      <MenuItem
        key={option.toString()}
        value={option.toString()}
      >
        {option.toString()}
      </MenuItem>
    )
  }
  const iconOption = option as IconOption
  return (
    <MenuItem
      key={iconOption.uniqid}
      value={iconOption.uniqid}
    >
      <span className={styles.menuitem}>
        {iconOption.name}
        <span className={styles.icon}><AssetIcon color={iconOption.colour} isSelected={false} imageSrc={iconOption.icon} /></span>
      </span>
    </MenuItem>
  )
})

/* Render component */
export const Selector: React.FC<PropTypes> = ({ name, label, options, selected, updateState, className, selectClassName }: PropTypes) => {
  const handleChange = (event: ChangeEvent<{ name?: string | undefined, value: unknown }>): void => updateState(event.target.value)

  const inputName = name || label

  return <InputContainer label={label} className={className}>
    <Select labelId={label} id={inputName} value={selected} onChange={handleChange} className={selectClassName}>
      {renderOptions(options)}
    </Select>
  </InputContainer>
}

export default Selector
