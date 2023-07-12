import { Checkbox, Chip, FormControlLabel, ListItemText, MenuItem, Radio, RadioGroup, Select, TextField, Tooltip } from '@material-ui/core'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import React from 'react'
import { Option } from '../../../molecules/editable-row'
import styles from '../styles.module.scss'
import { MessageGroupProps } from '../types/props'

export type MessagesValues = {
  messageTemplate: string[]
  responseTemplate: string[]
  documentStatus: string[]
  requestChanges: string[]
  approve: string[]
  release: string[]
  additionalData: string[]
}

export type Action = 'add' | 'delete'

export const MessageGroupType = {
  MESSAGE_TEMPLATE: 'MESSAGE_TEMPLATE',
  RESPONSE_TEMPLATE: 'RESPONSE_TEMPLATE',
  DOCUMENT_STATUS: 'DOCUMENT_STATUS',
  REQUEST_CHANGES: 'REQUEST_CHANGES',
  APPROVE: 'APPROVE',
  RELEASE: 'RELEASE',
  ADDITIONAL_DATA: 'ADDITIONAL_DATA'
}

export const DocumentStatus = {
  PENDING: 'PENDING_REVIEW',
  UNALLOCATED: 'UNALLOCATED'
}

/** custom columns that could be added to the status table */
export const AdditionalData = [
  { name: 'Location', uniqid: '0' },
  { name: 'Endorsed By', uniqid: '1' },
  { name: 'Start of Operation', uniqid: '2' },
  { name: 'Intended Visibility of Adversary', uniqid: '3' }
]

const filter = createFilterOptions<Option>()

export const MessageGroup: React.FC<MessageGroupProps> = (props): React.ReactElement => {
  const { title, multiple, options, onChange, type, value, onDelete } = props

  const getLabel = (val: string): string => {
    if (!options || !options.length) return ''
    const opt = options.find((item: Option) => item.uniqid === val)
    return opt ? opt.name : ''
  }

  return (<div className={styles['message-group']}>
    <div className={styles['message-title']}>
      {title}
    </div>
    <div className={styles['message-content']}>
      {
        [MessageGroupType.MESSAGE_TEMPLATE, MessageGroupType.RESPONSE_TEMPLATE].includes(type) &&
        <Select
          fullWidth
          value={(value.length && value) || ''}
          multiple={multiple}
          displayEmpty
          onChange={(e): void => {
            const value = e.target.value
            const finalVal = multiple ? value as string[] : [value as string]
            onChange(finalVal)
          }}
          renderValue={(selected): any => {
            const selStr = selected as string[]
            if (!selStr || selStr.length === 0 || (selStr.length === 1 && !selStr[0])) {
              return 'Add Term Here'
            }
            if (!multiple) {
              return selStr.length
                ? <Chip
                  size="small"
                  label={<Tooltip title={getLabel(selStr[0])} placement="top"><span>{getLabel(selStr[0])}</span></Tooltip>}
                  onDelete={(): void => onDelete && onDelete(selStr)}
                  clickable={true}
                  onMouseDown={(e): void => e.stopPropagation()}
                />
                : null
            }
            return selStr.map(id => options?.find(option => option.uniqid === id)?.name).join(', ')
          }}
        >
          {options && options.map((option, idx) => {
            return <MenuItem key={idx} value={option.uniqid}>{option.name}</MenuItem>
          })}
        </Select>
      }
      {
        type === MessageGroupType.DOCUMENT_STATUS &&
        <RadioGroup value={(value.length && value[0]) || DocumentStatus.PENDING} onChange={(e): void => onChange([e.target.value as string])}>
          <FormControlLabel className={styles['status-item']} value={DocumentStatus.PENDING} labelPlacement="start" control={<Radio color='primary' />} label='Pending' />
          <FormControlLabel className={styles['status-item']} value={DocumentStatus.UNALLOCATED} labelPlacement="start" control={<Radio color='primary' />} label='Unallocated' />
        </RadioGroup>
      }
      {
        type === MessageGroupType.ADDITIONAL_DATA &&
        <Select
          multiple
          autoWidth
          displayEmpty
          value={value}
          onChange={(e): void => onChange(e.target.value as string[])}
          renderValue={(selected: unknown): string => {
            const selStr = selected as string[]
            if (!selStr || selStr.length === 0) {
              return 'Add data tab here'
            }
            return selStr.map(uniqid => {
              if (!options) return []
              else return options.find(item => item.uniqid === uniqid)?.name
            }).join(', ')
          }}
        >
          {options && options.map((item, idx) => (
            <MenuItem key={idx} value={item.uniqid}>
              <Checkbox name={item.uniqid} checked={value.includes(item.uniqid)} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      }
      {
        [MessageGroupType.APPROVE, MessageGroupType.RELEASE, MessageGroupType.REQUEST_CHANGES].includes(type) &&
        <Autocomplete
          value={value}
          onChange={(_, newValue: (string | Option)[]): void => {
            const finalVal = newValue.map(item => {
              if (typeof item === 'string') {
                return item
              } else {
                return item.uniqid
              }
            })
            onChange(finalVal)
          }}
          multiple
          options={options || []}
          freeSolo
          renderTags={(vals: any, getTagProps): any =>
            vals.map((val: string, index: number) => (
              <Chip 
                key={index}
                label={<Tooltip title={val} placement="top"><span>{val}</span></Tooltip>}
                size="small"
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params): any => (
            <TextField
              {...params}
              label="Add Term Here"
            />
          )}
          filterOptions={(opts, params): any => {
            const filtered = filter(opts, params)
            const { inputValue } = params

            const isExisting = opts.some((option) => inputValue === option.uniqid)
            if (inputValue !== '' && !isExisting) {
              filtered.push({
                uniqid: inputValue,
                name: `Add "${inputValue}"`
              })
            }

            return filtered.filter(item => !value.includes(item.name))
          }}
          getOptionLabel={(option: Option): any => {
            return (option && option.name) || ''
          }}
        />
      }
    </div>
  </div>)
}
