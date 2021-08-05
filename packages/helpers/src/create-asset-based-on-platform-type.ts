import { kebabCase } from 'lodash'
import { Asset, PlatformTypeData } from '@serge/custom-types'
import uniqid from 'uniqid'
import generateHashCode from './generate-hash-code'

export const platformTypeNameToKey = (name: string): string => {
  return kebabCase(name.toLowerCase())
}

export const generateAssetId = (): string => {
  return 'a' + uniqid.time()
}

export const generateAssetContactId = (assetId: string): string => {
  return 'C' + generateHashCode(assetId)
}

export const createAssetBasedOnPlatformType = ({ name }: PlatformTypeData): Asset => {
  const uniqid = generateAssetId()
  const contactId = generateAssetContactId(uniqid)
  const platformType = platformTypeNameToKey(name)

  return {
    uniqid,
    contactId,
    name,
    platformType,
    perceptions: [],
    condition: '',
    position: '',
    locationPending: false
  }
}
