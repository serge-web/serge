/* global it expect */
import { planningMessages, planningMessageTemplatesMock, WargameMock } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import Orders from './index'

describe('Orders component:', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<Orders messages={planningMessages} templates={planningMessageTemplatesMock} gameDate={WargameMock.data.overview.gameDate}
        columns={[]} rows={[]} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })
})
