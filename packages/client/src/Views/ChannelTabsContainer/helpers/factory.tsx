import React from 'react'
import { ForceData, MessageMap, PlayerUi, Role, MappingConstraints, ChannelData } from '@serge/custom-types'
import { FORCE_LAYDOWN, 
  PERCEPTION_OF_CONTACT, 
  STATE_OF_WORLD, 
  CREATE_TASK_GROUP, 
  LEAVE_TASK_GROUP, 
  HOST_PLATFORM, 
  SUBMIT_PLANS,
  DELETE_PLATFORM,
  VISIBILITY_CHANGES, 
  Phase } from '@serge/config'
import { sendMapMessage, isChatChannel } from '@serge/helpers'
import { TabNode, TabSetNode } from 'flexlayout-react'
import { saveMapMessage } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { Mapping, Assets, HexGrid } from '@serge/components'
import _ from 'lodash'
import Channel from '../../../Components/Channel'
import ChatChannel from '../../../Components/ChatChannel'
import RfiStatusBoardChannel from '../../../Components/RfiStatusBoardChannel'
import findChannelByName from './findChannelByName'
import { Domain } from '@serge/config'
import { CHANNEL_MAPPING, CHANNEL_RFI_STATUS } from '../../../consts'

type Factory = (node: TabNode) => React.ReactNode

/** utility to find the role for this role name */
const findRole = (roleId: string, forceData: ForceData | undefined): Role => {
  if(forceData) {
    const role = forceData.roles.find((role: Role) => role.roleId === roleId)
    if(role) {
      return role
    }
  }
  throw new Error('Role not found for id:' + roleId);
}

/** convert phase as a string to the enum type
 * Note: we were using Phase[state.phase], but it only
 * accepted the capitalised value. That's why this 
 * convenience function was created.
 */
const phaseFor = (phase: string): Phase => {
  return phase === 'planning' ? Phase.Planning : Phase.Adjudication
}

const factory = (state: PlayerUi): Factory => {

  // provide some default mapping constraints if we aren't supplied with any
  const mappingConstraints: MappingConstraints = state.mappingConstaints || {
    bounds: [[14.194809302, 42.3558566271],[12.401259302, 43.7417816271]],
    tileDiameterMins: 5,
    tileLayer: {
      url: './gulf_tiles/{z}/{x}/{y}.png',
      attribution: 'Generated by QTiles'
    },
    minZoom: 8,
    maxZoom: 13,
    maxNativeZoom: 12,
    minZoomHexes: 8,
    targetDataset: Domain.GULF
  }

  const mapPostBack = (form: string, payload: MessageMap, channelID: string | number = ''): void => {
    if (channelID === '') return
    if (typeof channelID === 'number') channelID = channelID.toString()
    const turnNumber = state.currentTurn

    switch(form) {
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

    const canRenderContent = (channelData?: ChannelData): boolean => {
      // always render the special channels, since the user may have
      // a partially completed form/document in it - we don't want to
      // lose that content.  Note: there _Shouldn't_ be a performance
      // hit, since the content in those channels won't be changing
      if (channelData && channelData.format) {
        return true
      }
      return node.isVisible()
    }

    // sort out if role can submit orders
    const role: Role = findRole(state.selectedRole, state.selectedForce)
    const canSubmitOrders: boolean = !!role.canSubmitPlans

    /**
     * If a maximized tabset exists but the current tabset node is not this one
     * Do not render it
     */
    const hasMaximizeTab = node.getModel().getMaximizedTabset()
    const tabSetNode = node.getParent() as TabSetNode
    if (hasMaximizeTab && !tabSetNode.isMaximized()) {
      return
    }

    // note: we have to convert the bounds that comes from the database
    // from a number array to a Leaflet bounds object.
    // Render the map
    const renderMap = (channelid: string) => <Mapping
        mappingConstraints={mappingConstraints}
        forces={state.allForces}
        platforms={state.allPlatformTypes}
        phase={phaseFor(state.phase)}
        turnNumber={state.currentTurn}
        playerForce={state.selectedForce ? state.selectedForce.uniqid : ''}
        canSubmitOrders={canSubmitOrders}
        channelID = {channelid}
        mapPostBack={mapPostBack}
        gameTurnTime={state.gameTurnTime}
        wargameInitiated={state.wargameInitiated}
        platformTypesByKey={state.allPlatformTypesByKey}
    >
      <Assets />
      <HexGrid/>
    </Mapping>

    if (_.isEmpty(state.channels)) return

    const matchedChannel = findChannelByName(state.channels, node.getName())
    if (!matchedChannel || !canRenderContent(matchedChannel[1])) {
      return null
    }
    const channelName = node.getName().toLowerCase()
    const channelDefinition = state.allChannels.find((channel) => channel.name === node.getName())
    if (channelName === CHANNEL_MAPPING) {
      return renderMap(node.getId())
    } else if (channelName === CHANNEL_RFI_STATUS) {
      return <RfiStatusBoardChannel />
    } else if(matchedChannel.length && channelDefinition) {
        // find out if channel just contains chat template
        return isChatChannel(channelDefinition) ? 
          <ChatChannel channelId={matchedChannel[0]} /> 
        : <Channel channelId={matchedChannel[0]} />
    }
  }
}

export default factory
