import { PlatformTypeData } from '@serge/custom-types'
import _ from 'lodash'

export default function findPlatformTypeFor (typesList: PlatformTypeData[], platformType: string): PlatformTypeData {
  // NOTE: had to convert platformType to lower case in next line in order to match
  // a one-word capitalised platform type.
  const res = typesList.find((pType: PlatformTypeData) => _.kebabCase(pType.name).toLowerCase() === platformType.toLowerCase())
  if (res !== undefined) return res
  throw new Error('Could not find platform type:' + platformType)
};
