import { ChannelData, Role, ParticipantTemplate, Participant } from '@serge/custom-types'
import _ from 'lodash'
/**
 * support utility, supporting collaborative editing
 */
class CollaborationController {
  channel: ChannelData
  force: string
  role: Role
  myParticipations: Participant[]

  /**
   *
   */
  constructor (channel: ChannelData, force: string, role: Role) {
    this.channel = channel
    this.force = force
    this.role = role
    // participations is used a lot. cache the ones that relate to this role
    this.myParticipations = this.getMyParticipations()
  }

  getMyParticipations (): Participant[] {
    return this.channel.participants.filter(part => {
      // is this my force?
      if (part.forceUniqid === this.force) {
        // is there a restricted set of roles?
        if (part.roles && part.roles.length) {
          // Yes: check if I'm one of those roles
          // TODO: switch to using roleId
          return part.roles.find((role: Role) => role.name === this.role.name)
        } else {
          // No: use all templates
          return true
        }
      } else {
        // it's not my force. ignore
        return false
      }
    })
  }

  /**  return the list of templates for this role */
  getMyTemplates (): ParticipantTemplate[] {
    // find my templates
    const templateLists = this.myParticipations.map(value => value.templates)

    // squash the templates
    const templates = templateLists.flat()

    // remove duplicates
    const res = _.uniqWith(templates, _.isEqual)

    // find my templates
    return res
  }

  /** am I participating (editing) in this channel? */
  canEdit (): boolean {
    return !!this.myParticipations.find((part: Participant) => part.canCollaborate)
  }

  /** am I participating (editing) in this channel? */
  canRelease (): boolean {
    return !!this.myParticipations.find((part: Participant) => part.canReleaseMessages)
  }
}

export default CollaborationController
