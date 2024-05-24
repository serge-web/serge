import { faIcons, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
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
import { capitalize, cloneDeep, get, noop, set } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import CustomDialog from 'src/Components/local/atoms/custom-dialog'
import Tabs from 'src/Components/local/atoms/tabs'
import { BaseRenderer, ForceData, PROPERTY_ENUM, PROPERTY_NUMBER, PropertyType } from 'src/custom-types'
import { ChannelCustom, ChannelMapping } from 'src/custom-types/channel-data'
import { AddButton, AdditionalPropcolumns, CoreMappingTabs, EditParticipantColumns, ParticipantColumns, SimpleSelect, SimpleTable, ZoomOptions } from '../helpers/coreMapping'
import styles from '../styles.module.scss'

const RendererOpts = ['Core', 'MilSym']

type CoreMappingChannelProps = {
  channel: ChannelCustom
  forces: ForceData[]
  onChange: (channel: ChannelCustom) => void
};

export const CoreMappingChannel: React.FC<CoreMappingChannelProps> = ({ channel, onChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [editParticipant, setEditParticipant] = useState<boolean>(false)
  const [editProperty, setEditProperty] = useState<PropertyType | undefined>()
  const [selectedRenderer, setSelectedRender] = useState<string>(get(channel, 'renderers[0].id', ''))
  const [localChannel, setLocalChannel] = useState<ChannelMapping>(channel as unknown as ChannelMapping)
  const [properties, setProperties] = useState<any[]>([])
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

  useEffect(() => {
    if (activeTab === 1 && selectedRenderer) {
      const newProperties: any[] = []
      const renderer: BaseRenderer = localChannel.renderers.find(r => r.id === selectedRenderer)
      if (renderer) {
        renderer.baseProps.map(prop => {
          newProperties.push({
            type: getType(prop.type),
            label: prop.label,
            description: prop.description,
            editable: prop.editable,
            icon: prop.icon || 'N/A',
            others: 'N/A',
            id: prop.id
          })
        })
        renderer.additionalProps.map(prop => {
          newProperties.push({
            type: getType(prop.type),
            label: prop.label,
            description: prop.description,
            editable: prop.editable,
            icon: prop.icon || 'N/A',
            others: 'N/A',
            id: prop.id
          })
        })
        setProperties(newProperties)
      }
    }
  }, [activeTab, selectedRenderer, localChannel])

  useEffect(() => {
    onChange(localChannel as unknown as ChannelCustom)
  }, [localChannel])

  const onTabChange = (_: string, index: number) => {
    setActiveTab(index)
  }

  const onEditParticipant = () => setEditParticipant(true)
  const onCloseEditParticipant = () => setEditParticipant(false)
  const onSaveParticipant = () => setEditParticipant(false)
  const onCloseProperty = () => setEditProperty(undefined)

  const onSaveProperty = () => {
    console.log('xx> editProps: ', editProperty)
    // update new property into localChannel
    setEditProperty(undefined)
  }

  const onLocalChange = useCallback((key: string, value: string) => {
    const cloneChannel = cloneDeep(localChannel)
    set(cloneChannel, key, value)
    setLocalChannel(cloneChannel)
  }, [])

  const selectRender = useCallback((rendererId: string) => setSelectedRender(rendererId), [])

  const removeRender = useCallback((e: any, renderer: string) => {
    const cloneChannels = cloneDeep(localChannel)
    const filterRender = cloneChannels.renderers.filter(r => r.id !== renderer)
    set(cloneChannels, 'renderers', filterRender)
    setLocalChannel(cloneChannels)
    if (localChannel.renderers.length) {
      setSelectedRender(localChannel.renderers[0].id)
    }
    e.stopPropagation()
  }, [localChannel])

  const onAddNewRenderer = useCallback((rendererId: string) => {
    console.log('Add new renderere with id: ', rendererId)
  }, [])

  const onAddNewProp = useCallback((value: string) => {
    console.log(value)
  }, [])

  const getType = (type: string) => {
    if (type === PROPERTY_ENUM) {
      return 'Enum'
    } else if (type === PROPERTY_NUMBER) {
      return 'Number'
    } else {
      return 'String'
    }
  }

  console.log('xx> channel: ', channel)

  const editRowPermission = (row: PropertyType) => {
    console.log('xx> row: ', row)
  }

  const removeRowPermission = (row: PropertyType) => {
    console.log('xx> row: ', row)
  }

  const removePropRow = (row: PropertyType) => {
    const renderer: BaseRenderer = localChannel.renderers.find(r => r.id === selectedRenderer)
    if (renderer) {
      renderer.baseProps = renderer.baseProps.filter(prop => prop.id !== row.id)
      renderer.additionalProps = renderer.additionalProps.filter(prop => prop.id !== row.id)
      setLocalChannel(cloneDeep(localChannel))
    }
  }

  const onEditPropertyChange = (path: string, value: any) => {
    if (!editProperty) {
      return
    }
    const cloneRow = cloneDeep(editProperty)
    set(cloneRow, path, value)
    setEditProperty(cloneRow)
  }

  return (
    <Box className={styles.channelTabContainer}>
      <CustomDialog
        modalStyle={{ content: { width: '60%' } }}
        isOpen={editParticipant}
        header={'Add/Edit Participant'}
        cancelBtnText="Cancel"
        saveBtnText="OK"
        onClose={onCloseEditParticipant}
        onSave={onSaveParticipant}
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
              onEdit={editRowPermission}
              onRemove={removeRowPermission}
            />
          </Box>
        </Box>
      </CustomDialog>

      <CustomDialog
        modalStyle={{ content: { width: '30%', minWidth: '500px' } }}
        isOpen={!!editProperty}
        header={'Edit Property'}
        cancelBtnText="Cancel"
        saveBtnText="OK"
        onClose={onCloseProperty}
        onSave={onSaveProperty}
      >
        <Box>
          {editProperty && Object.keys(editProperty).map((key, idx) => {
            switch (key) {
              case 'type':
                return <SimpleSelect key={idx} title="Type" options={['Enum', 'Number', 'String']} labelWidth="90px" value={get(editProperty, key, '')} onChange={(e) => onEditPropertyChange(key, e.target.value)} />
              case 'editable':
                return <Box key={idx}>
                  <FormControlLabel
                    style={{ marginLeft: '0' }}
                    control={<Checkbox defaultChecked onChange={(e) => onEditPropertyChange(key, e.target.checked)}/>}
                    label={<span style={{ fontSize: '14px', minWidth: '80px', display: 'block' }}>Editable</span>}
                    labelPlacement="start"
                  />
                </Box>
              case 'icon':
                return <Box>
                  <FormControlLabel
                    style={{ marginLeft: '0' }}
                    control={<FontAwesomeIcon icon={faIcons} size='2x'/>}
                    label={<span style={{ minWidth: '90px', display: 'block' }}>Icon</span>}
                    labelPlacement="start"
                  />
                </Box>
              case 'id':
                return <></>
              default:
                return <Box key={idx} className={styles.editPropField}>
                  <InputLabel variant="standard">{ capitalize(key)}</InputLabel>
                  <TextField fullWidth onChange={(e) => onEditPropertyChange(key, e.target.value)}/>
                </Box>
            }
          })}
        </Box>
      </CustomDialog>

      <Tabs tabs={CoreMappingTabs} activeTab="Map" onChange={onTabChange} />
      {activeTab === 0 && (
        <Box className={styles.channelTabDetailsContainer}>
          <Box className={styles.mapFieldItem}>
            <InputLabel variant="standard">URL</InputLabel>
            <TextField fullWidth value={localChannel.constraints.tileLayer?.url || ''} onChange={(e) => onLocalChange('constraints.tileLayer.url', e.target.value)}/>
          </Box>

          <SimpleSelect title="Max native zoom" value={localChannel.constraints.tileLayer?.maxNativeZoom || 1} options={ZoomOptions} labelWidth="150px" width="40%" onChange={(e) => onLocalChange('constraints.tileLayer.maxNativeZoom', e.target.value as string)} />
          <SimpleSelect title="Max zoom" value={localChannel.constraints.maxZoom || 1} options={ZoomOptions} labelWidth="150px" width="40%" onChange={(e) => onLocalChange('constraints.maxZoom', e.target.value as string)} />
          <SimpleSelect title="Min zoom" value={localChannel.constraints.minZoom || 1} options={ZoomOptions} labelWidth="150px" width="40%" onChange={(e) => onLocalChange('constraints.minZoom', e.target.value as string)} />
        </Box>
      )}
      {activeTab === 1 && (
        <Box className={cx({ [styles.channelTabDetailsContainer]: true, [styles.renderersTab]: true })} >
          <Box>
            <span className={styles.itemTitle}>Renderers</span>
            <List className={styles.renderersList}>
              {localChannel.renderers.map(renderer => (
                <ListItem key={renderer.id} button selected={selectedRenderer === renderer.id} onClick={() => selectRender(renderer.id)}>
                  <span>{renderer.id}</span>
                  <FontAwesomeIcon icon={faTimesCircle} onClick={(e) => removeRender(e, renderer.id)} />
                </ListItem>
              ))}
            </List>
            <AddButton options={RendererOpts} onChange={onAddNewRenderer}/>
          </Box>
          <Box sx={{ maxWidth: 'calc(100% - 180px)' }}>
            <span className={styles.itemTitle}>Renderer specific</span>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={<span style={{ fontSize: '14px' }}>Cluster markers</span>}
              labelPlacement="start"
            />
            <span className={styles.itemTitle}>Additional Properties</span>
            <SimpleTable columns={AdditionalPropcolumns} data={properties} onEdit={setEditProperty} onRemove={removePropRow} />
            <AddButton options={['String', 'Number', 'Enum']} onChange={onAddNewProp}/>
          </Box>
        </Box>
      )}
      {activeTab === 2 && (
        <Box className={cx({ [styles.channelTabDetailsContainer]: true, [styles.participantsTab]: true })}>
          <SimpleTable columns={ParticipantColumns} data={participants} onEdit={onEditParticipant} onRemove={noop} />
        </Box>
      )}
    </Box>
  )
}

export default CoreMappingChannel
