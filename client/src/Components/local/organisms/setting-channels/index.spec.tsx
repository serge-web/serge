/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SettingChannels from './index'
import { WargameExportedMock, MessageTemplatesMock } from 'src/mocks'
import { WargameDataChange } from 'src/custom-types'

const onChange = (updates: WargameDataChange): void => { console.log(updates) }

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
