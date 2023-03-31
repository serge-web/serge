import { Assets, HexGrid, InfoMarkers, Mapping, PlanningChannel } from '@serge/components'
import {
  CHANNEL_CHAT, CHANNEL_COLLAB,
  CHANNEL_CUSTOM, CHANNEL_MAPPING, CHANNEL_PLANNING, CLONE_MARKER, CREATE_TASK_GROUP, DELETE_MARKER, DELETE_PLATFORM, FORCE_LAYDOWN, HOST_PLATFORM, LEAVE_TASK_GROUP, PERCEPTION_OF_CONTACT, Phase, STATE_OF_WORLD, SUBMIT_PLANS, UMPIRE_LAYDOWN, UPDATE_MARKER, VISIBILITY_CHANGES
} from '@serge/config'
import { ChannelMapping, PlayerUiActionTypes, ChannelPlanning, ChannelTypes, ChannelUI, MappingConstraints, MessageAdjudicationOutcomes, MessageDetails, MessageInfoTypeClipped, MessageInteraction, MessageMap, MessagePlanning, PlayerUi } from '@serge/custom-types'
import { sendMapMessage } from '@serge/helpers'
import { TabNode, TabSetNode } from 'flexlayout-react'
import _ from 'lodash'
import React from 'react'
import { getAllWargameMessages, markAllAsRead, markUnread, openMessage, saveMapMessage, saveBulkMessages, saveMessage, turnPeriods } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import ChatChannel from '../../../Components/ChatChannel'

import { saveNewActivityTimeMessage } from '../../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import CollabChannel from '../../../Components/CollabChannel'
import { mockPlanningMessages } from './mock-message-data'

type Factory = (node: TabNode) => React.ReactNode

/** convert phase as a string to the enum type
 * Note: we were using Phase[state.phase], but it only
 * accepted the capitalised value. That's why this 
 * convenience function was created.
 */
const phaseFor = (phase: string): Phase => {
  return phase === 'planning' ? Phase.Planning : Phase.Adjudication
}

const factory = (state: PlayerUi, dispatch: React.Dispatch<PlayerUiActionTypes>, reduxDisplatch: React.Dispatch<any>): Factory => {  
  const adjudicatePostBack = (details: MessageDetails, outcomes: MessageAdjudicationOutcomes): void => {
    saveMapMessage(state.currentWargame, details, outcomes)
  }

  const ArchivePostBack = (archiveMark: MessagePlanning[]): void => {
    saveBulkMessages(state.currentWargame, archiveMark)
  }

  const mapPostBack = (form: string, payload: MessageMap, channelID: string | number = ''): void => {
    if (channelID === '') return
    if (typeof channelID === 'number') channelID = channelID.toString()
    const turnNumber = state.currentTurn

    switch (form) {
      case UPDATE_MARKER:
        sendMapMessage(UPDATE_MARKER, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case DELETE_MARKER:
        sendMapMessage(DELETE_MARKER, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case CLONE_MARKER:
        sendMapMessage(CLONE_MARKER, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case UMPIRE_LAYDOWN:
        sendMapMessage(UMPIRE_LAYDOWN, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case FORCE_LAYDOWN:
        sendMapMessage(FORCE_LAYDOWN, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case VISIBILITY_CHANGES:
        sendMapMessage(VISIBILITY_CHANGES, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case PERCEPTION_OF_CONTACT:
        sendMapMessage(PERCEPTION_OF_CONTACT, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case SUBMIT_PLANS:
        sendMapMessage(SUBMIT_PLANS, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case STATE_OF_WORLD:
        sendMapMessage(STATE_OF_WORLD, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case CREATE_TASK_GROUP:
        sendMapMessage(CREATE_TASK_GROUP, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case LEAVE_TASK_GROUP:
        sendMapMessage(LEAVE_TASK_GROUP, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case HOST_PLATFORM:
        sendMapMessage(HOST_PLATFORM, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      case DELETE_PLATFORM:
        sendMapMessage(DELETE_PLATFORM, payload, state.selectedForce, channelID, state.selectedRole, state.selectedRoleName, state.currentWargame, turnNumber, saveMapMessage)
        break
      default:
        console.log('Handler not created for', form)
    }
  }

  return (node: TabNode): React.ReactNode => {
    /** helper to determine if the specified channel should be rendered */
    const renderThisChannel = (channelData?: ChannelUI): boolean => {
      if (channelData) {
        // always render the special channels, since the user may have
        // a partially completed form/document in it - we don't want to
        // lose that content.  Note: there _Shouldn't_ be a performance
        // hit, since the content in those channels won't be changing
        const cType = channelData.cData.channelType
        if (cType === CHANNEL_COLLAB || cType === CHANNEL_MAPPING || cType === CHANNEL_CUSTOM || cType === CHANNEL_CHAT || cType === CHANNEL_PLANNING) {
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

    // re-usable map render function. Note: mapping constraints isn't optional.  So
    // we use the param to keep the compiler happy, but we
    // don't expect to use it.
    const renderMap = (channelid: string, mappingConstraints: MappingConstraints, channel?: ChannelMapping) => <Mapping
      mappingConstraints={state.mappingConstraints || mappingConstraints}
      forces={state.allForces}
      mapBar={true}
      platforms={state.allPlatformTypes}
      phase={phaseFor(state.phase)}
      turnNumber={state.currentTurn}
      infoMarkers={state.infoMarkers}
      markerIcons={state.markerIcons}
      playerForce={state.selectedForce ? state.selectedForce.uniqid : ''}
      playerRole={state.selectedRole}
      isGameControl={state.isGameControl}
      isUmpire={state.isUmpire}
      channelID={channelid}
      channel={channel}
      mapPostBack={mapPostBack}
      gameTurnTime={state.gameTurnTime}
      wargameInitiated={state.wargameInitiated}
    >
      <HexGrid />
      <InfoMarkers />
      <Assets />
    </Mapping>

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
        case CHANNEL_MAPPING: {
          const channelD = channel.cData as ChannelMapping
          const constraints = channelD.constraints
          return renderMap(node.getId(), constraints, channel.cData as ChannelMapping)
        }
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
            messages={channel.messages}
            channel={channel.cData as ChannelPlanning}
            selectedRoleId={state.selectedRole}
            selectedRoleName={state.selectedRoleName}
            currentWargame={state.currentWargame}
            selectedForce={state.selectedForce}
            attributeTypes={state.attributeTypes}
            isUmpire={state.isUmpire}
            phase={state.phase}
            allForces={state.allForces}
            allPeriods={state.allPeriods}
            platformTypes={state.allPlatformTypes}
            gameDate={state.gameDate}
            currentTurn={state.currentTurn}
            gameTurnLength={state.gameTurnTime}
            onTurnPeriods={turnPeriods}
            dispatch={dispatch}
            mapPostBack={adjudicatePostBack}
            getAllWargameMessages={getAllWargameMessages}
            markAllAsRead={markAllAsRead}
            markUnread={markUnread}
            openMessage={openMessage}
            saveArchiveMessage={ArchivePostBack}
            saveMessage={saveMessage}
            reduxDispatch={reduxDisplatch}
            saveNewActivityTimeMessage={saveNewActivityTimeMessage}
            forcePlanningActivities={state.perForceActivities}
            areas={state.areas}
            forceTemplateData={state.forceTemplateData}
          />
        default:
          console.log('not yet handling', channelData)
      }
    } else {
      return <>This is a legacy channel. It is not being rendered.</>
    }
  }
}

export default factory
