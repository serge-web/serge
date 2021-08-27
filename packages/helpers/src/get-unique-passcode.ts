import { ForceData } from "@serge/custom-types"
import _ from "lodash"
import uniqid from "uniqid"

const getUniquePasscode = (forces: ForceData[]): string => {
  let uniquePasscode = uniqid.time("r")
  const roleIds = _.chain(forces)
    .flatMap(force => force.roles)
    .map(role => role.roleId)
    .value()
  while (_.includes(roleIds, uniquePasscode)) {
    uniquePasscode = uniqid.time("r")
  }
  return uniquePasscode
}

export default getUniquePasscode
