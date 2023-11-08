import { Role } from 'src/custom-types'

export default interface PropTypes {
  wargameTitle: string
  selectedForce: {
    name: string
    color: string
    /**
    * @deprecated use iconURL instead
    */
    icon?: string
    iconURL: string
  }
  selectedRole: Role['roleId']
  selectedRoleName: Role['name']
  chatChannel: any
  turnNumber: number
}
