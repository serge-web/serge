/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import Confirm from './index'

describe('Popup component:', () => {
  it('renders correctly', () => {
    const onConfirm = (): void => {
      console.log('Popup confirm')
    }

    const onCancel = (): void => {
      console.log('Popup cancel')
    }
    const tree = renderer
      .create(
        <Confirm isOpen={false} message="Test message" onCancel={onCancel} onConfirm={onConfirm} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
