import { PlayerUi, ChannelData, Participant } from '@serge/custom-types';
import { matchedForceAndRoleFilter, matchedAllRolesFilter, matchedForceFilter } from '../helpers/filters';

export interface CheckParticipantStates {
  isParticipant: boolean,
  participatingRole: Participant | undefined,
  allRolesIncluded: Participant | undefined
}
export interface ParticipantStates {
  isParticipant: boolean,
  allRolesIncluded: Participant | undefined,
  observing: boolean,
  templates: Array<any>
}

export const checkParticipantStates = (channel: ChannelData, newState: PlayerUi): CheckParticipantStates => {
  const { selectedForce } = newState
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const participatingForce: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceFilter(p, selectedForce.uniqid))
  if (!participatingForce && !newState.isObserver) return {
    isParticipant: false,
    participatingRole: undefined,
    allRolesIncluded: undefined
  }

  const participatingRole: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceAndRoleFilter(p, newState))
  return {
    isParticipant: !!participatingRole,
    participatingRole: participatingRole,
    allRolesIncluded: channel.participants && channel.participants.find(p => matchedAllRolesFilter(p, selectedForce.uniqid))
  }
}

export const getParticipantStates = (channel: ChannelData, newState: PlayerUi): ParticipantStates => {
  let chosenTemplates: Array<any> = []
  let observing: boolean = false
  let templates: Array<any> = []

  const {
    isParticipant,
    participatingRole,
    allRolesIncluded
  }: CheckParticipantStates = checkParticipantStates(channel, newState)

  if (participatingRole) {
    chosenTemplates = participatingRole.templates
  } else if (allRolesIncluded) {
    chosenTemplates = allRolesIncluded.templates
  }

  if (isParticipant || allRolesIncluded) {
    if (chosenTemplates.length === 0) {
      templates = newState.allTemplates.filter((template) => template.title === 'Chat')
    } else {
      templates = chosenTemplates.map(({ value }) => {
        return typeof value === 'string' ? newState.allTemplates.find(item => item._id === value) : value
      })
    }
  }

  if (newState.isObserver && !isParticipant && !allRolesIncluded) {
    observing = true
    templates = []
  }
  return { isParticipant, allRolesIncluded, observing, templates }
}
