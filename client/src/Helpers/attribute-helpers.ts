import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER } from '@serge/config'
import { AttributeEditorData, AttributeType, AttributeTypes, AttributeValue, AttributeValues, EnumAttributeType, EnumAttributeValue, NumberAttributeType, NumberAttributeValue } from 'src/custom-types'
import numeral from 'numeral'

export const createDefaultFor = (attr: AttributeType): any => {
  switch (attr.attrType) {
    case ATTRIBUTE_TYPE_NUMBER: {
      const num = attr as NumberAttributeType
      return num.defaultValue || 0
    }
    case ATTRIBUTE_TYPE_ENUM: {
      const eNum = attr as EnumAttributeType
      return eNum.defaultValue || eNum.values[0]
    }
    default: {
      throw new Error('Failed to match attribute type' + attr)
    }
  }
}

export const formatNumber = (value: AttributeValue, aType: AttributeType, addUnits: boolean): string => {
  if (value.attrType !== ATTRIBUTE_VALUE_NUMBER || aType.attrType !== ATTRIBUTE_TYPE_NUMBER) {
    throw new Error('Failed to provide relevant attribute types' + value.attrType + ', ' + aType.attrType)
  }
  const vNum = value as NumberAttributeValue
  const aNum = aType as NumberAttributeType
  const str1 = aNum.format ? numeral(vNum.value).format(aNum.format) : '' + vNum.value
  const str2 = (addUnits && aNum.units) ? (str1 + ' ' + aNum.units) : str1
  return str2
}

export const formatEnum = (value: AttributeValue): string => {
  if (value.attrType !== ATTRIBUTE_VALUE_ENUM) {
    throw new Error('Failed to provide relevant attribute types' + value.attrType)
  }
  const eNum = value as EnumAttributeValue
  return eNum.value
}

/** use defaults to generate new attribute value */
export const createAttributeValue = (aType: AttributeType): AttributeValue => {
  switch (aType.attrType) {
    case ATTRIBUTE_TYPE_NUMBER:
      return {
        attrId: aType.attrId,
        value: createDefaultFor(aType),
        attrType: ATTRIBUTE_VALUE_NUMBER
      }
    case ATTRIBUTE_TYPE_ENUM:
      return {
        attrId: aType.attrId,
        value: createDefaultFor(aType),
        attrType: ATTRIBUTE_VALUE_ENUM
      }
    default:
      throw new Error('Unexpected attribute type:' + aType)
  }
}

export const nameFor = (eType: AttributeType): string => {
  switch (eType.attrType) {
    case ATTRIBUTE_TYPE_NUMBER: {
      const num = eType as NumberAttributeType
      if (num.units) {
        return num.name + ' (' + num.units + ')'
      } else {
        return num.name
      }
    }
    case ATTRIBUTE_TYPE_ENUM: {
      const eNum = eType as EnumAttributeType
      return eNum.name
    }
    default: {
      throw new Error('Failed to match attribute type for:' + eType)
    }
  }
}

export const collateEditorData = (values: AttributeValues, types: AttributeTypes): AttributeEditorData[] => {
  if (values && values.length && types && types.length) {
    return values.map((value:AttributeValue): AttributeEditorData => {
      const aType = types.find((item: AttributeType) => value.attrId === item.attrId)
      if (!aType) {
        throw new Error('Failed to find attribute type for ' + value.attrId)
      }
      const name = aType.name || 'unknown'
      const nameField = nameFor(aType)
      return {
        nameRead: name + ': ',
        nameWrite: nameField,
        attrId: value.attrId,
        valueRead: value.attrType === ATTRIBUTE_VALUE_NUMBER ? formatNumber(value, aType, true) : formatEnum(value),
        valueWrite: value.attrType === ATTRIBUTE_VALUE_NUMBER ? formatNumber(value, aType, false) : formatEnum(value),
        valueType: value.attrType,
        description: aType.description,
        playerCanEdit: aType.editableByPlayer ? aType.editableByPlayer : false
      }
    })
  } else {
    return []
  }
}
