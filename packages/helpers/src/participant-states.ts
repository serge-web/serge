import { ChannelData, Participant, TemplateBody } from '@serge/custom-types'
import { matchedForceAndRoleFilter, matchedAllRolesFilter, matchedForceFilter } from './participant-filters'

export interface CheckParticipantStates {
  /** whether role is participant in channel */
  isParticipant: boolean
  /** the role filled by the participant */
  participatingRoles: Participant[]
  /** whether all roles for this force are included in the channel */
  allRolesIncluded: Participant | undefined
}
export interface ParticipantStates {
  /** whether role is participant in channel */
  isParticipant: boolean
  /** whether all roles for this force are included in the channel */
  allRolesIncluded: Participant | undefined
  /** whether player is just channel observer (and not participant) */
  observing: boolean
  /** the templates available to this player in this channel */
  templates: TemplateBody[]
}

/** find out if the role is active in the supplied channel
 * Always returns a structure, use isParticipant to determine if role is in channel (registered or as observer)
*/
export const checkParticipantStates = (channel: ChannelData, selectedForce: string | undefined, selectedRole: string, isObserver: boolean): CheckParticipantStates => {
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const participatingForce: Participant | undefined = channel.participants && channel.participants.find(p => matchedForceFilter(p.forceUniqid, selectedForce))
  // not a member of this channel, return false answer
  if (!participatingForce && !isObserver) {
    return {
      isParticipant: false,
      participatingRoles: [],
      allRolesIncluded: undefined
    }
  }

  // is a member of this channel, find out if they're named, or a where all roles for this force are in channel
  const participatingRoles: Participant[] = channel.participants.filter(p => matchedForceAndRoleFilter(p, selectedForce, selectedRole))
  // const participatingRole: Participant | undefined = channel.participants.find(p => matchedForceAndRoleFilter(p, selectedForce, selectedRole))
  return {
    isParticipant: participatingRoles.length > 0,
    participatingRoles: participatingRoles,
    allRolesIncluded: channel.participants.find(p => matchedAllRolesFilter(p, selectedForce))
  }
}

/** find out how the user can participate in this channel */
export const getParticipantStates = (channel: ChannelData, forceId: string | undefined, role: string, isObserver: boolean, allTemplates: TemplateBody[]): ParticipantStates => {
  let chosenTemplates: TemplateBody[] = []
  let observing = false
  let templates: TemplateBody[] = []
  const templatesUniqFilter: {[property: string]: boolean} = {}
  const addTemplate = (template: any): void => {
    if (templatesUniqFilter[template.title] !== true) {
      templatesUniqFilter[template.title] = true
      chosenTemplates.push(template)
    }
  }

  const {
    isParticipant,
    participatingRoles,
    allRolesIncluded
  }: CheckParticipantStates = checkParticipantStates(channel, forceId, role, isObserver)

  const chatTemplate = allTemplates.find((template: any) => template.title === 'Chat')
  if (typeof chatTemplate === 'undefined') console.warn('Warning, unable to find Chat template for channel with no templates defined')

  if (isParticipant) {
    for (const { templates } of participatingRoles) {
      if (templates.length === 0) {
        if (typeof chatTemplate !== 'undefined') addTemplate(chatTemplate)
      } else {
        for (const template of templates) addTemplate(template)
      }
    }
  } else if (allRolesIncluded) {
    chosenTemplates = allRolesIncluded.templates
  }

  if (isParticipant || allRolesIncluded) {
    if (chosenTemplates.length === 0) {
      if (typeof chatTemplate !== 'undefined') {
        templates = [chatTemplate]
      }
    } else {
      templates = chosenTemplates
    }
    // TODO: check this part
    //  else {
    //   templates = chosenTemplates.map((template: TemplateBody) => {
    //     return typeof template === 'string' ? template : allTemplates.find(item => item._id === template._id)
    //     it can't be a string ---^ return strring?--^  find same template and return it? why? ----^
    //   })
    // }
  }

  if (isObserver && !isParticipant && !allRolesIncluded) {
    observing = true
    templates = []
  }
  return { isParticipant, allRolesIncluded, observing, templates }
}
