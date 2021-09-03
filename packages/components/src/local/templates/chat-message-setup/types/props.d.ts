export default interface Props {
  selectedForce: {
    name: string
    color: string
    /**
    * @deprecated use iconURL instead
    */
    icon?: string
    iconURL: string
  }
  /** the force name is present in the selectedForce object,
   * but we're providing it as separate field so we can use
   * StoryBook to "drive" the UI
   */
  forceName: string
  selectedRole: Role['roleId']
  selectedRoleName: Role['name']
  isUmpire: boolean
  chatChannel: any
  userId: string
  turnPresentation: TurnFormats
  turnNumber: number
}
