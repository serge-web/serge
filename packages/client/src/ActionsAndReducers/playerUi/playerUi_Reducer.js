import ActionConstant from '../ActionConstants'
import chat from '../../Schemas/chat.json'
import copyState from '../../Helpers/copyStateHelper'
import handleVisibilityChanges from './helpers/handleVisibilityChanges'
import handlePerceptionChange from './helpers/handlePerceptionChanges'
import handleStateOfWorldChanges from './helpers/handleStateOfWorldChanges'
import handleForceLaydownChanges from './helpers/handleForceLaydownChanges'
import {
  CHAT_CHANNEL_ID,
  expiredStorage,
  LOCAL_STORAGE_TIMEOUT,
  FORCE_LAYDOWN,
  VISIBILIY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD
} from '../../consts'
import _ from 'lodash'
import uniqId from 'uniqid'
import handlePlansSubmittedChanges from './helpers/handlePlansSubmittedChanges'

export const initialState = {
  selectedForce: '',
  forceColor: '',
  selectedRole: '',
  isObserver: false,
  controlUi: false,
  currentTurn: 0,
  phase: '',
  gameDate: '',
  gameTurnTime: 0,
  realtimeTurnTime: 0,
  turnEndTime: '',
  adjudicationStartTime: 0,
  gameDescription: '',
  currentWargame: '',
  wargameTitle: '',
  chatChannel: {
    name: CHAT_CHANNEL_ID,
    template: chat,
    messages: []
  },
  channels: {},
  allChannels: [],
  allForces: [],
  allTemplates: [],
  allPlatformTypes: [],
  showObjective: false,
  wargameInitiated: false,
  feedbackMessages: [],
  tourIsOpen: false,
  modalOpened: null
}

export const playerUiReducer = (state = initialState, action) => {
  const newState = copyState(state)
  let messages
  const channels = {}
  const matchedForce = (p, selectedForce) => p.forceUniqid === selectedForce
  const matchedRole = (role, selectedRole) => role.value === selectedRole
  const matchedForceAndRole = (p, { selectedForce, selectedRole }) => {
    return matchedForce(p, selectedForce) && p.roles.some(p => matchedRole(p, selectedRole))
  }
  const matchedAllRoles = (p, selectedForce) => {
    return matchedForce(p, selectedForce) && p.roles.length === 0
  }
  const checkParticipantStates = (channel, newState) => {
    const participatingRole = channel.participants.find(p => matchedForceAndRole(p, newState))
    const participatingForce = channel.participants.find(p => matchedForce(p, newState.selectedForce))
    if (!participatingForce && !newState.isObserver) return {}

    const isParticipant = !!participatingRole
    const allRolesIncluded = channel.participants.find(p => matchedAllRoles(p, newState.selectedForce))
    return {
      isParticipant,
      participatingRole,
      allRolesIncluded
    }
  }
  const getParticipantStates = (channel, newState) => {
    let chosenTemplates
    let templates
    let observing = false
    const { isParticipant, participatingRole, allRolesIncluded } = checkParticipantStates(channel, newState)
    if (participatingRole) {
      chosenTemplates = participatingRole.templates
    } else if (allRolesIncluded) {
      chosenTemplates = allRolesIncluded.templates
    } else {
      chosenTemplates = []
    }
    if (isParticipant || allRolesIncluded) {
      if (chosenTemplates.length === 0) {
        templates = newState.allTemplates.filter((template) => template.title === 'Chat')
      } else {
        templates = chosenTemplates.map((template) => template.value)
      }
    }

    if (newState.isObserver && !isParticipant && !allRolesIncluded) {
      observing = true
      templates = []
    }
    return { isParticipant, allRolesIncluded, observing, templates }
  }

  const modifyForcesBasedOnMessage = (allForces, message) => {
    let res = allForces
    if (message.details && message.details.forceDelta) {
      res = handleForceDelta(message, allForces)
    }
    return res
  }

  const handleForceDelta = (/* object */message, /* object */ allForces) => {
    const msgType = message.details.messageType
    if (!msgType) {
      console.error('problem - we need message type in ', message)
    } else {
      console.log('Player reducer handling forceDelta:', msgType)
    }
    switch (msgType) {
      case FORCE_LAYDOWN:
        return handleForceLaydownChanges(message, allForces)
      case VISIBILIY_CHANGES:
        return handleVisibilityChanges(message, allForces)
      case PERCEPTION_OF_CONTACT:
        return handlePerceptionChange(message, allForces)
      case SUBMIT_PLANS:
        return handlePlansSubmittedChanges(message, allForces)
      case STATE_OF_WORLD:
        return handleStateOfWorldChanges(message, allForces)
      default:
        console.error('failed to create player reducer handler for:' + msgType)
        return allForces
    }
  }

  const reduceTurnMarkers = (message) => {
    if (message.infoType) {
      return message.gameTurn
    } else {
      return message._id
    }
  }

  switch (action.type) {
    case ActionConstant.SET_CURRENT_WARGAME_PLAYER:
      newState.currentWargame = action.payload.name
      newState.wargameTitle = action.payload.wargameTitle
      newState.wargameInitiated = action.payload.wargameInitiated
      newState.currentTurn = action.payload.gameTurn
      newState.phase = action.payload.phase
      newState.showAccessCodes = action.payload.data.overview.showAccessCodes
      newState.gameDate = action.payload.data.overview.gameDate
      newState.gameTurnTime = action.payload.data.overview.gameTurnTime
      newState.adjudicationStartTime = action.payload.adjudicationStartTime
      newState.realtimeTurnTime = action.payload.data.overview.realtimeTurnTime
      newState.timeWarning = action.payload.data.overview.timeWarning
      newState.turnEndTime = action.payload.turnEndTime
      newState.gameDescription = action.payload.data.overview.gameDescription
      newState.allChannels = action.payload.data.channels.channels
      newState.allForces = action.payload.data.forces.forces
      // legacy versions of the wargame lacked a player types element, don't
      // trip over in its absence
      if (action.payload.data.platform_types) {
        newState.allPlatformTypes = action.payload.data.platform_types.platformTypes
      }
      break

    case ActionConstant.SET_FORCE:
      newState.selectedForce = action.payload
      newState.forceColor = newState.allForces.find((force) => force.uniqid === action.payload).color
      break

    case ActionConstant.SET_ROLE:
      newState.selectedRole = action.payload.name
      newState.controlUi = action.payload.control
      newState.isObserver = action.payload.isObserver
      newState.isInsightViewer = action.payload.isInsightViewer
      break

    case ActionConstant.SET_ALL_TEMPLATES_PLAYERUI:
      newState.allTemplates = action.payload
      break

    case ActionConstant.SHOW_HIDE_OBJECTIVES:
      newState.showObjective = !newState.showObjective
      break

    case ActionConstant.SET_FEEDBACK_MESSAGES:
      newState.feedbackMessages = action.payload
      break

    case ActionConstant.SET_LATEST_FEEDBACK_MESSAGE:
      newState.feedbackMessages.unshift(action.payload)
      break

    case ActionConstant.SET_LATEST_WARGAME_MESSAGE:
      if (action.payload.hasOwnProperty('infoType')) {
        const message = {
          details: {
            channel: `infoTypeChannelMarker${uniqId.time()}`
          },
          infoType: true,
          gameTurn: action.payload.gameTurn
        }

        for (const channelId in newState.channels) {
          const matchedChannel = newState.allChannels.find((channel) => channel.uniqid === channelId)
          if (!matchedChannel) {
            delete newState.channels[channelId]
          } else {
            const isParticipant = matchedChannel.participants.some(p => matchedForceAndRole(p, newState))
            const allRolesIncluded = matchedChannel.participants.some(p => matchedAllRoles(p, newState.selectedForce))

            if (isParticipant || allRolesIncluded || newState.isObserver) {
              // ok, this is a channel we wish to display
            } else {
              // no, we no longer need to display this channel
              delete newState.channels[channelId]
            }
          }
        }

        // create any new channels & add to current channel
        newState.allChannels.forEach((channel) => {
          const channelActive = channel.participants.some(p => matchedForceAndRole(p, newState))
          const allRoles = channel.participants.some(p => matchedAllRoles(p, newState.selectedForce))

          // rename channel
          if (
            (channelActive || allRoles) &&
            !!newState.channels[channel.uniqid]
          ) {
            newState.channels[channel.uniqid].name = channel.name
          }

          // update observing status when observer removed from channel participants
          if (
            (!channelActive && !allRoles) &&
            newState.isObserver &&
            !!newState.channels[channel.uniqid]
          ) {
            newState.channels[channel.uniqid].observing = true
          } else if (
            (channelActive || allRoles) &&
            newState.isObserver &&
            !!newState.channels[channel.uniqid]
          ) {
            newState.channels[channel.uniqid].observing = false
          }

          // if channel already created update templates.
          if (
            (channelActive || allRoles) &&
            !!newState.channels[channel.uniqid]
          ) {
            const { templates } = getParticipantStates(channel, newState)
            newState.channels[channel.uniqid].templates = templates
          }

          // if channel already created
          if (
            (channelActive || allRoles) &&
            !!newState.channels[channel.uniqid] &&
            !newState.channels[channel.uniqid].messages.find((prevMessage) => prevMessage.gameTurn === message.gameTurn)
          ) {
            newState.channels[channel.uniqid].messages.unshift(message)
            return
          }

          // if no channel created yet
          if (
            (channelActive || allRoles) &&
            !newState.channels[channel.uniqid]
          ) {
            const {
              isParticipant,
              allRolesIncluded,
              observing,
              templates
            } = getParticipantStates(channel, newState)

            if (allRolesIncluded || isParticipant || newState.isObserver) {
              channels[channel.uniqid] = {
                name: channel.name,
                templates,
                forceIcons: channel.participants.filter((participant) => participant.forceUniqid !== newState.selectedForce).map((participant) => participant.icon),
                messages: [],
                unreadMessageCount: 0,
                observing
              }
            }
            newState.channels = _.defaults(channels, newState.channels)
          }
        })
      } else if (!action.payload.hasOwnProperty('infoType')) {
        if (action.payload.details.channel === CHAT_CHANNEL_ID) {
          newState.chatChannel.messages.unshift(copyState(action.payload))
        } else if (newState.channels[action.payload.details.channel]) {
          newState.channels[action.payload.details.channel].messages.unshift({
            ...copyState(action.payload),
            hasBeenRead: false,
            isOpen: false
          })

          newState.channels[action.payload.details.channel].unreadMessageCount++
        }
      }

      if (action.payload.details && action.payload.details.forceDelta) {
        // ok, this message relates to the wargame forces data changing. Pass
        // it to the handler
        newState.allForces = modifyForcesBasedOnMessage(newState.allForces, { ...action.payload.message, details: action.payload.details })
      }
      break

    case ActionConstant.SET_ALL_MESSAGES:
      messages = action.payload.map((message) => {
        if (message.hasOwnProperty('infoType')) {
          return {
            details: {
              channel: `infoTypeChannelMarker${uniqId.time()}`
            },
            infoType: true,
            gameTurn: message.gameTurn
          }
        }
        return {
          ...message,
          hasBeenRead: expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === 'read',
          isOpen: false
        }
      })

      messages = _.uniqBy(messages, reduceTurnMarkers)

      newState.chatChannel.messages = messages.filter((message) => message.details.channel === newState.chatChannel.name)

      newState.allChannels.forEach((channel) => {
        const {
          isParticipant,
          allRolesIncluded,
          observing,
          templates
        } = getParticipantStates(channel, newState)

        if (!newState.isObserver && !isParticipant && !allRolesIncluded) return

        if (allRolesIncluded || isParticipant || newState.isObserver) {
          channels[channel.uniqid] = {
            name: channel.name,
            templates,
            forceIcons: channel.participants.filter((participant) => participant.forceUniqid !== newState.selectedForce).map((participant) => participant.icon),
            messages: messages.filter((message) => message.details.channel === channel.uniqid || message.infoType === true),
            unreadMessageCount: messages.filter((message) => {
              if (message.hasOwnProperty('infoType')) {
                return false
              } else {
                return (
                  expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null &&
                  message.details.channel === channel.uniqid
                )
              }
            }).length,
            observing
          }
        }

        newState.channels = channels
      })

      // also look for map related messages
      action.payload.forEach(msg => {
        // check it's not an infoType
        if (!msg.infoType) {
          // do we have forceDelta in the details
          if (msg.details && msg.details.forceDelta) {
            // yes, pass it into the force reducer
            newState.allForces = modifyForcesBasedOnMessage(newState.allForces, { ...msg.message, details: msg.details })
          }
        }
      })

      break

    case ActionConstant.OPEN_MESSAGE:
      // mutating `messages` array - copyState at top of switch
      for (let i = 0, len = newState.channels[action.payload.channel].messages.length; i < len; i++) {
        if (newState.channels[action.payload.channel].messages[i]._id === action.payload.message._id) {
          newState.channels[action.payload.channel].messages[i].isOpen = true
          newState.channels[action.payload.channel].messages[i].hasBeenRead = true
          expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${action.payload.message._id}`, 'read', LOCAL_STORAGE_TIMEOUT)
          break
        }
      }

      newState.channels[action.payload.channel].unreadMessageCount = newState.channels[action.payload.channel].messages.filter((message) => {
        if (message.hasOwnProperty('infoType')) {
          return false
        } else {
          return expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null
        }
      }).length

      break

    case ActionConstant.CLOSE_MESSAGE:
      // mutating messages array - copyState at top of switch
      for (let i = 0, len = newState.channels[action.payload.channel].messages.length; i < len; i++) {
        if (newState.channels[action.payload.channel].messages[i]._id === action.payload.message._id) {
          newState.channels[action.payload.channel].messages[i].isOpen = false
          break
        }
      }

      break

    case ActionConstant.MARK_ALL_AS_READ:
      newState.channels[action.channel].unreadMessageCount = 0

      newState.channels[action.channel].messages.forEach((message) => {
        message.hasBeenRead = true
        expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`, 'read', LOCAL_STORAGE_TIMEOUT)
      })

      break

    case ActionConstant.OPEN_TOUR:
      newState.tourIsOpen = action.isOpen
      break

    case ActionConstant.OPEN_MODAL:
      newState.modalOpened = action.modalName
      break

    case ActionConstant.CLOSE_MODAL:
      newState.modalOpened = null
      break

    default:
      return newState
  }

  return newState
}
