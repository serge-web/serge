/* global it expect */

import collateVisibilityFormData from './collate-visibility-form-data'
import { forces, platformTypes, selectedAsset } from '@serge/mocks'
import { deepCopy } from 'src/Helpers'

it('produces visibility data', () => {
  // remove a visible to entry, so we don't just select all forces
  const asset = deepCopy(selectedAsset)
  asset.visibleTo = [asset.visibleTo[0]]

  const formData = collateVisibilityFormData(platformTypes, asset, forces)

  expect(formData).toBeDefined()
  expect(formData.availableForces.length).toEqual(2)
  expect(formData.visibleToForces.length).toEqual(1)
  expect(formData.visibleToForces[0]).toEqual(forces[2].uniqid)
  expect(formData.assetId).toEqual(selectedAsset.uniqid)
  expect(formData.contactId).toEqual(selectedAsset.contactId)
  expect(formData.selectedCondition).toEqual(selectedAsset.condition)
  expect(formData.condition.length).toEqual(5)
  expect(formData.condition[1]).toEqual('Limited capability')
  expect(formData.name).toEqual(selectedAsset.name)

  // check populate is ids, not names
  expect(formData.availableForces[0].id).toEqual(forces[2].uniqid)
  expect(formData.availableForces[0].name).toEqual(forces[2].name)
  expect(formData.availableForces[0].colour).toEqual(forces[2].color)
  expect(formData.availableForces[1].id).toEqual(forces[3].uniqid)
  expect(formData.availableForces[1].name).toEqual(forces[3].name)
  expect(formData.availableForces[1].colour).toEqual(forces[3].color)
})
