/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import groupMoveToRoot from './group-move-to-root'


it('returns correct combine with answers', () => {

  // check merlin is where we expect it to be
  // if()
  // expect(forces[1].a)

  // move the merlin to the top level
  const merlinId = 'a0pra11002'
  const forces2: any = groupMoveToRoot(merlinId, forces)
  expect(forces2).toBeTruthy()

})
