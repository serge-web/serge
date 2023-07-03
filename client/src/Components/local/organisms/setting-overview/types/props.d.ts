import { WargameOverview } from '@serge/custom-types'

export default interface PropTypes {
  overview: WargameOverview
  onChange: (nextOverview: WargameOverview) => void
  onSave: (overview: WargameOverview) => void
  /** handler for admin initiating wargame */
  initiateWargame: () => void
  /** whether this wargame has been initiated */
  wargameInitiated: boolean
  /**
   * The eact-flatpickr work well but has an error `flatpickr.setDate` is not a function on react-test-renderer
   * so we should to ignore this component on jest test
   */
   ignoreFlatpickrSnapshot?: boolean
}

export { WargameOverview } from '@serge/custom-types'
