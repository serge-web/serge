import React from 'react'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ListItemIcon
} from '@material-ui/core'
import 'leaflet/dist/leaflet.css'
import ms from 'milsymbol'
import replaceNumber from './replace-number'
import { RenderDropdownProps } from '../PropsTypes/types'
import { CUSTOM_SIDC } from 'src/config'

const generateSymbol = (sidc: string, key: string, index: number): string => {
  const replacedSidc = replaceNumber(sidc, key, index)
  return new ms.Symbol(replacedSidc, { size: 20 }).asDOM().outerHTML
}

const renderDropdown = (props: RenderDropdownProps): React.ReactElement => {
  const { index, endindex, data, onChange, label, originalNumber } = props
  const selectedSubstring = originalNumber.slice(index, endindex)

  return (
    <FormControl key={index}>
      <InputLabel>{label}</InputLabel>
      <Select onChange={onChange} value={selectedSubstring}>
        {Object.entries(data).map(([itemKey, itemData]) => {
          const sidcCode = itemData.sidc || label === 'Symbol set' ? CUSTOM_SIDC : originalNumber
          const checkReserved = itemData.modifier === '{Reserved for future use}'
          const value = itemData.code || itemKey
          const symbolHtml = generateSymbol(sidcCode, value, index)

          return (
            <MenuItem key={itemKey} value={value} disabled={checkReserved}>
              <ListItemIcon dangerouslySetInnerHTML={{ __html: symbolHtml }} />
              {itemData.name || itemData['entity subtype'] || itemData['entity type'] || itemData['modifier'] || itemData['entity']}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default renderDropdown
