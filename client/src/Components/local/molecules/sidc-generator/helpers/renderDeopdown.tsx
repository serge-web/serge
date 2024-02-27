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
import styles from '../styles.module.scss'
import { CUSTOM_SIDC } from 'src/config'

const generateSymbol = (sidc: string, key: string, index: number): string => {
  const replacedSidc = replaceNumber(sidc, key, index)
  return new ms.Symbol(replacedSidc, { size: 20 }).asDOM().outerHTML
}

const renderDropdown = (props: RenderDropdownProps): React.ReactElement => {
  const { index, endindex, data, onChange, label, originalNumber } = props
  const selectedSubstring = originalNumber.slice(index, endindex)

  return (
    <FormControl key={index} className={styles.form} fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">{label}</InputLabel>
      <Select onChange={onChange} value={selectedSubstring}>
        {Object.entries(data).map(([itemKey, itemData]) => {
          const { sidc, modifier, code, entity, name, entity_subtype, entity_type } = itemData
          const sidcCode = sidc || label === 'Symbol set' ? CUSTOM_SIDC : originalNumber
          const checkReserved = modifier === '{Reserved for future use}'
          const value = code || itemKey
          const symbolHtml = generateSymbol(sidcCode, value, index)
          
          return (
            <MenuItem className={styles.item} style={{ alignItems: 'baseline' }} key={itemKey} value={value} disabled={checkReserved}>
              <ListItemIcon dangerouslySetInnerHTML={{ __html: symbolHtml }} />
              {entity && <InputLabel className={styles.label} variant="standard" htmlFor="uncontrolled-native">{entity}<span>-</span></InputLabel>}
              {name || entity_subtype || entity_type || modifier || entity}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default renderDropdown
