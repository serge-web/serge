/* global it expect */
/* Import mock data */
import { watuWargame } from '@serge/mocks'
import { Phase } from 'src/config'

import canCombineWith from './can-combine-with'
import { deepCopy, findAsset, routeCreateStore } from 'src/Helpers'
import { ChannelMapping, ChannelTypes, ForceData, RouteStore } from 'src/custom-types'

const mapChannel = watuWargame.data.channels.channels.find((channel: ChannelTypes) => channel.name === 'mapping') as ChannelMapping
const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

const setLocation = (forces: ForceData[], assetID: string, location: string): void => {
  const asset = findAsset(forces, assetID)
  asset.position = location
}

it('returns correct combine with answers', () => {
  const myForces = deepCopy(forces)

  // put the tanker in the same cell as the frigate
  const blueForce: ForceData = myForces[1]

  const talnID = 'talnID'
  const frigateId = 'nortID'
  const groupId = 'a0pra5431'
  const merlinId = 'a0pra11002'

  // frigate / tanker in same cell
  setLocation(myForces, frigateId, '831801fffffffff')
  setLocation(myForces, talnID, '831801fffffffff')

  // put task group once cell away
  setLocation(myForces, groupId, '83182afffffffff')

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, myForces, blueForce.uniqid, blueForce.roles[0].roleId, false, platformTypes, false, false, undefined, undefined, mapChannel)

  // when component first renders, there isn't anything selected, so id of '-1' is used
  const UNSELECTED_ID = -1

  // export type NodeType = 'empty' | 'group' | 'group-out'

  // if nothing is selected, just let it be draggable
  expect(canCombineWith(store, UNSELECTED_ID, frigateId, [], 'group')).toBeTruthy()
  expect(canCombineWith(store, UNSELECTED_ID, groupId, [], 'group')).toBeTruthy()

  // let platforms in same cell be draggable
  expect(canCombineWith(store, talnID, frigateId, [], 'group')).toBeTruthy()
  expect(canCombineWith(store, frigateId, talnID, [], 'group')).toBeTruthy()

  // if they're not in same cell, they're not draggable
  expect(canCombineWith(store, frigateId, groupId, [], 'group')).toBeFalsy()

  // // for a platform that is a child, if the target id is -1, it's the operation to
  // // go the top level
  expect(canCombineWith(store, merlinId, UNSELECTED_ID, [], 'empty')).toBeTruthy()
})
