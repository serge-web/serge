import { ForceData, Role } from 'src/custom-types'

const getRoleFromId = (forces: ForceData[], forceId: string, roleId: string): Role | undefined => {
  const force = forces.find((force: ForceData) => force.uniqid === forceId)
  if (force) {
    return force.roles.find((role: Role) => role.roleId === roleId)
  }
  return undefined
}

export default getRoleFromId
