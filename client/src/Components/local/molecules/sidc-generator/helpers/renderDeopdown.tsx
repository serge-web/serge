import React from 'react'
import { Select, MenuItem, InputLabel, FormControl, ListItemIcon } from '@material-ui/core'
import 'leaflet/dist/leaflet.css'
import ms from 'milsymbol'
import replaceNumber from './replace-number'
import { StandardIdentityOne } from './SharedData'
import { CUSTOM_SIDC } from 'src/config'

interface RenderDropdownProps {
  index: number
  data: StandardIdentityOne
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void | null
  label: string
  originalNumber: string
}

const renderSymbol = (sidc: string, key: string, index: number): React.ReactElement => {
  const replacedSidc = replaceNumber(sidc, key, index)
  const symbolHtml = new ms.Symbol(replacedSidc, { size: 20 }).asDOM().outerHTML
  
  return <div dangerouslySetInnerHTML={{ __html: symbolHtml }} />
}

const renderDropdown = (props: RenderDropdownProps): React.ReactElement => {
  const { index, data, onChange, label, originalNumber } = props

  return (
    <FormControl key={index}>
      <InputLabel>{label}</InputLabel>
      <Select onChange={onChange}>
        {Object.keys(data).map((itemKey) => {
          const itemData = data[itemKey]
          const sidcCode = itemData.sidc || label === 'Symbol set' ? CUSTOM_SIDC : originalNumber

          const value = itemData.code || itemKey

          return (
            <MenuItem key={itemKey} value={value}>
              <ListItemIcon>{renderSymbol(sidcCode, value, index)}</ListItemIcon>
              {itemData.name || itemData['entity type'] || itemData['entity subtype'] || itemData['modifier'] || itemData['entity']}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default renderDropdown
