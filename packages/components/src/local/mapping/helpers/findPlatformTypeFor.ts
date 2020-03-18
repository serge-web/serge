import _ from 'lodash'

const findPlatformTypeFor = (typesList: Array<any>, platformType: string): any => {
  // NOTE: had to convert platformType to lower case in next line in order to match
  // a one-word capitalised platform type.
  return typesList.find(pType => _.kebabCase(pType.name).toLowerCase() === platformType.toLowerCase())
}

export default findPlatformTypeFor
