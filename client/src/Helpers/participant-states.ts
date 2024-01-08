import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHAT_MESSAGE_TEMPLATE_ID, PARTICIPANT_CUSTOM } from 'src/config'
import { ChannelCollab, ChannelTypes, ParticipantTemplate, Role, TemplateBody, TemplateBodysByKey } from 'src/custom-types'
import { CoreParticipant, ParticipantCustom } from 'src/custom-types/participant'
import getTemplateById, { getTemplateByIdNoUndefined } from './getTemplateById'
import { matchedForceFilter, matchedV3AllRolesFilter, matchedForceAndRoleFilter } from './participant-filters'

export interface CheckParticipantStates {
  /** whether role is participant in channel */
  isParticipant: boolean
  /** the role filled by the participant */
  templatesIDs: ParticipantTemplate[]
  /** whether all roles for this force are included in the channel */
  allRolesIncluded: boolean
}
export interface ParticipantStates {
  /** whether role is participant in channel */
  isParticipant: boolean
  /** whether player is just channel observer (and not participant) */
  observing: boolean
  /** the templates available to this player in this channel */
  templates: TemplateBody[]
}

// Extracts templates from custom roles within an array of CoreParticipant
const extractTemplatesFromCustomRoles = (participatingRoles: CoreParticipant[]): ParticipantTemplate[] => {
  return participatingRoles.reduce((templates: ParticipantTemplate[], role: CoreParticipant) => {
    if (role.pType === PARTICIPANT_CUSTOM) {
      const theseTemplates = (role as ParticipantCustom).templates
      templates.push(...theseTemplates)
    }
    return templates
  }, [])
}

/** find out if the role is active in the supplied channel
 * Always returns a structure, use isParticipant to determine if role is in channel (registered or as observer)
*/
export const checkV3ParticipantStates = (channel: ChannelTypes, selectedForce: string | undefined, selectedRole: Role['roleId'], isObserver: boolean): CheckParticipantStates => {
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const channelParts: CoreParticipant[] = channel.participants
  const participatingForce: CoreParticipant | undefined = channelParts && channelParts.find(p => matchedForceFilter(p.forceUniqid, selectedForce))
  // not a member of this channel, return false answer
  if (!participatingForce && !isObserver) {
    return {
      isParticipant: false,
      templatesIDs: [],
      allRolesIncluded: false
    }
  }

  const templateIDs: ParticipantTemplate[] = []
  const participatingRoles: CoreParticipant[] = channelParts.filter((p: CoreParticipant) => matchedForceAndRoleFilter(p, selectedForce, selectedRole))
  switch (channel.channelType) {
    case CHANNEL_COLLAB: {
      const collab = channel as ChannelCollab
      if (collab.newMessageTemplate) {
        templateIDs.push(collab.newMessageTemplate)
      }
      break
    }
    case CHANNEL_CHAT:
      // don't bother adding it
      break
    case CHANNEL_CUSTOM:
      templateIDs.push(...extractTemplatesFromCustomRoles(participatingRoles))
      break
    default:
      console.warn('Encountered unexpected channel type:', channel)
  }

  // is a member of this channel, find out if they're named, or a where all roles for this force are in channel
  return {
    isParticipant: participatingRoles.length > 0,
    templatesIDs: templateIDs,
    allRolesIncluded: !!channelParts.find((p: CoreParticipant) => matchedV3AllRolesFilter(p, selectedForce))
  }
}

export const setTemplatesBasedOnConditions = (
  chosenTemplates: TemplateBody[],
  chatTemplate: TemplateBody | undefined,
  allTemplatesByKey: TemplateBodysByKey
): TemplateBody[] => {
  let templates: TemplateBody[] = []
  if (chosenTemplates.length === 0) {
    if (typeof chatTemplate !== 'undefined') {
      templates = [chatTemplate]
    } else {
      // TODO: remove this workaround
      // for new cloud hosting, all template ids have changed. So,
      // if this happens, just look for template with correct title
      const tempKeys = Object.keys(allTemplatesByKey)
      let chatTemp: TemplateBody | undefined
      tempKeys.some((key: string) => {
        const template = allTemplatesByKey[key]
        if (template.title === 'Chat') {
          chatTemp = template
        }
        // returning non-null value will let us drop out of `some` loop early
        return !!chatTemp
      })
      if (chatTemp) {
        templates = [chatTemp]
      }
    }
  } else {
    templates = chosenTemplates
  }

  return templates
}

export const addTemplate = (template: TemplateBody, chosenTemplates: TemplateBody[], templatesUniqFilter: { [property: string]: boolean }): void => {
  if (templatesUniqFilter[template.title] !== true) {
    templatesUniqFilter[template.title] = true
    chosenTemplates.push(template)
  }
}

export const addTemplatesToChosen = (
  templatesIDs: ParticipantTemplate[] | undefined,
  allTemplatesByKey: TemplateBodysByKey,
  chosenTemplates: TemplateBody[],
  templatesUniqFilter: { [property: string]: boolean }
): void => {
  if (templatesIDs && templatesIDs.length !== 0) {
    for (const template of templatesIDs) {
      addTemplate(
        getTemplateByIdNoUndefined(allTemplatesByKey, template._id),
        chosenTemplates,
        templatesUniqFilter
      )
    }
  } else {
    const chatTemplate = getTemplateById(allTemplatesByKey, CHAT_MESSAGE_TEMPLATE_ID)
    if (typeof chatTemplate !== 'undefined') {
      addTemplate(chatTemplate, chosenTemplates, templatesUniqFilter)
    }
  }
}

/** find out how the user can participate in this channel */
export const getParticipantStates = (
  channel: ChannelTypes, forceId: string | undefined,
  role: Role['roleId'], isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  // TODO: move it to reducer, for future default Message can be changed from admin
  // k16eedkl - Chat template id
  defaultMessageId = CHAT_MESSAGE_TEMPLATE_ID
): ParticipantStates => {
  const chosenTemplates: TemplateBody[] = []
  let observing = false
  let templates: TemplateBody[] = []
  const templatesUniqFilter: { [property: string]: boolean } = {}

  const {
    isParticipant,
    templatesIDs,
    allRolesIncluded
  }: CheckParticipantStates = checkV3ParticipantStates(channel, forceId, role, isObserver)

  const chatTemplate = getTemplateById(allTemplatesByKey, defaultMessageId)
  if (typeof chatTemplate === 'undefined') {
    // dont't throw error for unit tests, some use legacy data
    const jestWorkerId = process.env.JEST_WORKER_ID
    const inProduction = !jestWorkerId
    inProduction && console.warn('Warning, unable to find Chat template for channel with no templates defined')
    // end
  }
  if (isParticipant) {
    addTemplatesToChosen(templatesIDs, allTemplatesByKey, chosenTemplates, templatesUniqFilter)
  }

  if (isParticipant || allRolesIncluded) {
    templates = setTemplatesBasedOnConditions(chosenTemplates, chatTemplate, allTemplatesByKey)
  }
  
  if (isObserver && !isParticipant && !allRolesIncluded) {
    observing = true
    templates = []
  }
  
  return { isParticipant, observing, templates }
}
