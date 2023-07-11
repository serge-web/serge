/* Import Components */
import { faAtom, faCogs, faFileAlt, faList, faRuler, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuItem } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER } from 'src/config'
import { AttributeType, AttributeTypes, EnumAttributeType, NumberAttributeType, PlatformType, PlatformTypeData, State } from 'src/custom-types'
import cx from 'classnames'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import uniqid from 'uniqid'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import FormGroup from '../../atoms/form-group-shadow'
import TextInput from '../../atoms/text-input'
import EditableList, { Item } from '../../molecules/editable-list'
import IconUploader from '../../molecules/icon-uploader'
import MoreInfo from '../../molecules/more-info'
import SortableList, { Item as SortableListItem } from '../../molecules/sortable-list'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes from './types/props'

const MobileSwitch = withStyles({
  switchBase: {
    color: '#FFFFFF',
    '&$checked': {
      color: '#1A394D'
    },
    '&$checked + $track': {
      backgroundColor: '#1A394D'
    }
  },
  checked: {},
  track: {}
})(Switch)

const useStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none'
    },
    '&&:after': {
      borderBottom: 'none'
    }
  },
  units: {
    width: '80px',
    marginLeft: 10
  },
  defaultValue: {
    width: '80px'
  },
  format: {
    width: '80px'
  },
  description: {
    width: '280px'
  },
  choices: {
    width: '160px'
  }
})

/* Render component */
export const SettingPlatformTypes: React.FC<PropTypes> = ({ platformType, onChange, onSave, onDelete, onDuplicate, iconUploadUrl }) => {
  const { description, choices, format, underline, units, defaultValue } = useStyles()
  const newPlatformType: PlatformType = {
    dirty: false,
    name: 'Platform Mock',
    selectedType: '',
    platformTypes: []
  }

  const initialPlatformType: PlatformType = platformType || newPlatformType
  const [localPlatformType, setLocalPlatformType] = useState<PlatformType>(initialPlatformType)
  const [selectedItem, setSelectedItem] = useState<number>(-1)
  const [isOpen, setOpenSpeedModal] = useState<boolean>(false)
  const [previousItem, setPreviousItem] = useState<Item | null>()
  const speedItemElmRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (platformType) {
      setLocalPlatformType(platformType)
      // if previoutItem has value but could not be found in the `localPlatformType.platformTypes` mean it has been deleted
      // then we should set the selected index to -1
      if (previousItem) {
        const preIdx = localPlatformType.platformTypes.findIndex(item => item.name === previousItem.name)
        if (preIdx === -1) {
          setSelectedItem(preIdx)
          setPreviousItem(null)
        }
      }
    }
  }, [platformType])

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(localPlatformType.platformTypes.findIndex(item => item === _item))
  }

  const handleDelete = (item: Item): void => {
    setPreviousItem(item)
    onDelete && onDelete(item as PlatformType)
  }

  const handleDuplicate = (item: Item): void => {
    onDuplicate && onDuplicate(item as PlatformType)
  }

  const handleChangePlatformTypes = (nextPlatformTypes: Array<PlatformTypeData>): void => {
    const updates = {
      ...localPlatformType,
      platformTypes: nextPlatformTypes
    }
    onChange(updates)
    setLocalPlatformType(updates)
  }

  const handleChangePlatformTypeData = (data: PlatformTypeData, key: number): void => {
    const copyTypes: Array<PlatformTypeData> = [...localPlatformType.platformTypes]
    copyTypes[key] = data
    handleChangePlatformTypes(copyTypes)
  }

  const handleChangePlayerEditable = (item: AttributeType, key: number): void => {
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]
    if (!data.attributeTypes) { return }
    const aType = item.attrType
    const myAttrs = data.attributeTypes.filter((attr) => attr.attrType === aType)
    myAttrs[key].editableByPlayer = !item.editableByPlayer
    const newAttributes: AttributeTypes = [...data.attributeTypes]
    handleChangePlatformTypeData({ ...data, attributeTypes: newAttributes }, selectedItem)
  }

  const renderNumberAttributesSection = (item: SortableListItem, key: number): React.ReactNode => {
    const attrType = item as NumberAttributeType
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]

    const onFieldChange = (field: 'units' | 'format' | 'description' | 'defaultValue', value: string): void => {
      if (!data.attributeTypes) { return }
      const myList = data.attributeTypes.filter((attr: AttributeType) => attr.attrType === ATTRIBUTE_TYPE_NUMBER)
      myList[key][field] = value as any
      handleChangePlatformTypeData(data, selectedItem)
    }
    return (
      <div className={styles.mobile}>
        <MobileSwitch size='medium' checked={attrType.editableByPlayer} onChange={(): void => { handleChangePlayerEditable(attrType, key) }} />
        <TextField placeholder='description' className={description} InputProps={{ className: underline }} value={attrType.description || ''} onChange={(e): void => onFieldChange('description', e.target.value)} />
        <TextField placeholder='units' className={units} inputProps={{ maxLength: 5 }} InputProps={{ className: underline }} value={attrType.units || ''} onChange={(e): void => onFieldChange('units', e.target.value)} />
        <TextField placeholder='value' className={defaultValue} InputProps={{ className: underline }} value={attrType.defaultValue || '0'} onChange={(e): void => onFieldChange('defaultValue', e.target.value)} />
        <TextField placeholder='format' className={format} inputProps={{ maxLength: 5 }} InputProps={{ className: underline }} value={attrType.format || ''} onChange={(e): void => onFieldChange('format', e.target.value)} />
      </div>
    )
  }

  const renderEnumAttributesSection = (item: SortableListItem, key: number): React.ReactNode => {
    const enumAttr = item as EnumAttributeType
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]

    const onFieldChange = (field: 'values' | 'description' | 'defaultValue', value: string): void => {
      if (!data.attributeTypes) { return }
      const myList = data.attributeTypes.filter((attr: AttributeType) => attr.attrType === ATTRIBUTE_TYPE_ENUM)
      if (field === 'values') {
        const values = value.split(',')
        // remove whitespace
        const trimmedValues = values.map((item: string) => item.trim())
        myList[key][field] = trimmedValues
      } else {
        myList[key][field] = value as any
      }
      handleChangePlatformTypeData(data, selectedItem)
    }

    const selectHandler = (event: any, key: number): void => {
      if (!data.attributeTypes) { return }
      // retrieve the new value
      const newValue: string = event.target && event.target.value
      // get the relevant items
      const myList = data.attributeTypes.filter((attr: AttributeType) => attr.attrType === ATTRIBUTE_TYPE_ENUM)
      // store the value
      myList[key].defaultValue = newValue
      handleChangePlatformTypeData(data, selectedItem)
    }

    return (
      <div className={styles.mobile}>
        <MobileSwitch size='medium' checked={enumAttr.editableByPlayer} onChange={(): void => { handleChangePlayerEditable(enumAttr, key) }} />
        <TextField placeholder='description' className={description} InputProps={{ className: underline }} value={enumAttr.description || ''} onChange={(e): void => onFieldChange('description', e.target.value)} />
        <TextField placeholder='val1, val2' className={choices} inputProps={{ }} InputProps={{ className: underline }} value={enumAttr.values} onChange={(e): void => onFieldChange('values', e.target.value)} />
        <Select
          value={(enumAttr.defaultValue && enumAttr.values.includes(enumAttr.defaultValue) && enumAttr.defaultValue) || (enumAttr.values.length > 0 && enumAttr.values[0]) || ''}
          disabled={false}
          onChange={(data): void => { selectHandler(data, key) }}
        >
          {enumAttr.values.map((s: string, index: number) => (
            <MenuItem key={index} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </div>
    )
  }

  const handleChangeMobile = (item: State, key: number): void => {
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]
    const newStates: Array<State> = [...data.states]
    newStates[key].mobile = !item.mobile
    handleChangePlatformTypeData({ ...data, states: newStates }, selectedItem)
  }

  const renderStatesMobileSection = (item: SortableListItem, key: number): React.ReactNode => {
    const stateItem = item as State
    return (
      <div className={styles.mobile}>
        {key === 0 && <div title='Asset is mobile when in this state' className={styles['mobile-title']}><MoreInfo description='Asset is mobile in this state, and movement can be planned by players'>Mobile</MoreInfo></div>}
        <MobileSwitch size='small' checked={stateItem.mobile} onChange={(): void => { handleChangeMobile(stateItem, key) }} />
      </div>
    )
  }

  const renderContent = (): React.ReactNode => {
    if (!localPlatformType.platformTypes[selectedItem]) return null
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]
    const handleChangeName = (name: string): void => {
      handleChangePlatformTypeData({ ...data, name }, selectedItem)
    }
    const handleChangeTravelMode = (e: React.ChangeEvent<HTMLInputElement>): void => {
      handleChangePlatformTypeData({ ...data, travelMode: e.target.value as any }, selectedItem)
    }
    const handleChangeTurningCircle = (event: ChangeEvent<HTMLInputElement>): void => {
      handleChangePlatformTypeData({ ...data, turningCircle: parseInt(event.target.value) }, selectedItem)
    }
    const handleChangeConditions = (conditions: Array<SortableListItem>): void => {
      handleChangePlatformTypeData({ ...data, conditions: conditions as Array<string> }, selectedItem)
    }
    const handleChangeStates = (states: Array<SortableListItem>): void => {
      handleChangePlatformTypeData({ ...data, states: states as Array<State> }, selectedItem)
    }
    const handleChangeSpeeds = (speedKts: Array<SortableListItem>): void => {
      handleChangePlatformTypeData({ ...data, speedKts: speedKts as Array<number> }, selectedItem)
    }
    const handleChangeAttributes = (attributeTypes: Array<SortableListItem>): void => {
      // combine the two sets of attributes
      if (attributeTypes.length) {
        const asAttr = attributeTypes as AttributeTypes
        // find out whihc tyep of attribute this is
        const aType = asAttr[0].attrType
        // get the other attributes
        const otherAttributes = data.attributeTypes ? data.attributeTypes.filter((attr) => attr.attrType !== aType) : []
        // combine new attributes with existing ones
        const newList = otherAttributes.concat(asAttr)
        handleChangePlatformTypeData({ ...data, attributeTypes: newList as AttributeTypes }, selectedItem)
      }
    }
    const handleChangeIcon = (icon: string): void => {
      handleChangePlatformTypeData({ ...data, icon }, selectedItem)
    }

    const handleCreateConditions = (): void => {
      const conditions: Array<string> = [...data.conditions, 'New Condition']
      handleChangePlatformTypeData({ ...data, conditions }, selectedItem)
    }

    const handleCreateStates = (): void => {
      const states: Array<State> = [...data.states, {
        name: 'New State',
        mobile: false
      }]
      handleChangePlatformTypeData({ ...data, states }, selectedItem)
    }

    const handleCreateAttributes = (aType: typeof ATTRIBUTE_TYPE_NUMBER | typeof ATTRIBUTE_TYPE_ENUM): void => {
      const baseData = data.attributeTypes || []
      const genAttr = (aType: typeof ATTRIBUTE_TYPE_NUMBER | typeof ATTRIBUTE_TYPE_ENUM): AttributeType => {
        switch (aType) {
          case ATTRIBUTE_TYPE_NUMBER:
            return {
              name: 'New number',
              attrType: ATTRIBUTE_TYPE_NUMBER,
              attrId: 'attr' + uniqid.time()
            }
          case ATTRIBUTE_TYPE_ENUM:
            return {
              name: 'New enum',
              attrType: ATTRIBUTE_TYPE_ENUM,
              attrId: 'attr' + uniqid.time(),
              values: []
            }
        }
      }
      const newA = genAttr(aType)
      const attributeTypes: AttributeTypes = [...baseData, newA]
      handleChangePlatformTypeData({ ...data, attributeTypes }, selectedItem)
    }

    const toggleSpeedModal = (): void => {
      setOpenSpeedModal(!isOpen)
    }

    const renderSpeedDataModal = (): React.ReactNode => {
      const addSpeed = (): void => {
        if (data.speedKts) {
          const speedKts: Array<number> = [...data.speedKts, Math.max.apply(null, [0, ...data.speedKts]) + 10]
          handleChangePlatformTypeData({ ...data, speedKts }, selectedItem)
        } else {
          console.warn('Did not expect to receive new speeds for platform without speeds')
        }
        setTimeout(() => {
          speedItemElmRef && speedItemElmRef.current && speedItemElmRef.current.scrollIntoView()
        }, 100)
      }

      const items = data.speedKts ? data.speedKts : []
      return <>
        <div className={styles.speedmodalcontent}>
          <SortableList
            required
            remove={true}
            sortable='auto'
            items={items}
            onChange={handleChangeSpeeds}
            disableButtonAdd
            ref={speedItemElmRef}
          />
        </div>
        <div className={styles.button}>
          <button onClick={addSpeed}>Add Speed</button>
        </div>
      </>
    }

    const handleSave = (): void => {
      // creat a new platformType object
      const saveObject: PlatformType = {
        ...localPlatformType,
        // map existing to be sure all items have unique names, if not add a number suffix
        platformTypes: localPlatformType.platformTypes.map((platform, key): PlatformTypeData => {
          platform.name = createPlatformName(1, platform.name, key)
          return platform
        })
      }
      // update localPlatformType and call onSave
      handleChangePlatformTypes(saveObject.platformTypes)
      if (onSave) onSave(saveObject)
    }

    return (
      <div key={selectedItem}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TextInput
              customColor='transparent'
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeName(target.value)
              }}
            />
          </div>
          <div className={styles.col}>
            <IconUploader classname='main' iconUploadUrl={iconUploadUrl} limit={20000} icon={data.icon} onChange={handleChangeIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.uniqid}>Fixed id:{data.uniqid}</div>
          <div className={styles.actions}>
            <Button
              color='primary'
              onClick={handleSave}
              data-qa-type='save'
            >
              Save Platform-Type
            </Button>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder='Travel Mode' description='Type of terrain this platform type can travel over.'>
              <FormControl component='fieldset'>
                <RadioGroup row aria-label='position' name='position' value={data.travelMode} onChange={handleChangeTravelMode}>
                  <FormControlLabel value='sea' control={<Radio color='primary' />} label='Sea' />
                  <FormControlLabel value='land' control={<Radio color='primary' />} label='Land' />
                  <FormControlLabel value='air' control={<Radio color='primary' />} label='Air' />
                </RadioGroup>
              </FormControl>
            </FormGroup>
          </div>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder='Turning Circle (optional)' description='If provided then assets will follow turn when changing direction during route planning'>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className={styles.cell}></TableCell>
                    <TableCell className={styles.cell}><FontAwesomeIcon size={'lg'} icon={faRuler} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={styles.cell}><TextField variant="outlined" type='number' value={data.turningCircle} placeholder='Enter Value Here' onChange={handleChangeTurningCircle} /></TableCell>
                    <TableCell className={styles.cell}>m</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </FormGroup>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder='Conditions'>
              <SortableList
                required
                remove={true}
                onChange={handleChangeConditions}
                onCreate={handleCreateConditions}
                items={data.conditions}
                title='Add Condition' />
            </FormGroup>
          </div>
          <div className={cx(styles.col, styles.section)}>
            <div className={styles['states-holder']}>
              <FormGroup placeholder='States'>
                <SortableList
                  required
                  remove={true}
                  onChange={handleChangeStates}
                  onCreate={handleCreateStates}
                  renderItemSection={renderStatesMobileSection}
                  items={data.states}
                  title='Add State' />
              </FormGroup>
            </div>
          </div>
          <div className={cx(styles.col, styles.section)}>
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleSpeedModal}
              shouldCloseOnEsc
              className={styles.modal}
            >
              {renderSpeedDataModal()}
            </Modal>
            {data.speedKts &&
              <FormGroup placeholder='Speed (kts)'>
                <SortableList
                  required
                  sortable='auto'
                  onChange={handleChangeSpeeds}
                  onCreate={toggleSpeedModal}
                  items={data.speedKts}
                  title='Add Speed'
                  remove={false}
                  viewDirection='horizontal'
                />
              </FormGroup>
            }
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder='Attributes'>
              <FormGroup placeholder='Numeric'>
                <div className={styles['attribute-header']}>
                  <div style={{ minWidth: '25%' }}></div>
                  <div style={{ minWidth: 30 }}></div>
                  <div className={styles['number-attribute-header-icon']}>
                    <span><MoreInfo description='If player can edit attribute'><FontAwesomeIcon size={'lg'} icon={faUserCog} /></MoreInfo></span>
                    <span><MoreInfo description='Description of attribute'><FontAwesomeIcon size={'lg'} icon={faFileAlt} /></MoreInfo></span>
                    <span><MoreInfo description='Units for attribute (optional)'><FontAwesomeIcon size={'lg'} icon={faRuler} /></MoreInfo></span>
                    <span><MoreInfo description='Default value of attribute'><FontAwesomeIcon size={'lg'} icon={faAtom} /></MoreInfo></span>
                    <span><MoreInfo description='Number display format (e.g. 0.00, optional)'><FontAwesomeIcon size={'lg'} icon={faCogs} /></MoreInfo></span>
                  </div>
                </div>
                <SortableList
                  required
                  sortable='auto'
                  remove={true}
                  onChange={handleChangeAttributes}
                  onCreate={(): void => handleCreateAttributes(ATTRIBUTE_TYPE_NUMBER)}
                  renderItemSection={renderNumberAttributesSection}
                  items={(data.attributeTypes && data.attributeTypes.filter((attr) => attr.attrType === ATTRIBUTE_TYPE_NUMBER)) || []}
                  title='Add number attribute' />
              </FormGroup>
              <FormGroup placeholder='Enumerated'>
                <div className={styles['attribute-header']}>
                  <div style={{ minWidth: '25%' }}></div>
                  <div style={{ minWidth: 30 }}></div>
                  <div className={styles['enum-attribute-header-icon']}>
                    <span><MoreInfo description='If player can edit attribute'><FontAwesomeIcon size={'lg'} icon={faUserCog} /></MoreInfo></span>
                    <span><MoreInfo description='Description of attribute'><FontAwesomeIcon size={'lg'} icon={faFileAlt} /></MoreInfo></span>
                    <span><MoreInfo description='Possible values for attribute (comma separated)'><FontAwesomeIcon size={'lg'} icon={faList} /></MoreInfo></span>
                    <span><MoreInfo description='Default value of attribute'><FontAwesomeIcon size={'lg'} icon={faAtom} /></MoreInfo></span>
                  </div>
                </div>
                <SortableList
                  required
                  sortable='auto'
                  remove={true}
                  onChange={handleChangeAttributes}
                  onCreate={(): void => handleCreateAttributes(ATTRIBUTE_TYPE_ENUM)}
                  renderItemSection={renderEnumAttributesSection}
                  items={(data.attributeTypes && data.attributeTypes.filter((attr) => attr.attrType === ATTRIBUTE_TYPE_ENUM)) || []}
                  title='Add enum attribute' />
              </FormGroup>
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }
  // Create uniq platform type name
  const createPlatformName = (key = 1, defName = 'New Platform Type', exclude = -1): string => {
    let name: string = defName
    if (key > 1) name += ' ' + key
    if (localPlatformType.platformTypes.find((platform, key) => name === platform.name && key !== exclude)) {
      return createPlatformName(key + 1, defName, exclude)
    }
    return name
  }

  // Create a new empty PlatformTypeData item
  const handleCreatePlatformType = (): void => {
    const newId = uniqid('p')
    localPlatformType.platformTypes.unshift({
      name: createPlatformName(),
      conditions: [],
      speedKts: [],
      states: [],
      icon: '',
      travelMode: 'sea',
      uniqid: newId
    })
    // update localPlatformType and call onSave
    handleChangePlatformTypes(localPlatformType.platformTypes)
    if (onSave) onSave(localPlatformType)
  }

  return (
    <AdminContent>
      <LeftSide>
        <EditableList
          items={localPlatformType.platformTypes}
          onClick={handleSwitch}
          onCreate={handleCreatePlatformType}
          onDelete={handleDelete}
          onDuplicate={handleDuplicate}
          title='Create'
          selectedItem={localPlatformType.platformTypes[selectedItem]?.name}
          filterKey='name'
        />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingPlatformTypes
