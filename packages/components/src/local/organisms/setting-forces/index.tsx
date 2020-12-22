import React, { useState, useEffect } from 'react'
import cx from 'classnames'

/* Import proptypes */
import PropTypes, { ForceData, Role } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComments, faDirections } from '@fortawesome/free-solid-svg-icons'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import Colorpicker from '../../atoms/colorpicker'
import FormGroup from '../../atoms/form-group-shadow'
import SortableList, { Item as SortableListItem } from '../../molecules/sortable-list'
import PasswordView from '../../molecules/password-view'
import EditableList, { Item } from '../../molecules/editable-list'
import IconUploader from '../../molecules/icon-uploader'
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
export const SettingForces: React.FC<PropTypes> = ({
  forces: initialForces,
  onSave,
  onChange,
  onRejectedIcon,
  onSidebarClick,
  onCreate,
  onDelete,
  selectedForce
}) => {
  const selectedForceId = initialForces.findIndex(force => force.uniqid === selectedForce?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedForceId, 0))
  const [forcesData, setForcesData] = useState(initialForces)
  const handleSwitch = (_item: Item): void => {
    const selectedForce = forcesData.findIndex(force => force.uniqid === _item.uniqid)
    setSelectedItem(selectedForce)
    onSidebarClick && onSidebarClick(_item as ForceData)
  }

  const handleChangeForces = (nextForces: Array<ForceData>): void => {
    setForcesData(nextForces)
    onChange({ forces: nextForces })
  }

  useEffect(() => {
    const selectedId = initialForces.findIndex(force => force.uniqid === selectedForce?.uniqid)
    setSelectedItem(Math.max(selectedId, 0))
    setForcesData(initialForces)
  }, [initialForces])

  const renderContent = (): React.ReactNode => {
    const data = forcesData[selectedItem]
    if (!data) return null

    const handleChangeForce = (force: ForceData): void => {
      const nextForces: Array<ForceData> = [...initialForces]
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

    const handleOnRejectedIcon = (rejected: any): void => {
      if (typeof onRejectedIcon === 'function') {
        onRejectedIcon(rejected)
      } else {
        console.log(rejected)
      }
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
            <TextInput
              customColor="transparent"
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeForce({ ...data, name: target.value })
              }}
            />
          </div>
          <div className={styles['color-box']}>
            <Colorpicker value={data.color} onChange={(newColor: string): void => {
              handleChangeForce({ ...data, color: newColor })
            }} />
          </div>
          <div className={styles.col}>
            <IconUploader limit={20000} icon={data.icon} onChange={(icon: string): void => {
              handleChangeForce({ ...data, icon })
            }} onRejected={handleOnRejectedIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button
              color="primary"
              onClick={(): void => { if (onSave) onSave(forcesData) }}
              data-qa-type="save"
            >
              Save Force
            </Button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Overview & Objectives">
              <TextInput
                multiline
                fullWidth
                variant="filled"
                rows={8}
                rowsMax={8}
                updateState={(target: { value: string }): void => {
                  handleChangeForce({ ...data, overview: target.value })
                }}
                value={data.overview}
                className={styles.textarea}
              />
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
    <AdminContent>
      <LeftSide>
        <EditableList
          items={initialForces}
          selectedItem={forcesData[selectedItem].uniqid}
          filterKey="uniqid"
          onClick={handleSwitch}
          onCreate={onCreate}
          onDelete={onDelete}
          withSearch={false}
          title="Add a New Force"
        />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingForces
