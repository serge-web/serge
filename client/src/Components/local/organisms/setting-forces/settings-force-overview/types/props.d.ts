import { ForceData } from 'src/custom-types'

export default interface PropTypes {
  data: ForceData
  handleChangeForce: (obj: ForceData) => void
}
