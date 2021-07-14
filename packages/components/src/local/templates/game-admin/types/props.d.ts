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
  selectedRole: string
  chatChannel: any
}
