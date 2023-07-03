/* global it expect */
import CollapsibleHeader from './header'
import CollapsibleContent from './content'

import React from 'react'
import renderer from 'react-test-renderer'

import Collapsible from './index'

it('Collapsible renders correctly', () => {
  const tree = renderer
    .create(
      <Collapsible>
        <CollapsibleHeader>Header</CollapsibleHeader>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
