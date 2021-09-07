import React, { useState, ChangeEvent } from 'react'
import PropTypes from './types/props'
import uniqid from 'uniqid'
import cn from 'classnames'
/* Import Styles */
import styles from './styles.module.scss'

export const TEXTAREA_DARK = 'dark'
export const TEXTAREA_LIGHT = 'light'

const labelFactoryDefault = (inputid: string, label: string): React.ReactNode => (
  <label htmlFor={inputid}>{label}</label>
)

const Textarea: React.FC<PropTypes> = (
  {
    innerRef,
    value,
    onChange,
    label,
    disabled,
    rows,
    theme = TEXTAREA_LIGHT,
    labelFactory = labelFactoryDefault,
    id,
    placeholder
  }) => {
  const [inputid] = useState<string>(id || uniqid.time())

  const handeChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className={cn(styles.main, styles[`theme-${theme}`], !!disabled && styles.disabled)}>
      {label && labelFactory(inputid, label)}
      <textarea
        ref={innerRef}
        disabled={!!disabled}
        id={inputid}
        onChange={handeChange}
        value={value}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Textarea
