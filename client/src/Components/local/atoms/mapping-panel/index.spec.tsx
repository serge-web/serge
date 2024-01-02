/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import { noop } from 'lodash'
import MappingPanel from './index'

jest.mock('react-resizable-panels', () => ({
  Panel: (): React.ReactElement => <></>,
  PanelGroup: (): React.ReactElement => <></>
}))

describe('Mapping Panel component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MappingPanel onClose={noop} extraFilterProps={[]}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
