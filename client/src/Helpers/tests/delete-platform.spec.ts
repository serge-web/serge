/* global it expect */

/* Import mock data */
import { Asset, ForceData } from 'src/custom-types'
import { forces as mockForces } from 'src/mocks'
import deepCopy from '../deep-copy'

import deletePlatform from '../delete-platform'

it('Delete platform from top layer', () => {
  const forces = deepCopy(mockForces)
  const frigateId = 'a0pra00001'

  // check frigate is where we expect it to be
  if (forces[1].assets && forces[1].assets[1]) {
    const frigate: Asset = forces[1].assets[1]
    expect(frigate.uniqid).toEqual(frigateId)
  }

  // move the merlin to the top level
  const forces2: ForceData[] | undefined = deletePlatform(frigateId, forces)
  expect(forces2).toBeTruthy()

  // check frigate is gone
  if (forces2[1].assets && forces2[1].assets[1]) {
    const frigate: Asset = forces2[1].assets[1]
    expect(frigate.uniqid).not.toEqual(frigateId)
  }
})
