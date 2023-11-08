import {
  ATTRIBUTE_TYPE_ENUM,
  ATTRIBUTE_TYPE_NUMBER,
  ATTRIBUTE_TYPE_STRING,
  ATTRIBUTE_VALUE_ENUM,
  ATTRIBUTE_VALUE_NUMBER,
  ATTRIBUTE_VALUE_STRING
} from 'src/config'

/** Types to support the storage of attributes within the game */

/** the basic type details common to all attributes */
export interface BaseAttributeType {
  attrType: string
  // human-readable name for this atribute type
  name: string
  // unique id for this atribute type
  attrId: string
  // description of this type of atribute
  description?: string
  // whether atribute can be edited by players
  editableByPlayer?: boolean
}

/** a number value */
export interface NumberAttributeType extends BaseAttributeType {
  attrType: typeof ATTRIBUTE_TYPE_NUMBER
  /** name of units to use for this type */
  units?: string
  /** default value to use for this atribute */
  defaultValue?: number
  /** how to display values for this atribute (.e.g `0.00`) */
  format?: string
}

/** a number value */
export interface StringAttributeType extends BaseAttributeType {
  attrType: typeof ATTRIBUTE_TYPE_STRING
  /** default value to use for this atribute */
  defaultValue?: string
  /** how to display values for this atribute (.e.g `0.00`) */
}

/** a string value from a list of possible values */
export interface EnumAttributeType extends BaseAttributeType {
  attrType: typeof ATTRIBUTE_TYPE_ENUM
  /** possible values for this attribute */
  values: string[]
  /** default value to use for this atribute */
  defaultValue?: string
}

/// ///////////////////////////////////
// a more versatile style of attributes,
// where we define them as generic, and not per-platform-type

export type AttributeTypeIDs = StringAttributeType['attrId'] | EnumAttributeType['attrId'] | NumberAttributeType['attrId']

export type AttributeValues2 = Record<AttributeTypeIDs, string | number>

/** the list of attribute types for a platform-type */
export type GenericAttributes = Array<BaseAttributeType['attrId']>

/** the basic type details common to all attributes */
export interface BaseAttributeValue {
  attrType: string
  // id of this atribute (allows details to be looked up from type data)
  attrId: BaseAttributeType['attrId']
}

export interface StringAttributeValue extends BaseAttributeValue {
  attrType: typeof ATTRIBUTE_VALUE_STRING
  // value of this atribute
  value: string
}

export interface NumberAttributeValue extends BaseAttributeValue {
  attrType: typeof ATTRIBUTE_VALUE_NUMBER
  // value of this atribute
  value: number
}

export interface EnumAttributeValue extends BaseAttributeValue {
  attrType: typeof ATTRIBUTE_VALUE_ENUM
  // value of this atribute
  value: string
}

/** union of all types of atribute type */
export type AttributeType = NumberAttributeType | EnumAttributeType | StringAttributeType

/** union of all types of atribute value */
export type AttributeValue = NumberAttributeValue | EnumAttributeValue | StringAttributeValue

/** collection of instances of types of atribute */
export type AttributeTypes = AttributeType[]

/** collection of instances of values of atribute */
export type AttributeValues = AttributeValue[]

/** collate data for attribute editor table */
export interface AttributeEditorData {
  // name for read interface
  nameRead: string
  // name for text editor, optionally includes units
  nameWrite: string
  description?: string
  // value as displayed in read-only mode
  valueRead: string
  // value as supplied to text field
  valueWrite: string
  // attribute id, needed to store results
  attrId: string
  // value type, needed to store results
  valueType: typeof ATTRIBUTE_VALUE_NUMBER | typeof ATTRIBUTE_VALUE_ENUM | typeof ATTRIBUTE_VALUE_STRING
  // whether the player can edit the field
  playerCanEdit: boolean
}

/** top level database object for storing attribute definitions */
/** collection of map annotations */
export interface AttributeTypeData {
  attributes: AttributeTypes
}
