/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import { noop } from 'lodash'
import MappingPanel from './index'

jest.mock('react-resizable-panels', () => ({
  Panel: (): React.ReactElement => <></>,
  PanelGroup: (): React.ReactElement => <></>
}))

jest.mock('react-leaflet-v4', () => ({
  GeoJSON: (): React.ReactElement => <></>
}))

describe('Mapping Panel component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MappingPanel onClose={noop} rendererProps={[]} onSave={noop} selected={[]} onSelect={noop} forceStyles={[]}
          permissions={[]}/>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
