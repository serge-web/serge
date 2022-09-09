/* global it expect */

import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import MessageCreator from './index'

it('MessageCreator renders correctly', () => {
  const tree = renderer
    .create(<MessageCreator
      channels={[]}
      curChannel=''
      currentTurn={0}
      currentWargame=''
      gameDate=''
      privateMessage={false}
      saveMessage={() => () => { }}
      saveNewActivityTimeMessage={() => () => { }}
      schema={''}
      selectedForce={P9Mock.data.forces.forces[0]}
      selectedRole={''}
      selectedRoleName={''}
      dispatch={noop}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
