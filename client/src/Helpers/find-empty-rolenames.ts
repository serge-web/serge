import { NEW_ROLE } from 'src/config'
import { ForceData } from 'src/custom-types'
import _ from 'lodash'

/** check if any role-names in the new force being saved are empty
 * of any in the existing data
 * @param newData the force that has been modified
 * @param forces the existing set of forces
 * @returns list of roles with empty role-names
 */
const findEmptyRolenames = (newData: ForceData, forces: ForceData[]): Array<{ forceName:string, roleName: string }> => {
  // use new force-data object, to check new values
  const forcesData = _.map(forces, force => force.uniqid === newData.uniqid ? newData : force)

  // create flat list of data objects to check
  interface ExtForces { forceName: string, roleName: string }
  const empForceRoleNames: ExtForces[] = _.reduce(
    forcesData,
    (output: ExtForces[] = [], force) => {
      force.roles.forEach(role => {
        const empRole = role.name ? role.name : ''
        if (empRole === '' || empRole === NEW_ROLE) {
          output.push({
            forceName: force.name,
            roleName: empRole
          })
        }
      })
      return output
    },
    []
  )
  return _.uniqBy(empForceRoleNames, output => [output.forceName, output.roleName].join())
}

export default findEmptyRolenames
