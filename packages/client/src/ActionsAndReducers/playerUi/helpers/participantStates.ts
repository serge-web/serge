import { PlayerUi, ChannelData, Participant, ForceData } from '@serge/custom-types';
import { matchedForceAndRoleFilter, matchedAllRolesFilter, matchedForceFilter } from '../helpers/filters';

export interface CheckParticipantStates {
  /** whether role is participant in channel */
  isParticipant: boolean,
  /** the role filled by the participant */
  participatingRole: Participant | undefined,
  /** whether all roles for this force are included in the channel */
  allRolesIncluded: Participant | undefined
}
export interface ParticipantStates {
  /** whether role is participant in channel */
  isParticipant: boolean,
  /** whether all roles for this force are included in the channel */
  allRolesIncluded: Participant | undefined,
  /** whether player is just channel observer */
  observing: boolean,
  templates: Array<any>
}

/** find out if the role is active in the supplied channel */
export const checkParticipantStates = (channel: ChannelData, selectedForce: string | undefined, selectedRole: string, isObserver: boolean): CheckParticipantStates => {

  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const participatingForce: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceFilter(p.forceUniqid, selectedForce))
  if (!participatingForce && !isObserver) return {
    isParticipant: false,
    participatingRole: undefined,
    allRolesIncluded: undefined
  }

  const participatingRole: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceAndRoleFilter(p, selectedForce, selectedRole))
  console.log('passed', participatingRole)
  return {
    isParticipant: !!participatingRole,
    participatingRole: participatingRole,
    allRolesIncluded: channel.participants && channel.participants.find(p => matchedAllRolesFilter(p, selectedForce))
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
  }: CheckParticipantStates = checkParticipantStates(channel, newState.selectedForce?.uniqid, newState.selectedRole, newState.isObserver)

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
