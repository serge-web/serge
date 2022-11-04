import { MenuItem, Select } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from '../styles.module.scss'

type TurnOrderProps = {
  label: string
  options: string[]
  value?: string
  onChange: (item: string) => void
}

const TurnOrder: React.FC<TurnOrderProps> = ({ label, options, value, onChange }) => {
  if (!options.length) {
    return <></>
  }

  const [localValue, setLocalValue] = useState<string>('')

  useEffect(() => {
    setLocalValue(value || options[0])
  }, [value])

  const onLocalChange = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string
    onChange(selectedValue)
    setLocalValue(selectedValue)
  }

  return <div className={styles['turn-dropdown']}>
    <p>{label}</p>
    <Select value={localValue} style={{ fontSize: 14 }} onChange={onLocalChange}>
      {options.map(item => <MenuItem style={{ fontSize: 14 }} value={item}>{item}</MenuItem>)}
    </Select>
  </div>
}

export default TurnOrder