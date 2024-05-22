import {
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  TextField
} from '@material-ui/core'
import cx from 'classnames'
import { noop } from 'lodash'
import React, { useCallback, useState } from 'react'
import CustomDialog from 'src/Components/local/atoms/custom-dialog'
import Tabs from 'src/Components/local/atoms/tabs'
import { Column } from 'src/Components/local/react-table/types/props'
import { ForceData } from 'src/custom-types'
import { ChannelCustom } from 'src/custom-types/channel-data'
import { AddButton, DropdownZoom, SimpleTable } from '../helpers/coreMapping'
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
const participantColumns: readonly Column[] = [
  { id: 'subject', label: 'Subject' },
  { id: 'type', label: 'Feature-type' },
  { id: 'permission', label: 'Permissions' },
  { id: 'applied', label: 'Applied in' },
  { id: 'action', label: '' }
]
const editParticipantColumns: readonly Column[] = [
  { id: 'force', label: 'Force' },
  { id: 'viewSpatial', label: 'View Spatial' },
  { id: 'viewProp', label: 'View Props' },
  { id: 'editRemoveFeature', label: 'Edit/Remove Feature' },
  { id: 'moveResizeFeature', label: 'Move/Resize Feature' },
  { id: 'editProp', label: 'Edit Props' },
  { id: 'action', label: '' }
]

export const CoreMappingChannel: React.FC<CoreMappingChannelProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [renderList] = useState<string[]>(['Core', 'Milsymbol'])
  const [properties] = useState<any[]>([
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: 'Y',
      icon: 'Icon',
      others: 'Line:3'
    },
    {
      type: 'String',
      label: 'Orders',
      description: 'Todays...',
      editable: 'N',
      icon: 'Icon',
      others: 'Line:3'
    }
  ])
  const [participants] = useState<any[]>([
    {
      subject: 'White/All',
      type: ['Core', 'MilSym'],
      permission: ['View', 'Edit'],
      applied: ['Plan', 'Adjud']
    },
    {
      subject: 'Blue/Co',
      type: ['MilSym'],
      permission: ['Blue: VS EP MR VP', 'Red: VS', 'Green: VP'],
      applied: ['Plan']
    }
  ])
  const [editParticipants] = useState<any[]>([
    {
      force: 'Blue',
      viewSpatial: 'Y',
      viewProp: 'N',
      editRemoveFeature: 'N',
      moveResizeFeature: 'N',
      editProp: 'N'

    }
  ])

  const modalStyle = { content: { width: '60%' } }

  const onTabChange = (_: string, index: number) => {
    setActiveTab(index)
  }

  const removeRender = useCallback((renderer: string) => {
    console.log('Remove: ', renderer)
  }, [])

  const onEdit = () => setOpenEditModal(true)
  const onCloseEditModal = () => setOpenEditModal(false)
  const onSave = () => setOpenEditModal(false)

  return (
    <Box className={styles.channelTabContainer}>
      <CustomDialog
        modalStyle={modalStyle}
        isOpen={openEditModal}
        header={'Add/Edit Participant'}
        cancelBtnText='Cancel'
        saveBtnText='OK'
        onClose={onCloseEditModal}
        onSave={onSave}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '49%' }}>
              <DropdownZoom title="Force" values={[5, 10, 15]} labelWidth='80px' onChange={noop} />
              <DropdownZoom title="Role" values={[5, 10, 15]} labelWidth='80px' onChange={noop} />
            </Box>
            <Box sx={{ width: '49%' }}>
              <DropdownZoom title="Renderer" values={[5, 10, 15]} labelWidth='80px' onChange={noop} />
              <DropdownZoom title="For phase" values={[5, 10, 15]} labelWidth='80px' onChange={noop} />
            </Box>
          </Box>
          <Box>
            <span>Permissions</span>
            <SimpleTable columns={editParticipantColumns} data={editParticipants}/>
          </Box>
        </Box>
      </CustomDialog>
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
            labelWidth='150px'
            onChange={noop}
          />
          <DropdownZoom title="Max zoom" values={[5, 10, 15]} labelWidth='150px'onChange={noop} />
          <DropdownZoom title="Min zoom" values={[5, 10, 15]} labelWidth='150px' onChange={noop} />
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
            <SimpleTable columns={columns} data={properties}/>
            <AddButton />
          </Box>
        </Box>
      )}
      {activeTab === 2 && <Box className={cx({
        [styles.channelTabDetailsContainer]: true,
        [styles.participants]: true
      })}>
        <SimpleTable columns={participantColumns} data={participants} onEdit={onEdit}/>
      </Box>}
    </Box>
  )
}

export default CoreMappingChannel
