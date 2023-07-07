/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import gameMessagesWithRFI from '@serge/mocks/game-messages-rfi.mock'
import { MessageCustom } from 'src/custom-types/message'
import RfiForm from './index'

describe('RFIForm component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <RfiForm message={(gameMessagesWithRFI[4] as MessageCustom)} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
