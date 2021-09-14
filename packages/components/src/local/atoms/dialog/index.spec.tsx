/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import DialogModal from './index'

describe('Button component:', () => {
  it('renders correctly', () => {
    const onClose = (): void => {
      console.log('on modal close')
    }

    const onSave = (data: string): void => {
      console.log('on modal save: ', data)
    }
    const tree = renderer
      .create(
        <DialogModal open={false} title="Test" onClose={onClose} onSave={onSave} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
