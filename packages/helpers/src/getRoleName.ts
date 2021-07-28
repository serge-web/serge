import { ForceData, Role } from '@serge/custom-types'

const getRoleNameFromId = (selectedForce: ForceData, roleId: string): string => {
  const selectedRole = selectedForce.roles.find((role: Role) => role.roleId === roleId)
  if (selectedRole) {
    return selectedRole.name
  }
  return ''
}

export default getRoleNameFromId
