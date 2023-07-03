/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { WargameMock as wargame } from '@serge/mocks'

import StatusBar from './index'

it('StatusBar renders correctly', () => {
  const tree = renderer
    .create(<StatusBar wargame={wargame}></StatusBar>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
