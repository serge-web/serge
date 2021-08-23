/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SettingChannels from './index'
import { ChannelData } from './types/props'
import { WargameExportedMock, MessageTemplatesMock } from '@serge/mocks'

const onChange = (updates: { channels: Array<ChannelData> }): void => { console.log(updates.channels) }

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
