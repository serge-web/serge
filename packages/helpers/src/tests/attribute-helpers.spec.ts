import { ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_NUMBER } from '@serge/config'
import { AttributeTypes, AttributeValues } from '@serge/custom-types'
import { createDefaultFor, formatAttribute, formatValue } from '../attribute-helpers'

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
    format: '0.00'
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
    expect(formatValue(attributesTypes, attributeValues[0])).toEqual('55.000')
    expect(formatValue(attributesTypes, attributeValues[1])).toEqual('45.00')
  })

  it('formats attribute', () => {
    expect(formatAttribute(attributesTypes, attributeValues[0])).toEqual('55.000 Knots')
    expect(formatAttribute(attributesTypes, attributeValues[1])).toEqual('45.00')
  })
})
