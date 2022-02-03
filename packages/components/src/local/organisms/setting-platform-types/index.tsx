import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import uniqid from 'uniqid'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import TextInput from '../../atoms/text-input'
import FormGroup from '../../atoms/form-group-shadow'
import Button from '../../atoms/button'
import IconUploader from '../../molecules/icon-uploader'
import SortableList, { Item as SortableListItem } from '../../molecules/sortable-list'
import EditableList, { Item } from '../../molecules/editable-list'
import { CommodityType, CommodityTypes, PlatformType, PlatformTypeData, State } from '@serge/custom-types'
import { platformTypeNameToKey } from '@serge/helpers'
import { COMMODITY_TYPE_NUMBER } from '@serge/config'

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

/* Render component */
export const SettingPlatformTypes: React.FC<PropTypes> = ({ platformType, onChange, onSave, onDelete, iconUploadUrl }) => {
  const newPlatformType: PlatformType = {
    complete: false,
    dirty: false,
    name: 'Platform Mock',
    selectedType: '',
    platformTypes: []
  }

  const initialPlatformType: PlatformType = platformType || newPlatformType
  const [localPlatformType, setLocalPlatformType] = useState<PlatformType>(initialPlatformType)
  const [selectedItem, setSelectedItem] = useState<number>(-1)

  useEffect(() => {
    if (platformType) {
      setLocalPlatformType(platformType)
    }
  }, [platformType])

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(localPlatformType.platformTypes.findIndex(item => item === _item))
  }

  const handleDelete = (item: Item): void => {
    setSelectedItem(-1)
    onDelete && onDelete(item as PlatformType)
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


  const handleChangeCommodity = (item: CommodityType, key: number): void => {
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]
    const newCommodities: CommodityTypes = data.commodityTypes ? [...data.commodityTypes] : []
    newCommodities[key].editableByPlayer = !item.editableByPlayer
    handleChangePlatformTypeData({ ...data, commodityTypes: newCommodities }, selectedItem)
  }

  const renderCommoditiesSection = (item: SortableListItem, key: number): React.ReactNode => {
    const commType = item as CommodityType
    return (
      <div className={styles.mobile}>
        {key === 0 && <div className={styles['mobile-title']}>Editable by player</div>}
        <MobileSwitch size='small' checked={commType.editableByPlayer} onChange={(): void => { handleChangeCommodity(commType, key) }} />
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
        {key === 0 && <div className={styles['mobile-title']}>Mobile</div>}
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
      handleChangePlatformTypeData({ ...data, travelMode: e.target.value }, selectedItem)
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
    const handleChangeCommodities= (commodityTypes: Array<SortableListItem>): void => {
      handleChangePlatformTypeData({ ...data, commodityTypes: commodityTypes as CommodityTypes}, selectedItem)
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

    const handleCreateCommodities = (): void => {
      const baseData = data.commodityTypes || []
      const commodityTypes: CommodityTypes = [...baseData, {
        name: 'New State',
        commType: COMMODITY_TYPE_NUMBER,
        commId: 'comm' + uniqid.time()
      }]
      handleChangePlatformTypeData({ ...data, commodityTypes }, selectedItem)
    }
    

    const handleCreateSpeeds = (): void => {
      if (data.speedKts) {
        const speedKts: Array<number> = [...data.speedKts, Math.max.apply(null, [0, ...data.speedKts]) + 10]
        handleChangePlatformTypeData({ ...data, speedKts }, selectedItem)
      } else {
        console.warn('Did not expect to receive new speeds for platform without speeds')
      }
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
              customColor="transparent"
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeName(target.value)
              }}
            />
          </div>
          <div className={styles.col}>
            <IconUploader platformType={platformTypeNameToKey(data.name)} iconUploadUrl={iconUploadUrl} limit={20000} icon={data.icon} onChange={handleChangeIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button
              color="primary"
              onClick={handleSave}
              data-qa-type="save"
            >
              Save
            </Button>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Travel Mode">
              <FormControl component="fieldset">
                <RadioGroup row aria-label="position" name="position" value={data.travelMode} onChange={handleChangeTravelMode}>
                  <FormControlLabel value="sea" control={<Radio color="primary" />} label="Sea" />
                  <FormControlLabel value="land" control={<Radio color="primary" />} label="Land" />
                  <FormControlLabel value="air" control={<Radio color="primary" />} label="Air" />
                </RadioGroup>
              </FormControl>
            </FormGroup>
          </div>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Conditions">
              <SortableList
                required
                onChange={handleChangeConditions}
                onCreate={handleCreateConditions}
                items={data.conditions}
                title='Add Condition' />
            </FormGroup>
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={cx(styles.col, styles.section)}>
            <div className={styles['states-holder']}>
              <FormGroup placeholder="States">
                <SortableList
                  required
                  onChange={handleChangeStates}
                  onCreate={handleCreateStates}
                  renderItemSection={renderStatesMobileSection}
                  items={data.states}
                  title='Add State' />
              </FormGroup>
            </div>
          </div>
          <div className={cx(styles.col, styles.section)}>
            { data.speedKts &&
            <FormGroup placeholder="Speed (kts)">
              <SortableList
                required
                sortable='auto'
                onChange={handleChangeSpeeds}
                onCreate={handleCreateSpeeds}
                items={data.speedKts}
                title='Add Speed' />
            </FormGroup>
            }
          </div>
        </div>
        <div className={styles['form-row']}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Commodities">
              <SortableList
                required
                sortable='manual'
                onChange={handleChangeCommodities}
                onCreate={handleCreateCommodities}
                renderItemSection={renderCommoditiesSection}
                items={data.commodityTypes || []}
                title='Add Commodity' />
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
    handleChangePlatformTypes([
      {
        name: createPlatformName(),
        conditions: [],
        speedKts: [],
        states: [],
        icon: '',
        travelMode: 'sea'
      },
      ...localPlatformType.platformTypes
    ])
  }

  return (
    <AdminContent>
      <LeftSide>
        <EditableList
          items={localPlatformType.platformTypes}
          onClick={handleSwitch}
          onCreate={handleCreatePlatformType}
          onDelete={handleDelete}
          title='Create'
          selectedItem={selectedItem >= 0 ? localPlatformType.platformTypes[selectedItem].name : undefined}
          filterKey="name"
        />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingPlatformTypes
