import { ForceData } from '@serge/custom-types'

export default interface PropTypes {
    data: ForceData
    handleChangeForce: (obj: ForceData) => void
    forces: ForceData[]
    /** Handler for when user tries to delete role with Game Control privileges */
    onDeleteGameControl?: (role: Role) => void
}
