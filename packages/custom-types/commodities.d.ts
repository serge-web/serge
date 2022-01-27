import {
  COMMODITY_TYPE_NUMBER,
  COMMODITY_VALUE_NUMBER
} from '@serge/config'

/** Types to support the storage of commodities within the game */

/** the basic type details common to all commodities */
export interface BaseCommodityType {
  commType: string
  // human-readable name for this commodity type
  name: string
  // unique id for this commodity type
  commId: string
  // description of this type of commodity
  description?: string
}

export interface NumberCommodityType extends BaseCommodityType {
  commType: typeof COMMODITY_TYPE_NUMBER
  /** name of units to use for this type */
  units?: string
  /** default value to use for this commodity */
  defaultValue?: number
  /** how to display values for this commodity (.e.g `0.00`) */
  format?: string
}

/** the basic type details common to all commodities */
export interface BaseCommodityValue {
  commType: string
  // id of this commodity (allows details to be looked up from type data)
  commId: string
}

export interface NumberCommodityValue extends BaseCommodityValue {
  commType: typeof COMMODITY_VALUE_NUMBER
  // value of this commodity
  value: number
}

/** union of all types of commodity type */
export type CommodityType = NumberCommodityType

/** union of tall types of commodity value */
export type CommodityValue = NumberCommodityValue

/** collection of instances of types of commodity */
export type CommodityTypes = CommodityType[]

/** collection of instances of values of commodity */
export type CommodityValues = CommodityValue[]

