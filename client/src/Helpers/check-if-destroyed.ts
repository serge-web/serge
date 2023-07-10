import { PlatformTypeData } from 'src/custom-types'
import findPlatformTypeFor from './find-platform-type-for'

const checkIfDestroyed = (typesList: PlatformTypeData[], platformTypeId: PlatformTypeData['uniqid'], condition: string): boolean => {
  const pType = findPlatformTypeFor(typesList, '', platformTypeId)
  const destroyedCondition = pType.conditions[pType.conditions.length - 1]
  return (condition === destroyedCondition)
}

export default checkIfDestroyed
