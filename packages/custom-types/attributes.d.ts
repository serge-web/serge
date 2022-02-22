import {
  ATTRIBUTE_TYPE_NUMBER,
  ATTRIBUTE_VALUE_NUMBER
} from '@serge/config'

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

export interface NumberAttributeType extends BaseAttributeType {
  attrType: typeof ATTRIBUTE_TYPE_NUMBER
  /** name of units to use for this type */
  units?: string
  /** default value to use for this atribute */
  defaultValue?: number
  /** how to display values for this atribute (.e.g `0.00`) */
  format?: string
}

/** the basic type details common to all attributes */
export interface BaseAttributeValue {
  attrType: string
  // id of this atribute (allows details to be looked up from type data)
  attrId: string
}

export interface NumberAttributeValue extends BaseAttributeValue {
  attrType: typeof ATTRIBUTE_VALUE_NUMBER
  // value of this atribute
  value: number
}

/** union of all types of atribute type */
export type AttributeType = NumberAttributeType

/** union of tall types of atribute value */
export type AttributeValue = NumberAttributeValue

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
  valueType: string
}