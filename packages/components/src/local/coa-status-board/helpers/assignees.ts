import { ForceData, ForceRole, Participant, Role } from "@serge/custom-types"

const forceFor = (forces: ForceData[], forceId: string) =>
{
  const force = forces.find((force: ForceData) => force.uniqid === forceId)
  if(force) {
    return force
  }
  throw 'Force not found for:' + forceId
}

const roleFor = (force: ForceData, role: Role): ForceRole => {
  const fRole: ForceRole = {
    forceId: force.uniqid,
    forceName: force.name,
    roleId: role.roleId,
    roleName: role.name
  }
  return fRole
}

const allRolesFor = (force: ForceData): ForceRole[] => {
  const roles = force.roles.map((role: Role) => {
    return roleFor(force, role)
  })
  return roles
}

const getAssignees = (participants: Participant[], forces: ForceData[]): ForceRole[] => {
  const res: ForceRole[] = []
  participants.forEach((part: Participant) => {
    const force = forceFor(forces, part.forceUniqid)
    if(part.roles && part.roles.length) {
      // TODO: just the named roles
    } else {
      // all roles for this force
      res.push(...allRolesFor(force))
    }
  })
  return []
}

export default getAssignees