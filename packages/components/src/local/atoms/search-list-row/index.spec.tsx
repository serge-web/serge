/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SearchListRow from './index'

describe('SearchListRow component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SearchListRow
          active={false}
          onClick={(): void => window.alert('Title clicked')}
        >
          List item title
        </SearchListRow>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
