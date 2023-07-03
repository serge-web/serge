import { CollaborativePermission } from '@serge/config'
import { ForceData, ForceRole, ParticipantCollab, Role } from '@serge/custom-types'
import { uniqBy } from 'lodash'

/** find this force */
const forceFor = (forces: ForceData[], forceId: string): ForceData => {
  const force = forces.find((force: ForceData) => force.uniqid === forceId)
  if (force) {
    return force
  }
  throw new Error('Force not found for:' + forceId)
}

/** convert this `Role` into a `ForceRole` */
const roleFor = (force: ForceData, role: Role): ForceRole => {
  const fRole: ForceRole = {
    forceId: force.uniqid,
    forceName: force.name,
    roleId: role.roleId,
    roleName: role.name
  }
  return fRole
}

/** get all roles in this force */
const allRolesFor = (force: ForceData): ForceRole[] => {
  const roles = force.roles.map((role: Role) => {
    return roleFor(force, role)
  })
  return roles
}

/** get the details for this role */
const getRole = (force: ForceData, roleId: string): Role => {
  const role = force.roles.find((role: Role) => role.roleId === roleId)
  if (role) {
    return role
  }
  throw new Error('Role not found for:' + roleId)
}

/** get a list of the roles in this participant group, if it is
 * tagged with `can collaborate`.
 * If no roles are specified, include all roles
 */
const getAssignees = (participants: ParticipantCollab[], forces: ForceData[]): ForceRole[] => {
  const res: ForceRole[] = []
  participants.forEach((part: ParticipantCollab) => {
    if (part.permission > CollaborativePermission.CannotCollaborate) {
      const force = forceFor(forces, part.forceUniqid)
      if (part.roles && part.roles.length) {
        const matches: ForceRole[] = part.roles.map((roleId: string) => {
          return roleFor(force, getRole(force, roleId))
        })
        res.push(...matches)
      } else {
        const allRoles = allRolesFor(force)
        // all roles for this force
        res.push(...allRoles)
      }
    }
  })
  // lastly, remove duplicates
  const deDupe = uniqBy(res, function (e) {
    return e.roleId
  })
  return deDupe
}

export default getAssignees
