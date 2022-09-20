import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import NewMessage from './index'

it('NewMessage renders correctly', () => {
  const tree = renderer
    .create(<NewMessage
      templates={planningMessageTemplatesMock}
      privateMessage={true}
      orderableChannel={false}
      channel={P9Mock.data.channels.channels[0]}
      confirmCancel={false}
      activityTimeChanel={noop}
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
