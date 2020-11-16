import React, { useState } from 'react'
import cx from 'classnames'

/* Import proptypes */
import PropTypes, { PlatformType, PlatformTypeData, States } from './types/props'

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
export const SettingPlatformTypes: React.FC<PropTypes> = ({ platformType, onChange, onSave }) => {
  const newPlatformType: PlatformType = {
    complete: false,
    dirty: false,
    name: 'Platform Mock',
    selectedType: '',
    platformTypes: []
  }

  const initialPlatformType: PlatformType = platformType || newPlatformType
  const [localPlatformType, setLocalPlatformType] = useState(initialPlatformType)
  const [selectedItem, setSelectedItem] = useState(0)

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(localPlatformType.platformTypes.findIndex(item => item === _item))
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

  const handleChangeMobile = (item: States, key: number): void => {
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]
    const newStates: Array<States> = [...data.states]
    newStates[key].mobile = !item.mobile
    handleChangePlatformTypeData({ ...data, states: newStates }, selectedItem)
  }
  const renderStatesMobileSection = (item: SortableListItem, key: number): React.ReactNode => {
    const stateItem = item as States
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
      handleChangePlatformTypeData({ ...data, states: states as Array<States> }, selectedItem)
    }
    const handleChangeSpeeds = (speedKts: Array<SortableListItem>): void => {
      handleChangePlatformTypeData({ ...data, speedKts: speedKts as Array<number> }, selectedItem)
    }
    const handleChangeIcon = (icon: string): void => {
      handleChangePlatformTypeData({ ...data, icon }, selectedItem)
    }

    const handleCreateConditions = (): void => {
      const conditions: Array<string> = [...data.conditions, 'New Condition']
      handleChangePlatformTypeData({ ...data, conditions }, selectedItem)
    }

    const handleCreateStates = (): void => {
      const states: Array<States> = [...data.states, {
        name: 'New State',
        mobile: false
      }]
      handleChangePlatformTypeData({ ...data, states }, selectedItem)
    }
    const handleCreateSpeeds = (): void => {
      const speedKts: Array<number> = [...data.speedKts, Math.max.apply(null, [0, ...data.speedKts]) + 10]
      handleChangePlatformTypeData({ ...data, speedKts }, selectedItem)
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
            <IconUploader limit={20000} icon={data.icon} onChange={handleChangeIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button
              color="primary"
              onClick={(): void => { if (onSave) onSave(localPlatformType) }}
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
            <FormGroup placeholder="Speed (kts)">
              <SortableList
                required
                sortable='auto'
                onChange={handleChangeSpeeds}
                onCreate={handleCreateSpeeds}
                items={data.speedKts}
                title='Add Speed' />
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AdminContent>
      <LeftSide>
        <EditableList items={localPlatformType.platformTypes} onClick={handleSwitch}/>
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingPlatformTypes

export { PlatformType, PlatformTypeData, States } from './types/props'
