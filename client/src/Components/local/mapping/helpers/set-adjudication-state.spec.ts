/* global it expect */

/* Import mock data */
import { forces, platformTypes } from 'src/mocks'
import { RouteStore } from 'src/custom-types'

import setAdjudicationState from './set-adjudication-state'
import { Phase, PlanningStates, PlanningCommands, UMPIRE_FORCE } from 'src/config'

import { routeCreateStore, routeSetCurrent } from 'src/Helpers'

it('Handles manually setting route', () => {
  const frigateId = 'a0pra00001'

  // create the route store
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, UMPIRE_FORCE, 'role-id', false, platformTypes, false, false)
  expect(store).toBeTruthy()
  expect(store.selected).toBeFalsy()

  // select a route
  const store2: RouteStore = routeSetCurrent(frigateId, store)
  expect(store2.selected?.adjudicationState).toEqual(PlanningStates.Pending)

  const store3: RouteStore | undefined = setAdjudicationState(store2, PlanningCommands.Reject)
  expect(store3).toBeTruthy()
  if (store3) {
    expect(store3.selected?.adjudicationState).toEqual(PlanningStates.Rejected)

    const store4: RouteStore | undefined = setAdjudicationState(store3, PlanningCommands.PlanRoute)
    expect(store4).toBeTruthy()
    if (store4) {
      expect(store4.selected?.adjudicationState).toEqual(PlanningStates.Planning)

      const store5: RouteStore | undefined = setAdjudicationState(store4, PlanningCommands.TurnPlanned)
      expect(store5).toBeTruthy()
      if (store5) {
        expect(store5.selected?.adjudicationState).toEqual(PlanningStates.Planned)

        const store6: RouteStore | undefined = setAdjudicationState(store5, PlanningCommands.Save)
        expect(store6).toBeTruthy()
        if (store6) {
          expect(store6.selected?.adjudicationState).toEqual(PlanningStates.Saved)
        } else {
          expect(false).toBeTruthy()
        }
      } else {
        expect(false).toBeTruthy()
      }
    }
  } else {
    expect(false).toBeTruthy()
  }
})

it('Handles accepting player route', () => {
  const frigateId = 'a0pra00001'

  // create the route store
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, UMPIRE_FORCE, 'role-id', false, platformTypes, false, false)
  expect(store).toBeTruthy()
  expect(store.selected).toBeFalsy()

  // select a route
  const store2: RouteStore = routeSetCurrent(frigateId, store)
  expect(store2.selected?.adjudicationState).toEqual(PlanningStates.Pending)

  const store3: RouteStore | undefined = setAdjudicationState(store2, PlanningCommands.Accept)
  expect(store3).toBeTruthy()
  if (store3) {
    expect(store3.selected?.adjudicationState).toEqual(PlanningStates.Saved)

    const store4: RouteStore | undefined = setAdjudicationState(store3, PlanningCommands.Revert)
    expect(store4).toBeTruthy()
    if (store4) {
      expect(store4.selected?.adjudicationState).toEqual(PlanningStates.Pending)
    } else {
      expect(false).toBeTruthy()
    }
  }
})
