/* global it expect */
import { GameChannels, smallForces } from '@serge/mocks'
import CollaborationController from '../collaboration-controller'
import { ChannelData, Role } from '@serge/custom-types'

it('configures collaboration-controller correctly', () => {
  const channel: ChannelData = GameChannels[0]
  const role: Role = smallForces[0].roles[0]
  const controller: CollaborationController = new CollaborationController(channel, role)

  expect(controller).toBeTruthy()
})
