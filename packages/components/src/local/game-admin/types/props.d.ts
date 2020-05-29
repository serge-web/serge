export default interface PropTypes {
  wargameTitle: string
  selectedForce: {
    name: string
    color: string
    icon?: string
  }
  selectedRole: string
  chatChannel: any
}
