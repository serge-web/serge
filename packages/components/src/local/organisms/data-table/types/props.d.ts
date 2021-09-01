import React from 'react'

export type RowDataType = string | { component: React.ReactElement | null, label: string }
export type RowWithCollapsibleType = {
  // collapsible is a function witch one will return a ReactElement and will be rendered only on call
  // cb: is a callback function with one should fire some logick on collapsible content change, ex close collapsible component
  collapsible: (cb?: () => void) => React.ReactElement
  cells: Array<RowDataType>
}
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
