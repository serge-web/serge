import { PlatformTypeData } from '@serge/custom-types'
import findPlatformTypeFor from './find-platform-type-for'

const checkIfDestroyed = (typesList: PlatformTypeData[], platformType: string, condition: string): boolean => {
  const pType = findPlatformTypeFor(typesList, platformType)
  const destroyedCondition = pType.conditions[pType.conditions.length - 1]
  return (condition === destroyedCondition)
}

export default checkIfDestroyed
