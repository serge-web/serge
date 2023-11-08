/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AdminLayout from './index'
import { WargameMock as wargame } from 'src/mocks'

it('AdminLayout renders correctly', () => {
  const tree = renderer
    .create(<AdminLayout wargame={wargame}>Content</AdminLayout>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
