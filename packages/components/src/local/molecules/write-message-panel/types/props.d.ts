export default interface Props {
  /**
   * Header border color
   */
  borderColor?: string
  /**
   * if player is from umpire force
   */
  isUmpire?: boolean

  content?:String

  privateMessage?:String

  onSendMessage: Function

  onChange: Function
}
