import {
  faEdit,
  faTimesCircle,
  faTrash
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  Menu,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import cx from 'classnames'
import { noop } from 'lodash'
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state'
import React, { useCallback, useMemo, useState } from 'react'
import Tabs from 'src/Components/local/atoms/tabs'
import { Column } from 'src/Components/local/react-table/types/props'
import { ForceData } from 'src/custom-types'
import { ChannelCustom } from 'src/custom-types/channel-data'
import styles from '../styles.module.scss'

type CoreMappingChannelProps = {
  channel: ChannelCustom
  forces: ForceData[]
  onChange: (channel: ChannelCustom) => void
};

const CoreMappingTabs = ['Map', 'Renderers', 'Participants']
const columns: readonly Column[] = [
  { id: 'type', label: 'Type' },
  { id: 'label', label: 'Label' },
  { id: 'description', label: 'Description' },
  { id: 'editable', label: 'User Editable' },
  { id: 'icon', label: 'Icon' },
  { id: 'others', label: 'Others' },
  { id: 'action', label: '' }
]

export const CoreMappingChannel: React.FC<CoreMappingChannelProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [renderList] = useState<string[]>(['Core', 'Milsymbol'])
  const [properties] = useState<any[]>([
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: true,
      icon: 'Icon',
      others: 'Line:3'
    },
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: true,
      icon: 'Icon',
      others: 'Line:3'
    },
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: true,
      icon: 'Icon',
      others: 'Line:3'
    },
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: true,
      icon: 'Icon',
      others: 'Line:3'
    },
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: true,
      icon: 'Icon',
      others: 'Line:3'
    },
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: true,
      icon: 'Icon',
      others: 'Line:3'
    }
  ])

  const onTabChange = (_: string, index: number) => {
    setActiveTab(index)
  }

  const DropdownZoom: React.FC<{
    title: string
    values: number[]
    onChange: (
      event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>,
      child: React.ReactNode
    ) => void
  }> = ({ title, values, onChange }) =>
    useMemo(
      () => (
        <Box className={styles.mapFieldItem} sx={{ width: '60%' }}>
          <InputLabel variant="standard">{title}</InputLabel>
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

  const AddButton: React.FC<{ className?: string }> = ({ className }) => {
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

  const removeRender = useCallback((renderer: string) => {
    console.log('Remove: ', renderer)
  }, [])

  return (
    <Box className={styles.channelTabContainer}>
      <Tabs tabs={CoreMappingTabs} activeTab="Map" onChange={onTabChange} />
      {activeTab === 0 && (
        <Box className={styles.channelTabDetailsContainer}>
          <Box className={styles.mapFieldItem}>
            <InputLabel variant="standard">URL</InputLabel>
            <TextField fullWidth />
          </Box>

          <DropdownZoom
            title="Max native zoom"
            values={[5, 10, 15]}
            onChange={noop}
          />
          <DropdownZoom title="Max zoom" values={[5, 10, 15]} onChange={noop} />
          <DropdownZoom title="Min zoom" values={[5, 10, 15]} onChange={noop} />
        </Box>
      )}
      {activeTab === 1 && (
        <Box
          className={cx({
            [styles.channelTabDetailsContainer]: true,
            [styles.renderersTab]: true
          })}
        >
          <Box>
            <span className={styles.itemTitle}>Renderers</span>
            <List className={styles.renderersList}>
              {renderList.map((renderer) => (
                <ListItem key={renderer} button>
                  <span>{renderer}</span>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    onClick={() => removeRender(renderer)}
                  />
                </ListItem>
              ))}
            </List>
            <AddButton />
          </Box>
          <Box>
            <span className={styles.itemTitle}>Renderer specific</span>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={<span style={{ fontSize: '14px' }}>Cluster markers</span>}
              labelPlacement="start"
            />
            <span className={styles.itemTitle}>Additional Properties</span>
            <TableContainer component={Paper} style={{ maxHeight: '200px' }}>
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
                  {properties.map((prop, idx) => (
                    <TableRow key={idx} style={{ cursor: 'pointer' }}>
                      <TableCell>{prop.type}</TableCell>
                      <TableCell>{prop.label}</TableCell>
                      <TableCell>{prop.description}</TableCell>
                      <TableCell>{prop.editable ? 'Y' : 'N'}</TableCell>
                      <TableCell>{prop.icon}</TableCell>
                      <TableCell>{prop.others}</TableCell>
                      <TableCell align="right">
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ marginRight: '5px' }}
                        />
                        <FontAwesomeIcon icon={faTrash} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <AddButton />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default CoreMappingChannel
