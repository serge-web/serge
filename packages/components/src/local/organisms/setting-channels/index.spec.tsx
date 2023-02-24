/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SettingChannels from './index'
import { ChannelTypes } from './types/props'
import { WargameExportedMock } from '@serge/mocks'

const onChange = (updates: { channels: Array<ChannelTypes> }): void => { console.log(updates.channels) }
const { data } = WargameExportedMock
describe('SettingChannels component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SettingChannels
        channels={data.channels.channels || []}
        forces={data.forces.forces}
        onChange={onChange}
        messageTemplates={data.templates.templates}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
