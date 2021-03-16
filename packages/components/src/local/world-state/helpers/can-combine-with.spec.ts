/* global it expect */
import L from 'leaflet'
/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import { Phase } from '@serge/config'

import canCombineWith from './can-combine-with'
import { routeCreateStore } from '@serge/helpers'
import { RouteStore, SergeGrid, SergeHex } from '@serge/custom-types'
import createGrid from '../../mapping/helpers/create-grid'
import boundsFor from '../../mapping/helpers/bounds-for'

it('returns correct combine with answers', () => {
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

  // put the tanker in the same cell as the frigate
  if (forces[1].assets) {
    forces[1].assets[3].position = forces[1].assets[1].position
  }

  const store: RouteStore = routeCreateStore(undefined, 1, Phase.Adjudication, forces, 'Blue', platformTypes, grid, false, false)

  const tankerId = 'a0pra00003'
  const frigateId = 'a0pra00001'
  const groupId = 'a0pra5431'
  const merlinId = 'a0pra11002'

  // when component first renders, there isn't anything selected, so id of '-1' is used
  const UNSELECTED_ID = -1

  // export type NodeType = 'empty' | 'group' | 'group-out'

  // if nothing is selected, just let it be draggable
  expect(canCombineWith(store, UNSELECTED_ID, frigateId, [], 'group', grid)).toBeTruthy()
  expect(canCombineWith(store, UNSELECTED_ID, groupId, [], 'group', grid)).toBeTruthy()

  // let platforms in same cell be draggable
  expect(canCombineWith(store, tankerId, frigateId, [], 'group', grid)).toBeTruthy()
  expect(canCombineWith(store, frigateId, tankerId, [], 'group', grid)).toBeTruthy()

  // if they're not in same cell, they're not draggable
  expect(canCombineWith(store, frigateId, groupId, [], 'group', grid)).toBeFalsy()

  // for a platform that is a child, if the target id is -1, it's the operation to
  // go the top level
  expect(canCombineWith(store, merlinId, UNSELECTED_ID, [], 'empty', grid)).toBeTruthy()
})
