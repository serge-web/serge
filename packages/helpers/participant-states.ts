import { ChannelData, Participant } from '@serge/custom-types';
import { matchedForceAndRoleFilter, matchedAllRolesFilter, matchedForceFilter } from '@serge/helpers';

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
  /** whether player is just channel observer (and not participant) */
  observing: boolean,
  /** the templates available to this player in this channel */
  templates: Array<any>
}

/** find out if the role is active in the supplied channel 
 * Always returns a structure, use isParticipant to determine if role is in channel (registered or as observer)
*/
export const checkParticipantStates = (channel: ChannelData, selectedForce: string | undefined, selectedRole: string, isObserver: boolean): CheckParticipantStates => {

  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const participatingForce: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceFilter(p.forceUniqid, selectedForce))
  if (!participatingForce && !isObserver) return {
    isParticipant: false,
    participatingRole: undefined,
    allRolesIncluded: undefined
  }

  const participatingRole: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceAndRoleFilter(p, selectedForce, selectedRole))
  return {
    isParticipant: !!participatingRole,
    participatingRole: participatingRole,
    allRolesIncluded: channel.participants && channel.participants.find(p => matchedAllRolesFilter(p, selectedForce))
  }
}

/** find out how the user can participate in this channel */
export const getParticipantStates = (channel: ChannelData, forceId: string | undefined, role: string, isObserver: boolean, allTemplates: any): ParticipantStates => {
  let chosenTemplates: Array<any> = []
  let observing: boolean = false
  let templates: Array<any> = []

  const {
    isParticipant,
    participatingRole,
    allRolesIncluded
  }: CheckParticipantStates = checkParticipantStates(channel, forceId, role, isObserver)

  if (participatingRole) {
    chosenTemplates = participatingRole.templates
  } else if (allRolesIncluded) {
    chosenTemplates = allRolesIncluded.templates
  }

  if (isParticipant || allRolesIncluded) {
    if (chosenTemplates.length === 0) {
      templates = allTemplates.filter((template: any) => template.title === 'Chat')
      if(templates.length === 0) {
        console.warn('Warning, unable to find Chat template for channel with no templates defined')
      }
    } else {
      templates = chosenTemplates.map((template: any) => {
        return typeof template === 'string' ? template : allTemplates.find((item: any) => item._id === template._id)
      })
    }
  }

  if (isObserver && !isParticipant && !allRolesIncluded) {
    observing = true
    templates = []
  }
  return { isParticipant, allRolesIncluded, observing, templates }
}
