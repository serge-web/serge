import { ForceData } from 'src/custom-types'
import _ from 'lodash'
import uniqid from 'uniqid'

const getUniquePasscode = (forces: ForceData[], passcodePrefix:string): string => {
  let uniquePasscode = uniqid.time(passcodePrefix)
  const roleIds = _.chain(forces)
    .flatMap(force => force.roles)
    .map(role => role.roleId)
    .value()
  while (_.includes(roleIds, uniquePasscode)) {
    uniquePasscode = uniqid.time(passcodePrefix)
  }
  return uniquePasscode
}

export default getUniquePasscode
