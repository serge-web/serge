import { WargameOverview } from '@serge/custom-types'

export default interface PropTypes {
  overview: WargameOverview
  onChange: (nextOverview: WargameOverview) => void
  onSave: (overview: WargameOverview) => void
  /** handler for admin initiating wargame */
  initiateWargame: () => void
  /** whether this wargame has been initiated */
  wargameInitiated: boolean
}

export { WargameOverview } from '@serge/custom-types'
