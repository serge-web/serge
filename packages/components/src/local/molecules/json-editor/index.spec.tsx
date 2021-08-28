/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import JsonEditor from './index'

import { MessageTemplatesMockByKey, messageDataCollaborativeEditing } from '@serge/mocks'

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<JsonEditor
        messageTemplates={MessageTemplatesMockByKey}
        message={messageDataCollaborativeEditing[2]}
        disabled={true}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
