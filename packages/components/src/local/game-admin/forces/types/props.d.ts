import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
  forces: Array<ForceData>
  onChange: (forces: Array<ForceData>) => void
  onSave?: () => void
}

export { ForceData, Role } from '@serge/custom-types'
