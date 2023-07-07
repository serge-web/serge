import { ChannelUI, MessageDetails } from 'src/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import NewMessage from './index'

jest.mock('leaflet', () => {
  const leafletModule = jest.requireActual('leaflet')
  return {
    ...leafletModule,
    Symbol: {
      arrowHead: jest.fn()
    }
  }
})

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  }
})

it('NewMessage renders correctly', () => {
  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.name] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid
    } as ChannelUI
  })

  const postBack = (details: MessageDetails, message: any): void => {
    console.log('send message', details, message)
  }

  const tree = renderer
    .create(<NewMessage
      templates={planningMessageTemplatesMock}
      gameDate={P9Mock.data.overview.gameDate}
      privateMessage={true}
      orderableChannel={false}
      channel={P9Mock.data.channels.channels[0]}
      confirmCancel={false}
      currentTurn={0}
      selectedForce={P9Mock.data.forces.forces[0]}
      selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
      selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
      postBack={postBack}
    />)
    .toJSON()
  expect(tree).toBeTruthy()
  // expect(tree).toMatchSnapshot()
})
