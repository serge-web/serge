import { MessageCustom, Role } from '@serge/custom-types'
export default interface Props {
  onChange?: (nextMessage: MessageCustom) => void
  message: MessageCustom
  /** role of logged in player */
  roleName: Role['name']
  roleId: Role['id']
  /** if this player is from the UMPIRE force */
  isUmpire: boolean
  /** if this player has "RFI Manager" attribute in their role */
  isRFIManager: boolean
}
