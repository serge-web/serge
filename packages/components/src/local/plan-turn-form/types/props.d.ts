interface Status {
  name: string
  mobile: boolean
}

interface FormValues {
  statusVal: Status
  speedVal: number
  turnsVal: number
}

interface FormData {
  populate: {
    status: Array<Status>
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
