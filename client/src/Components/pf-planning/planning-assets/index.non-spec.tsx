/* global it expect */
import { forceColors, platformIcons } from 'src/Helpers'
import { P9BMock } from 'src/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import { PlanningAssets } from './index'

const forces = P9BMock.data.forces.forces
const blueForce = forces[1]

const forceCols = forceColors(forces)
const platformStyles = (P9BMock.data.platformTypes && platformIcons(P9BMock.data.platformTypes.platformTypes)) || []
const platformTypes = P9BMock.data.platformTypes ? P9BMock.data.platformTypes.platformTypes : []
const attributeTypes = P9BMock.data.attributeTypes ? P9BMock.data.attributeTypes.attributes : []

jest.mock('leaflet', () => {
  const leaflet = jest.requireActual('leaflet')
  return {
    ...leaflet,
    Symbol: {
      ...leaflet.Symbol,
      arrowHead: jest.fn()
    }
  }
})

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

describe('Planning Assets component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<PlanningAssets assets={[]} forceColors={forceCols} platformStyles={platformStyles} forces={forces} opFor={false}
        playerForce={blueForce} platformTypes={platformTypes} attributeTypes={attributeTypes} render={noop} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
