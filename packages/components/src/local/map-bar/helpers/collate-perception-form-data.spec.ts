/* global it expect */
import collatePerceptionFormData from './collate-perception-form-data'

import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import forces from '@serge/mocks/forces.mock'
import { PerceptionFormPopulate, PerceptionFormValues } from '@serge/custom-types'

it('contains relevant population results', () => {
  const res: PerceptionFormPopulate = collatePerceptionFormData(platformTypes, selectedAsset, forces).populate
  expect(res.perceivedForce.length).toEqual(5)
  expect(res.perceivedForce[0]).toEqual({ colour: '#FCFBEE', name: 'White' })
  expect(res.perceivedForce).toContainEqual({ colour: '#ccc', name: 'Unknown' })
  expect(res.perceivedType.length).toEqual(13)
  expect(res.perceivedType[0]).toEqual('Fishing vessel')
  expect(res.perceivedType).toContain('Unknown')
})

it('contains relevant current results', () => {
  const res: PerceptionFormValues = collatePerceptionFormData(platformTypes, selectedAsset, forces).values
  expect(res.perceivedForceVal).toEqual('Blue')
  expect(res.perceivedTypeVal).toEqual('Frigate')
  expect(res.perceivedNameVal).toEqual('asset-name')
})
