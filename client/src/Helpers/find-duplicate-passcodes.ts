import { ForceData } from '@serge/custom-types'
import _ from 'lodash'

/** check if any pass-codes in the new force being saved are duplicates
 * of any in the existing data
 * @param newData the force that has been modified
 * @param forces the existing set of forces
 * @returns list of roles with duplicate pass-codes
 */
const findDuplicatePasscodes = (newData: ForceData, forces: ForceData[]): Array<{ forceName?:string, roleId?: string, roleName?: string }> => {
  // use new force-data object, to check new values
  const forcesData = _.map(forces, force => force.uniqid === newData.uniqid ? newData : force)

  // create flat list of data objects to check
  interface ExtForces { forceName: string, roleId: string, roleName: string }
  const extForces: ExtForces[] = _.reduce(
    forcesData,
    (output: ExtForces[] = [], force) => {
      force.roles.forEach(role => {
        output.push({
          forceName: force.name,
          roleId: role.roleId,
          roleName: role.name
        })
      })
      return output
    },
    []
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

export default findDuplicatePasscodes
