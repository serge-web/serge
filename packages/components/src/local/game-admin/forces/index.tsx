import React, { useState } from 'react'

import cx from 'classnames'
/* Import proptypes */
import PropTypes, { ForceData, Role } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { Content, LeftSide, RightSide } from '../content'
import EditableList, { Item } from '../editable-list'
import TransparentInput from '../../form-elements/transparent-input'
import IconUploader from '../../molecules/icon-uploader'
import Button from '../../form-elements/button'
import Colorpicker from '../colorpicker'
import FormGroup from '../../form-elements/form-group-shadow'
import SortableList, { Item as SortableListItem } from '../../form-elements/sortable-list'
import PasswordView from '../password-view'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComments, faDirections } from '@fortawesome/free-solid-svg-icons'
import { UMPIRE_FORCE } from '@serge/config'

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
export const Forces: React.FC<PropTypes> = ({ forces, onChange, onSave }) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const handleSwitch = (_item: Item, key: number): void => {
    setSelectedItem(key)
  }

  const handleChangeForces = (nextForces: Array<ForceData>): void => {
    onChange(nextForces)
  }

  const renderContent = (): React.ReactNode => {
    if (!forces[selectedItem]) return null
    const data = forces[selectedItem]

    const handleChangeForce = (force: ForceData): void => {
      const nextForces: Array<ForceData> = [...forces]
      nextForces[selectedItem] = force
      handleChangeForces(nextForces)
    }

    const handleCreateRole = (): void => {
      const roles: Array<Role> = [...data.roles, {
        name: 'New Role',
        canSubmitPlans: false,
        password: 'p' + Math.random().toString(36).substring(8),
        control: false,
        isInsightViewer: false,
        isObserver: false
      }]
      handleChangeForce({ ...data, roles: roles })
    }

    const renderRoleFields = (item: SortableListItem, key: number): React.ReactNode => {
      const roleItem = item as Role
      const handleChangeRole = (nextRole: Role, submitPlans = false): void => {
        const roles: Array<Role> = submitPlans ? data.roles.map(role => ({ ...role, canSubmitPlans: false })) : [...data.roles]
        roles[key] = nextRole
        handleChangeForce({ ...data, roles })
      }

      return (
        <div className={styles.role}>
          <div className={styles['role-item']}>
            <PasswordView value={roleItem.password} onChange={(password: string): void => {
              handleChangeRole({ ...roleItem, password })
            }}/>
            {key === 0 && <div className={styles['role-title']}>Password</div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch disabled={data.uniqid !== UMPIRE_FORCE} size='small' checked={roleItem.isObserver} onChange={(): void => {
              handleChangeRole({ ...roleItem, isObserver: !roleItem.isObserver })
            }} />
            {key === 0 && <div
              title='Can view all channels'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faEye} />
            </div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch disabled={data.uniqid !== UMPIRE_FORCE} size='small' checked={roleItem.isInsightViewer} onChange={(): void => {
              handleChangeRole({ ...roleItem, isInsightViewer: !roleItem.isInsightViewer })
            }} />
            {key === 0 && <div
              title='Can view feedback/insights'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faComments} />
            </div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch size='small' checked={roleItem.canSubmitPlans} onChange={(): void => {
              handleChangeRole({ ...roleItem, canSubmitPlans: !roleItem.canSubmitPlans }, !roleItem.canSubmitPlans)
            }} />
            {key === 0 && <div
              title='Can submit mapping plans'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faDirections} />
            </div>}
          </div>
        </div>
      )
    }

    return (
      <div key={selectedItem}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TransparentInput
              onChange={(name: string): void => {
                handleChangeForce({ ...data, name })
              }}
              value={data.name}
              placeholder="Platform Name"/>
          </div>
          <div className={styles['color-box']}>
            <Colorpicker value={data.color} onChange={(newColor: string): void => {
              handleChangeForce({ ...data, color: newColor })
            }} />
          </div>
          <div className={styles.col}>
            <IconUploader limit={20000} icon={data.icon} onChange={(icon: string): void => {
              handleChangeForce({ ...data, icon })
            }}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button onClick={(): void => { if (onSave) onSave() }}>Save</Button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Overview & Objectives">
              <textarea rows={8} className={styles.textarea} onChange={(e): void => {
                handleChangeForce({ ...data, overview: e.target.value })
              }} value={data.overview} />
            </FormGroup>
          </div>
        </div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Roles">
              <SortableList
                remove={false}
                sortable='auto'
                required
                onChange={(roles: Array<SortableListItem>): void => {
                  handleChangeForce({ ...data, roles: roles as Array<Role> })
                }}
                onCreate={handleCreateRole}
                renderItemSection={renderRoleFields}
                items={data.roles}
                title='Add Role' />
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Content>
      <LeftSide>
        <EditableList items={forces} onClick={handleSwitch} />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </Content>
  )
}

export default Forces

export { ForceData } from './types/props'
