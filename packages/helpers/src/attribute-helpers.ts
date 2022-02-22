import { AttributeEditorData, AttributeType, AttributeTypes, AttributeValue, AttributeValues, NumberAttributeType } from '@serge/custom-types'
import numeral from 'numeral'

export const createDefaultFor = (attr: NumberAttributeType): number => {
  return attr.defaultValue || 0
}

export const formatValue = (value: number, format?: string, units?: string): string => {
  const str1 = format ? numeral(value).format(format) : '' + value
  const str2 = units ? (str1 + ' ' + units) : str1
  return str2
}

export const collateEditorData = (values: AttributeValues, types: AttributeTypes): AttributeEditorData[] => {
  if (values && values.length && types && types.length) {
    return values.map((value:AttributeValue): AttributeEditorData => {
      const aType = types.find((item: AttributeType) => value.attrId === item.attrId)
      const units = aType && aType.units
      const name = (aType && aType.name) || 'unknown'
      const nameField = name + (units ? ' (' + units + ')' : '')
      return {
        nameRead: name,
        nameWrite: nameField,
        attrId: value.attrId,
        valueRead: formatValue(value.value, aType && aType.format, aType && aType.units),
        valueWrite: formatValue(value.value, aType && aType.format, undefined),
        valueType: value.attrType,
        description: aType && aType.description,
      }
    })
  } else {
    return []
  }
}
