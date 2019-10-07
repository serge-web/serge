import ActionConstant from '../ActionConstants';
import chat from "../../Schemas/chat.json";
import copyState from "../../Helpers/copyStateHelper";
import {
  CHAT_CHANNEL_ID,
  expiredStorage,
  LOCAL_STORAGE_TIMEOUT
} from "../../consts";
import _ from "lodash";
import uniqId from "uniqid";

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
    messages: [],
  },
  channels: {},
  allChannels: [],
  allForces: [],
  allTemplates: [],
  showObjective: false,
  wargameInitiated: false,
  feedbackMessages: [],
  tourIsOpen: false,
  modalOpened: null,
};

export const playerUiReducer = (state = initialState, action) => {
  let newState = copyState(state);
  let messages;
  let channels = {};

  switch (action.type) {
    case ActionConstant.SET_CURRENT_WARGAME_PLAYER:
      newState.currentWargame = action.payload.name;
      newState.wargameTitle = action.payload.wargameTitle;
      newState.wargameInitiated = action.payload.wargameInitiated;
      newState.currentTurn = action.payload.gameTurn;
      newState.phase = action.payload.phase;
      newState.showAccessCodes = action.payload.data.overview.showAccessCodes;
      newState.gameDate = action.payload.data.overview.gameDate;
      newState.gameTurnTime = action.payload.data.overview.gameTurnTime;
      newState.adjudicationStartTime = action.payload.adjudicationStartTime;
      newState.realtimeTurnTime = action.payload.data.overview.realtimeTurnTime;
      newState.timeWarning = action.payload.data.overview.timeWarning;
      newState.turnEndTime = action.payload.turnEndTime;
      newState.gameDescription = action.payload.data.overview.gameDescription;
      newState.allChannels = action.payload.data.channels.channels;
      newState.allForces = action.payload.data.forces.forces;
      break;

    case ActionConstant.SET_FORCE:
      newState.selectedForce = action.payload;
      newState.forceColor = newState.allForces.find((force) => force.uniqid === action.payload).color;
      break;

    case ActionConstant.SET_ROLE:
      newState.selectedRole = action.payload.name;
      newState.controlUi = action.payload.control;
      newState.isObserver = action.payload.isObserver;
      newState.isInsightViewer = action.payload.isInsightViewer;
      break;

    case ActionConstant.SET_ALL_TEMPLATES_PLAYERUI:
      newState.allTemplates = action.payload;
      break;

    case ActionConstant.SHOW_HIDE_OBJECTIVES:
      newState.showObjective = !newState.showObjective;
      break;

    case ActionConstant.SET_FEEDBACK_MESSAGES:
      newState.feedbackMessages = action.payload;
      break;

    case ActionConstant.SET_LATEST_FEEDBACK_MESSAGE:
      newState.feedbackMessages.unshift(action.payload);
      break;

    case ActionConstant.SET_LATEST_WARGAME_MESSAGE:
      if (action.payload.hasOwnProperty('infoType')) {
        let message = {
          details: {
            channel: `infoTypeChannelMarker${uniqId.time()}`
          },
          infoType: true,
          gameTurn: action.payload.gameTurn,
        };

        for (let channelId in newState.channels) {
          let matchedChannel = newState.allChannels.find((channel) => channel.uniqid === channelId);
          if (!matchedChannel) {
            delete newState.channels[channelId];
          } else {
            let isParticipant = matchedChannel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.some((role) => role.value === newState.selectedRole));
            let allRolesIncluded = matchedChannel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.length === 0);

            if (isParticipant || allRolesIncluded || newState.isObserver) {
              // ok, this is a channel we wish to display
            } else {
              // no, we no longer need to display this channel
              delete newState.channels[channelId];
            }
          }
        }

        // create any new channels & add to current channel
        newState.allChannels.forEach((channel) => {

          let channelActive = channel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.some((role) => role.value === newState.selectedRole));
          let allRoles = channel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.length === 0);


          // rename channel
          if (
            (channelActive || allRoles) &&
            !!newState.channels[channel.uniqid]
          ) {
            newState.channels[channel.uniqid].name = channel.name;
          }

          // update observing status when observer removed from channel participants
          if (
            (!channelActive && !allRoles) &&
            newState.isObserver &&
            !!newState.channels[channel.uniqid]
          ) {
            newState.channels[channel.uniqid].observing = true;
          } else if (
            (channelActive || allRoles) &&
            newState.isObserver &&
            !!newState.channels[channel.uniqid]
          ) {
            newState.channels[channel.uniqid].observing = false;
          }

          // if channel already created update templates.
          if (
            (channelActive || allRoles) &&
            !!newState.channels[channel.uniqid]
          ) {
            let participatingForce = channel.participants.find((p) => p.forceUniqid === newState.selectedForce);
            let chosenTemplates = participatingForce.templates;
            newState.channels[channel.uniqid].templates = chosenTemplates.map((template) => template.value);
          }

          // if channel already created
          if (
            (channelActive || allRoles) &&
            !!newState.channels[channel.uniqid] &&
            !newState.channels[channel.uniqid].messages.find((prevMessage) => prevMessage.gameTurn === message.gameTurn)
          ) {
            newState.channels[channel.uniqid].messages.unshift(message);
            return;
          }

          // if no channel created yet
          if (
            (channelActive || allRoles) &&
            !newState.channels[channel.uniqid]
          ) {
            let participatingRole = channel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.some((role) => role.value === newState.selectedRole));
            let participatingForce = channel.participants.find((p) => p.forceUniqid === newState.selectedForce);

            if (!participatingForce && !newState.isObserver) return;

            let isParticipant = !!participatingRole;
            let allRolesIncluded = channel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.length === 0);
            let chosenTemplates = participatingForce.templates;

            let templates;
            if (isParticipant || allRolesIncluded) {
              if (chosenTemplates.length === 0) {
                templates = newState.allTemplates.filter((template) => template.title === "Chat");
              } else {
                templates = chosenTemplates.map((template) => template.value);
              }
            }

            let observing = false;
            if (newState.isObserver && !isParticipant && !allRolesIncluded) {
              observing = true;
              templates = [];
            }

            if (allRolesIncluded || isParticipant || newState.isObserver) {
              channels[channel.uniqid] = {
                name: channel.name,
                templates,
                forceIcons: channel.participants.filter((participant) => participant.forceUniqid !== newState.selectedForce).map((participant) => participant.icon),
                messages: [],
                unreadMessageCount: 0,
                observing,
              };
            }
            newState.channels = _.defaults(channels, newState.channels);
          }

        });

      } else if (!action.payload.hasOwnProperty('infoType')) {

        if (action.payload.details.channel === CHAT_CHANNEL_ID) {
          newState.chatChannel.messages.unshift(copyState(action.payload));
        } else if (!!newState.channels[action.payload.details.channel]) {

          newState.channels[action.payload.details.channel].messages.unshift({
            ...copyState(action.payload),
            hasBeenRead: false,
            isOpen: false
          });

          newState.channels[action.payload.details.channel].unreadMessageCount++;
        }
      }

      break;

    case ActionConstant.SET_ALL_MESSAGES:
      messages = action.payload.map((message) => {
        if (message.hasOwnProperty('infoType')) {
          return {
            details: {
              channel: `infoTypeChannelMarker${uniqId.time()}`
            },
            infoType: true,
            gameTurn: message.gameTurn,
          }
        }
        return {
          ...message,
          hasBeenRead: expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === "read",
          isOpen: false
        };
      });

      let reduceTurnMarkers = (message) => {
        if (message.infoType) {
          return message.gameTurn;
        } else {
          return message._id;
        }
      };

      messages = _.uniqBy(messages, reduceTurnMarkers);

      newState.chatChannel.messages = messages.filter((message) => message.details.channel === newState.chatChannel.name);

      newState.allChannels.forEach((channel) => {

        let participatingRole = channel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.some((role) => role.value === newState.selectedRole));
        let participatingForce = channel.participants.find((p) => p.forceUniqid === newState.selectedForce);

        if (!participatingForce && !newState.isObserver) return;

        let isParticipant = !!participatingRole;
        let allRolesIncluded = channel.participants.some((p) => p.forceUniqid === newState.selectedForce && p.roles.length === 0);

        let chosenTemplates;
        if (!!participatingForce) {
          chosenTemplates = participatingForce.templates;
        } else {
          chosenTemplates = [];
        }

        let templates;
        if (isParticipant || allRolesIncluded) {
          if (chosenTemplates.length === 0) {
            templates = newState.allTemplates.filter((template) => template.title === "Chat");
          } else {
            templates = chosenTemplates.map((template) => template.value);
          }
        }

        let observing = false;
        if (newState.isObserver && !isParticipant && !allRolesIncluded) {
          observing = true;
          templates = [];
        }

        if (!newState.isObserver && !isParticipant && !allRolesIncluded) return;

        if (allRolesIncluded || isParticipant || newState.isObserver) {
          channels[channel.uniqid] = {
            name: channel.name,
            templates,
            forceIcons: channel.participants.filter((participant) => participant.forceUniqid !== newState.selectedForce).map((participant) => participant.icon),
            messages: messages.filter((message) => message.details.channel === channel.uniqid || message.infoType === true),
            unreadMessageCount: messages.filter((message) => {
              if (message.hasOwnProperty("infoType")) {
                return false;
              } else {
                return (
                  expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null &&
                  message.details.channel === channel.uniqid
                )
              }
            }).length,
            observing,
          };
        }

        newState.channels = channels;

      });

      break;

    case ActionConstant.OPEN_MESSAGE:
      // mutating `messages` array - copyState at top of switch
      for (let i=0, len = newState.channels[action.payload.channel].messages.length ; i<len ; i++) {
        if (newState.channels[action.payload.channel].messages[i]._id === action.payload.message._id) {
          newState.channels[action.payload.channel].messages[i].isOpen = true;
          newState.channels[action.payload.channel].messages[i].hasBeenRead = true;
          expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${action.payload.message._id}`, "read", LOCAL_STORAGE_TIMEOUT);
          break;
        }
      }

      newState.channels[action.payload.channel].unreadMessageCount = newState.channels[action.payload.channel].messages.filter((message) => {
        if (message.hasOwnProperty("infoType")) {
          return false;
        } else {
          return expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null
        }
      }).length;

      break;

    case ActionConstant.CLOSE_MESSAGE:
      // mutating messages array - copyState at top of switch
      for (let i=0, len = newState.channels[action.payload.channel].messages.length ; i<len ; i++) {
        if (newState.channels[action.payload.channel].messages[i]._id === action.payload.message._id) {
          newState.channels[action.payload.channel].messages[i].isOpen = false;
          break;
        }
      }

      break;

    case ActionConstant.MARK_ALL_AS_READ:
      newState.channels[action.channel].unreadMessageCount = 0;

      newState.channels[action.channel].messages.forEach((message) => {
        message.hasBeenRead = true;
        expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`, "read", LOCAL_STORAGE_TIMEOUT);
      });

      break;

    case ActionConstant.OPEN_TOUR:
      newState.tourIsOpen = action.isOpen;
      break;

    case ActionConstant.OPEN_MODAL:
      newState.modalOpened = action.modalName;
      break;

    case ActionConstant.CLOSE_MODAL:
      newState.modalOpened = null;
      break;

    default:
      return newState;
  }

  return newState;
};
