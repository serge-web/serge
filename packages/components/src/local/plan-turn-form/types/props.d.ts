interface FormValues {
  statusVal: string
  speedVal: number
  turnsVal: number
}

interface FormData {
  populate: {
    status: Array<string>
    speed: Array<number>
  }
  values: FormValues
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
  postBack?: {(payload: FormValues): void}
}
