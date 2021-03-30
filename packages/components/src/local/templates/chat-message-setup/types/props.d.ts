export default interface Props {
  selectedForce: {
    name: string
    color: string
    icon?: string
  }
  /** the force name is present in the selectedForce object,
   * but we're providing it as separate field so we can use
   * StoryBook to "drive" the UI
   */
  forceName: string
  selectedRole: string
  isUmpire: boolean
  chatChannel: any
}
