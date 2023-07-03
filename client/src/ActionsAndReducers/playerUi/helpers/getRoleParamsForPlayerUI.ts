import { ForceData, PlayerUi, Role } from '@serge/custom-types'

const getRoleParamsForPlayerUI = (role: Role, newState: PlayerUi): void => {
  newState.selectedRole = role.roleId
  newState.selectedRoleName = role.name
  newState.isGameControl = role.isGameControl
  newState.isObserver = role.isObserver
  newState.isInsightViewer = role.isInsightViewer
  newState.isRFIManager = !!role.isRFIManager
}

export const getRoleParamsByForceAndRole = (
  selectedForce: ForceData | undefined, 
  selectedRole: Role['roleId'] | undefined,
  newState: PlayerUi
): void => {
  if (typeof selectedRole !== 'undefined' && typeof selectedForce !== 'undefined') {
    const nextSelectedForce = newState.allForces.find(({ uniqid }) => uniqid === selectedForce.uniqid)
    if (typeof nextSelectedForce !== 'undefined') {
      const role = nextSelectedForce.roles.find(({ roleId }) => roleId === selectedRole)
      if (typeof role !== 'undefined') getRoleParamsForPlayerUI(role, newState)
    }
  }
}

export default getRoleParamsForPlayerUI
