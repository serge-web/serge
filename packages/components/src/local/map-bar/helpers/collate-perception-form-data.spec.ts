/* global it expect */
import collatePerceptionFormData from './collate-perception-form-data'

import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import forces from '@serge/mocks/forces.mock'
import { PerceptionFormPopulate, PerceptionFormValues } from '@serge/custom-types'

it('contains relevant population results', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100'
  }
  const res: PerceptionFormPopulate = collatePerceptionFormData(platformTypes, 'Blue', selected2, forces, false).populate
  expect(res.perceivedForce.length).toEqual(5)
  expect(res.perceivedForce[0]).toEqual({ colour: '#FCFBEE', name: 'White' })
  expect(res.perceivedForce).toContainEqual({ colour: '#ccc', name: 'Unknown' })
  expect(res.perceivedType.length).toEqual(13)
  expect(res.perceivedType[0]).toEqual('Fishing vessel')
  expect(res.perceivedType).toContain('Unknown')
})

it('contains relevant current results for other force', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100',
    force: 'Red'
  }
  const res: PerceptionFormValues = collatePerceptionFormData(platformTypes, 'Blue', selected2, forces, false).values
  expect(res.perceivedForceVal).toEqual('unknown')
  expect(res.perceivedTypeVal).toEqual('unknown')
  expect(res.perceivedNameVal).toEqual('C065')
})

it('contains relevant current results for my force', () => {
  const selected2 = {
    ...selectedAsset,
    uniqid: 'a0pra000100',
    force: 'Blue'
  }
  const res: PerceptionFormValues = collatePerceptionFormData(platformTypes, 'Blue', selected2, forces, false).values
  expect(res.perceivedForceVal).toEqual('blue')
  expect(res.perceivedTypeVal).toEqual('frigate')
  expect(res.perceivedNameVal).toEqual('Dhow-A')
})
