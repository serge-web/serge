/* global it expect */

import forces from '@serge/mocks/forces.mock'
import collateVisibilityFormData from './collate-visibility-form-data'
import selectedAsset from '@serge/mocks/selected-asset.mock'

it('produces visibility data', () => {
  const formData = collateVisibilityFormData(selectedAsset, forces)
  expect(formData).toBeDefined()
  expect(formData.populate.length).toEqual(2)
  expect(formData.values.length).toEqual(2)
  expect(formData.values).toContain('red')
  expect(formData.values).toContain('blue')
})
