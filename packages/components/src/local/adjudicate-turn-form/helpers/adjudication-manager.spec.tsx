/* global it expect */
import { forces, platformTypes, selectedAsset } from '@serge/mocks'
import AdjudicationManager from './/adjudication-manager'
import { PlanTurnFormValues, RouteStore } from '@serge/custom-types'
import { deepCopy, findAsset, routeCreateStore, routeSetCurrent } from '@serge/helpers'
import collateAdjudicationFormData from '../..//map-bar/helpers/collate-adjudication-form-data'

const setRouteStore = (store: RouteStore): void => {
  console.log('new store', store.routes.length)
}

const turnPlanned = (plannedTurn: PlanTurnFormValues): void => {
  console.log('turn planned', plannedTurn)
}

const cancelPlanning = (): void => {
  console.log('cancelling planning')
}

const icon = { forceColor: 'Red', platformType: 'fishing-vessel' }

const formData = collateAdjudicationFormData(platformTypes, selectedAsset, forces)

it('configures adjudicate manager correctly', () => {
  // prepare some routes, and a selected item
  const store2: RouteStore = routeCreateStore(undefined, forces, 'umpire', platformTypes, undefined, false, false)
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeSetCurrent(frigateId, store2)

  const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a2', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, icon, formData)

  expect(manager.currentStatus()).toEqual({ speedKts: 20, state: 'Transiting' })
  expect(manager.upperActionsFor(true)).toEqual([{ action: 'accept', label: 'Accept' }, { action: 'reject', label: 'Reject' }])
  expect(manager.lowerActionsFor(true)).toEqual([])
})

it('configures adjudicate manager correctly with missing current state', () => {
  const forcesCopy = deepCopy(forces)
  const frigateId = 'a0pra00001'
  const frigate = findAsset(forcesCopy, frigateId)
  // clear status
  frigate.status = {}

  // prepare some routes, and a selected item
  const store2: RouteStore = routeCreateStore(undefined, forcesCopy, 'umpire', platformTypes, undefined, false, false)
  const store: RouteStore = routeSetCurrent(frigateId, store2)

  const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a3', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, icon, formData)

  expect(manager.currentStatus()).toEqual({ speedKts: 10, state: 'Transiting' })
})
