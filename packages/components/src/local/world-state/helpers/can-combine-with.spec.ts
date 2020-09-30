/* global it expect */
import L from 'leaflet'
/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'

import canCombineWith from './can-combine-with'
import routeCreateStore from '@serge/helpers/route-create-store'
import { RouteStore, SergeGrid, SergeHex } from '@serge/custom-types'
import createGrid from '../../mapping/helpers/create-grid'
import boundsFor from '../../mapping/helpers/bounds-for'

it('clear route from selected step', () => {

  const bounds = {
    imageTop: 14.194809302,
    imageLeft: 42.3558566271,
    imageRight: 43.7417816271,
    imageBottom: 12.401259302
  }

  const latLongBounds: L.LatLngBounds = boundsFor(bounds)


  // note: the list of cells should be re-calculated if `tileDiameterMins` changes
  const grid: SergeGrid<SergeHex<{}>> = createGrid(latLongBounds, 5)
  expect(grid.length).toEqual(525)

  const store: RouteStore = routeCreateStore(undefined, forces, 'Blue', false, platformTypes, grid, false, false)

  const tankerId = 'a0pra00003'
  const frigateId = 'a0pra00001'
  const groupId = 'a0pra5431'

  // export type NodeType = 'empty' | 'group' | 'group-out'

  // start off at the top level
  expect(canCombineWith(store, tankerId, frigateId, [], 'group', grid)).toBeTruthy()
  expect(canCombineWith(store, frigateId, tankerId, [], 'group', grid)).toBeTruthy()
  expect(canCombineWith(store, frigateId, groupId, [], 'group', grid)).toBeFalsy()

})
