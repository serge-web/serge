import { PlatformTypeData } from '@serge/custom-types'
import _ from 'lodash'

export default function findPlatformTypeFor (typesList: PlatformTypeData[], platformType: string, platformTypeId: PlatformTypeData['uniqid']): PlatformTypeData {
  if (!typesList) {
    throw new Error('Platform types missing')
  } else {
    if (platformTypeId) {
      const res = typesList.find((platform: PlatformTypeData) => platform.uniqid === platformTypeId)
      if (res !== undefined) return res
      throw new Error('Could not find platform type id:' + platformTypeId)
    } else {
      // don't throw error in tests, since we deliberately test old way of doing it
      const jestWorkerId = process.env.JEST_WORKER_ID
      const inProduction = !jestWorkerId
      inProduction && console.warn('Legacy use of name for platform-type encountered:', platformType)
      const res = typesList.find((pType: PlatformTypeData) => _.kebabCase(pType.name).toLowerCase() === platformType.toLowerCase())
      if (res !== undefined) return res
      throw new Error('Could not find platform type:' + platformType)
    }
  }
}
