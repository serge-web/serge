import { ADJUDICATION_PHASE } from '@serge/config'
import { RouteStore } from 'src/custom-types'
import { platformTypes, watuWargame } from '@serge/mocks'
import React from 'react'
import renderer from 'react-test-renderer'
import { WorldStatePanels } from './helpers/enums'
import WorldState from './index'

const store: RouteStore = { routes: [] }
const infoMarkers = watuWargame.data.annotations ? watuWargame.data.annotations.annotations : []
const force = watuWargame.data.forces.forces[0].uniqid
const markerIcons = watuWargame.data.annotationIcons ? watuWargame.data.annotationIcons.markers : []

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

it('WorldState renders correctly', () => {
  const tree = renderer
    .create(<WorldState
      selectedMarker={undefined} platforms={platformTypes} playerForce={force} infoMarkers={infoMarkers}
      phase={ADJUDICATION_PHASE} turnNumber={2}
      panel={WorldStatePanels.Control}
      plansSubmitted={false} isUmpire={true} store={store} name="test" markerIcons={markerIcons} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
