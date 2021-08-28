import { ForceData } from "@serge/custom-types"
import _ from "lodash"


const isUniquePasscode = (newData: ForceData, forces: ForceData[]): string[] => {
  
  let dupRoleNames = _.chain(newData.roles)
    .groupBy("roleId")
    .map((output) => ({ roles: _.map(output, role => role.name) }))
    .filter(output => output.roles.length > 1)
    .flatMap(output => output.roles)
    .value()

  const newForces = _.reduce(
    forces,
    (output, force) => {
      force.roles.forEach(role => {
        (output || (output = [])).push({
          uniqid: force.uniqid,
          roleId: role.roleId,
          name: role.name
        })
      })
      return output
    },
    Array<{ uniqid: string, roleId: string, name: string}>()
  )

  
  // unique password check in multiple force
  for (const force of newForces) {
    for (const role of newData.roles) {
      // compare password stored in database and new update of password
      if (
        newData.uniqid !== force.uniqid &&
        role.roleId === force.roleId
      ) {
        dupRoleNames.push(role.name)
      }
    }
  }

  return _.uniq(dupRoleNames)
}

export default isUniquePasscode
