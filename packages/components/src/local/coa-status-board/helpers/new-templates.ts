import { ForceRole, ChannelData, Participant } from '@serge/custom-types'
import { flatten, uniqBy } from 'lodash'

export const newTemplates = (channel: ChannelData, role: ForceRole): any[] => {
  const matches = channel.participants.filter((part: Participant) => {
    if (part.forceUniqid === role.forceId) {
      if (part.roles && part.roles.length > 0) {
        return part.roles.find((roleId: string) => roleId === role.roleId)
      } else {
        return true
      }
    } else {
      return false
    }
  })
  // produce unique set of templates
  const templates = matches.map((part: Participant) => {
    return part.templates
  })
  const flattened = flatten(templates)
  const uniques = uniqBy(flattened, '_id')
  return uniques
}
