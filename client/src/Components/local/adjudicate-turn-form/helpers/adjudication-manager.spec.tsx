/* global it expect */
import { forces, platformTypes, selectedAsset } from 'src/mocks'
import AdjudicationManager from './/adjudication-manager'
import { Asset, PlanTurnFormValues, Route, RouteStore } from 'src/custom-types'
import { deepCopy, findAsset, routeCreateStore, routeSetCurrent } from 'src/Helpers'
import collateAdjudicationFormData from '../..//map-bar/helpers/collate-adjudication-form-data'
import { Phase } from 'src/config'

const setRouteStore = (store: RouteStore): void => {
  console.log('new store', store.routes.length)
}

const turnPlanned = (plannedTurn: PlanTurnFormValues): void => {
  console.log('turn planned', plannedTurn)
}

const cancelPlanning = (): void => {
  console.log('cancelling planning')
}

const closePlanningForm = (): void => {
  console.log('closing planning form')
}

const formData = collateAdjudicationFormData(platformTypes, selectedAsset, forces)

it('configures adjudicate manager correctly', () => {
  // prepare some routes, and a selected item
  const store2: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', 'role-id', true, platformTypes, false, false)
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeSetCurrent(frigateId, store2)

  const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a2', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formData)

  expect(manager.currentStatus()).toEqual({ speedKts: 20, state: 'Transiting' })
  expect(manager.upperActionsFor()).toEqual([{ action: 'accept', label: 'Accept' }, { action: 'reject', label: 'Reject' }])
  expect(manager.lowerActionsFor(true)).toEqual([])
})

it('derives current speed correctly', () => {
  // prepare some routes, and a selected item
  const store2: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', 'role-id', true, platformTypes, false, false)
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeSetCurrent(frigateId, store2)

  const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a2', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formData)

  expect(manager.plannedSpeed()).toEqual(20)

  // try clearing the planned speed
  const selected: Route | undefined = store.selected
  if (selected) {
    selected.planned = []
    expect(manager.plannedSpeed()).toEqual(20)

    // try clearing the original planned speed
    selected.original = []

    // check fallback
    expect(manager.plannedSpeed()).toEqual(10)
  }

  // clear selected
  store.selected = undefined
  expect(manager.plannedSpeed()).toEqual(0)
})

it('configures adjudicate manager correctly with missing current state', () => {
  const forcesCopy = deepCopy(forces)
  const frigateId = 'a0pra00001'
  const frigate: Asset | undefined = findAsset(forcesCopy, frigateId)
  if (frigate) {
    // clear status
    frigate.status = undefined

    // prepare some routes, and a selected item
    const store2: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forcesCopy, 'umpire', 'role-id', true, platformTypes, false, false)
    const store: RouteStore = routeSetCurrent(frigateId, store2)

    const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a3', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formData)

    expect(manager.currentStatus()).toEqual({ speedKts: 10, state: 'Transiting' })
  } else {
    expect(false).toBeTruthy()
  }
})

it('checks isMobile for a mobile platform type', () => {
  // prepare some routes, and a selected item
  const store2: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', 'role-id', true, platformTypes, false, false)
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeSetCurrent(frigateId, store2)

  const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a2', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formData)
  expect(manager.stateIsMobile('Transiting')).toBeTruthy()
  expect(manager.stateIsMobile('Stopped')).toBeFalsy()
})

it('checks platform types are correct', () => {
  // prepare some routes, and a selected item
  const store2: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', 'role-id', true, platformTypes, false, false)
  const frigateId = 'a0pra00001'
  const store: RouteStore = routeSetCurrent(frigateId, store2)

  const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a2', 'Asset name', 3, setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formData)
  expect(manager.platformDetails).toBeFalsy() // not retrieved yet
  const details = manager.getPlatformDetails()
  expect(details).toBeTruthy()
  expect(details.uniqid).toEqual(store.selected && store.selected.platformTypeId)
  expect(manager.platformDetails).toBeTruthy() // cached object available
})
