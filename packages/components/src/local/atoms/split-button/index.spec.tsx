/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import SplitButton from './index'

const onChange = (): void => {
  console.log('On Change Clicked')
}

describe('DropdownList component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SplitButton
          label="Assign"
          options={['Game Control', 'CO', 'Blue 1']}
          onClick={onChange}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
