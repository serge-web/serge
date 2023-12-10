/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MappingPanel from './index'

jest.mock('react-resizable-panels', () => ({
  Panel: (): React.ReactElement => <></>,
  PanelGroup: (): React.ReactElement => <></>
}))

describe('Mapping Panel component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MappingPanel />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
