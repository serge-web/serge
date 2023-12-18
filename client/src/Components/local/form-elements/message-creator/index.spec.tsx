import { ChannelUI, MessageDetails } from 'src/custom-types'
import { watuWargame, MessageTemplatesMock } from 'src/mocks'
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
  }
  return mockLeafletModule
})

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

it('MessageCreator renders correctly', () => {
  const channel = watuWargame.data.channels.channels[0]
  const channels = {}
  watuWargame.data.channels.channels.forEach(c => {
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
      schema={MessageTemplatesMock[0].details}
      selectedForce={watuWargame.data.forces.forces[0]}
      selectedRole={watuWargame.data.forces.forces[0].roles[0].roleId}
      selectedRoleName={watuWargame.data.forces.forces[0].roles[0].name}
      postBack={postBack}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
