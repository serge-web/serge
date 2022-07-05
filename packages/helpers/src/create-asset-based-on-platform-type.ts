import { Asset, AttributeTypes, NumberAttributeType, NumberAttributeValue, PlatformTypeData } from '@serge/custom-types'
import uniqid from 'uniqid'
import generateHashCode from './generate-hash-code'
import { ATTRIBUTE_VALUE_NUMBER, LaydownTypes } from '@serge/config'

export const generateAssetId = (): string => {
  return 'a' + uniqid.time()
}

export const generateAssetContactId = (assetId: string): string => {
  return 'C' + generateHashCode(assetId)
}

export const createAttributes = (attributes?: AttributeTypes): NumberAttributeValue[] => {
  if (attributes) {
    return attributes.map((attr: NumberAttributeType): NumberAttributeValue => {
      return {
        attrId: attr.attrId,
        value: attr.defaultValue !== undefined ? attr.defaultValue : 0,
        attrType: ATTRIBUTE_VALUE_NUMBER
      }
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
    platformType: pType.name,
    platformTypeId: pType.uniqid,
    perceptions: [],
    condition: '',
    position: '',
    locationPending: LaydownTypes.UmpireLaydown,
    attributeValues: attributes
  }
}
