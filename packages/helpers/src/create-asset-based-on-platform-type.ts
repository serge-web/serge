import { Asset, AttributeType, AttributeTypes, AttributeValue, EnumAttributeType, EnumAttributeValue, NumberAttributeType, NumberAttributeValue, PlatformTypeData } from '@serge/custom-types'
import uniqid from 'uniqid'
import generateHashCode from './generate-hash-code'
import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER, LaydownTypes } from '@serge/config'

export const generateAssetId = (): string => {
  return 'a' + uniqid.time()
}

export const generateAssetContactId = (assetId: string): string => {
  return 'C' + generateHashCode(assetId)
}

export const createAttributes = (attributes?: AttributeTypes): AttributeValue[] => {
  if (attributes) {
    return attributes.map((attr: AttributeType): AttributeValue => {
      switch (attr.attrType) {
        case ATTRIBUTE_TYPE_NUMBER: {
          const nType = attr as NumberAttributeType
          const res: NumberAttributeValue = {
            attrId: attr.attrId,
            value: nType.defaultValue !== undefined ? nType.defaultValue : 0,
            attrType: ATTRIBUTE_VALUE_NUMBER
          }
          return res
        }
        case ATTRIBUTE_TYPE_ENUM: {
          const nType = attr as EnumAttributeType
          const res: EnumAttributeValue = {
            attrId: attr.attrId,
            value: nType.defaultValue !== undefined ? nType.defaultValue : nType.values[0],
            attrType: ATTRIBUTE_VALUE_ENUM
          }
          return res
        }
        default:
          throw new Error('Attribute type not found for:' + attr)
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
