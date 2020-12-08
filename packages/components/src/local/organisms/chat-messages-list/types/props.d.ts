export default interface Props {
  /**
   * if player is from umpire force
   */
  isUmpire?: boolean

  content?: string

  privateMessage?: string

  messages?: Array<any>

  colors?: Array<any>

  currentForce? : {name: string}

  onSendMessage: Function

  onChange: Function

}
