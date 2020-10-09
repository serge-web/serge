/* global it expect */

/* Import mock data */
import { forces } from '@serge/mocks'

import groupMoveToRoot from './group-move-to-root'

it('Moves merlin to top level from hosting', () => {
  const merlinId = 'a0pra11002'
  // check merlin is where we expect it to be
  if (forces[1].assets && forces[1].assets[1]) {
    const frigate: any = forces[1].assets[1]
    // check frigate is where we expect it to be
    expect(frigate.position).toEqual('P21')
    expect(frigate.status).toBeTruthy()
    // check item zero is merlin
    expect(frigate.hosting[0].uniqid).toEqual(merlinId)
    // check merlin doesn't have location
    expect(frigate.hosting[0].position).toEqual(undefined)
  }

  // move the merlin to the top level
  const forces2: any = groupMoveToRoot(merlinId, forces)
  expect(forces2).toBeTruthy()

  // check merlin isn't on frigate
  if (forces2[1].assets && forces2[1].assets[1]) {
    const uavId = 'a0pra18702'
    const frigate: any = forces2[1].assets[1]
    expect(frigate.hosting[0].uniqid).toEqual(uavId)
  }

  // check merlin is where we expect it to be
  if (forces2[1].assets && forces2[1].assets[4]) {
    expect(forces2[1].assets[4].uniqid).toEqual(merlinId)
    // check it has a location
    expect(forces2[1].assets[4].position).toEqual('P21')
  }
})

it('Moves mcmv to top level from hosting', () => {
  const mcmvId = 'a0traa6790'
  // check mcm is where we expect it to be
  if (forces[1].assets && forces[1].assets[0]) {
    const taskGroup: any = forces[1].assets[0]
    expect(taskGroup.comprising.length).toEqual(2)
    expect(taskGroup.comprising[1].uniqid).toEqual(mcmvId)
  }

  // move the mcm to the top level
  const forces2: any = groupMoveToRoot(mcmvId, forces)
  expect(forces2).toBeTruthy()

  // check mcm isn't in task group
  if (forces2[1].assets && forces2[1].assets[0]) {
    const taskGroup: any = forces2[1].assets[0]
    expect(taskGroup.comprising.length).toEqual(1)
  }

  // check mcm is where we expect it to be
  if (forces2[1].assets && forces2[1].assets[4]) {
    expect(forces2[1].assets[4].uniqid).toEqual(mcmvId)
  }
})

it('Moves uav to top level from comprising and hosting', () => {
  const uavId = 'a0pra43302'
  // check merlin is where we expect it to be
  if (forces[1].assets && forces[1].assets[0]) {
    const taskGroup: any = forces[1].assets[0]
    expect(taskGroup).toBeTruthy()
    const frigate = taskGroup.comprising[0]
    expect(frigate).toBeTruthy()
    expect(frigate.hosting.length).toEqual(2)
    const uav = frigate.hosting[0]
    expect(uav).toBeTruthy()
    expect(uav.uniqid).toEqual(uavId)
  } else {
    expect(false).toBeTruthy()
  }

  // move the merlin to the top level
  const forces2: any = groupMoveToRoot(uavId, forces)
  expect(forces2).toBeTruthy()

  // check it has moved
  // check merlin is where we expect it to be
  if (forces2[1].assets && forces2[1].assets[0]) {
    const taskGroup: any = forces2[1].assets[0]
    expect(taskGroup).toBeTruthy()
    const frigate = taskGroup.comprising[0]
    expect(frigate).toBeTruthy()
    expect(frigate.hosting.length).toEqual(1)
  } else {
    expect(false).toBeTruthy()
  }

  // check merlin is where we expect it to be
  if (forces2[1].assets && forces2[1].assets[5]) {
    expect(forces2[1].assets[4].uniqid).toEqual(uavId)
  }
})
