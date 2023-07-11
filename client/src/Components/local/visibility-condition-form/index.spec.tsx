/* global it */

// /* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import VisibilityForm from './index'

/* Import mock data */
import { forces, selectedAsset, platformTypes } from 'src/mocks'

// import data types
import collateVisibilityFormData from '../map-bar/helpers/collate-visibility-form-data'
const formData = collateVisibilityFormData(platformTypes, selectedAsset, forces)
const iconData = { platformType: 'merchant-vessel', forceColor: 'blue', icon: 'frigate.svg' }

it('VisibilityForm renders correctly', () => {
  const tree = renderer
    .create(<VisibilityForm formHeader="Visibility header" icon={iconData} formData={formData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
