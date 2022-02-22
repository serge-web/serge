import { ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_NUMBER } from '@serge/config'
import { AttributeTypes, AttributeValues, NumberAttributeType } from '@serge/custom-types'
import { collateEditorData, createDefaultFor, formatValue } from '../attribute-helpers'

const attrId1 = 'comm1111'
const attrId2 = 'comm2222'

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
    attrType: ATTRIBUTE_TYPE_NUMBER,
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
  }
]

describe('default attribute:', () => {
  it('creates default attribute', () => {
    const firstComm = attributesTypes[0]
    expect(createDefaultFor(firstComm)).toEqual(45)

    const secondComm = attributesTypes[1]
    expect(createDefaultFor(secondComm)).toEqual(0)
  })

  it('formats value', () => {
    const aType0 = attributesTypes.find((aType: NumberAttributeType) => aType.attrId === attributeValues[0].attrId)
    const aType1 = attributesTypes.find((aType: NumberAttributeType) => aType.attrId === attributeValues[1].attrId)
    expect(formatValue(attributeValues[0].value, aType0 && aType0.format, aType0 && aType0.units)).toEqual('55.000 Knots')
    expect(formatValue(attributeValues[1].value, aType1 && aType1.format, aType1 && aType1.units)).toEqual('45')
  })

  it('collates editor data', () => {
    expect(collateEditorData([], attributesTypes).length).toEqual(0)
    expect(collateEditorData(attributeValues, []).length).toEqual(0)
    const res = collateEditorData(attributeValues, attributesTypes)
    expect(res.length).toEqual(2)
    expect(res[0].nameRead).toEqual('Top Speed 1')
    expect(res[1].nameRead).toEqual('Top Speed 2')
    expect(res[0].nameWrite).toEqual('Top Speed 1 (Knots)')
    expect(res[1].nameWrite).toEqual('Top Speed 2')
    expect(res[0].valueRead).toEqual('55.000 Knots')
    expect(res[1].valueRead).toEqual('45')
    expect(res[0].valueWrite).toEqual('55.000')
    expect(res[1].valueWrite).toEqual('45')
  })
})
