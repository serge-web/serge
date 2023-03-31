import React from 'react'
import renderer from 'react-test-renderer'
import MapControl from './index'

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

it('MapControl renders correctly', () => {
  const tree = renderer
    .create(<MapControl/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
