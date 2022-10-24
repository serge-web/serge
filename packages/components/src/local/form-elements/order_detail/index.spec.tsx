/* global it expect */

import { planningMessages } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import OrderDetail from './index'


it('CheckboxType renders correctly', () => {
  const plan = planningMessages[1]
  const tree = renderer
    .create(<div>
      <OrderDetail plan={plan} />
    </div>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
