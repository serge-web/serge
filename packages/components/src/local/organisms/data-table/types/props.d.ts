export default interface Props {
  /**
   * List of columns
   */
  columns: Array<string | { filters: Array<string>, label: string }>
  /**
   * List of data
   */
  data: Array<Array<any>>
}
