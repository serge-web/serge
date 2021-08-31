import { ForceData } from "@serge/custom-types"
import _ from "lodash"

const isUniquePasscode = (newData: ForceData, forces: ForceData[]): Array<{}> => {
  // create final forces data which will update in database
  let forcesData = _.map(forces, force => force.uniqid === newData.uniqid ? newData : force)
  
  //extract require data from forces
  const extForces = _.reduce(
    forcesData,
    (output, force) => {
      force.roles.forEach(role => {
        (output || (output = [])).push({
          forceName: force.name,
          roleId: role.roleId,
          roleName: role.name
        })
      })
      return output
    },
    Array<{ forceName:string, roleId: string, roleName: string}>()
  )
  
  // check duplicate passcode in every force
  const dupForceRoleNames = _.chain(extForces)
    .groupBy('roleId')
    .map((output) => ({ roles: output }))
    .filter(output => output.roles.length > 1)
    .flatMap(output => output.roles)
    .value()

  return _.uniqBy(dupForceRoleNames, output => [output.forceName, output.roleName].join())
}

export default isUniquePasscode
