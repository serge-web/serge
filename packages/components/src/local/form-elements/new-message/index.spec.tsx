import { ChannelUI, MessageDetails } from '@serge/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import NewMessage from './index'

it('NewMessage renders correctly', () => {
  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.name] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid
    } as ChannelUI
  })
  const postBack = (details: MessageDetails, message: any) => {
    console.log('send message', details, message)
  }

  const tree = renderer
    .create(<NewMessage
      templates={planningMessageTemplatesMock}
      privateMessage={true}
      orderableChannel={false}
      curChannel={P9Mock.data.channels.channels[0].name}
      confirmCancel={false}
      channels={channels}
      currentTurn={0}
      gameDate=''
      selectedForce={P9Mock.data.forces.forces[0]}
      selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
      selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
      postBack={postBack}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
