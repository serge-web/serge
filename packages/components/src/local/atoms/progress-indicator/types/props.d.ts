type Item = {
  complete?: boolean
  active?: boolean
  [property: string]: any
}

export default interface Props {
  /**
   * List of indicator items
   */
  list: Array<Item>
}
