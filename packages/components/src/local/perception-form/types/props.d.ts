export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: {
    perceivedForce: Array<{
      name: string
      colour: string
    }>
  }
}
