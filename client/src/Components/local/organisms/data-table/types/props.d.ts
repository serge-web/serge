import React from 'react'
import { ROW_DATA_TYPE, ROW_WITH_COLLAPSIBLE_TYPE } from '..'

export interface RowDataType {
  type: typeof ROW_DATA_TYPE
  rowkey: string
  component: React.ReactElement | null
  label: string
}

export interface RowWithCollapsibleType {
  type: typeof ROW_WITH_COLLAPSIBLE_TYPE
  rowKey: string
  // collapsible is a function witch one will return a ReactElement and will be rendered only on call
  // cb: is a callback function with one should fire some logick on collapsible content change, ex close collapsible component
  collapsible: (cb?: () => void) => React.ReactElement
  cells: Array<RowDataType>
}

export type Column =
  | string
  | {
      filters: Array<string>
      label: string
    }
export type RowType = RowDataType | RowWithCollapsibleType

export default interface Props {
  /**
   * List of columns
   */
  columns: Column[]
  /**
   * List of data
   */
  data: RowType[]

  /** toggle table sort */
  sort?: boolean

  /** no display expand icon */
  noExpand?: boolean
}
