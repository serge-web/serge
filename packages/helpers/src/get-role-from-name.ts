import { ForceData, Role } from '@serge/custom-types'

/** from force and name, get the role id */
const getRoleFromName = (forces: ForceData[], forceId: string, name: string): Role | undefined => {
  const force = forces.find((force: ForceData) => force.uniqid === forceId)
  if (force) {
    const res = force.roles.find((role: Role) => role.name === name)
    if (res !== undefined) {
      return res
    }
  }
  return undefined
}

export default getRoleFromName
