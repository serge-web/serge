import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
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
import { cloneDeep, noop, set } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import CustomDialog from 'src/Components/local/atoms/custom-dialog'
import Tabs from 'src/Components/local/atoms/tabs'
import { ForceData } from 'src/custom-types'
import { ChannelCustom, ChannelMapping } from 'src/custom-types/channel-data'
import { AddButton, AdditionalPropcolumns, CoreMappingTabs, EditParticipantColumns, ParticipantColumns, SimpleSelect, SimpleTable, ZoomOptions } from '../helpers/coreMapping'
import styles from '../styles.module.scss'

type CoreMappingChannelProps = {
  channel: ChannelCustom
  forces: ForceData[]
  onChange: (channel: ChannelCustom) => void
};

export const CoreMappingChannel: React.FC<CoreMappingChannelProps> = ({ channel, onChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [localChannelUpdates, setLocalChannelUpdates] = useState<ChannelMapping>(channel as unknown as ChannelMapping)
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

  console.log('xx> channel: ', channel)
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

  const onLocalChange = (key: string, value: string) => {
    const cloneChannel = cloneDeep(localChannelUpdates)
    set(cloneChannel, key, value)
    setLocalChannelUpdates(cloneChannel)
  }

  useEffect(() => {
    onChange(localChannelUpdates as unknown as ChannelCustom)
  }, [localChannelUpdates])

  return (
    <Box className={styles.channelTabContainer}>
      <CustomDialog
        modalStyle={modalStyle}
        isOpen={openEditModal}
        header={'Add/Edit Participant'}
        cancelBtnText="Cancel"
        saveBtnText="OK"
        onClose={onCloseEditModal}
        onSave={onSave}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '49%' }}>
              <SimpleSelect title="Force" options={[]} labelWidth="80px" onChange={noop} />
              <SimpleSelect title="Role" options={[]} labelWidth="80px" onChange={noop} />
            </Box>
            <Box sx={{ width: '49%' }}>
              <SimpleSelect title="Renderer" options={[]} labelWidth="80px" onChange={noop} />
              <SimpleSelect title="For phase" options={[]} labelWidth="80px" onChange={noop} />
            </Box>
          </Box>
          <Box>
            <span>Permissions</span>
            <SimpleTable
              columns={EditParticipantColumns}
              data={editParticipants}
            />
          </Box>
        </Box>
      </CustomDialog>
      <Tabs tabs={CoreMappingTabs} activeTab="Map" onChange={onTabChange} />
      {activeTab === 0 && (
        <Box className={styles.channelTabDetailsContainer}>
          <Box className={styles.mapFieldItem}>
            <InputLabel variant="standard">URL</InputLabel>
            <TextField fullWidth value={localChannelUpdates.constraints.tileLayer?.url || ''} onChange={(e) => onLocalChange('constraints.tileLayer.url', e.target.value)}/>
          </Box>

          <SimpleSelect title="Max native zoom" value={localChannelUpdates.constraints.tileLayer?.maxNativeZoom || 1} options={ZoomOptions} labelWidth="150px" width="60%" onChange={(e) => onLocalChange('constraints.tileLayer.maxNativeZoom', e.target.value as string)} />
          <SimpleSelect title="Max zoom" value={localChannelUpdates.constraints.maxZoom || 1} options={ZoomOptions} labelWidth="150px" width="60%" onChange={(e) => onLocalChange('constraints.maxZoom', e.target.value as string)} />
          <SimpleSelect title="Min zoom" value={localChannelUpdates.constraints.minZoom || 1} options={ZoomOptions} labelWidth="150px" width="60%" onChange={(e) => onLocalChange('constraints.minZoom', e.target.value as string)} />
        </Box>
      )}
      {activeTab === 1 && (
        <Box className={cx({ [styles.channelTabDetailsContainer]: true, [styles.renderersTab]: true })} >
          <Box>
            <span className={styles.itemTitle}>Renderers</span>
            <List className={styles.renderersList}>
              {renderList.map((renderer) => (
                <ListItem key={renderer} button>
                  <span>{renderer}</span>
                  <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeRender(renderer)} />
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
            <SimpleTable columns={AdditionalPropcolumns} data={properties} />
            <AddButton />
          </Box>
        </Box>
      )}
      {activeTab === 2 && (
        <Box className={cx({ [styles.channelTabDetailsContainer]: true, [styles.participantsTab]: true })}>
          <SimpleTable columns={ParticipantColumns} data={participants} onEdit={onEdit} />
        </Box>
      )}
    </Box>
  )
}

export default CoreMappingChannel
