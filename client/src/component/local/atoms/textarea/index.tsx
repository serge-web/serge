import React, { useState, ChangeEvent, useRef } from 'react'
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
    fitContent = false,
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
  const elmRef = useRef<HTMLTextAreaElement>(null)

  setTimeout(() => {
    // make the answer's textarea height fit content
    if (fitContent && elmRef && elmRef.current) {
      elmRef.current.style.height = `${elmRef.current.scrollHeight}px`
    }
  })

  const handeChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className={cn(styles.main, styles[`theme-${theme}`], !!disabled && styles.disabled)}>
      {label && labelFactory(inputid, label)}
      <textarea
        ref={elmRef}
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
