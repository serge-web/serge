interface FormData {
  populate: {
    status: Array<string>
    speed: Array<number>
    visibleTo: Array<{
      name: string
      colour: string
    }>
    condition: Array<string>
  }
  values: {
    statusVal: string
    speedVal: number
    visibleToVal: string
    conditionVal: string
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
