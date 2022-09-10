/* global it expect */

import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import NewMessage2 from './index'

it('NewMessage2 renders correctly', () => {
  const tree = renderer
    .create(<NewMessage2
      templates={planningMessageTemplatesMock}
      privateMessage={true}
      orderableChannel={false}
      curChannel={P9Mock.data.channels.name}
      confirmCancel={false}
      activityTimeChanel={noop}
      channels={[P9Mock.data.channels]}
      currentTurn={0}
      currentWargame={P9Mock.currentWargame || ''}
      gameDate=''
      saveMessage={() => (): void => { console.log('save') }}
      saveNewActivityTimeMessage={() => (): void => { console.log('save activity') }}
      selectedForce={P9Mock.data.forces.forces[0]}
      selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
      selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
      dispatch={noop}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
