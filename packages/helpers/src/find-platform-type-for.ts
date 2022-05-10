import { PlatformTypeData } from '@serge/custom-types'
import _ from 'lodash'

export default function findPlatformTypeFor (typesList: PlatformTypeData[], platformType: string, platformTypeId: PlatformTypeData['uniqid']): PlatformTypeData {
  if (platformTypeId) {
    const res = typesList.find((platform: PlatformTypeData) => platform.uniqid === platformTypeId)
    if (res !== undefined) return res
    throw new Error('Could not find platform type id:' + platformTypeId)
  } else {
    const res = typesList.find((pType: PlatformTypeData) => _.kebabCase(pType.name).toLowerCase() === platformType.toLowerCase())
    if (res !== undefined) return res
    throw new Error('Could not find platform type:' + platformType)
  }
}
