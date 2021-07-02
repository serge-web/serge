import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
  data: ForceData
  handleChangeForce: (obj: ForceData) => void
}
