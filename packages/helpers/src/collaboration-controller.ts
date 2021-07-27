import { ChannelData, Role, ParticipantTemplate, Participant, ForceData } from '@serge/custom-types'
import _ from 'lodash'
import { CollaborativeMessageStates } from '@serge/config'

/**
 * support utility, supporting collaborative editing
 */
class CollaborationController {
  channel: ChannelData
  force: string
  role: Role
  myParticipations: Participant[]
  forces: ForceData[]

  /**
   *
   */
  constructor (forces: ForceData[], channel: ChannelData, force: string, role: Role) {
    this.channel = channel
    this.force = force
    this.role = role
    this.forces = forces
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

  /** whether this user can see dynamic changes to the messages */
  canViewLiveUpdates (): boolean {
    return !!this.myParticipations.find((part: Participant) => part.canCollaborate)
  }

  /** list of roles ids that a message in this channel could be assigned to */
  messageCanBeAssignedTo (): Array<string> {
    // TODO:
    return []
  }

  /** which commands are available for a message in this state */
  commandsFor (state: CollaborativeMessageStates): Array<string> {
    switch (state) {
      case CollaborativeMessageStates.Unallocated: {
        if (this.canEdit()) {
          return ['Take ownership']
        }
        break
      }
      case CollaborativeMessageStates.InProgress: {
        // TODO:
        break
      }
      case CollaborativeMessageStates.PendingReview: {
        const coreVerbs: Array<string> = ['Close', 'Release']
        if (this.canEdit()) {
          const opts = this.channel.collabOptions
          if (opts && opts.returnVerbs && opts.returnVerbs.length) {
            return opts.returnVerbs.concat(coreVerbs)
          } else {
            return ['Request changes'].concat(coreVerbs)
          }
        }
        break
      }
      case CollaborativeMessageStates.Released: {
        // TODO:
        break
      }
      case CollaborativeMessageStates.Rejected: {
        // TODO:
        break
      }
    }
    return []
  }
}

export default CollaborationController
