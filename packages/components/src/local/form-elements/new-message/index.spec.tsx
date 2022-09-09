/* global it expect */

import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import NewMessage2 from './index'

it('NewMessage2 renders correctly', () => {
  const tree = renderer
    .create(<NewMessage2 role=''
      templates={[]}
      privateMessage={false}
      orderableChannel={false}
      curChannel=''
      confirmCancel={false}
      activityTimeChanel={noop}
      channels={[]}
      currentTurn={0}
      currentWargame=''
      gameDate=''
      saveMessage={() => (): void => { console.log('save') }}
      saveNewActivityTimeMessage={() => (): void => { console.log('activity') }}
      selectedForce={P9Mock.data.forces.forces[0]}
      selectedRole={''}
      selectedRoleName={''}
      dispatch={noop}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
