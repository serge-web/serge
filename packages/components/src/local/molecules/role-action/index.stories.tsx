import React from 'react'

// Import component files
import RoleAction from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/RoleAction',
  component: RoleAction,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const editRole = (): void => window.alert('Edit role clicked')
const removeRole = (): void => window.alert('Delete role clicked')
export const Default: React.FC = () => {
  return <RoleAction role="CO" onEditRole={editRole} onRemoveRole={removeRole} />
}

export const Icons: React.FC = () => {
  return <RoleAction
    role="CO"
    onEditRole={editRole}
    onRemoveRole={removeRole}
    isInsightViewer={true}
    isObserver={true}
    canSubmitPlans={true}
  />
}

export const GameControl: React.FC = () => {
  return <RoleAction
    role="Game Control"
    onEditRole={editRole}
    onRemoveRole={removeRole}
    isInsightViewer={true}
    isObserver={true}
    isGameControl={true}
    canSubmitPlans={true}
  />
}
