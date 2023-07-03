import React, { ChangeEvent } from 'react'
import PropTypes from './types/props'

const DropdownInput: React.FC<PropTypes> = ({ updateStore, selectOptions, disabled, data, className, placeholder }) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const findData: any = selectOptions && selectOptions.find(data => data.title === event.target.value)

    updateStore(findData)
  }

  return (
    <select disabled={disabled} value={data || 'placeholder'} onChange={onChange} className={className}>
      <option value='placeholder' disabled={true}>{placeholder}</option>
      {selectOptions.map(item => {
        return (<option key={`${item.title}`} value={item.title} >{item.title}</option>)
      })}
    </select>
  )
}

export default DropdownInput
