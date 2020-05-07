interface FormData {
  populate: {
    perceivedForce: Array<{
      name: string
      colour: string
    }>
  }
  values: {
    perceivedForceVal: string
  }
}

export default interface PropTypes {
  /**
   * The header text for the form
   */
  formHeader: string
  /**
   * All types in this definition are options for a form input
   */
  formData: FormData
  /**
   * The method for posting data back to state
   */
  postBack?: FormData
}
