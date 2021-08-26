/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import AssignButtonMessage from './index'

const onChange = (): void => {
  console.log('On Change Clicked')
}

describe('DropdownList component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AssignButtonMessage
          options={['Game Control', 'CO', 'Blue 1']}
          onClick={onChange}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
