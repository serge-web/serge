import { ChannelUI, MessageDetails } from 'src/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import MessageCreator from './index'

jest.mock('leaflet', () => {
  const leafletModule = jest.requireActual('leaflet')
  const mockLeafletModule = {
    ...leafletModule,
    Symbol: {
      arrowHead: jest.fn()
    }
  };
  return mockLeafletModule
})

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

it('MessageCreator renders correctly', () => {
  const channel = P9Mock.data.channels.channels[0]
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
    .create(<MessageCreator
      channel={channel}
      messageOption='Chat'
      currentTurn={0}
      gameDate=''
      privateMessage={true}
      schema={planningMessageTemplatesMock[0].details}
      selectedForce={P9Mock.data.forces.forces[0]}
      selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
      selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
      postBack={postBack}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
