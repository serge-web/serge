import { setMessageState } from '@serge/helpers'
import { getKeyCOA } from './get-key'
import { Props } from '../types/props'
import { CollaborativeMessageStates } from '@serge/config'
import { COAPermissions, getCoaPermissions } from './get-coa-perrmisions'

const handleSetAllAsReadCOA = (props: Props, { canCollaborate, canReleaseMessages, canUnClaimMessages }: COAPermissions): void => {
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

export const handleSetAllAsRead = (props: Props, handleUpdateUnreadCount: (nexCount?: number) => boolean): void => {
  const permissions = getCoaPermissions(props.channel, props.role)

  handleSetAllAsReadCOA(props, permissions)
  handleUpdateUnreadCount(0)
}
