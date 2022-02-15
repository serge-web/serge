/* global it expect */
/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import { Phase } from '@serge/config'

import canCombineWith from './can-combine-with'
import { routeCreateStore } from '@serge/helpers'
import { RouteStore } from '@serge/custom-types'

it('returns correct combine with answers', () => {
  // put the tanker in the same cell as the frigate
  if (forces[1].assets) {
    forces[1].assets[3].position = forces[1].assets[1].position
  }

  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Blue', platformTypes, false, false)

  const tankerId = 'a0pra00003'
  const frigateId = 'a0pra00001'
  const groupId = 'a0pra5431'
 // const merlinId = 'a0pra11002'

  // when component first renders, there isn't anything selected, so id of '-1' is used
  const UNSELECTED_ID = -1

  // export type NodeType = 'empty' | 'group' | 'group-out'

  // if nothing is selected, just let it be draggable
  expect(canCombineWith(store, UNSELECTED_ID, frigateId, [], 'group')).toBeTruthy()
  expect(canCombineWith(store, UNSELECTED_ID, groupId, [], 'group')).toBeTruthy()

  // let platforms in same cell be draggable
  expect(canCombineWith(store, tankerId, frigateId, [], 'group')).toBeTruthy()
  expect(canCombineWith(store, frigateId, tankerId, [], 'group')).toBeTruthy()

  // TODO: reinstate these tests
  // if they're not in same cell, they're not draggable
  // expect(canCombineWith(store, frigateId, groupId, [], 'group')).toBeFalsy()

  // // for a platform that is a child, if the target id is -1, it's the operation to
  // // go the top level
  // expect(canCombineWith(store, merlinId, UNSELECTED_ID, [], 'empty')).toBeTruthy()
})
