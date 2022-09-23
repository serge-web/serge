import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { ChannelPlanning, CoreMessage, MessagePlanning, PlainInteraction } from '@serge/custom-types'
import { LatLngExpression } from 'leaflet'
import React, { useEffect, useState } from 'react'
import SupportMapping from '../support-mapping'
import SupportPanel from '../support-panel'
import PropTypes from './types/props'

export const PlanninChannel2: React.FC<PropTypes> = ({
  state,
  channelId,
  dispatch,
  reduxDispatch,
  getAllWargameMessages,
  markUnread,
  markAllAsRead,
  saveNewActivityTimeMessage,
  openMessage,
  saveMessage
}) => {
  const { currentWargame, selectedForce, allPlatformTypes: platformTypes, channels, isUmpire, selectedRoleName, allForces, selectedRole, gameDate, currentTurn } = state

  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [position] = useState<LatLngExpression>([51.505, -0.09])
  const [zoom] = useState<number>(12);

  const channelUI = channels[channelId]
  const channelPlanning = channelUI.cData as ChannelPlanning
  if (!selectedForce) {
    throw new Error('selectedForce is undefined')
  }

  useEffect(() => {
    const channelClassName = channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (channels[channelId].messages!.length === 0) {
      getAllWargameMessages(currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const onReadAll = (): void => {
    dispatch(markAllAsRead(channelId))
  }

  // TODO: we have some wrong typing here.  The messages for this channel
  // will all be chat messages plus turn markers.  But, that doesn't match
  // what data is stored in the the channels dictionary
  const messages = channels[channelId].messages as any

  // drop the turn markers
  const planningMessages = messages.filter((msg: CoreMessage) => msg.messageType !== INFO_MESSAGE_CLIPPED)

  const onRead = (detail: MessagePlanning): void => {
    dispatch(openMessage(channelId, detail as any as MessageChannel))
  }

  const onUnread = (message: MessagePlanning): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channelId, message as any as MessageChannel))
  }

  const newActiveMessage = (roleId: string, activityMessage: string) => {
    // we don't have a message id at this point, player has only opened empty template
    const newMessage: PlainInteraction = {
      aType: activityMessage
    }
    saveNewActivityTimeMessage(roleId, newMessage, currentWargame)(reduxDispatch)
  }

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <SupportPanel
        channel={channelPlanning}
        platformTypes={platformTypes}
        messages={planningMessages}
        onReadAll={onReadAll}
        onUnread={onUnread}
        onRead={onRead}
        templates={channelUI.templates || []}
        activityTimeChanel={newActiveMessage}
        saveMessage={saveMessage}
        saveNewActivityTimeMessage={saveNewActivityTimeMessage}
        dispatch={reduxDispatch}
        currentWargame={currentWargame}
        isUmpire={isUmpire}
        selectedRoleName={selectedRoleName}
        selectedRoleId={selectedRole}
        selectedForce={selectedForce}
        allForces={allForces}
        gameDate={gameDate}
        currentTurn={currentTurn}
      />
      <SupportMapping position={position} zoom={zoom} />
    </div>
  )
}

export default PlanninChannel2
