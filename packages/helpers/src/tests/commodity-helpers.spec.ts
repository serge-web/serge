import { COMMODITY_TYPE_NUMBER, COMMODITY_VALUE_NUMBER } from '@serge/config'
import { CommodityTypes, CommodityValues } from '@serge/custom-types'
import { createDefaultFor, formatCommodity, formatValue } from '../commodity-helpers'

const commId1 = 'comm1111'
const commId2 = 'comm2222'

// sample data
const commodityTypes: CommodityTypes = [
  {
    name: 'Top Speed 1',
    commId: commId1,
    description: 'The top speed 1 for this platform type',
    editableByPlayer: true,
    commType: COMMODITY_TYPE_NUMBER,
    units: 'Knots',
    defaultValue: 45,
    format: '0.000'
  },
  {
    name: 'Top Speed 2',
    commId: commId2,
    description: 'The top speed 2 for this platform type',
    editableByPlayer: true,
    commType: COMMODITY_TYPE_NUMBER,
    format: '0.00'
  }
]

const commodityValues: CommodityValues = [
  {
    commId: commId1,
    commType: COMMODITY_VALUE_NUMBER,
    value: 55
  },
  {
    commId: commId2,
    commType: COMMODITY_VALUE_NUMBER,
    value: 45
  }
]

describe('default commodity:', () => {
  it('creates default commodity', () => {
    const firstComm = commodityTypes[0]
    expect(createDefaultFor(firstComm)).toEqual(45)

    const secondComm = commodityTypes[1]
    expect(createDefaultFor(secondComm)).toEqual(0)
  })

  it('formats value', () => {
    expect(formatValue(commodityTypes, commodityValues[0])).toEqual('55.000')
    expect(formatValue(commodityTypes, commodityValues[1])).toEqual('45.00')
  })

  it('formats commodity', () => {
    expect(formatCommodity(commodityTypes, commodityValues[0])).toEqual('55.000 Knots')
    expect(formatCommodity(commodityTypes, commodityValues[1])).toEqual('45.00')
  })
})
