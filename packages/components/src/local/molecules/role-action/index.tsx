import React from 'react'
import Button from '../../atoms/button'
import VisibilityIcon from '@material-ui/icons/Visibility'
import DirectionsIcon from '@material-ui/icons/Directions'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from '@material-ui/icons/Clear'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const RoleAction: React.FC<Props> = ({
  isObserver,
  canSubmitPlans,
  isInsightViewer,
  isGameControl,
  role,
  onEditRole,
  onRemoveRole
}: Props) => {
  const editRole = (evt: React.MouseEvent): void => {
    evt.stopPropagation()
    onEditRole && onEditRole()
  }
  const removeRole = (evt: React.MouseEvent): void => {
    evt.stopPropagation()
    onRemoveRole && onRemoveRole()
  }
  return (
    <Button customColor="swissCoffee" onClick={onEditRole}>
      <span className={styles['button-inner']}>
        { isObserver ? <VisibilityIcon titleAccess="Role can view all channels" className={styles['role-icons']} /> : null }
        { canSubmitPlans ? <DirectionsIcon titleAccess="Role can submit plans" className={styles['role-icons']} /> : null }
        { isInsightViewer ? <QuestionAnswerIcon titleAccess="Role can view feedback/insights" className={styles['role-icons']} /> : null }
        <span>{ role }</span>
        <EditIcon titleAccess="Edit this role" className={styles['role-action-icons']} onClick={editRole} />
        { !isGameControl ? <ClearIcon titleAccess="Remove this role" className={styles['role-action-icons']} onClick={removeRole} /> : null }
      </span>
    </Button>
  )
}

export default RoleAction
