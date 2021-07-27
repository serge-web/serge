/* global it expect */
import { GameChannels, smallForces } from '@serge/mocks'
import CollaborationController from '../collaboration-controller'
import { ChannelData, Role } from '@serge/custom-types'

const rfi: ChannelData = GameChannels[3]
const coa: ChannelData = GameChannels[4]
const whiteGC: Role = smallForces[0].roles[0]
const whiteRFI: Role = smallForces[0].roles[1]
const whiteForce: string = smallForces[0].uniqid
const blueCO: Role = smallForces[1].roles[0]
const blueOther: Role = smallForces[1].roles[1]
const blueForce: string = smallForces[1].uniqid

console.log(false && coa && blueOther && blueCO && whiteRFI)

it('configures collaboration-controller correctly', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, whiteForce, whiteGC)
  expect(controller).toBeTruthy()
})

// /////////////
// getMyTemplates
// //////////////

it('returns templates for blue role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, blueForce, blueCO)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(2)
  expect(myTemplates[0].title).toEqual('RFI')
  expect(myTemplates[1].title).toEqual('Weather')
})

it('returns templates for blue other role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, blueForce, blueOther)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
  expect(myTemplates[0].title).toEqual('RFI')
})

it('returns templates for white role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, whiteForce, whiteGC)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(0)
})

it('returns templates for blue role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, blueForce, blueCO)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns templates for blue other role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, blueForce, blueOther)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns zero templates for white role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, whiteForce, whiteGC)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(0)
})

// /////////////
// canEdit()
// //////////////

it('shows blue as participating in COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, blueForce, blueCO)
  expect(controller.canEdit()).toBeTruthy()
})

it('shows blue as not participating in RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, blueForce, blueCO)
  expect(controller.canEdit()).toBeFalsy()
})

it('shows white as participating in RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, whiteForce, whiteGC)
  expect(controller.canEdit()).toBeTruthy()
})

it('shows white as not participating in COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, whiteForce, whiteGC)
  expect(controller.canEdit()).toBeFalsy()
})

// /////////////
// canRelease()
// //////////////

it('shows blue CO as releasing in COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, blueForce, blueCO)
  expect(controller.canRelease()).toBeTruthy()
})

it('shows blue other as releasing in COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, blueForce, blueOther)
  expect(controller.canRelease()).toBeFalsy()
})

it('shows blue as not releasing RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, blueForce, blueCO)
  expect(controller.canRelease()).toBeFalsy()
})

it('shows white rel mgr as releasing RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, whiteForce, whiteRFI)
  expect(controller.canRelease()).toBeTruthy()
})

it('shows white other as not lreleasing RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, whiteForce, whiteGC)
  expect(controller.canRelease()).toBeFalsy()
})

it('shows white as not releasing COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, whiteForce, whiteGC)
  expect(controller.canRelease()).toBeFalsy()
})

// //////////////////
// canViewLiveUpdates
// //////////////////

it('shows blue as seeing in COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, blueForce, blueCO)
  expect(controller.canViewLiveUpdates()).toBeTruthy()
})

it('shows blue as not seeing in RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, blueForce, blueCO)
  expect(controller.canViewLiveUpdates()).toBeFalsy()
})

it('shows white as seeing in RFI', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, rfi, whiteForce, whiteGC)
  expect(controller.canViewLiveUpdates()).toBeTruthy()
})

it('shows white as not seeing in COA', () => {
  const controller: CollaborationController = new CollaborationController(smallForces, coa, whiteForce, whiteGC)
  expect(controller.canViewLiveUpdates()).toBeFalsy()
})
