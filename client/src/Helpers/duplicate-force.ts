import { ForceData, Role } from 'src/custom-types'
import deepCopy from './deep-copy'
import uniqid from 'uniqid'

const duplicateThisForce = (force: ForceData): ForceData => {
  const cloneForce: ForceData = deepCopy(force)

  const uniq = uniqid.time()

  // create new force, with new name and id
  const duplicateForce: ForceData = {
    ...cloneForce,
    name: cloneForce.name + `-${uniq}`,
    uniqid: `f${uniq}`
  }

  // give the roles a new id
  if (duplicateForce.roles.length > 0) {
    duplicateForce.roles = duplicateForce.roles.map((role: Role): Role => {
      const uniqId = uniqid.time()
      return {
        ...role,
        name: role.name + '-' + uniqId,
        roleId: `r${uniqId}`
      }
    })
  }

  return duplicateForce
}
export default duplicateThisForce
