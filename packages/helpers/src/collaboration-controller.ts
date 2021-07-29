import { ChannelData, Role, ParticipantTemplate, Participant, ForceData, ForceRole, MessageCustom } from '@serge/custom-types'
import _ from 'lodash'
import { CollaborativeMessageStates, CollaborativeMessageCommands } from '@serge/config'
import getRoleFromId from './get-role-from-id'

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
        part.roles.forEach((roleId: any) => {
          // is this a full role, or a role id?
          // TODO drop support for Role being in Participants, we should just have roleId
          if (typeof roleId === 'string') {
            const role = getRoleFromId(this.forces, part.forceUniqid, roleId)
            if (role === undefined) {
              console.log(this.forces[0])
              throw new Error('Failed to find role for ' + part.forceUniqid + ', ' + roleId)
            }
            const roleVal: ForceRole = {
              forceId: part.forceUniqid,
              forceName: part.force,
              roleId: role.name,
              roleName: role.name
            }
            roles.push(roleVal)
          } else {
            const role: Role = roleId as any as Role
            const roleVal: ForceRole = {
              forceId: part.forceUniqid,
              forceName: part.force,
              roleId: role.name,
              roleName: role.name
            }
            roles.push(roleVal)
          }
          // get this role details
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

  /** return the current owner */
  getCurrentOwner (message: MessageCustom): undefined | ForceRole {
    if (message.details.collaboration) {
      const owner = message.details.collaboration.owner
      if (owner) {
        const hisForce: ForceData | undefined = this.forces.find((force: ForceData) => {
          force.roles.find((role: Role) => owner === role.name)
        })
        if (hisForce) {
          const hisRole: Role | undefined = hisForce.roles.find((role: Role) => owner === role.name)
          if (hisRole) {
            const res: ForceRole = {
              forceId: hisForce.uniqid,
              forceName: hisForce.name,
              roleId: this.role.name,
              roleName: this.role.name
            }
            return res
          }
        }
      }
    }
    return undefined
  }

  /** modify the message according to the command */
  applyCommandTo (message: MessageCustom, command: CollaborativeMessageCommands, assignedTo?: ForceRole): MessageCustom {
    // copy the message
    const res = _.cloneDeep(message)

    if (res.details.collaboration) {
      switch (command) {
        case CollaborativeMessageCommands.SendForReview: {
          res.details.collaboration.status = CollaborativeMessageStates.PendingReview
          res.details.collaboration.owner = undefined
          break
        }
        case CollaborativeMessageCommands.TakeOwnership: {
          res.details.collaboration.status = CollaborativeMessageStates.InProgress
          if (assignedTo) {
            res.details.collaboration.owner = assignedTo.roleId
          } else {
            throw new Error('Require assigned to field when taking ownership')
          }
          break
        }
        case CollaborativeMessageCommands.ReOpen: {
          res.details.collaboration.status = this.getInitialState()
          res.details.collaboration.owner = undefined
          break
        }
        case CollaborativeMessageCommands.Close: {
          res.details.collaboration.status = CollaborativeMessageStates.Rejected
          res.details.collaboration.owner = undefined
          break
        }
        case CollaborativeMessageCommands.Release: {
          res.details.collaboration.status = CollaborativeMessageStates.Released
          res.details.collaboration.owner = undefined
          break
        }
        case CollaborativeMessageCommands.RequestChanges: {
          res.details.collaboration.status = CollaborativeMessageStates.Unallocated
          res.details.collaboration.owner = undefined
          break
        }
      }
    } else {
      throw new Error('Message missing collaboration details')
    }

    return res
  }

  /** which commands are available for a message in this state */
  commandsFor (state: CollaborativeMessageStates, owner: string): Array<CollaborativeMessageCommands | string> {
    switch (state) {
      case CollaborativeMessageStates.Unallocated: {
        return this.canEdit() ? [CollaborativeMessageCommands.TakeOwnership] : []
      }
      case CollaborativeMessageStates.InProgress: {
        // do I own it?
        // todo: switch to userid
        return owner === this.role.name ? [CollaborativeMessageCommands.SendForReview] : []
      }
      case CollaborativeMessageStates.PendingReview: {
        const coreVerbs: Array<string> = [CollaborativeMessageCommands.Close, CollaborativeMessageCommands.Release]
        if (this.canRelease()) {
          const opts = this.channel.collabOptions
          if (opts && opts.returnVerbs && opts.returnVerbs.length) {
            return opts.returnVerbs.concat(coreVerbs)
          } else {
            return coreVerbs.concat([CollaborativeMessageCommands.RequestChanges])
          }
        } else {
          return []
        }
      }
      case CollaborativeMessageStates.Released: {
        return this.canRelease() ? [CollaborativeMessageCommands.ReOpen] : []
      }
      case CollaborativeMessageStates.Rejected: {
        return this.canRelease() ? [CollaborativeMessageCommands.ReOpen] : []
      }
      default: {
        return []
      }
    }
  }
}

export default CollaborationController
