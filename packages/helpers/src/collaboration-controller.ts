import { ChannelData, Role, ParticipantTemplate, Participant, ForceData, ForceRole } from '@serge/custom-types'
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

  /** command verbs */
  static readonly SendForReview: string = 'Send for review'
  static readonly TakeOwnership: string = 'Take ownership'
  static readonly ReOpen: string = 'Re-open'
  static readonly Close: string = 'Close'
  static readonly Release: string = 'Release'
  static readonly RequestChanges: string = 'Request changes'

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

  getInitialState (): CollaborativeMessageStates {
    if (this.channel.collabOptions) {
      return this.channel.collabOptions.startWithReview ? CollaborativeMessageStates.PendingReview : CollaborativeMessageStates.Unallocated
    } else {
      throw new Error('Collaboration controller - missing collab options')
    }
  }

  /** list of roles ids that a message in this channel could be assigned to */
  messageCanBeAssignedTo (): Array<ForceRole> {
    const roles: Array<ForceRole> = []
    const collaborators = this.channel.participants.filter((part: Participant) => part.canCollaborate)
    collaborators.forEach((part: Participant) => {
      if (part.roles && part.roles.length) {
        part.roles.forEach((role: Role) => {
          const roleId: ForceRole = {
            forceId: part.forceUniqid,
            forceName: part.force,
            roleId: role.name,
            roleName: role.name
          }
          roles.push(roleId)
        })
      } else {
        // need to add all roles in this force
        const force = this.forces.find((force: ForceData) => force.uniqid === part.forceUniqid)
        if (force) {
          force.roles.forEach((role: Role) => {
            const roleId: ForceRole = {
              forceId: part.forceUniqid,
              forceName: part.force,
              roleId: role.name,
              roleName: role.name
            }
            roles.push(roleId)
          })
        } else {
          console.error('failed to find force for ', part.forceUniqid)
        }
      }
    })

    // remove duplicates
    return _.uniqWith(roles, _.isEqual)
  }

  /** which commands are available for a message in this state */
  commandsFor (state: CollaborativeMessageStates, owner: string): Array<string> {
    switch (state) {
      case CollaborativeMessageStates.Unallocated: {
        return this.canEdit() ? [CollaborationController.TakeOwnership] : []
      }
      case CollaborativeMessageStates.InProgress: {
        // do I own it?
        // todo: switch to userid
        return owner === this.role.name ? [CollaborationController.SendForReview] : []
      }
      case CollaborativeMessageStates.PendingReview: {
        const coreVerbs: Array<string> = [CollaborationController.Close, CollaborationController.Release]
        if (this.canRelease()) {
          const opts = this.channel.collabOptions
          if (opts && opts.returnVerbs && opts.returnVerbs.length) {
            return opts.returnVerbs.concat(coreVerbs)
          } else {
            return [CollaborationController.RequestChanges].concat(coreVerbs)
          }
        } else {
          return []
        }
      }
      case CollaborativeMessageStates.Released: {
        return this.canRelease() ? [CollaborationController.ReOpen] : []
      }
      case CollaborativeMessageStates.Rejected: {
        return this.canRelease() ? [CollaborationController.ReOpen] : []
      }
      default: {
        return []
      }
    }
  }
}

export default CollaborationController
