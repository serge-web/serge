import { Checkbox, Chip, FormControlLabel, ListItemText, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core'
import React, { ReactNode } from 'react'
import { Option } from '../../../molecules/editable-row'
import styles from '../styles.module.scss'
import { ChannelCollab, ChannelData, MessageGroupProps } from '../types/props'

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

export const AdditionalData = [
  { name: 'Location', uniqid: '0' },
  { name: 'Endorsed By', uniqid: '1' },
  { name: 'Start of Operation', uniqid: '2' },
  { name: 'Intended Visibility of Adversary', uniqid: '3' }
]

export const getMsgRspValue = (channelData?: ChannelData): Option => {
  const { title = '', _id = '' } = (channelData as unknown as ChannelCollab).responseTemplate || {}
  return {
    name: title,
    uniqid: _id
  }
}

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
          value={value}
          multiple={multiple}
          displayEmpty
          onChange={(e): void => {
            const value = e.target.value
            const finalVal = multiple ? value as string[] : [value as string]
            onChange(finalVal)
          }}
          renderValue={(selected): any => {
            const selStr = selected as string[]
            if (!multiple) {
              return selStr.length ? <Chip
                size="small"
                label={getLabel(selStr[0])}
                onDelete={(): void => onDelete && onDelete(selStr)}
                clickable={true}
                onMouseDown={(e): void => e.stopPropagation()}
              /> : null
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
        <Select
          fullWidth
          value={value}
          multiple={multiple}
          displayEmpty
          onChange={(e): void => onChange([e.target.value as string])}
          renderValue={(selected): ReactNode => {
            const selStr = selected as string[]
            if (!selStr || selStr.length === 0) {
              return 'Add Term Here'
            }
            if (!multiple) {
              return selStr.length ? <Chip
                size="small"
                label={selStr[0]}
                onDelete={(): void => onDelete && onDelete(selStr)}
                clickable={true}
                onMouseDown={(e): void => e.stopPropagation()}
              /> : null
            }
            return selStr.map(id => options?.find(option => option.uniqid === id)?.name).join(', ')
          }}
        >
          {options && options.map((option, idx) => {
            return <MenuItem key={idx} value={option.uniqid}>{option.name}</MenuItem>
          })}
        </Select>
      }
    </div>
  </div>)
}
