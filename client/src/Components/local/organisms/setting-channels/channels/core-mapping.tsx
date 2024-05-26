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
import { BaseRenderer, ForceData, PROPERTY_ENUM, PROPERTY_NUMBER, PROPERTY_STRING, PropertyType } from 'src/custom-types'
import { ChannelCustom, ChannelMapping } from 'src/custom-types/channel-data'
import { AddButton, AdditionalPropcolumns, ButtonOptions, CoreMappingTabs, EditParticipantColumns, ParticipantColumns, SimpleSelect, SimpleTable, ZoomOptions } from '../helpers/coreMapping'
import styles from '../styles.module.scss'

const RendererOpts: ButtonOptions[] = [
  { id: 'core', label: 'Core' },
  { id: 'milSym', label: 'MilSym' }
]

const AddPropOpts: ButtonOptions[] = [
  { id: PROPERTY_STRING, label: PROPERTY_STRING },
  { id: PROPERTY_NUMBER, label: PROPERTY_NUMBER },
  { id: PROPERTY_ENUM, label: PROPERTY_ENUM }
]

type CoreMappingChannelProps = {
  channel: ChannelCustom
  forces: ForceData[]
  onChange: (channel: ChannelCustom) => void
};

export const CoreMappingChannel: React.FC<CoreMappingChannelProps> = ({ channel, onChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [editParticipant, setEditParticipant] = useState<boolean>(false)
  const [editProperty, setEditProperty] = useState<PropertyType | undefined>()
  const [selectedRenderer, setSelectedRender] = useState<string>('')
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
    setLocalChannel(channel as unknown as ChannelMapping)
    setSelectedRender(get(channel, 'renderers[0].id', ''))
  }, [])

  useEffect(() => {
    if (activeTab === 1 && selectedRenderer) {
      const newProperties: PropertyType[] = []
      localChannel.renderers.some((r: BaseRenderer) => {
        if (r.id === selectedRenderer) {
          r.baseProps.map(prop => {
            newProperties.push({
              type: prop.type,
              label: prop.label,
              description: prop.description,
              editable: prop.editable,
              icon: prop.icon || 'N/A',
              choices: [],
              id: prop.id
            })
          })
          r.additionalProps.map(prop => {
            newProperties.push({
              type: prop.type,
              label: prop.label,
              description: prop.description,
              editable: prop.editable,
              icon: prop.icon || 'N/A',
              choices: [],
              id: prop.id
            })
          })
          setProperties(newProperties)
          return true
        }
        return false
      })
    } else {
      setProperties([])
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
    if (!editProperty) {
      return
    }
    localChannel.renderers.forEach((r: BaseRenderer, idx: number) => {
      if (r.id === selectedRenderer) {
        const baseProps = r.baseProps.map(prop => {
          if (prop.id === editProperty.id) {
            return editProperty
          }
          return prop
        })
        const additionalProps = r.additionalProps.map(prop => {
          if (prop.id === editProperty.id) {
            return editProperty
          }
          return prop
        })
        const cloneLocalChannel = cloneDeep(localChannel)
        cloneLocalChannel.renderers[idx].baseProps = baseProps
        cloneLocalChannel.renderers[idx].additionalProps = additionalProps
        setLocalChannel(cloneLocalChannel)
      }
    })
    setEditProperty(undefined)
  }

  const onLocalChange = useCallback((key: string, value: string) => {
    const cloneChannel = cloneDeep(localChannel)
    set(cloneChannel, key, value)
    setLocalChannel(cloneChannel)
  }, [])

  const selectRender = useCallback((rendererId: string) => setSelectedRender(rendererId), [localChannel])

  const removeRender = useCallback((e: any, renderer: string) => {
    const cloneChannels = cloneDeep(localChannel)
    const filterRender = cloneChannels.renderers.filter(r => r.id !== renderer)
    set(cloneChannels, 'renderers', filterRender)
    setLocalChannel(cloneChannels)
    if (cloneChannels.renderers.length) {
      setSelectedRender(cloneChannels.renderers[0].id)
    } else {
      setSelectedRender('')
    }
    e.stopPropagation()
  }, [localChannel])

  const onAddNewRenderer = useCallback((rendererId: string) => {
    const newRenderer: BaseRenderer = {
      id: new Date().getTime().toString(),
      type: rendererId,
      baseProps: [],
      additionalProps: []
    }
    const cloneChannel = cloneDeep(localChannel)
    cloneChannel.renderers.push(newRenderer)
    setLocalChannel(cloneChannel)
  }, [localChannel])

  const onAddNewProp = useCallback((value: any) => {
    localChannel.renderers.some((r: BaseRenderer, idx: number) => {
      if (r.id === selectedRenderer) {
        const cloneLocalChannel = cloneDeep(localChannel)
        const newProperty: PropertyType = {
          id: new Date().getTime().toString(),
          choices: [],
          label: 'New Property',
          type: value,
          icon: 'N/A',
          editable: true,
          description: 'Property description'
        }
        cloneLocalChannel.renderers[idx].additionalProps.push(newProperty)
        setLocalChannel(cloneLocalChannel)
        return true
      }
      return false
    })
  }, [localChannel, selectedRenderer])

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
                return <SimpleSelect key={idx} title="Type" options={[PROPERTY_STRING, PROPERTY_NUMBER, PROPERTY_ENUM]} labelWidth="90px" value={get(editProperty, key, '')} onChange={(e) => onEditPropertyChange(key, e.target.value)} />
              case 'editable':
                return <Box key={idx}>
                  <FormControlLabel
                    style={{ marginLeft: '0' }}
                    control={<Checkbox checked={editProperty[key]} onChange={(e) => onEditPropertyChange(key, e.target.checked)}/>}
                    label={<span style={{ fontSize: '14px', minWidth: '80px', display: 'block' }}>Editable</span>}
                    labelPlacement="start"
                  />
                </Box>
              case 'icon':
                return <Box key={idx}>
                  <FormControlLabel
                    style={{ marginLeft: '0' }}
                    control={<FontAwesomeIcon icon={faIcons} size='2x'/>}
                    label={<span style={{ minWidth: '90px', display: 'block' }}>Icon</span>}
                    labelPlacement="start"
                  />
                </Box>
              case 'id':
              case 'choices':
                return <></>
              default:
                return <Box key={idx} className={styles.editPropField}>
                  <InputLabel variant="standard">{ capitalize(key)}</InputLabel>
                  <TextField fullWidth value={editProperty[key]} onChange={(e) => onEditPropertyChange(key, e.target.value)}/>
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
                  <span>{renderer.type.replace('Renderer', '')}</span>
                  <FontAwesomeIcon icon={faTimesCircle} onClick={(e) => removeRender(e, renderer.id)} />
                </ListItem>
              ))}
            </List>
            <AddButton options={RendererOpts} onChange={onAddNewRenderer}/>
          </Box>
          <Box sx={{ width: 'calc(100% - 180px)' }}>
            <span className={styles.itemTitle}>Renderer specific</span>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={<span style={{ fontSize: '14px' }}>Cluster markers</span>}
              labelPlacement="start"
            />
            <span className={styles.itemTitle}>Additional Properties</span>
            <SimpleTable columns={AdditionalPropcolumns} data={properties} onEdit={setEditProperty} onRemove={removePropRow} />
            <AddButton options={AddPropOpts} onChange={onAddNewProp}/>
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
