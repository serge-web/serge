/* global it expect */
import { GameChannels, forces, GameMessagesMockCollab } from '@serge/mocks'
import CollaborationController from '../collaboration-controller'
import { ChannelData, ForceRole, Role } from '@serge/custom-types'
import { CollaborativeMessageStates, CollaborativeMessageCommands } from '@serge/config'
import _ from 'lodash'

const rfi: ChannelData = GameChannels[3]
const coa: ChannelData = GameChannels[4]
const whiteGC: Role = forces[0].roles[0]
const whiteRFI: Role = forces[0].roles[1]
const whiteForce: string = forces[0].uniqid
const blueCO: Role = forces[1].roles[0]
const blueOther: Role = forces[1].roles[1]
const blueForce: string = forces[1].uniqid

it('configures collaboration-controller correctly', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteGC)
  expect(controller).toBeTruthy()
})

// /////////////
// getMyTemplates
// //////////////

it('returns templates for blue role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, blueForce, blueCO)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(2)
  expect(myTemplates[0].title).toEqual('RFI')
  expect(myTemplates[1].title).toEqual('Weather')
})

it('returns templates for blue other role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, blueForce, blueOther)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
  expect(myTemplates[0].title).toEqual('RFI')
})

it('returns templates for white role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteGC)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(0)
})

it('returns templates for blue role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueCO)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns templates for blue other role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueOther)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns zero templates for white role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteGC)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(0)
})

// /////////////
// canEdit()
// //////////////

it('shows blue as participating in COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueCO)
  expect(controller.canEdit()).toBeTruthy()
})

it('shows blue as not participating in RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, blueForce, blueCO)
  expect(controller.canEdit()).toBeFalsy()
})

it('shows white as participating in RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteGC)
  expect(controller.canEdit()).toBeTruthy()
})

it('shows white as not participating in COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteGC)
  expect(controller.canEdit()).toBeFalsy()
})

// /////////////
// canRelease()
// //////////////

it('shows blue CO as releasing in COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueCO)
  expect(controller.canRelease()).toBeTruthy()
})

it('shows blue other as releasing in COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueOther)
  expect(controller.canRelease()).toBeFalsy()
})

it('shows blue as not releasing RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, blueForce, blueCO)
  expect(controller.canRelease()).toBeFalsy()
})

it('shows white rel mgr as releasing RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteRFI)
  expect(controller.canRelease()).toBeTruthy()
})

it('shows white other as not releasing RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteGC)
  expect(controller.canRelease()).toBeFalsy()
})

it('shows white as not releasing COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteGC)
  expect(controller.canRelease()).toBeFalsy()
})

// //////////////////
// canViewLiveUpdates
// //////////////////

it('shows blue as seeing in COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueCO)
  expect(controller.canViewLiveUpdates()).toBeTruthy()
})

it('shows blue as not seeing in RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, blueForce, blueCO)
  expect(controller.canViewLiveUpdates()).toBeFalsy()
})

it('shows white as seeing in RFI', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteGC)
  expect(controller.canViewLiveUpdates()).toBeTruthy()
})

it('shows white as not seeing in COA', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteGC)
  expect(controller.canViewLiveUpdates()).toBeFalsy()
})

// //////////////////
// commandsFor
// //////////////////

it('shows blue CO COA commands', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueCO)
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, blueCO.name)).toEqual([CollaborativeMessageCommands.SendForReview])
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, blueOther.name)).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Unallocated, '')).toEqual([CollaborativeMessageCommands.TakeOwnership])
  // check additional verbs present
  expect(coa.collabOptions?.returnVerbs).toEqual(['Endorse', 'Request Changes'])
  expect(controller.commandsFor(CollaborativeMessageStates.PendingReview, '')).toEqual(['Endorse', 'Request Changes', CollaborativeMessageCommands.Close, CollaborativeMessageCommands.Release])
  expect(controller.commandsFor(CollaborativeMessageStates.Released, '')).toEqual([CollaborativeMessageCommands.ReOpen])
  expect(controller.commandsFor(CollaborativeMessageStates.Rejected, '')).toEqual([CollaborativeMessageCommands.ReOpen])
})

it('shows blue other COA commands', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, blueForce, blueOther)
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, blueCO.name)).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, blueOther.name)).toEqual([CollaborativeMessageCommands.SendForReview])
  expect(controller.commandsFor(CollaborativeMessageStates.Unallocated, '')).toEqual([CollaborativeMessageCommands.TakeOwnership])
  expect(controller.commandsFor(CollaborativeMessageStates.PendingReview, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Released, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Rejected, '')).toEqual([])
})

it('shows blue CO RFI commands', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, blueForce, blueCO)
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Unallocated, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.PendingReview, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Released, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Rejected, '')).toEqual([])
})

it('shows white CO COA commands', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteGC)
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Unallocated, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.PendingReview, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Released, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Rejected, '')).toEqual([])
})

it('shows white CO RFI commands', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteGC)
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, whiteGC.name)).toEqual([CollaborativeMessageCommands.SendForReview])
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, whiteRFI.name)).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Unallocated, '')).toEqual([CollaborativeMessageCommands.TakeOwnership])
  expect(controller.commandsFor(CollaborativeMessageStates.PendingReview, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Released, '')).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.Rejected, '')).toEqual([])
})

it('shows white RFI Mgr RFI commands', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteRFI)
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, whiteGC.name)).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.InProgress, whiteRFI.name)).toEqual([CollaborativeMessageCommands.SendForReview])
  expect(controller.commandsFor(CollaborativeMessageStates.Unallocated, '')).toEqual([CollaborativeMessageCommands.TakeOwnership])
  expect(rfi.collabOptions?.returnVerbs).toEqual([])
  expect(controller.commandsFor(CollaborativeMessageStates.PendingReview, '')).toEqual([CollaborativeMessageCommands.Close, CollaborativeMessageCommands.Release, CollaborativeMessageCommands.RequestChanges])
  expect(controller.commandsFor(CollaborativeMessageStates.Released, '')).toEqual([CollaborativeMessageCommands.ReOpen])
  expect(controller.commandsFor(CollaborativeMessageStates.Rejected, '')).toEqual([CollaborativeMessageCommands.ReOpen])
})

// //////////////////
// messageCanBeAssignedTo
// //////////////////

it('shows rfi RFI assignees', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteRFI)
  const assignees = controller.messageCanBeAssignedTo()
  expect(assignees).toBeTruthy()
  expect(assignees.length).toEqual(2)
  expect(assignees[0].forceName).toEqual('White')
  expect(assignees[1].roleName).toEqual('RFI Manager')
})

it('shows rfi COA assignees', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteRFI)
  const assignees = controller.messageCanBeAssignedTo()
  expect(assignees).toBeTruthy()
  expect(assignees.length).toEqual(2)
  expect(assignees[0].forceName).toEqual('Blue')
  expect(assignees[1].roleName).toEqual('Comms')
})

// //////////////////
// get initial state
// //////////////////

it('shows rfi initial state', () => {
  const controller: CollaborationController = new CollaborationController(forces, rfi, whiteForce, whiteRFI)
  expect(controller.getInitialState()).toEqual(CollaborativeMessageStates.Unallocated)
})

it('shows COA initial state', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteRFI)
  expect(controller.getInitialState()).toEqual(CollaborativeMessageStates.PendingReview)
})

// //////////////////
// getCurrentOwner
// //////////////////
it('get current owner', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteRFI)
  expect(controller.getCurrentOwner(GameMessagesMockCollab[6])).toBeTruthy()
  expect(controller.getCurrentOwner(GameMessagesMockCollab[6])?.forceName).toEqual('Blue')
  expect(controller.getCurrentOwner(GameMessagesMockCollab[6])?.roleName).toEqual('Comms')

  // check a bunch of messages with no owner
  expect(controller.getCurrentOwner(GameMessagesMockCollab[5])).toEqual(undefined)
  expect(controller.getCurrentOwner(GameMessagesMockCollab[9])).toEqual(undefined)
  expect(controller.getCurrentOwner(GameMessagesMockCollab[12])).toEqual(undefined)
})

// //////////////////
// applyCommand
// //////////////////
it('apply command to messages', () => {
  const controller: CollaborationController = new CollaborationController(forces, coa, whiteForce, whiteRFI)

  const roles: Array<ForceRole> = controller.messageCanBeAssignedTo()

  const msg = _.cloneDeep(GameMessagesMockCollab[5])
  expect(msg.details.collaboration).toBeTruthy()
  expect(msg.details.collaboration?.status).toEqual(CollaborativeMessageStates.Unallocated)
  const msg2 = controller.applyCommandTo(msg, CollaborativeMessageCommands.TakeOwnership, roles[0], undefined)
  expect(msg2.details.collaboration).toBeTruthy()
  expect(msg2.details.collaboration?.status).toEqual(CollaborativeMessageStates.InProgress)
  expect(msg2.details.collaboration?.owner?.roleId).toEqual(blueCO.roleId)
  const msg3 = controller.applyCommandTo(msg2, CollaborativeMessageCommands.SendForReview, undefined, undefined)
  expect(msg3.details.collaboration).toBeTruthy()
  expect(msg3.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
  expect(msg3.details.collaboration?.owner).toEqual(undefined)
  const msg4 = controller.applyCommandTo(msg2, CollaborativeMessageCommands.RequestChanges, undefined, 'Please make this change')
  expect(msg4.details.collaboration).toBeTruthy()
  if (msg4.details.collaboration) {
    expect(msg4.details.collaboration.status).toEqual(CollaborativeMessageStates.Unallocated)
    if (msg4.details.collaboration.feedback) {
      expect(msg4.details.collaboration.feedback[0].feedback).toEqual('Please make this change')
      expect(msg4.details.collaboration.owner).toEqual(undefined)
    }
  }
  const msg5 = controller.applyCommandTo(msg2, CollaborativeMessageCommands.RequestChanges, undefined, 'Please make this change')
  expect(msg5.details.collaboration).toBeTruthy()
  if (msg5.details.collaboration) {
    expect(msg5.details.collaboration.status).toEqual(CollaborativeMessageStates.Unallocated)
    if (msg5.details.collaboration.feedback) {
      expect(msg5.details.collaboration.feedback[0].feedback).toEqual('Please make this change')
      expect(msg5.details.collaboration.owner).toEqual(undefined)
    }
  }
})
