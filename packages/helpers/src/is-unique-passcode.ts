import { ForceData } from "@serge/custom-types"
import _ from "lodash"

const isUniquePasscode = (newData: ForceData, forces: ForceData[]): boolean => {
  // unique password check in same force
  const roleIds = newData.roles.map(role => role.roleId)
  const isUniqueRolePassword = roleIds.some((role, index) => {
    return roleIds.indexOf(role) !== index
  })
  // duplicate password found in same force, first correction require in same force
  if (isUniqueRolePassword) return true

  const newForces = _.reduce(
    forces,
    (result, force) => {
      force.roles.forEach(role => {
        (result || (result = [])).push({
          uniqid: force.uniqid,
          roleId: role.roleId
        })
      })
      return result
    },
    Array<{ uniqid: string, roleId: string}>()
  )

  // unique password check in multiple force
  for (const force of newForces) {
    for (const role of newData.roles) {
      // compare password stored in database and new update of password
      if (
        newData.uniqid !== force.uniqid &&
        role.roleId === force.roleId
      ) {
        return true
      }
    }
  }
  return false
}

export default isUniquePasscode
