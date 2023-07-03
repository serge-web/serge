import { SortDirection } from '@material-ui/core'

export type ContentFilterType = {
  filters: Array<string>
  label: string
}
export default interface Props {
  /**
   * Column index
   */
  id: number
  /**
   * Column content
   */
  content: string | ContentFilterType
  /**
   * Current active filters
   */
  filters: Array<string>
  /**
   * Callback on filter button click event
   */
  onFilter: (id: number, filter: string) => void

  /**
   * toggle sort
   */
  sort?: boolean

  /**
   * callback sort function
   */
  onSort?: (columnId: number, sortDirection: SortDirection) => void

  /** sorting column id */
  sortingColId?: number

  /** sort direction */
  sortDirection?: SortDirection
}
