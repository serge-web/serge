interface FormDataPop {
  populate: {
    perceivedForce: Array<{
      name: string
      colour: string
    }>
    perceivedType: Array<string>
  }
  values: {
    perceivedForceVal: string
    perceivedTypeVal: string
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
  formData: FormDataPop
  /**
   * The method for posting data back to state
   */
  postBack?: any
}
