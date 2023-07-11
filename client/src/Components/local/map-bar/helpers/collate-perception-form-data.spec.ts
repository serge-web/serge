/* global it expect */
import collatePerceptionFormData from './collate-perception-form-data'

import platformTypes from 'src/mocks/platform-types.mock'
import selectedAsset from 'src/mocks/selected-asset.mock'
import forces from 'src/mocks/forces.mock'
import { PerceptionFormData, PerceptionFormPopulate, PerceptionFormValues } from 'src/custom-types'
import { UMPIRE_FORCE, UNKNOWN_TYPE } from 'src/config'

const redId = forces[2].uniqid
const redName = forces[2].name
const blueForce = forces[1]

it('contains relevant population results', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100'
  }
  const data: PerceptionFormData | null = collatePerceptionFormData(platformTypes, blueForce.uniqid, selected2, forces)
  if (data) {
    const res: PerceptionFormPopulate = data.populate
    expect(res.perceivedForces.length).toEqual(3)
    expect(res.perceivedForces[0]).toEqual({ colour: '#F00', name: 'Red Force', id: 'Red' })
    // check we have the special `undefined` value (null)
    expect(res.perceivedForces).toContainEqual({ colour: '#ccc', name: 'Unknown', id: UNKNOWN_TYPE })
    expect(res.perceivedTypes.length).toEqual(14)
    expect(res.perceivedTypes[0]).toEqual({ name: 'Fishing vessel', uniqid: 'a1' })
  } else {
    expect(false).toBeTruthy()
  }
})

it('contains relevant current results for other force', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100',
    force: redName,
    forceId: redId
  }
  const data: PerceptionFormData | null = collatePerceptionFormData(platformTypes, blueForce.uniqid, selected2, forces)
  if (data) {
    const res: PerceptionFormValues = data.values
    expect(res.perceivedForceColor).toEqual(undefined)
    expect(res.perceivedTypeId).toEqual(UNKNOWN_TYPE)
    expect(res.perceivedNameVal).toEqual('C065')
  } else {
    expect(false).toBeTruthy()
  }
})

it('contains relevant current results for my force', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100',
    force: 'Blue'
  }
  const data: PerceptionFormData | null = collatePerceptionFormData(platformTypes, 'Blue', selected2, forces)
  if (data) {
    const res: PerceptionFormValues = data.values
    expect(res.perceivedForceColor).toEqual(forces[1].color)
    expect(res.perceivedTypeId).toEqual('a3')
    expect(res.perceivedNameVal).toEqual('Dhow-A')
  } else {
    expect(false).toBeTruthy()
  }
})

it('contains relevant current results for umpire force', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100',
    force: 'Blue'
  }
  const data: PerceptionFormData | null = collatePerceptionFormData(platformTypes, UMPIRE_FORCE, selected2, forces)
  if (data) {
    const res: PerceptionFormValues = data.values
    expect(res.perceivedForceColor).toEqual(forces[1].color)
    expect(res.perceivedTypeId).toEqual('a3')
    expect(res.perceivedNameVal).toEqual('Dhow-A')
  } else {
    expect(false).toBeTruthy()
  }
})
