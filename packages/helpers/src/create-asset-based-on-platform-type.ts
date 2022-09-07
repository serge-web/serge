import { Asset, AttributeType, AttributeTypes, AttributeValue, PlatformTypeData } from '@serge/custom-types'
import uniqid from 'uniqid'
import generateHashCode from './generate-hash-code'
import { LaydownTypes } from '@serge/config'
import { createAttributeValue } from './attribute-helpers'

export const generateAssetId = (): string => {
  return 'a' + uniqid.time()
}

export const generateAssetContactId = (assetId: string): string => {
  return 'C' + generateHashCode(assetId)
}

export const createAttributes = (attributes?: AttributeTypes): AttributeValue[] => {
  if (attributes) {
    return attributes.map((attr: AttributeType): AttributeValue => {
      return createAttributeValue(attr)
    })
  } else {
    return []
  }
}

export const createAssetBasedOnPlatformType = (pType: PlatformTypeData): Asset => {
  const uniqid = generateAssetId()
  const contactId = generateAssetContactId(uniqid)
  const attributes = createAttributes(pType.attributeTypes)

  return {
    uniqid: uniqid,
    contactId: contactId,
    name: pType.name,
    platformTypeId: pType.uniqid,
    perceptions: [],
    condition: '',
    position: '',
    locationPending: LaydownTypes.UmpireLaydown,
    attributeValues: attributes
  }
}
