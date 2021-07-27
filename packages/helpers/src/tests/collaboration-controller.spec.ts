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
  const controller: CollaborationController = new CollaborationController(rfi, whiteForce, whiteGC)
  expect(controller).toBeTruthy()
})

it('returns templates for blue role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(rfi, blueForce, blueCO)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(2)
})

it('returns templates for blue other role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(rfi, blueForce, blueOther)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns templates for white role in RFI channel', () => {
  const controller: CollaborationController = new CollaborationController(rfi, whiteForce, whiteGC)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(0)
})

it('returns templates for blue role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(coa, blueForce, blueCO)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns templates for blue other role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(coa, blueForce, blueOther)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(1)
})

it('returns zero templates for white role in COA channel', () => {
  const controller: CollaborationController = new CollaborationController(coa, whiteForce, whiteGC)
  const myTemplates = controller.getMyTemplates()
  expect(myTemplates).toBeTruthy()
  expect(myTemplates.length).toEqual(0)
})
