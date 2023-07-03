/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment-timezone'
import AdminMessage from './index'
import { AdminMessagesMock, forces } from '@serge/mocks'

const [whiteForce] = forces

describe('AdminMessage component:', () => {
  moment.tz.setDefault('Etc/UTC')
  it('renders component correctly', () => {
    const tree = renderer
      .create(<AdminMessage force={whiteForce.name} message={AdminMessagesMock[0]}/>)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
