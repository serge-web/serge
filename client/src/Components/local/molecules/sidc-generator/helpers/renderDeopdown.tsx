import { Select, MenuItem, InputLabel, FormControl, ListItemIcon } from '@material-ui/core'
import 'leaflet/dist/leaflet.css'
import ms from 'milsymbol'
import React from 'react'
import { StandardIdentityOneItem } from './SharedData'

const renderSymbol = (sidc: string) => {
  return <div dangerouslySetInnerHTML={{ __html: new ms.Symbol(sidc, { size: 20 }).asDOM().outerHTML }} />
}

const renderDropdown = (
  key: number,
  data: StandardIdentityOneItem[],
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void,
  label: string
): React.JSX.Element => {
  return <FormControl key={key}>
    <InputLabel>{label}</InputLabel>
    <Select onChange={onChange}>
      {data.map((data) => (
        <MenuItem key={data.index} id={data.code} value={data.code}>
          <ListItemIcon >
            {renderSymbol(data.sidc)}
          </ListItemIcon>
          {data.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
}

export default renderDropdown
