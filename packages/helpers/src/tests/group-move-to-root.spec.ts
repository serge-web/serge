/* global it expect */

/* Import mock data */
import { Asset, ForceData } from '@serge/custom-types'
import { forces as mockForces } from '@serge/mocks'
import deepCopy from '../deep-copy'
import groupMoveToRoot from '../group-move-to-root'

it('Moves merlin to top level from hosting', () => {
  const merlinId = 'a0pra11002'
  const forces = deepCopy(mockForces)
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
  }

  // move the merlin to the top level
  const forces2: ForceData[] | undefined = groupMoveToRoot(merlinId, forces)
  expect(forces2).toBeTruthy()

  // check merlin isn't on frigate
  if (forces2 && forces2[1].assets && forces2[1].assets[1]) {
    const uavId = 'a0pra18702'
    const frigate: Asset = forces2[1].assets[1]
    expect(frigate.hosting && frigate.hosting[0].uniqid).toEqual(uavId)
  }

  // check merlin is where we expect it to be
  if (forces2 && forces2[1].assets && forces2[1].assets[4]) {
    expect(forces2[1].assets[4].uniqid).toEqual(merlinId)
    // check it has a location
    expect(forces2[1].assets[4].position).toEqual('P21')
  }
})

it('Moves mcmv to top level from comprising', () => {
  const mcmvId = 'a0traa6790'
  const forces = deepCopy(mockForces)
  // check mcm is where we expect it to be
  if (forces[1].assets && forces[1].assets[0]) {
    const taskGroup: Asset = forces[1].assets[0]
    expect(taskGroup.comprising && taskGroup.comprising.length).toEqual(2)
    expect(taskGroup.comprising && taskGroup.comprising[1].uniqid).toEqual(mcmvId)
  }

  // move the mcm to the top level
  const forces2: ForceData[] | undefined = groupMoveToRoot(mcmvId, forces)
  expect(forces2).toBeTruthy()

  // check mcm isn't in task group
  if (forces2 && forces2[1] && forces2[1].assets && forces2[1].assets[0]) {
    const taskGroup: Asset = forces2[1].assets[0]
    expect(taskGroup.comprising && taskGroup.comprising.length).toEqual(1)
  }

  // check mcm is where we expect it to be
  if (forces2 && forces2[1] && forces2[1].assets && forces2[1].assets[5]) {
    expect(forces2[1].assets[5].uniqid).toEqual(mcmvId)
  }
})

it('Moves uav to top level from comprising and hosting', () => {
  const uavId = 'a0pra43302'
  const forces = deepCopy(mockForces)
  // check merlin is where we expect it to be
  if (forces[1].assets && forces[1].assets[0]) {
    const taskGroup: Asset = forces[1].assets[0]
    expect(taskGroup).toBeTruthy()
    const frigate = taskGroup.comprising && taskGroup.comprising[0]
    expect(frigate).toBeTruthy()
    expect(frigate && frigate.hosting && frigate.hosting.length).toEqual(2)
    const uav = frigate && frigate.hosting && frigate.hosting[0]
    expect(uav).toBeTruthy()
    expect(uav && uav.uniqid).toEqual(uavId)
  } else {
    expect(false).toBeTruthy()
  }

  // move the merlin to the top level
  const forces2: ForceData[] | undefined = groupMoveToRoot(uavId, forces)
  expect(forces2).toBeTruthy()

  // check it has moved
  // check merlin is where we expect it to be
  if (forces2 && forces2[1].assets && forces2[1].assets[0]) {
    const taskGroup: Asset = forces2[1].assets[0]
    expect(taskGroup).toBeTruthy()
    const frigate = taskGroup.comprising && taskGroup.comprising[0]
    expect(frigate).toBeTruthy()
    expect(frigate && frigate.hosting && frigate.hosting.length).toEqual(1)
  } else {
    expect(false).toBeTruthy()
  }

  // check merlin is where we expect it to be
  if (forces2 && forces2[1].assets && forces2[1].assets[5]) {
    expect(forces2[1].assets[4].uniqid).toEqual(uavId)
  }
})
