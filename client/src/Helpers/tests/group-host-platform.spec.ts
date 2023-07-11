/* global it expect */

/* Import mock data */
import { forces as mockForces, platformTypes } from '@serge/mocks'
import deepCopy from '../deep-copy'

import groupMoveToRoot from '../group-move-to-root'
import groupHostPlatform from '../group-host-platform'
import { Asset, ForceData } from 'src/custom-types'
import { TASK_GROUP } from 'src/config'
import findPlatformTypeFor from '../find-platform-type-for'

const taskGroupType = findPlatformTypeFor(platformTypes, TASK_GROUP, '')

it('Moves merlin back onto frigate', () => {
  const forces = deepCopy(mockForces)
  const merlinId = 'a0pra11002'
  const frigateId = 'a0pra00001'
  // check merlin is where we expect it to be
  if (forces[1].assets && forces[1].assets[1]) {
    const frigate: Asset = forces[1].assets[1]
    // check frigate is where we expect it to be
    expect(frigate.position).toEqual('P21')
    expect(frigate.status).toBeTruthy()
    // check item zero is merlin
    expect(frigate.hosting && frigate.hosting[0].uniqid).toEqual(merlinId)
    // check merlin doesn't have location
    expect(frigate.hosting && frigate.hosting[0].position).toEqual(undefined)
    // check it's hosting assets
    expect(frigate.hosting && frigate.hosting.length).toEqual(2)
  }

  // move the merlin to the top level
  const forces2: ForceData[] | undefined = groupMoveToRoot(merlinId, forces)
  expect(forces2).toBeTruthy()

  if (!taskGroupType) {
    throw new Error('Cannot create task group type')
  }

  // now try to put merling back onto frigate
  const numBeforeDrag = forces2 && forces2[1].assets && forces2[1].assets.length
  const forces3: ForceData[] = groupHostPlatform(merlinId, frigateId, forces, taskGroupType)

  // check num assets shrunk by 1
  if (numBeforeDrag !== undefined) {
    expect(forces3 && forces3[1].assets && forces3[1].assets.length).toEqual(numBeforeDrag - 1)

    // check merlin is on frigate
    if (forces2 && forces2[1].assets && forces2[1].assets.length) {
      const frigate2 = forces2[1].assets.find((asset: Asset) => asset.uniqid === frigateId)
      expect(frigate2).toBeTruthy()
      if (frigate2 && frigate2.comprising) {
        const helo = frigate2.comprising.find((asset: Asset) => asset.uniqid === merlinId)
        expect(helo).toBeTruthy()
      }
    }
  } else {
    expect(false).toBeTruthy()
  }
})
