/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import JsonEditor from './index'

import { MessageTemplatesMockByKey, messageDataCollaborativeEditing, WargameMock } from '@serge/mocks'

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JsonEditor
        messageTemplates={MessageTemplatesMockByKey}
        message={messageDataCollaborativeEditing[2]}
        disabled={true}
        gameDate={WargameMock.data.overview.gameDate}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
