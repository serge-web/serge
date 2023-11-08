/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SettingChannels from './index'
import { ChannelTypes } from './types/props'
import { WargameExportedMock, MessageTemplatesMock } from 'src/mocks'

const onChange = (updates: { channels: Array<ChannelTypes> }): void => { console.log(updates.channels) }

describe('SettingChannels component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SettingChannels
        channels={WargameExportedMock.data.channels.channels || []}
        forces={WargameExportedMock.data.forces.forces}
        onChange={onChange}
        messageTemplates={MessageTemplatesMock}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
