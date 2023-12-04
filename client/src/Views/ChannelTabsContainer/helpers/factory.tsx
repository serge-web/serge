import React from 'react'
import { TabNode, TabSetNode } from 'flexlayout-react'
import _ from 'lodash'
import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_PLANNING, Phase } from 'src/config'
import { PlayerUiActionTypes, ChannelPlanning, ForceData, ChannelTypes, ChannelUI, MessageInfoTypeClipped, MessageInteraction, MessagePlanning, PlayerUi } from 'src/custom-types'
import { mockPlanningMessages } from './mock-message-data'
import { getAllWargameMessages, saveMessage, turnPeriods } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import ChatChannel from '../../../Components/ChatChannel'
import CollabChannel from '../../../Components/CollabChannel'
import PlanningChannel from '../../../Components/pf-planning/planning-channel'

import { saveNewActivityTimeMessage } from '../../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'

type Factory = (node: TabNode) => React.ReactNode

/** convert phase as a string to the enum type
 * Note: we were using Phase[state.phase], but it only
 * accepted the capitalised value. That's why this 
 * convenience function was created.
 */

const factory = (state: PlayerUi, dispatch: React.Dispatch<PlayerUiActionTypes>, reduxDisplatch: React.Dispatch<any>): Factory => {  
  return (node: TabNode): React.ReactNode => {
    /** helper to determine if the specified channel should be rendered */
    const renderThisChannel = (channelData?: ChannelUI): boolean => {
      if (channelData) {
        // always render the special channels, since the user may have
        // a partially completed form/document in it - we don't want to
        // lose that content.  Note: there _Shouldn't_ be a performance
        // hit, since the content in those channels won't be changing
        const cType = channelData.cData.channelType
        if (cType === CHANNEL_COLLAB || cType === CHANNEL_CUSTOM || cType === CHANNEL_CHAT || cType === CHANNEL_PLANNING) {
          return true
        }
      }
      return node.isVisible()
    }

    /**
     * If a maximized tabset exists but the current tabset node is not this one
     * Do not render it
     */
    const hasMaximizeTab = node.getModel().getMaximizedTabset()
    const tabSetNode = node.getParent() as TabSetNode
    if (hasMaximizeTab && !tabSetNode.isMaximized()) {
      return
    }
    
    if (_.isEmpty(state.channels)) return
    const channel = state.channels[node.getId()]
    if (!channel || !renderThisChannel(channel)) {
      return null
    }
    const allTemplates = Object.values(state.allTemplatesByKey)
    const channelData: ChannelTypes = channel.cData
    const isV3 = !!channelData.channelType
    if (isV3) {
      switch (channelData.channelType) {
        case CHANNEL_COLLAB:
          return <CollabChannel channelId={channel.uniqid} />
        case CHANNEL_CHAT:
          return <ChatChannel channelId={channel.uniqid} />
        case CHANNEL_CUSTOM:
          return <ChatChannel isCustomChannel={true} channelId={channel.uniqid} />
        case CHANNEL_PLANNING:
          // TODO: take this template id from the channel definition
          const adjudicationTemplateId = 'p9adjudicate'
          // NOTE: block of code to force mock messages into database
          const writeData = false
          if (writeData) {
            console.clear()
            const mockPlanningMessages2 = mockPlanningMessages
            console.log('channel', channel.messages, channel.messages === undefined, channel.messages?.length)
            if (channel.messages === undefined || channel.messages.length <= 5) {
              // push them
              console.log('about to store', mockPlanningMessages2.length, ' to ', state.currentWargame)
              mockPlanningMessages2.forEach((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => {
                const asAny = msg as any
                const savePromise = saveMessage(state.currentWargame, asAny.details, asAny.message)
                savePromise()
                console.log('stored', asAny.details)
              })
            }
          }
          return <PlanningChannel
            allTemplates={allTemplates}
            adjudicationTemplate={state.allTemplatesByKey[adjudicationTemplateId]}
            channelId={channel.uniqid}
            messages={channel.messages as Array<MessagePlanning | MessageInteraction | MessageInfoTypeClipped>}
            channel={channel.cData as ChannelPlanning}
            selectedRoleId={state.selectedRole}
            selectedRoleName={state.selectedRoleName}
            currentWargame={state.currentWargame}
            selectedForce={state.selectedForce as ForceData}
            attributeTypes={state.attributeTypes}
            isUmpire={state.isUmpire}
            phase={state.phase as Phase}
            allForces={state.allForces}
            allPeriods={state.allPeriods}
            platformTypes={state.allPlatformTypes}
            gameDate={state.gameDate}
            currentTurn={state.currentTurn}
            gameTurnLength={state.gameTurnTime}
            // @ts-ignore
            onTurnPeriods={turnPeriods}
            dispatch={dispatch}
            // @ts-ignore
            getAllWargameMessages={getAllWargameMessages}
            // @ts-ignore
            // saveArchiveMessage={ArchivePostBack}
            // @ts-ignore
            saveMessage={saveMessage}
            reduxDispatch={reduxDisplatch}
            // @ts-ignore
            saveNewActivityTimeMessage={saveNewActivityTimeMessage}
            forcePlanningActivities={state.perForceActivities}
            areas={state.areas}
            forceTemplateData={state.forceTemplateData}
          />
        default:
          console.log('not yet handling', channelData)
          return null
      }
    } else {
      return <>This is a legacy channel. It is not being rendered.</>
    }
  }
}

export default factory
