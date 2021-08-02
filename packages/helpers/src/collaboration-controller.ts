import { ChannelData, Role, ParticipantTemplate, Participant, ForceData, ForceRole, MessageCustom, FeedbackItem } from '@serge/custom-types'
import _ from 'lodash'
import { CollaborativeMessageStates, CollaborativeMessageCommands } from '@serge/config'
import getRoleFromId from './get-role-from-id'

/**
 * support utility, supporting collaborative editing
 */
class CollaborationController {
  readonly channel: ChannelData
  readonly forceId: string
  readonly role: Role
  readonly myParticipations: Participant[]
  readonly forces: ForceData[]

  /** Create a CollaborationController instance
   * @param forces list of forces in wargame
   * @param channel definition of this channel
   * @param forceId id of the force of current user
   * @param role current user
   */
  constructor (forces: ForceData[], channel: ChannelData, forceId: string, role: Role) {
    this.channel = channel
    this.forceId = forceId
    this.role = role
    this.forces = forces
    // participations is used a lot. cache the ones that relate to this role
    this.myParticipations = this.getMyParticipations()
  }

  /** look at the channel definition, and determine which how I participate in it.  There
   * could be multiple entries, since I could be a member as part of a whole force, in
   * addition to having a participation on my own
   */
  getMyParticipations (): Participant[] {
    return this.channel.participants.filter(part => {
      // is this my force?
      if (part.forceUniqid === this.forceId) {
        // is there a restricted set of roles?
        if (part.roles && part.roles.length) {
          // Yes: check if I'm one of those roles
          return part.roles.find((role: string) => role === this.role.roleId)
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

  /** am I able to release documents in this channel? */
  canRelease (): boolean {
    return !!this.myParticipations.find((part: Participant) => part.canReleaseMessages)
  }

  /** can I see the documents being edited in this channel?
   * If not, I can only see original version, which changes to finalised
   * version once it is released
   */
  canViewLiveUpdates (): boolean {
    return !!this.myParticipations.find((part: Participant) => part.canCollaborate)
  }

  /** am I in the channel as just an observer, with no interactions */
  canViewReadOnlyAsObserver () : boolean {
    if (this.canEdit() || this.canRelease()) {
      // no, we're interacting with it
      return false
    } else {
      // see if we're an observer
      return this.role.isObserver
    }
  }

  /** what is the initial state of documents sent to this channel? */
  getInitialState (): CollaborativeMessageStates {
    if (this.channel.collabOptions) {
      return this.channel.collabOptions.startWithReview ? CollaborativeMessageStates.PendingReview : CollaborativeMessageStates.Unallocated
    } else {
      throw new Error('Collaboration controller - missing collab options')
    }
  }

  /** list of roles ids that a message in this channel could be assigned to,
   * to be used in `Assign To` functionality
   */
  messageCanBeAssignedTo (): Array<ForceRole> {
    const roles: Array<ForceRole> = []

    // helper function, to remove code duplication
    const pushRole = (part: Participant, role: Role) => {
      const roleVal: ForceRole = {
        forceId: part.forceUniqid,
        forceName: part.force,
        roleId: role.roleId,
        roleName: role.name
      }
      roles.push(roleVal)
    }
    const collaborators = this.channel.participants.filter((part: Participant) => part.canCollaborate)
    collaborators.forEach((part: Participant) => {
      if (part.roles && part.roles.length) {
        // a specific set of roles have been assigned, process them
        part.roles.forEach((roleId: any) => {
          // is this a full role, or a role id?
          // TODO drop support for Role being in Participants, we should just have roleId
          if (typeof roleId === 'string') {
            const role = getRoleFromId(this.forces, part.forceUniqid, roleId)
            if (role === undefined) {
              throw new Error('Failed to find role for ' + part.forceUniqid + ', ' + roleId)
            }
            pushRole(part, role)
          } else {
            // ok, this is a legacy wargame, where the whole Role is present
            const role: Role = roleId as any as Role
            pushRole(part, role)
          }
        })
      } else {
        // need to add all roles in this force
        const force = this.forces.find((force: ForceData) => force.uniqid === part.forceUniqid)
        if (force) {
          force.roles.forEach((role: Role) => {
            pushRole(part, role)
          })
        } else {
          console.error('failed to find force for ', part.forceUniqid)
        }
      }
    })

    // remove duplicates
    return _.uniqWith(roles, _.isEqual)
  }

  /** return the current owner */
  getCurrentOwner (message: MessageCustom): undefined | ForceRole {
    if (message.details.collaboration) {
      const owner: ForceRole | undefined = message.details.collaboration.owner
      if (owner) {
        const hisForce: ForceData | undefined = this.forces.find((force: ForceData) => {
          return force.roles.find((role: Role) => role.roleId === owner.roleId)
        })
        if (hisForce) {
          const hisRole: Role | undefined = hisForce.roles.find((role: Role) => role.roleId === owner.roleId)
          if (hisRole) {
            const res: ForceRole = {
              forceId: hisForce.uniqid,
              forceName: hisForce.name,
              roleId: hisRole.name,
              roleName: hisRole.name
            }
            return res
          } else {
            throw new Error('Failed to find this role in force:' + hisForce + ', role:' + owner.roleId)
          }
        }
      }
    }
    return undefined
  }

  /** modify the message according to the command
   * @param message the message we are going to update
   * @param command the command being applied to the message
   * @param assignedTo the role that has taken the message, or the message has been assigned to
   * @param feedback comments provided when the message was sent back for changes
   */
  applyCommandTo (message: MessageCustom, command: CollaborativeMessageCommands, assignedTo: ForceRole | undefined, feedback?: string): MessageCustom {
    // copy the message
    const res = _.cloneDeep(message)

    if (res.details.collaboration) {
      // most actions involve clearing the owner, so we'll do it centrally here first
      res.details.collaboration.owner = undefined
      switch (command) {
        case CollaborativeMessageCommands.SendForReview: {
          res.details.collaboration.status = CollaborativeMessageStates.PendingReview
          break
        }
        case CollaborativeMessageCommands.TakeOwnership: {
          res.details.collaboration.status = CollaborativeMessageStates.InProgress
          if (assignedTo) {
            res.details.collaboration.owner = assignedTo
          } else {
            throw new Error('Require assigned to field when taking ownership')
          }
          break
        }
        case CollaborativeMessageCommands.ReOpen: {
          res.details.collaboration.status = this.getInitialState()
          break
        }
        case CollaborativeMessageCommands.Close: {
          res.details.collaboration.status = CollaborativeMessageStates.Rejected
          break
        }
        case CollaborativeMessageCommands.Release: {
          res.details.collaboration.status = CollaborativeMessageStates.Released
          break
        }
        case CollaborativeMessageCommands.RequestChanges: {
          res.details.collaboration.status = CollaborativeMessageStates.Unallocated
          if (feedback) {
            // initialise feedback array, if necessary
            if (res.details.collaboration.feedback === undefined) {
              res.details.collaboration.feedback = []
            }
            const item: FeedbackItem = {
              fromId: this.role.roleId,
              fromName: this.role.name,
              date: new Date().toISOString(),
              feedback: feedback
            }
            res.details.collaboration.feedback.push(item)
          }
          break
        }
      }
    } else {
      throw new Error('Message missing collaboration details')
    }

    return res
  }

  showTakeOwnership (state: CollaborativeMessageStates, _owner: Role['roleId']): boolean {
    return this.canEdit() && state === CollaborativeMessageStates.Unallocated
  }

  showSendForReview (state: CollaborativeMessageStates, _owner: Role['roleId']): boolean {
    return this.canEdit() && state === CollaborativeMessageStates.InProgress && _owner === this.role.roleId
  }

  showRelease (state: CollaborativeMessageStates, _owner: Role['roleId']): boolean {
    return this.canRelease() && state === CollaborativeMessageStates.PendingReview 
  }

  showRequestChanges (state: CollaborativeMessageStates, _owner: Role['roleId']): boolean {
    return this.canRelease() && state === CollaborativeMessageStates.PendingReview
  }

  getRequestChangeVerbs (): Array<CollaborativeMessageCommands | string> {
    const coreVerbs: Array<string> = [CollaborativeMessageCommands.Close, CollaborativeMessageCommands.Release]
    const opts = this.channel.collabOptions
    if (opts && opts.returnVerbs && opts.returnVerbs.length) {
      return opts.returnVerbs.concat(coreVerbs)
    } else {
      return coreVerbs.concat([CollaborativeMessageCommands.RequestChanges])
    }
  }

  showReopen (state: CollaborativeMessageStates, _owner: Role['roleId']): boolean {
    return this.canRelease() && (state === CollaborativeMessageStates.Released || state === CollaborativeMessageStates.Rejected)
  }
}

export default CollaborationController
