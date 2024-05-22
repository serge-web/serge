import {
  faEdit,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Chip,
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
import React, { useMemo } from 'react'
import { Column } from 'src/Components/local/react-table/types/props'
import styles from '../styles.module.scss'

type SimpleTableProps = {
  columns: readonly Column[]
  data: any[]
  onEdit?: () => void
  onRemove?: () => void
}

export const SimpleTable: React.FC<SimpleTableProps> = ({ columns, data, onEdit, onRemove }) => {
  return <TableContainer component={Paper} style={{ maxHeight: '200px' }}>
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
            {Object.keys(prop).map(key => (<TableCell key={key} style={{ padding: '4px' }}>
              {Array.isArray(prop[key])
                ? <>
                  {prop[key].map((value: string) => (<Chip key={value} label={value} className={styles.tableRow} />))}
                </>
                : <Chip label={prop[key]} className={styles.tableRow} />}
              
            </TableCell>))}
            <TableCell align="right" style={{ minWidth: '70px' }}>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ marginRight: '5px' }}
                onClick={onEdit}
              />
              <FontAwesomeIcon icon={faTrash} onClick={onRemove}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

export const AddButton: React.FC<{ className?: string }> = ({ className }) => {
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
            <MenuItem onClick={popupState.close}>New Property</MenuItem>
          </Menu>
        </Box>
      )}
    </PopupState>
  )
}

export const DropdownZoom: React.FC<{
  title: string
  values: number[]
  labelWidth: string
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>,
    child: React.ReactNode
  ) => void
}> = ({ title, values, labelWidth, onChange }) =>
  useMemo(
    () => (
      <Box className={styles.mapFieldItem}>
        <InputLabel variant="standard" style={{ minWidth: labelWidth }}>{title}</InputLabel>
        <Select fullWidth onChange={onChange}>
          {values.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </Box>
    ),
    []
  )
