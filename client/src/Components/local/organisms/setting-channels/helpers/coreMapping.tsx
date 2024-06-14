import {
  faCheck,
  faEdit,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state'
import React, { ChangeEvent } from 'react'
import { Column } from 'src/Components/local/react-table/types/props'
import styles from '../styles.module.scss'

export const CoreMappingTabs = ['Map', 'Renderers', 'Participants']
export const AdditionalPropcolumns: readonly Column[] = [
  { id: 'type', label: 'Type' },
  { id: 'label', label: 'Label' },
  { id: 'description', label: 'Description' },
  { id: 'editable', label: 'User Editable' },
  { id: 'others', label: 'Others' },
  { id: 'action', label: '' }
]
export const ParticipantColumns: readonly Column[] = [
  { id: 'subject', label: 'Subject' },
  { id: 'type', label: 'Feature-type' },
  { id: 'permission', label: 'Permissions' },
  { id: 'applied', label: 'Applied in' },
  { id: 'action', label: '' }
]
export const EditParticipantColumns: readonly Column[] = [
  { id: 'force', label: 'Force' },
  { id: 'viewSpatial', label: 'View Spatial' },
  { id: 'viewProp', label: 'View Props' },
  { id: 'editRemoveFeature', label: 'Edit/Remove Feature' },
  { id: 'moveResizeFeature', label: 'Move/Resize Feature' },
  { id: 'editProp', label: 'Edit Props' },
  { id: 'action', label: '' }
]
export const ZoomOptions = Array.from(Array(20).keys()).map(v => v + 1)
export const RendererOptions = ['core', 'milSym']
export const PhaseOptions = ['planning', 'adjudication']

export type EditParticipantType = {
  tableData: any[]
  force: string
  roles: string[]
  phases: string[]
  renderers: string[]
  id: string
}

export type ButtonOptions = {
  id: string
  label: string
}

type RenderElmProps = {
  prop: any
  ckey: string
  rowId?: number
  onChange?: (data: any) => void
}

type SimpleTableProps = {
  columns: readonly Column[]
  data: any[]
  editInline?: number
  forceNames?: string[]
  onEdit?: (row: any) => void
  onRemove: (row: any) => void
  onChange?: (data: any) => void
}

export const SimpleTable: React.FC<SimpleTableProps> = ({ columns, data, editInline, forceNames = [], onEdit, onRemove, onChange }) => {
  const ArrayElm: React.FC<RenderElmProps> = ({ prop, ckey }) => {
    return prop[ckey].map((value: any) => (value && <Chip key={value} label={value} className={styles.tableCellText} />))
  }

  const CheckboxElm: React.FC<RenderElmProps> = ({ prop, ckey, rowId, onChange }) => {
    const onElmChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      prop[ckey] = checked
      onChange && onChange(prop)
    }

    return <FormControlLabel
      style={{ marginLeft: '0' }}
      control={<Checkbox checked={prop[ckey]} onChange={onElmChange}/>} label={undefined} disabled={editInline !== rowId}
    />
  }

  const TextElm: React.FC<RenderElmProps> = ({ prop, ckey, rowId, onChange }) => {
    const elm = prop[ckey]
    if (!elm) {
      return <></>
    }

    const onElmChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => {
      if (ckey === 'permissionOnForce' && data.find(d => d[ckey] === event.target.value)) {
        alert(`This force name "${event.target.value}" is in use, please choose another one`)
        return
      }
      prop[ckey] = event.target.value
      onChange && onChange(prop)
    }

    if (editInline === rowId && ckey === 'permissionOnForce') {
      return <SimpleSelect title='' value={elm} options={forceNames} labelWidth="10px" onChange={onElmChange} />
    }
    return <Chip label={elm} className={styles.tableCellText} />
  }

  return <TableContainer component={Paper} style={{ maxHeight: '400px' }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((prop, idx) => (
          <TableRow key={idx} style={{ cursor: 'pointer' }}>
            {Object.keys(prop).map(key => (key !== 'id' && <TableCell key={key} style={{ padding: '4px' }}>
              {Array.isArray(prop[key])
                ? <ArrayElm prop={prop} ckey={key} />
                : typeof prop[key] === 'boolean'
                  ? <CheckboxElm prop={prop} ckey={key} rowId={prop.id} onChange={onChange}/>
                  : <TextElm prop={prop} ckey={key} rowId={prop.id} onChange={onChange}/>
              }
            </TableCell>))}
            <TableCell align="right" style={{ minWidth: '70px' }}>
              <FontAwesomeIcon
                icon={editInline === prop.id ? faCheck : faEdit}
                style={{ marginRight: '5px' }}
                onClick={() => {
                  if (onEdit) {
                    if (Number.isInteger(editInline) && editInline !== -1) {
                      onEdit({ id: -1 })
                    } else {
                      onEdit(prop)
                    }
                  }
                }}
              />
              <FontAwesomeIcon icon={faTrash} onClick={() => onRemove(prop)}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

export const AddButton: React.FC<{ className?: string, options: ButtonOptions[], onChange: (value: string) => void }> = ({ className, options = [], onChange }) => {
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <Box className={className}>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Add
          </Button>
          <Menu
            {...bindMenu(popupState)}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            {options.map(option => <MenuItem key={option.id} onClick={() => {
              onChange(option.id)
              popupState.close()
            }}>{option.label}</MenuItem>)}
          </Menu>
        </Box>
      )}
    </PopupState>
  )
}

export const SimpleSelect: React.FC<{
  title: string
  value?: number | string | number[] | string[]
  options: number[] | string[]
  labelWidth: string
  width?: string
  multiple?: boolean
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>,
    child: React.ReactNode
  ) => void
}> = ({ title, options, value, labelWidth, width, onChange, multiple }) =>
  <Box className={styles.mapFieldItem} sx={{ width }}>
    <InputLabel variant="standard" style={{ minWidth: labelWidth }}>{title}</InputLabel>
    <Select fullWidth onChange={onChange} value={value} multiple={multiple} renderValue={value => <>{Array.isArray(value) ? value.join(', ') : value}</>}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {
            multiple
              ? <FormControlLabel
                style={{ marginLeft: '0' }}
                control={<Checkbox checked={(value as any)?.includes(option)} />} label={option}
              />
              : option
          }
        </MenuItem>
      ))}
    </Select>
  </Box>
