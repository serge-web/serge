/* global it expect */
import collatePerceptionFormData from './collate-perception-form-data'

import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import forces from '@serge/mocks/forces.mock'
import { PerceptionFormData, PerceptionFormPopulate, PerceptionFormValues } from '@serge/custom-types'
import { UMPIRE_FORCE } from '@serge/config'

it('contains relevant population results', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100'
  }
  const data: PerceptionFormData | null = collatePerceptionFormData(platformTypes, 'Blue', selected2, forces)
  if (data) {
    const res: PerceptionFormPopulate = data.populate
    expect(res.perceivedForce.length).toEqual(4)
    expect(res.perceivedForce[0]).toEqual({ colour: '#00F', name: 'Blue' })
    expect(res.perceivedForce).toContainEqual({ colour: '#ccc', name: 'Unknown' })
    expect(res.perceivedType.length).toEqual(14)
    expect(res.perceivedType[0]).toEqual('Fishing vessel')
    expect(res.perceivedType).toContain('Unknown')
  } else {
    expect(false).toBeTruthy()
  }
})

it('contains relevant current results for other force', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100',
    force: 'Red'
  }
  const data: PerceptionFormData | null = collatePerceptionFormData(platformTypes, 'Blue', selected2, forces)
  if (data) {
    const res: PerceptionFormValues = data.values
    expect(res.perceivedForceVal).toEqual('unknown')
    expect(res.perceivedTypeVal).toEqual('unknown')
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
    expect(res.perceivedForceVal).toEqual('blue')
    expect(res.perceivedTypeVal).toEqual('frigate')
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
    expect(res.perceivedForceVal).toEqual('blue')
    expect(res.perceivedTypeVal).toEqual('frigate')
    expect(res.perceivedNameVal).toEqual('Dhow-A')
  } else {
    expect(false).toBeTruthy()
  }
})
