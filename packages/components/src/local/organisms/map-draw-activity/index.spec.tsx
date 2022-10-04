import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import MapDrawActivity from './index'

describe('Planning Force component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<MapDrawActivity cancelFeature={noop} storeFeature={noop} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
