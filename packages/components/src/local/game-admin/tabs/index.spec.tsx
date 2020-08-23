/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Tabs from './index'

it('tabs renders correctly', () => {
  const tree = renderer
    .create(<Tabs tabs={['tab1', 'tab2', 'tab3']} disabled={false}>Text</Tabs>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
