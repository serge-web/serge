import { setMessageState } from '@serge/helpers'
import { getKeyCOA,getKeyRFI } from './get-key'
import Props, { PropsCOA, PropsRFI } from '../types/props'
import { CollaborativeMessageStates } from '@serge/config'
import { TYPE_COA } from '..'
import { COAPermissions, getCoaPermissions } from './get-coa-perrmisions'

const handleSetAllAsReadCOA = (props: PropsCOA, {canCollaborate, canReleaseMessages, canUnClaimMessages}: COAPermissions): void => {
  for (const message of props.messages) {
    // flag for if we tell original sender of RFI that it has been responded to
    const collab = message.details.collaboration
    const status = collab && collab.status
    const isFinalised = status === CollaborativeMessageStates.Closed ||
      status === CollaborativeMessageStates.Finalized ||
      status === CollaborativeMessageStates.Released
    const isCollabEditChannel = !!props.channel.collabOptions && props.channel.collabOptions.mode === 'edit'
    const key = getKeyCOA(message, canCollaborate, canReleaseMessages, canUnClaimMessages, isFinalised, isCollabEditChannel, props.isUmpire)
    setMessageState(props.currentWargame, props.role.forceName, props.role.roleName, key)
  }
}
const handleSetAllAsReadRFI = ({ rfiMessages, isRFIManager, currentWargame, role }: PropsRFI): void => {
  for (const message of rfiMessages) {
    const key = getKeyRFI(message, isRFIManager)
    setMessageState(currentWargame, role.forceName, role.roleName, key)
  }
}

export const handleSetAllAsRead=(props:Props, handleUpdateUnreadCount:(nexCount?: number) => boolean): void => {
  if(props.type===TYPE_COA) {
    const permissions = getCoaPermissions(props.channel, props.role)
    handleSetAllAsReadCOA(props, permissions)
  } else {
    handleSetAllAsReadRFI(props)
  }
  handleUpdateUnreadCount(0)
}
