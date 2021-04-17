/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment-timezone'

import Message from './index'
import { AdminMessagesMock } from '@serge/mocks'

it('Message renders correctly', () => {
  moment.tz.setDefault('Etc/UTC')
  const tree = renderer
    .create(<Message message={AdminMessagesMock[0]}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
