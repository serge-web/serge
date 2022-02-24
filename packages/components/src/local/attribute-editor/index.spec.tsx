/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AttributeEditor from './index'

describe('FormEditableModal component:', () => {
  it('renders correctly', () => {
    const onClose = (): void => {
      console.log('Close modal')
    }
    const onSave = (): void => {
      console.log('Save data and close modal')
    }
    const tree = renderer
      .create(
        <AttributeEditor isOpen={false} onClose={onClose} onSave={onSave} data={[]} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
