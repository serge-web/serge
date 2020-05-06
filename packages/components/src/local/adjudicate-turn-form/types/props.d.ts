export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: {
    status: Array<string>
    speed: Array<number>
    visibleTo: Array<{
      name: string
      colour: string
      selected: boolean
    }>
    condition: Array<string>
  }
}
