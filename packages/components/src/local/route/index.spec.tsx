import { Phase } from '@serge/config'
import { Route as RouteType, RouteStore } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { localMappingConstraints, watuWargame } from '@serge/mocks'
import { mount } from 'enzyme'
import React from 'react'
import Mapping from '../mapping'
import { Route } from './'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Blue', 'role-id', false, platformTypes, false, false)
const route: RouteType = store.routes[0] as RouteType

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  Symbol: {
    arrowHead: jest.fn()
  }
}))

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

const clearFromTurn = (turn: number): void => {
  console.log('clear after turn handler', turn)
}

it('Mapping renders correctly with Route', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const tree = mount(<Mapping
    mappingConstraints={localMappingConstraints}
    platforms={platformTypes}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    wargameInitiated={true}
    markerIcons={[]}
    playerForce={'Blue'}
    infoMarkers={[]}
    isGameControl={true}
    isUmpire={true}
    phase={Phase.Planning}
    turnNumber={2}
  >
    <Route name={'alpha'} route={route}
      trimmed={false} color={'#f00'} selected={true} clearRouteHandler={clearFromTurn} />
  </Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
