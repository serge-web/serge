interface FormData {
  populate: {
    status: Array<string>
  }
  values: {
    statusVal: string
    turnsVal: number
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
  postBack?: any
}
