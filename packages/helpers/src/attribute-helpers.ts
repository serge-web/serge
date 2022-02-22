import { AttributeType, NumberAttributeType, NumberAttributeValue } from '@serge/custom-types'
import numeral from 'numeral'

export const createDefaultFor = (attr: NumberAttributeType): number => {
  return attr.defaultValue || 0
}

export const formatValue = (attrTypes: NumberAttributeType[],
  attr: NumberAttributeValue): string => {
  const cType = attrTypes.find((cType: AttributeType) => cType.attrId === attr.attrId)
  if (!cType) {
    throw new Error('Attribute type not found for id:' + attr.attrId)
  }
  if (cType.format) {
    return numeral(attr.value).format(cType.format)
  } else {
    return '' + attr.value
  }
}

export const formatAttribute = (attrTypes: NumberAttributeType[],
  attr: NumberAttributeValue): string => {
  const cType = attrTypes.find((cType: AttributeType) => cType.attrId === attr.attrId)
  if (!cType) {
    throw new Error('Attribute type not found for id:' + attr.attrId)
  }
  const value = formatValue([cType], attr)
  return '' + value + (cType.units ? (' ' + cType.units) : '')
}
