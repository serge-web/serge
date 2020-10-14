/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Channels from './index'
import { ChannelData } from './types/props'
import { WargameExportedMock, MessageTemplatesMock } from '@serge/mocks'

const onChange = (channels: Array<ChannelData>): void => { console.log(channels) }

it('channels renders correctly', () => {
  const tree = renderer
    .create(<Channels
      channels={WargameExportedMock.data.channels.channels}
      forces={WargameExportedMock.data.forces.forces}
      onChange={onChange}
      messages={MessageTemplatesMock}
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
