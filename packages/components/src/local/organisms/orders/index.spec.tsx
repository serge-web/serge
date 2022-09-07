/* global it expect */
import { messageDataCollaborativeEditing, MessageTemplatesMockByKey, WargameMock } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import Orders from './index'

const templates = Object.values(MessageTemplatesMockByKey)

describe('Orders component:', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<Orders messages={messageDataCollaborativeEditing} templates={templates} gameDate={WargameMock.data.overview.gameDate} 
        columns={[]} rows={[]} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
