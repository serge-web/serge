import { makeStyles } from '@material-ui/styles'
import { SupportPanel } from '@serge/components'
import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { ChannelPlanning, MessageChannel, MessagePlanning, PlainInteraction } from '@serge/custom-types'
import { CoreMessage } from '@serge/custom-types/message'
import '@serge/themes/App.scss'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewActivityTimeMessage } from '../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { getAllWargameMessages, markAllAsRead, markUnread, openMessage, saveMessage } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'

const useStyles = makeStyles({
  root: {
    background: 'url(images/planning_map.png)',
    backgroundRepeat: 'round'
  }
})

const PlanningChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const classes = useStyles()
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const reduxDispatch = useDispatch()
  const channelUI = state.channels[channelId]
  const channelPlanning = channelUI.cData as ChannelPlanning
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { currentWargame, selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const platformTypes = state.allPlatformTypes

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
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
  const messages = state.channels[channelId].messages as any

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
    saveNewActivityTimeMessage(roleId, newMessage, state.currentWargame)(reduxDispatch)
  }

  return (
    <div className={cx(channelTabClass, classes.root)} data-channel-id={channelId}>
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
        isUmpire= {state.isUmpire}
        selectedRoleName= {state.selectedRoleName}
        selectedRoleId= {state.selectedRole}
        selectedForce= {selectedForce}
        allForces= {state.allForces}
        gameDate= {state.gameDate}
        currentTurn= {state.currentTurn}
      />
    </div>
  )
}

export default PlanningChannel
