import { ForceData, Role } from '@serge/custom-types'
import { Item } from '../../molecules/sortable-list'

export default interface PropTypes {
  data: ForceData
  handleChangeForce: (obj: ForceData) => void
  forces: ForceData[]
  /** Handler for when user tries to delete role with Game Control privileges */
  customDeleteHandler?: (NewItems: Item[], key: number, handleChange: (changedItems: Item[]) => void) => void
  onNewRoleAdded: (role: Role) => void
}
