import React, { FC } from 'react'
/* Import proptypes */
import { Role } from '../types/props'
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { faBookReader, faCaretDown, faChessKing, faComments, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { NEW_ROLE } from '@serge/config'
import { getUniquePasscode } from '@serge/helpers'
import cx from 'classnames'
import FormGroup from '../../../atoms/form-group-shadow'
import PasswordView from '../../../molecules/password-view'
import SortableList, { Item as SortableListItem } from '../../../molecules/sortable-list'

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

export const RolesAccordion: FC<PropTypes> = ({ data, handleChangeForce, forces, customDeleteHandler, onNewRoleAdded }) => {
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
          <PasswordView value={roleItem.roleId} onChange={(roleId: string): void => {
            handleChangeRole({ ...roleItem, roleId })
          }}/>
          {key === 0 && <div className={styles['role-title']}>Password</div>}
        </div>
        <div className={styles['role-item']}>
          <MobileSwitch disabled={!data.umpire} size='small' checked={roleItem.isGameControl} onChange={(): void => {
            handleChangeRole({ ...roleItem, isGameControl: !roleItem.isGameControl })
          }} />
          {key === 0 && <div
            title='Game Control'
            className={cx(styles['role-title'], styles['title-center'])}>
            <FontAwesomeIcon icon={faChessKing} />
          </div>}
        </div>
        <div className={styles['role-item']}>
          <MobileSwitch disabled={!data.umpire} size='small' checked={roleItem.isObserver} onChange={(): void => {
            handleChangeRole({ ...roleItem, isObserver: !roleItem.isObserver })
          }} />
          {key === 0 && <div
            title='Can view all channels'
            className={cx(styles['role-title'], styles['title-center'])}>
            <FontAwesomeIcon icon={faEye} />
          </div>}
        </div>
        <div className={styles['role-item']}>
          <MobileSwitch disabled={!data.umpire} size='small' checked={roleItem.isInsightViewer} onChange={(): void => {
            handleChangeRole({ ...roleItem, isInsightViewer: !roleItem.isInsightViewer })
          }} />
          {key === 0 && <div
            title='Can view feedback/insights'
            className={cx(styles['role-title'], styles['title-center'])}>
            <FontAwesomeIcon icon={faComments} />
          </div>}
        </div>
        <div className={styles['role-item']}>
          <MobileSwitch disabled={!data.umpire} size='small' checked={roleItem.isRFIManager} onChange={(): void => {
            handleChangeRole({ ...roleItem, isRFIManager: !roleItem.isRFIManager })
          }} />
          {key === 0 && <div
            title='Can release RFI responses'
            className={cx(styles['role-title'], styles['title-center'])}>
            <FontAwesomeIcon icon={faBookReader} />
          </div>}
        </div>
      </div>
    )
  }

  const handleCreateRole = (): void => {
    const newRole = {
      roleId: getUniquePasscode(forces, 'r'),
      name: NEW_ROLE,
      isGameControl: false,
      isInsightViewer: false,
      isRFIManager: false,
      isObserver: false
    }
    const roles: Array<Role> = [...data.roles, newRole]
    onNewRoleAdded(newRole)
    handleChangeForce({ ...data, roles: roles })
  }

  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        className={styles['accordion-header']}
        expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
      >
        <Typography className={styles['accordion-title']}>Roles</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section)}>
            <FormGroup placeholder="Roles">
              <SortableList
                remove={true}
                sortable='auto'
                required
                onChange={(roles: Array<SortableListItem>): void => {
                  handleChangeForce({ ...data, roles: roles as Array<Role> })
                }}
                onCreate={handleCreateRole}
                renderItemSection={renderRoleFields}
                items={data.roles}
                title='Add Role'
                customDeleteHandler={customDeleteHandler}
                valueOnEmpty={NEW_ROLE}
              />
            </FormGroup>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default RolesAccordion
