export default interface PropTypes {
  wargameTitle: string
  selectedForce: {
    name: string
    color: string
    icon?: string
  }
  selectedRoleId: string
  selectedRoleName: string
  chatChannel: any
}
