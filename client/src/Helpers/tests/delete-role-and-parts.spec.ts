import deleteRoleAndParts from '../delete-role-and-parts'
import deepCopy from '../deep-copy'

import { watuWargame } from '@serge/mocks'
import { ParticipantChat, Wargame } from 'src/custom-types'
import _ from 'lodash'

const blueForce = deepCopy(watuWargame.data.forces.forces[1])
const blueCO = blueForce.roles[0]

it('delete role:', () => {
  const wargame = deepCopy(watuWargame)

  expect(blueForce).toBeTruthy()
  expect(blueForce.name).toEqual('Blue-1 Force')
  expect(blueForce.roles[2].name).toEqual('Comms')
  expect(blueForce.roles.length).toEqual(3)
  const res = deleteRoleAndParts(wargame.data, blueForce.roles, 1)
  expect(res).toBeTruthy()
  const newBlue = _.isArray(res) ? res[0].forces.forces[1] : res.forces.forces[1]
  expect(newBlue.roles.length).toEqual(2)
})

it('delete role from participant multiple blue roles:', () => {
  const wargame: Wargame = deepCopy(watuWargame)
  const testChannel = wargame.data.channels.channels[0]
  expect(testChannel.name).toEqual('VHF C16')
  const bluePart = testChannel.participants[1]
  bluePart.roles = [blueForce.roles[0].roleId, blueForce.roles[1].roleId]
  expect(bluePart.roles.length).toEqual(2)
  const res = deleteRoleAndParts(wargame.data, blueForce.roles, 1)
  expect(res).toBeTruthy()
  const newChann = _.isArray(res) ? res[0].channels.channels[0] : res.channels.channels[0]
  expect(newChann.name).toEqual('VHF C16')
  expect(newChann.participants.length).toEqual(3)
  expect(newChann.participants[1].roles.length).toEqual(1)
  expect(newChann.participants[1].roles[0]).toEqual(blueCO.roleId)
})

it('delete participation that just had one blue role:', () => {
  const wargame: Wargame = deepCopy(watuWargame)

  // create a channel with just one blue role, so participation gets deleted
  const testChannel = wargame.data.channels.channels[0]
  expect(testChannel.name).toEqual('VHF C16')
  expect(testChannel.participants.length).toEqual(3)
  const bluePart = testChannel.participants[1]
  bluePart.roles = [blueForce.roles[2].roleId]
  expect(bluePart.roles.length).toEqual(1)
  const res = deleteRoleAndParts(wargame.data, blueForce.roles, 2)
  expect(res).toBeTruthy()

  // check there are now only two participations
  const newChann = _.isArray(res) ? res[0].channels.channels[0] : res.channels.channels[0]
  expect(newChann.name).toEqual('VHF C16')
  expect(newChann.participants.length).toEqual(2)
})

it('delete channel that has no more participations', () => {
  const wargame: Wargame = deepCopy(watuWargame)

  // create a channel with just one blue role, so participation gets deleted
  const testChannel = wargame.data.channels.channels[0]
  expect(testChannel.name).toEqual('VHF C16')
  expect(testChannel.participants.length).toEqual(3)
  const bluePart = testChannel.participants[1]
  bluePart.roles = [blueForce.roles[2].roleId]
  // ensure the channel just has one participation
  testChannel.participants = [bluePart as ParticipantChat]

  // check number of channels
  expect(wargame.data.channels.channels.length).toEqual(2)
  expect(wargame.data.channels.channels[0].name).toEqual('VHF C16')

  const res = deleteRoleAndParts(wargame.data, blueForce.roles, 2)
  expect(res).toBeTruthy()

  // check there are now fewer channels
  expect(_.isArray(res) ? res[0].channels.channels.length : res.channels.channels.length).toEqual(1)
  expect(_.isArray(res) ? res[0].channels.channels[0].name : res.channels.channels[0].name).toEqual('mapping')
})
