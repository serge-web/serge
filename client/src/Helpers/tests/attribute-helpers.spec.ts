import { ATTRIBUTE_TYPE_ENUM, ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER } from 'src/config'
import { AttributeType, AttributeTypes, AttributeValues, EnumAttributeType, NumberAttributeType } from 'src/custom-types'
import { collateEditorData, createAttributeValue, createDefaultFor, formatEnum, formatNumber } from '../attribute-helpers'

const attrId1 = 'comm1111'
const attrId2 = 'comm2222'
const attrId3 = 'comm3333'
const attrId4 = 'comm4444'

// sample data
const attributesTypes: AttributeTypes = [
  {
    name: 'Top Speed 1',
    attrId: attrId1,
    description: 'The top speed 1 for this platform type',
    editableByPlayer: true,
    attrType: ATTRIBUTE_TYPE_NUMBER,
    units: 'Knots',
    defaultValue: 45,
    format: '0.000'
  },
  {
    name: 'Top Speed 2',
    attrId: attrId2,
    description: 'The top speed 2 for this platform type',
    editableByPlayer: true,
    attrType: ATTRIBUTE_TYPE_NUMBER
  },
  {
    name: 'Depth1',
    attrId: attrId3,
    description: 'Depth category 1',
    values: ['Deep', 'PD', 'Shallow'],
    defaultValue: 'PD',
    editableByPlayer: true,
    attrType: ATTRIBUTE_TYPE_ENUM
  },
  {
    name: 'Depth2',
    attrId: attrId4,
    description: 'Depth category 2',
    values: ['Deep', 'PD', 'Shallow'],
    editableByPlayer: true,
    attrType: ATTRIBUTE_TYPE_ENUM
  }
]

const attributeValues: AttributeValues = [
  {
    attrId: attrId1,
    attrType: ATTRIBUTE_VALUE_NUMBER,
    value: 55
  },
  {
    attrId: attrId2,
    attrType: ATTRIBUTE_VALUE_NUMBER,
    value: 45
  },
  {
    attrId: attrId3,
    attrType: ATTRIBUTE_VALUE_ENUM,
    value: 'PD'
  },
  {
    attrId: attrId4,
    attrType: ATTRIBUTE_VALUE_ENUM,
    value: 'Shallow'
  }
]

describe('default attribute value:', () => {
  it('creates default attribute', () => {
    const firstComm = attributesTypes[0]
    expect(createDefaultFor(firstComm)).toEqual(45)

    const secondComm = attributesTypes[1]
    expect(createDefaultFor(secondComm)).toEqual(0)

    const thirdComm = attributesTypes[2]
    expect(createDefaultFor(thirdComm)).toEqual('PD')

    const fourthComm = attributesTypes[3]
    expect(createDefaultFor(fourthComm)).toEqual('Deep')
  })

  it('creates default attribute', () => {
    const firstComm = attributesTypes[0]
    expect(createAttributeValue(firstComm).attrId).toEqual(firstComm.attrId)
    expect(createAttributeValue(firstComm).attrType).toEqual(ATTRIBUTE_VALUE_NUMBER)
    expect(createAttributeValue(firstComm).value).toEqual(firstComm.defaultValue)

    const secondComm = attributesTypes[1]
    expect(createAttributeValue(secondComm).attrId).toEqual(secondComm.attrId)
    expect(createAttributeValue(secondComm).attrType).toEqual(ATTRIBUTE_VALUE_NUMBER)
    expect(createAttributeValue(secondComm).value).toEqual(0)

    const thirdComm = attributesTypes[2]
    expect(createAttributeValue(thirdComm).attrId).toEqual(thirdComm.attrId)
    expect(createAttributeValue(thirdComm).attrType).toEqual(ATTRIBUTE_VALUE_ENUM)
    expect(createAttributeValue(thirdComm).value).toEqual(thirdComm.defaultValue)

    const fourthComm = attributesTypes[3] as EnumAttributeType
    expect(createAttributeValue(fourthComm).attrId).toEqual(fourthComm.attrId)
    expect(createAttributeValue(fourthComm).attrType).toEqual(ATTRIBUTE_VALUE_ENUM)
    expect(createAttributeValue(fourthComm).value).toEqual(fourthComm.values[0])
  })

  it('formats number values', () => {
    const aType0 = attributesTypes.find((aType: AttributeType) => aType.attrId === attributeValues[0].attrId)
    const aType1 = attributesTypes.find((aType: AttributeType) => aType.attrId === attributeValues[1].attrId)
    expect(aType0).toBeTruthy()
    expect(aType1).toBeTruthy()
    if (aType0 && aType1) {
      expect(aType0.attrType).toEqual(ATTRIBUTE_TYPE_NUMBER)
      expect(aType1.attrType).toEqual(ATTRIBUTE_TYPE_NUMBER)
      const nType0 = aType0 as NumberAttributeType
      const nType1 = aType1 as NumberAttributeType
      expect(formatNumber(attributeValues[0], nType0, true)).toEqual('55.000 Knots')
      expect(formatNumber(attributeValues[1], nType1, true)).toEqual('45')
    }
  })

  it('formats enum values', () => {
    const aType0 = attributesTypes.find((aType: AttributeType) => aType.attrId === attributeValues[2].attrId)
    const aType1 = attributesTypes.find((aType: AttributeType) => aType.attrId === attributeValues[3].attrId)
    expect(aType0).toBeTruthy()
    expect(aType1).toBeTruthy()
    if (aType0 && aType1) {
      expect(aType0.attrType).toEqual(ATTRIBUTE_TYPE_ENUM)
      expect(aType1.attrType).toEqual(ATTRIBUTE_TYPE_ENUM)
      expect(formatEnum(attributeValues[2])).toEqual('PD')
      expect(formatEnum(attributeValues[3])).toEqual('Shallow')
    }
  })

  it('collates editor data', () => {
    expect(collateEditorData([], attributesTypes).length).toEqual(0)
    expect(collateEditorData(attributeValues, []).length).toEqual(0)
    const res = collateEditorData(attributeValues, attributesTypes)
    expect(res.length).toEqual(4)
    expect(res[0].nameRead).toEqual('Top Speed 1: ')
    expect(res[1].nameRead).toEqual('Top Speed 2: ')
    expect(res[0].nameWrite).toEqual('Top Speed 1 (Knots)')
    expect(res[1].nameWrite).toEqual('Top Speed 2')
    expect(res[0].valueRead).toEqual('55.000 Knots')
    expect(res[1].valueRead).toEqual('45')
    expect(res[0].valueWrite).toEqual('55.000')
    expect(res[1].valueWrite).toEqual('45')
    expect(res[0].valueType).toEqual(ATTRIBUTE_VALUE_NUMBER)
    expect(res[1].valueType).toEqual(ATTRIBUTE_VALUE_NUMBER)
    expect(res[0].description).toEqual('The top speed 1 for this platform type')
  })
})
