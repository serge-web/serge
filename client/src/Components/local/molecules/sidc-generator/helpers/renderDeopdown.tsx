import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import 'leaflet/dist/leaflet.css'
import ms from 'milsymbol'
import React from 'react'

const renderSymbol = (sidc: string) => (
  <div dangerouslySetInnerHTML={{ __html: new ms.Symbol(sidc, { size: 20 }).asDOM().outerHTML }} />
)

const renderDropdown = (
  data: Record<string, { sidc: string, name: string }>,
  selectedValue: string,
  onChange: (e: React.ChangeEvent<{ value: unknown }>) => void,
  label: string
): React.JSX.Element => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select value={selectedValue} onChange={onChange}>
      {Object.keys(data).map((key) => (
        <MenuItem key={key} value={key}>
          {renderSymbol(data[key].sidc)}
          {data[key].name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default renderDropdown
