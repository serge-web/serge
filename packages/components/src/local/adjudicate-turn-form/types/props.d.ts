interface Status {
  name: string
  mobile: boolean
}

interface FormValues {
  plannedRouteStatusVal: string
  statusVal: Status
  speedVal: number
  visibleToVal: Array<string>
  conditionVal: string
}

interface FormData {
  populate: {
    status: Array<Status>
    speed: Array<number>
    visibleTo: Array<{
      name: string
      colour: string
    }>
    condition: Array<string>
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
