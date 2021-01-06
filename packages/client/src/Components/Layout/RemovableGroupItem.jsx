import React from 'react'
import { useDispatch } from 'react-redux'
import { RoleAction } from '@serge/components'
import { removeRole, setTabUnsaved } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'

const RemovableGroupItem = props => {
  const dispatch = useDispatch()
  const {
    data,
    children,
    isGameControl: isGameControl
  } = props
  const {
    isObserver,
    isInsightViewer,
    canSubmitPlans,
    name
  } = data
  const onRemoveRole = () => {
    dispatch(setTabUnsaved())
    dispatch(removeRole(children))
  }

  const onEditRole = () => {
    const role = {
      ...data,
      isGameControl: isGameControl
    }
    dispatch(modalAction.open('newRole', role))
  }

  return (
    <RoleAction
      onEditRole={onEditRole}
      onRemoveRole={onRemoveRole}
      isGameControl={isGameControl}
      isInsightViewer={isInsightViewer}
      isObserver={isObserver}
      canSubmitPlans={canSubmitPlans}
      role={name}
    />
  )
}

export default RemovableGroupItem
