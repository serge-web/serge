import React from 'react'

export type RowDataType = string | { component: React.ReactElement | null, label: string }
export type RowWithCollapsibleType = { collapsible: React.ReactElement, cells: Array<RowDataType> }
export type RowType = Array<RowDataType | RowWithCollapsibleType>
export default interface Props {
  /**
   * List of columns
   */
  columns: Array<string | { filters: Array<string>, label: string }>
  /**
   * List of data
   */
  data: Array<RowType>
}
