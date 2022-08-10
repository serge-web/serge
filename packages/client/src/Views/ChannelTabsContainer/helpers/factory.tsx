import React from 'react'
import { MessageMap, PlayerUi, MappingConstraints, ChannelUI, ChannelMapping } from '@serge/custom-types'
import {
  FORCE_LAYDOWN,
  PERCEPTION_OF_CONTACT,
  STATE_OF_WORLD,
  CREATE_TASK_GROUP,
  LEAVE_TASK_GROUP,
  HOST_PLATFORM,
  SUBMIT_PLANS,
  DELETE_PLATFORM,
  VISIBILITY_CHANGES,
  CHANNEL_MAPPING,
  Phase,
  CHANNEL_COLLAB,
  CHANNEL_CUSTOM,
  CHANNEL_CHAT,
  UPDATE_MARKER,
  DELETE_MARKER,
  UMPIRE_LAYDOWN
} from '@serge/config'
import { sendMapMessage, isChatChannel } from '@serge/helpers'
import { TabNode, TabSetNode } from 'flexlayout-react'
import { saveMapMessage } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { Mapping, Assets, HexGrid, InfoMarkers } from '@serge/components'
import _ from 'lodash'
import ChatChannel from '../../../Components/ChatChannel'

import CollabChannel from '../../../Components/CollabChannel'
import findChannelByID from './findChannelByID'

type Factory = (node: TabNode) => React.ReactNode

/** convert phase as a string to the enum type
 * Note: we were using Phase[state.phase], but it only
 * accepted the capitalised value. That's why this 
 * convenience function was created.
 */
const phaseFor = (phase: string): Phase => {
  return phase === 'planning' ? Phase.Planning : Phase.Adjudication
}

const factory = (state: PlayerUi): Factory => {
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
        if (cType === CHANNEL_COLLAB || cType === CHANNEL_MAPPING) {
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

    const matchedChannel = findChannelByID(state.channels, node.getId())
    if (!matchedChannel || !renderThisChannel(matchedChannel[1])) {
      return null
    }
    const channelName = node.getName().toLowerCase()
    const channelDefinition = state.allChannels.find((channel) => channel.uniqid === node.getId())
    if (!channelDefinition) {
      // ok, this channel has been deleted
      console.log('channel definition not found, presumed deleted')
    } else {
      // sort out if it's a modern channel
      const v3Channel = channelDefinition
      const isV3 = !!v3Channel.channelType
      if (isV3) {
        switch (v3Channel.channelType) {
          case CHANNEL_COLLAB:
            return <CollabChannel channelId={matchedChannel[0]} />
          case CHANNEL_CHAT:
            return <ChatChannel channelId={matchedChannel[0]} />
          case CHANNEL_MAPPING: {
            const channel = matchedChannel[1].cData as ChannelMapping
            const constraints = channel.constraints
            return renderMap(node.getId(), constraints, channel)
          }
          case CHANNEL_CUSTOM:
            return <ChatChannel isCustomChannel={true} channelId={matchedChannel[0]} />
          default:
            console.log('not yet handling', v3Channel)
        }
      } else {
        if (channelName === CHANNEL_MAPPING) {
          return <div>Legacy mapping channel not supported</div>
        } else if (matchedChannel.length) {
          // find out if channel just contains chat template
          if (isChatChannel(channelDefinition)) {
            return <ChatChannel channelId={matchedChannel[0]} />
          } else {
            console.log('Not rendering channel for ', channelDefinition)
          }
        }
      }
    }
  }
}

export default factory
