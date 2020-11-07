import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes, { PlatformType, PlatformTypeData, States } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { Content, LeftSide, RightSide } from '../content'
import TransparentInput from '../../form-elements/transparent-input'
import FormGroup from '../../form-elements/form-group-shadow'
import SortableList, { Item as SortableListItem } from '../../form-elements/sortable-list'
import EditableList, { Item } from '../editable-list'
import Button from '../../form-elements/button'
import { withStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import IconUploader from '../../molecules/icon-uploader'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const MobileSwitch = withStyles({
  // root: {
  //   height: 34,
  //   padding: 12,
  //   width: 54
  // },
  // thumb: {
  //   width: 16,
  //   height: 16,
  // },
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
export const PlatformTypes: React.FC<PropTypes> = ({ platformType, onChange, onSave }) => {
  const newPlatformType: PlatformType = {
    complete: false,
    dirty: false,
    name: 'Platform Mock',
    selectedType: '',
    platformTypes: []
  }

  const localPlatformType: PlatformType = platformType || newPlatformType

  const [selectedItem, setSelectedItem] = useState(0)

  const handleSwitch = (_item: Item, key: number): void => {
    setSelectedItem(key)
  }

  const handleChangePlatformTypes = (nextPlatformTypes: Array<PlatformTypeData>): void => {
    onChange({
      ...localPlatformType,
      platformTypes: nextPlatformTypes
    })
  }

  const handleChamgePlatformTypeData = (data: PlatformTypeData, key: number): void => {
    const copyTypes: Array<PlatformTypeData> = [...localPlatformType.platformTypes]
    copyTypes[key] = data
    handleChangePlatformTypes(copyTypes)
  }

  const handleChangeMobile = (item: States, key: number): void => {
    const data: PlatformTypeData = localPlatformType.platformTypes[selectedItem]
    const newStates: Array<States> = [...data.states]
    newStates[key].mobile = !item.mobile
    handleChamgePlatformTypeData({ ...data, states: newStates }, selectedItem)
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
      handleChamgePlatformTypeData({ ...data, name }, selectedItem)
    }
    const handleChangeTravelMode = (e: React.ChangeEvent<HTMLInputElement>): void => {
      handleChamgePlatformTypeData({ ...data, travelMode: e.target.value }, selectedItem)
    }
    const handleChangeConditions = (conditions: Array<SortableListItem>): void => {
      handleChamgePlatformTypeData({ ...data, conditions: conditions as Array<string> }, selectedItem)
    }
    const handleChangeStates = (states: Array<SortableListItem>): void => {
      handleChamgePlatformTypeData({ ...data, states: states as Array<States> }, selectedItem)
    }
    const handleChangeSpeeds = (speedKts: Array<SortableListItem>): void => {
      handleChamgePlatformTypeData({ ...data, speedKts: speedKts as Array<number> }, selectedItem)
    }
    const handleChangeIcon = (icon: string): void => {
      handleChamgePlatformTypeData({ ...data, icon }, selectedItem)
    }

    const handleCreateConditions = (): void => {
      const conditions: Array<string> = [...data.conditions, 'New Condition']
      handleChamgePlatformTypeData({ ...data, conditions }, selectedItem)
    }

    const handleCreateStates = (): void => {
      const states: Array<States> = [...data.states, {
        name: 'New State',
        mobile: false
      }]
      handleChamgePlatformTypeData({ ...data, states }, selectedItem)
    }
    const handleCreateSpeeds = (): void => {
      const speedKts: Array<number> = [...data.speedKts, Math.max.apply(null, [0, ...data.speedKts]) + 10]
      handleChamgePlatformTypeData({ ...data, speedKts }, selectedItem)
    }

    return (
      <div key={selectedItem}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TransparentInput
              onChange={handleChangeName}
              value={data.name}
              placeholder="Platform Name"/>
          </div>
          <div className={styles.col}>
            <IconUploader limit={20000} icon={data.icon} onChange={handleChangeIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button onClick={(): void => { if (onSave) onSave() }}>Save</Button>
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
    <Content>
      <LeftSide>
        <EditableList items={localPlatformType.platformTypes} onClick={handleSwitch}/>
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </Content>
  )
}

export default PlatformTypes

export { PlatformType, PlatformTypeData, States } from './types/props'
