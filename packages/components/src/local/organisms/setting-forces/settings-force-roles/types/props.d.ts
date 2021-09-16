import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
    data: ForceData
    handleChangeForce: (obj: ForceData) => void
    forces: ForceData[]
    /** If this role is `Game Control` - a role which cannot be deleted */
    onDeleteGameControl?: (role: Role) => void
}
