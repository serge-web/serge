import { ForceData, PlayerUi, Role } from '@serge/custom-types'

interface GetRoleParamsForPlayerUI {
  isGameControl: boolean,
  isObserver: boolean,
  isRFIManager: boolean
  isInsightViewer: boolean,
  selectedRole: string
}

const getRoleParamsForPlayerUI = (role: Role, newState: PlayerUi): void => {
  newState.selectedRole = role.roleId
  newState.isGameControl = role.isGameControl
  newState.isObserver = role.isObserver
  newState.isInsightViewer = role.isInsightViewer
  newState.isRFIManager = !!role.isRFIManager
}

export const getRoleParamsByForceAndRole = (
  selectedForce: ForceData | undefined, 
  selectedRole: string | undefined,
  newState: PlayerUi
): void => {
  if (typeof selectedRole !== 'undefined' && typeof selectedForce !== 'undefined') {
    const nextSelectedForce = newState.allForces.find(({ uniqid }) => uniqid === selectedForce.uniqid)
    if (typeof nextSelectedForce !== 'undefined') {
      const role = nextSelectedForce.roles.find(({ name }) => name === selectedRole)
      if (typeof role !== 'undefined') getRoleParamsForPlayerUI(role, newState)
    }
  }
}

export default getRoleParamsForPlayerUI