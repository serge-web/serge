import findPlatformTypeFor from './find-platform-type-for'

const checkIfDestroyed = (typesList: Array<any>, platformType: string, condition: string) => {
  const pType = findPlatformTypeFor(typesList, platformType)
  const destroyedCondition = pType.conditions[pType.conditions.length - 1]
  return (condition === destroyedCondition)
};

export default checkIfDestroyed