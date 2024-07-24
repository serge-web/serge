/* eslint-disable complexity */
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  TextField,
  Tooltip
} from '@material-ui/core'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'
import cx from 'classnames'
import { capitalize, cloneDeep, get, set, unset } from 'lodash'
import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import Confirm from 'src/Components/local/atoms/confirm'
import CustomDialog from 'src/Components/local/atoms/custom-dialog'
import Tabs from 'src/Components/local/atoms/tabs'
import { Option } from 'src/Components/local/molecules/editable-row'
import { BaseRenderer, ForceData, ForcePermissions, MappingPermissions, PROPERTY_ENUM, PROPERTY_NUMBER, PROPERTY_STRING, ParticipantMapping, PropertyType, RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import { ChannelCustom, ChannelMapping } from 'src/custom-types/channel-data'
import { AddButton, AdditionalPropcolumns, ButtonOptions, CoreMappingTabs, EditParticipantColumns, EditParticipantType, ParticipantColumns, PhaseOptions, RendererOptions, SimpleSelect, SimpleTable } from '../helpers/coreMapping'
import styles from '../styles.module.scss'

const RendererOpts: ButtonOptions[] = [
  { id: RENDERER_CORE, label: 'Core' },
  { id: RENDERER_MILSYM, label: 'MilSym' }
]

const AddPropOpts: ButtonOptions[] = [
  { id: PROPERTY_STRING, label: PROPERTY_STRING },
  { id: PROPERTY_NUMBER, label: PROPERTY_NUMBER },
  { id: PROPERTY_ENUM, label: PROPERTY_ENUM }
]

const initialEditParticipant: EditParticipantType = {
  force: '',
  phases: [],
  roles: [],
  renderers: [],
  tableData: [],
  id: '',
  isNew: false
}

type CoreMappingChannelProps = {
  channel: ChannelCustom
  forces: ForceData[]
  onChange: (channel: ChannelCustom) => void
};

const filter = createFilterOptions<Option>()

export const CoreMappingChannel: React.FC<CoreMappingChannelProps> = ({ channel, onChange, forces }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [editProperty, setEditProperty] = useState<PropertyType | undefined>()
  const [selectedRenderer, setSelectedRender] = useState<string>('')
  const [localChannel, setLocalChannel] = useState<ChannelMapping>(channel as unknown as ChannelMapping)
  const [properties, setProperties] = useState<any[]>([])
  const [participants, setParticipants] = useState<any[]>([])
  const [editParticipants, setEditParticipants] = useState<EditParticipantType>(initialEditParticipant)
  const [editInline, setEditInline] = useState<number>(-1)
  const [deletingParticipant, setDeletingParticipant] = useState<any>()
  const [deletingProp, setDeletingProp] = useState<PropertyType>()
  const [deletingRenderer, setDeletingRenderer] = useState<string>('')
  const [rolesOptions, setRoleOptions] = useState<Option[]>([])
  const [choices, setChoices] = useState<string[]>([])
  const [choiceOpts, setChoiceOpts] = useState<Option[]>([])
  const needInitChoicesOpt = useRef<boolean>(true)

  useEffect(() => {
    const channelMapping = channel as unknown as ChannelMapping
    if (channel.uniqid !== localChannel.uniqid) {
      setLocalChannel(channelMapping)
    }
    if (channelMapping.renderers.length) {
      if (!selectedRenderer) {
        setSelectedRender(get(channel, 'renderers[0].id', ''))
      }
    } else {
      setSelectedRender('')
    }
  }, [channel])

  useEffect(() => {
    if (!editParticipants.id) {
      setEditInline(-1)
    }
  }, [editParticipants])

  useEffect(() => {
    if (activeTab === 1 && selectedRenderer) {
      const newProperties: any[] = []
      localChannel.renderers.some((r: BaseRenderer) => {
        if (r.id === selectedRenderer) {
          (r.baseProps || []).forEach(prop => {
            newProperties.push({
              type: prop.type,
              label: prop.label,
              description: prop.description,
              playerEditable: prop.playerEditable || false,
              id: prop.id,
              others: getOthersData(prop)
            })
          });
          (r.additionalProps || []).forEach(prop => {
            newProperties.push({
              type: prop.type,
              label: prop.label,
              description: prop.description,
              playerEditable: prop.playerEditable || false,
              id: prop.id,
              others: getOthersData(prop)
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

    const participantsData: any[] = []
    localChannel.participants.forEach(p => {
      participantsData.push({
        subject: getForceName(p.forceUniqid),
        type: p.forRenderer,
        permission: getPermission(p.permissionTo),
        applied: p.phases,
        id: p.subscriptionId
      })
    })
    setParticipants(participantsData)
  }, [activeTab, selectedRenderer, localChannel])

  useEffect(() => {
    onChange(localChannel as unknown as ChannelCustom)
  }, [localChannel])

  const getForceName = (forceId: string) => {
    const force = forces.find(f => f.uniqid === forceId)
    return force ? force.name : ''
  }

  const getOthersData = (prop: PropertyType) => {
    if (prop.type === 'NumberProperty') {
      return `Format: ${prop['format'] || 1}`
    } else if (prop.type === 'StringProperty') {
      return `Lines: ${prop['lines'] || 'default'}`
    } else if (prop.type === 'EnumProperty') {
      return `Choices: ${prop.choices.join(', ')}`
    }
    return ''
  }

  const shortPermissionName = (permission: string[]) => {
    return permission.map(p => {
      if (p === MappingPermissions.ViewSpatial) {
        return 'VS'
      }
      if (p === MappingPermissions.ViewProps) {
        return 'VP'
      }
      if (p === MappingPermissions.MoveResize) {
        return 'MR'
      }
      if (p === MappingPermissions.Exists) {
        return 'E'
      }
      if (p === MappingPermissions.EditOwnProps) {
        return 'EOP'
      }
      if (p === MappingPermissions.EditAllProps) {
        return 'EAP'
      }
      if (p === MappingPermissions.AddRemove) {
        return 'AR'
      }
      return ''
    }).join(' ')
  }

  const getPermission = (permissionTo: any) => {
    const keys = Object.keys(permissionTo || {})
    return keys.map(key => {
      return `${getForceName(key)}: ${shortPermissionName(permissionTo[key])}`
    })
  }

  const onTabChange = (_: string, index: number) => {
    setActiveTab(index)
  }

  const onRemoveParticipants = () => {
    if (!deletingParticipant) {
      return
    }
    const cloneChannel = cloneDeep(localChannel)
    cloneChannel.participants = cloneChannel.participants.filter(p => p.subscriptionId !== deletingParticipant.id)
    setLocalChannel(cloneChannel)
    setDeletingParticipant(undefined)
  }

  const getRolesForParticipant = (participant: ParticipantMapping): Option[] => {
    const force = forces.find(f => f.uniqid === participant.forceUniqid)
    if (force) {
      return (force.roles || []).map(r => ({ name: r.name, uniqid: r.roleId }))
    }
    return []
  }

  const onEditParticipant = (row: any) => {
    const editParticipant = localChannel.participants.find(p => p.subscriptionId === row.id)
    if (editParticipant) {
      const rolesOpts = getRolesForParticipant(editParticipant)
      setRoleOptions(rolesOpts)
      const editingParticipant: EditParticipantType = {
        tableData: [],
        force: editParticipant.forceUniqid || 'N/A',
        roles: editParticipant.roles || [],
        phases: editParticipant.phases || [],
        renderers: editParticipant.forRenderer || [],
        id: editParticipant.subscriptionId,
        isNew: false
      }
      const permissionTo = editParticipant.permissionTo || {}
      Object.keys(permissionTo).forEach((key, idx) => {
        editingParticipant.tableData.push({
          id: idx,
          permissionOnForce: key,
          viewSpatial: permissionTo[key].includes(MappingPermissions.ViewSpatial),
          viewProp: permissionTo[key].includes(MappingPermissions.ViewProps),
          editRemoveFeature: permissionTo[key].includes(MappingPermissions.AddRemove),
          moveResizeFeature: permissionTo[key].includes(MappingPermissions.MoveResize),
          editProp: permissionTo[key].includes(MappingPermissions.EditOwnProps)
        })
      })
      setEditParticipants(editingParticipant)
    } else {
      setRoleOptions([])
      const editingParticipant: EditParticipantType = {
        tableData: [],
        force: '',
        roles: [],
        phases: [],
        renderers: [],
        id: Math.random().toString(36).substring(8),
        isNew: true
      }
      setEditParticipants(editingParticipant)
    }
  }

  const onCloseEditParticipant = () => setEditParticipants(initialEditParticipant)

  const onSaveParticipant = () => {
    const cloneChannel = cloneDeep(localChannel)
    if (editParticipants.isNew) {
      const permissionTos: ForcePermissions = {}
      editParticipants.tableData.forEach(row => {
        const permissionTo = []
        if (row.editProp) {
          permissionTo.push(MappingPermissions.EditOwnProps)
        }
        if (row.editRemoveFeature) {
          permissionTo.push(MappingPermissions.AddRemove)
        }
        if (row.moveResizeFeature) {
          permissionTo.push(MappingPermissions.MoveResize)
        }
        if (row.viewProp) {
          permissionTo.push(MappingPermissions.ViewProps)
        }
        if (row.viewSpatial) {
          permissionTo.push(MappingPermissions.ViewSpatial)
        }
        permissionTos[row.permissionOnForce] = permissionTo
      })
      cloneChannel.participants.push({
        forceUniqid: editParticipants.force,
        forRenderer: editParticipants.renderers,
        phases: editParticipants.phases,
        subscriptionId: editParticipants.id,
        roles: editParticipants.roles,
        pType: 'ParticipantMapping',
        permissionTo: permissionTos
      })
    } else {
      cloneChannel.participants = cloneChannel.participants.map(p => {
        if (p.subscriptionId === editParticipants.id) {
          p.forRenderer = editParticipants.renderers
          p.phases = editParticipants.phases
          p.roles = editParticipants.roles
          p.permissionTo = {}
          editParticipants.tableData.forEach(row => {
            const permissionTo = []
            if (row.editProp) {
              permissionTo.push(MappingPermissions.EditOwnProps)
            }
            if (row.editRemoveFeature) {
              permissionTo.push(MappingPermissions.AddRemove)
            }
            if (row.moveResizeFeature) {
              permissionTo.push(MappingPermissions.MoveResize)
            }
            if (row.viewProp) {
              permissionTo.push(MappingPermissions.ViewProps)
            }
            if (row.viewSpatial) {
              permissionTo.push(MappingPermissions.ViewSpatial)
            }
            p.permissionTo[row.permissionOnForce] = permissionTo
          })
        }
        return p
      })
    }
    setLocalChannel(cloneChannel)
    setEditParticipants(initialEditParticipant)
  }

  const onCloseProperty = () => {
    setEditProperty(undefined)
    setChoiceOpts([])
    setChoices([])
    needInitChoicesOpt.current = true
  }

  const onSaveProperty = () => {
    if (!editProperty) {
      return
    }
    localChannel.renderers.forEach((r: BaseRenderer, idx: number) => {
      if (r.id === selectedRenderer) {
        const baseProps = r.baseProps.map(prop => {
          if (prop.id === editProperty.id) {
            return { ...prop, ...editProperty }
          }
          return prop
        })
        const additionalProps = r.additionalProps.map(prop => {
          if (prop.id === editProperty.id) {
            return { ...prop, ...editProperty }
          }
          return prop
        })
        const cloneLocalChannel = cloneDeep(localChannel)
        cloneLocalChannel.renderers[idx].baseProps = baseProps
        cloneLocalChannel.renderers[idx].additionalProps = additionalProps
        setLocalChannel(cloneLocalChannel)
      }
    })
    onCloseProperty()
  }

  const onLocalChange = useCallback((key: string, value: string | number) => {
    const cloneChannel = cloneDeep(localChannel)
    set(cloneChannel, key, value)
    setLocalChannel(cloneChannel)
  }, [localChannel])

  const selectRender = useCallback((rendererId: string) => setSelectedRender(rendererId), [localChannel])

  const handleRemoveRenderer = () => {
    const cloneChannels = cloneDeep(localChannel)
    const filterRender = cloneChannels.renderers.filter(r => r.id !== deletingRenderer)
    set(cloneChannels, 'renderers', filterRender)
    setLocalChannel(cloneChannels)
    if (cloneChannels.renderers.length) {
      setSelectedRender(cloneChannels.renderers[0].id)
    } else {
      setSelectedRender('')
    }
    setDeletingRenderer('')
  }
  const removeRender = useCallback((e: any, renderer: string) => {
    setDeletingRenderer(renderer)
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
          playerEditable: true,
          description: 'Property description'
        }
        cloneLocalChannel.renderers[idx].additionalProps.push(newProperty)
        setLocalChannel(cloneLocalChannel)
        return true
      }
      return false
    })
  }, [localChannel, selectedRenderer])

  const removeRowPermission = (row: any) => {
    const cloneChannel = cloneDeep(localChannel)
    cloneChannel.participants = cloneChannel.participants.map(p => {
      if (p.subscriptionId === editParticipants.id) {
        editParticipants.tableData = editParticipants.tableData.filter(r => r.id !== row.id)
        setEditParticipants(cloneDeep(editParticipants))
      }
      return p
    })
    setLocalChannel(cloneChannel)
  }

  const onRowDataChange = (row: any) => {
    const cloneEditParticipant = cloneDeep(editParticipants)
    cloneEditParticipant.tableData[row.id] = {
      id: row.id,
      permissionOnForce: row.permissionOnForce,
      viewSpatial: row.viewSpatial,
      viewProp: row.viewProp,
      editRemoveFeature: row.editRemoveFeature,
      moveResizeFeature: row.moveResizeFeature,
      editProp: row.editProp
    }
    setEditParticipants(cloneEditParticipant)
  }

  const removePropRow = () => {
    const renderer: BaseRenderer = localChannel.renderers.find(r => r.id === selectedRenderer)
    if (renderer) {
      renderer.baseProps = renderer.baseProps.filter(prop => prop.id !== deletingProp?.id)
      renderer.additionalProps = renderer.additionalProps.filter(prop => prop.id !== deletingProp?.id)
      setLocalChannel(cloneDeep(localChannel))
      setDeletingProp(undefined)
    }
  }

  const onEditPropertyChange = (path: string, value: any) => {
    if (!editProperty) {
      return
    }
    const cloneRow = cloneDeep(editProperty)
    if (path === 'type' && value !== 'EnumProperty') {
      unset(cloneRow, 'lines')
      unset(cloneRow, 'format')
      setChoices([])
    }
    set(cloneRow, path, value)
    setEditProperty(cloneRow)
  }

  const onEditParticipantChange = (path: string, value: string[] | string) => {
    if (path === 'force') {
      if (!editParticipants.isNew) {
        const row = participants.find(p => p.subject === value)
        if (row) {
          onEditParticipant(row)
        }
        return
      } else {
        const editParticipant = localChannel.participants.find(p => p.forceUniqid === value)
        if (editParticipant) {
          alert(`This force "${getForceName(editParticipant.forceUniqid)}" already exists, please choose another one`)
          return
        } else {
          const force = forces.find(f => f.uniqid === value)
          if (force) {
            const roleOpts = force.roles.map(r => ({ name: r.name, uniqid: r.roleId }))
            setRoleOptions(roleOpts)
          }
        }
      }
    }
    const cloneParticipant = cloneDeep(editParticipants)
    set(cloneParticipant, path, value)
    setEditParticipants(cloneParticipant)
  }

  const addParticipantPermission = () => {
    const cloneChannel = cloneDeep(localChannel)
    if (editParticipants.isNew) {
      editParticipants.tableData.push({
        id: editParticipants.tableData.length,
        permissionOnForce: 'N/A',
        viewSpatial: false,
        viewProp: false,
        editRemoveFeature: false,
        moveResizeFeature: false,
        editProp: false
      })
      setEditParticipants(cloneDeep(editParticipants))
    } else {
      cloneChannel.participants = cloneChannel.participants.map(p => {
        if (p.subscriptionId === editParticipants.id) {
          editParticipants.tableData.push({
            id: editParticipants.tableData.length,
            permissionOnForce: 'N/A',
            viewSpatial: false,
            viewProp: false,
            editRemoveFeature: false,
            moveResizeFeature: false,
            editProp: false
          })
          if (!p.permissionTo) {
            p.permissionTo = {}
          }
          setEditParticipants(cloneDeep(editParticipants))
        }
        return p
      })
    }
    setLocalChannel(cloneChannel)
  }

  const getOtherFieldLabel = useCallback((prop: PropertyType) => {
    if (prop.type === 'NumberProperty') {
      return 'Format'
    } else if (prop.type === 'StringProperty') {
      return 'Lines'
    }
    return 'Choices'
  }, [])

  const getOthersFieldValue = useCallback((rawValue: string) => {
    if (rawValue.includes(':')) {
      return rawValue.split(':')[1].trim()
    }
    return rawValue
  }, [])

  const renderOtherField = useCallback((editProperty: PropertyType, key: string, idx: number) => {
    const valueType = editProperty.type === 'NumberProperty' ? 'number' : editProperty.type === 'EnumProperty' ? 'select' : 'text'
    return <Box key={idx} className={styles.editPropField}>
      <InputLabel variant="standard">{getOtherFieldLabel(editProperty)}</InputLabel>
      {valueType === 'select'
        ? <Autocomplete
          value={choices}
          fullWidth
          onChange={(_, newValue: (string | Option)[]): void => {
            const finalVal = newValue.map(item => {
              if (typeof item === 'string') {
                return item
              } else {
                return item.uniqid
              }
            })
            setChoices(finalVal)
            onEditPropertyChange('choices', finalVal)
            setChoiceOpts(finalVal.map(v => ({ name: v, uniqid: v })))
          }}
          multiple
          options={choiceOpts}
          freeSolo
          disableClearable
          renderTags={(vals: any, getTagProps): any =>
            vals.map((val: string, index: number) => (
              <Chip 
                key={index}
                label={<Tooltip title={val} placement="top"><span>{val}</span></Tooltip>}
                size="small"
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params): any => (
            <TextField
              {...params}
              label="Option"
            />
          )}
          filterOptions={(opts, params): any => {
            const filtered = filter(opts, params)
            const { inputValue } = params
            const isExisting = opts.some((option) => inputValue === option.uniqid)
            if (inputValue !== '' && !isExisting) {
              filtered.push({
                uniqid: inputValue,
                name: `Add "${inputValue}"`
              })
            }
            return filtered.filter(item => !choices.includes(item.name))
          }}
          getOptionLabel={(option: Option): any => {
            return (option && option.name) || ''
          }}
        />
        : <TextField fullWidth type={valueType} value={getOthersFieldValue(editProperty[key])} autoFocus onChange={(e) => onEditPropertyChange(editProperty.type === 'NumberProperty' ? 'format' : 'lines', e.target.value)} />}
    </Box>
  }, [editProperty, choices, choiceOpts])

  return (
    <Box className={styles.channelTabContainer}>
      <Confirm
        isOpen={!!deletingParticipant}
        message='Are you sure that you want to delete this participant?'
        onCancel={() => setDeletingParticipant(undefined)}
        onConfirm={onRemoveParticipants}
        modalStyle={{ content: { width: '40%' } }}
      />
      <Confirm
        isOpen={!!deletingProp}
        message='Are you sure that you want to delete this property?'
        onCancel={() => setDeletingProp(undefined)}
        onConfirm={removePropRow}
        modalStyle={{ content: { width: '40%' } }}
      />
      <Confirm
        isOpen={!!deletingRenderer}
        message='Are you sure that you want to delete this renderer?'
        onCancel={() => setDeletingRenderer('')}
        onConfirm={handleRemoveRenderer}
        modalStyle={{ content: { width: '40%' } }}
      />
      <CustomDialog
        modalStyle={{ content: { width: '60%' } }}
        isOpen={!!editParticipants.id}
        header={'Add/Edit Participant'}
        cancelBtnText="Cancel"
        saveBtnText="OK"
        onClose={onCloseEditParticipant}
        onSave={onSaveParticipant}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '49%' }}>
              <SimpleSelect title="Force" disabled={!editParticipants.isNew} value={editParticipants.force} options={forces.map(f => ({ name: f.name, uniqid: f.uniqid }))} labelWidth="80px" onChange={(e) => onEditParticipantChange('force', e.target.value as string)} />
              <SimpleSelect title="Role" value={editParticipants.roles} options={rolesOptions} labelWidth="80px" onChange={(e) => onEditParticipantChange('roles', e.target.value as string[])} multiple/>
            </Box>
            <Box sx={{ width: '49%' }}>
              <SimpleSelect title="Renderer" value={editParticipants.renderers} options={RendererOptions} labelWidth="80px" onChange={(e) => onEditParticipantChange('renderers', e.target.value as string[])} multiple/>
              <SimpleSelect title="For phase" value={editParticipants.phases} options={PhaseOptions} labelWidth="80px" onChange={(e) => onEditParticipantChange('phases', e.target.value as string[])} multiple/>
            </Box>
          </Box>
          <Box>
            <span>Permissions</span>
            <SimpleTable
              columns={EditParticipantColumns}
              data={editParticipants.tableData || []}
              onEdit={r => setEditInline(r.id)}
              onRemove={removeRowPermission}
              editInline={editInline}
              forceNames={forces.map(f => ({ name: f.name, uniqid: f.uniqid }))}
              onChange={onRowDataChange}
            />
          </Box>
          <Button variant='outlined' style={{ marginTop: '5px' }} onClick={addParticipantPermission}>
            <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '10px' }}/>
            Add
          </Button>
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
                return <SimpleSelect key={idx} title="Type" options={[{ name: PROPERTY_STRING, uniqid: PROPERTY_STRING }, { name: PROPERTY_NUMBER, uniqid: PROPERTY_NUMBER }, { name: PROPERTY_ENUM, uniqid: PROPERTY_ENUM }]} labelWidth="90px" value={get(editProperty, key, '')} onChange={(e) => onEditPropertyChange(key, e.target.value)} />
              case 'playerEditable':
                return <Box key={idx}>
                  <FormControlLabel
                    style={{ marginLeft: '0' }}
                    control={<Checkbox checked={editProperty[key]} onChange={(e) => onEditPropertyChange(key, e.target.checked)}/>}
                    label={<span style={{ fontSize: '14px', minWidth: '80px', display: 'block' }}>Editable</span>}
                    labelPlacement="start"
                  />
                </Box>
              // case 'icon':
              //   return <Box key={idx}>
              //     <FormControlLabel
              //       style={{ marginLeft: '0' }}
              //       control={<FontAwesomeIcon icon={faIcons} size='2x'/>}
              //       label={<span style={{ minWidth: '90px', display: 'block' }}>Icon</span>}
              //       labelPlacement="start"
              //     />
              //   </Box>
              case 'icon':
              case 'id':
                return <Fragment key={idx}></Fragment>
              case 'others':
                // render enum options from others value
                if (editProperty.type === 'EnumProperty' && needInitChoicesOpt.current) {
                  needInitChoicesOpt.current = false
                  const others = get(editProperty, 'others', '').split(':')
                  if (others.length > 1) {
                    let choiceValues: any[] = []
                    if (others[1].trim().includes(',')) {
                      choiceValues = others[1].split(',').map(v => v.trim())
                    } else if (others[1].trim().length) {
                      choiceValues = [others[1].trim()]
                    }
                    setChoiceOpts(choiceValues.map(c => ({ name: c, uniqid: c })))
                    setChoices(choiceValues)
                  }
                }
                return (Object.hasOwn(editProperty, 'format') || Object.hasOwn(editProperty, 'lines') || Object.hasOwn(editProperty, 'choices'))
                  ? null
                  : renderOtherField(editProperty, key, idx)
              case 'format':
              case 'lines':
                if (Object.hasOwn(editProperty, 'choices') && editProperty.type !== 'EnumProperty') {
                  const cloneEditProp = cloneDeep(editProperty)
                  unset(cloneEditProp, 'choices')
                  setEditProperty(cloneEditProp)
                }
                return renderOtherField(editProperty, key, idx)
              case 'choices':
                if ((Object.hasOwn(editProperty, 'format') || Object.hasOwn(editProperty, 'lines')) && editProperty.type === 'EnumProperty') {
                  const cloneEditProp = cloneDeep(editProperty)
                  unset(cloneEditProp, 'format')
                  unset(cloneEditProp, 'lines')
                  setEditProperty(cloneEditProp)
                }
                return renderOtherField(editProperty, key, idx)
              default:
                return <Box key={idx} className={styles.editPropField}>
                  <InputLabel variant="standard">{ capitalize(key)}</InputLabel>
                  <TextField fullWidth defaultValue={editProperty[key]} onChange={(e) => onEditPropertyChange(key, e.target.value)}/>
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
          <Box className={styles.mapFieldItem}>
            <InputLabel variant="standard">Max native zoom</InputLabel>
            <TextField type='number' value={localChannel.constraints.tileLayer?.maxNativeZoom || 1} onChange={(e) => onLocalChange('constraints.tileLayer.maxNativeZoom', Math.abs(+e.target.value))}/>
          </Box>
          <Box className={styles.mapFieldItem}>
            <InputLabel variant="standard">Max zoom</InputLabel>
            <TextField type='number' value={localChannel.constraints.maxZoom || 1} onChange={(e) => onLocalChange('constraints.maxZoom', Math.abs(+e.target.value))}/>
          </Box>
          <Box className={styles.mapFieldItem}>
            <InputLabel variant="standard">Min zoom</InputLabel>
            <TextField type='number' value={localChannel.constraints.minZoom || 1} onChange={(e) => onLocalChange('constraints.minZoom', Math.abs(+e.target.value))}/>
          </Box>
        </Box>
      )}
      {activeTab === 1 && (
        <Box className={cx({ [styles.channelTabDetailsContainer]: true, [styles.renderersTab]: true })} >
          <Box>
            <span className={styles.itemTitle}>Renderers</span>
            <List className={styles.renderersList}>
              {localChannel.renderers.length === 0 && <ListItem>No Renderer</ListItem>}
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
            {/* <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={<span style={{ fontSize: '14px' }}>Cluster markers</span>}
              labelPlacement="start"
            /> */}
            <div style={{ marginBottom: '30px' }}></div>
            <span className={styles.itemTitle}>Additional Properties</span>
            <SimpleTable columns={AdditionalPropcolumns} data={properties} onEdit={setEditProperty} onRemove={setDeletingProp} />
            {localChannel.renderers.length > 0 && <AddButton options={AddPropOpts} onChange={onAddNewProp} />}
          </Box>
        </Box>
      )}
      {activeTab === 2 && (
        <Box className={cx({ [styles.channelTabDetailsContainer]: true, [styles.participantsTab]: true })}>
          <SimpleTable columns={ParticipantColumns} data={participants} onEdit={onEditParticipant} onRemove={row => setDeletingParticipant(row)} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <Button variant='outlined' style={{ marginTop: '5px' }} onClick={() => onEditParticipant({ id: -1 })}>
              <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '10px' }}/>
              Add
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default CoreMappingChannel
