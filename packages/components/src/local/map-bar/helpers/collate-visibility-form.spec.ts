/* global it expect */

import collateVisibilityFormData from './collate-visibility-form-data'
import { forces, platformTypes, selectedAsset } from '@serge/mocks'

it('produces visibility data', () => {
  const formData = collateVisibilityFormData(platformTypes, selectedAsset, forces)
  expect(formData).toBeDefined()
  expect(formData.populate.length).toEqual(2)
  expect(formData.forceNames.length).toEqual(2)
  expect(formData.forceNames).toContain(forces[2].uniqid)
  expect(formData.forceNames).toContain(forces[1].uniqid)
})
