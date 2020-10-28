/* global it expect */
import collateAdjudicationFormData from './collate-adjudication-form-data'
import { routeCreateStore } from '@serge/helpers'
import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import forces from '@serge/mocks/forces.mock'
import { ColorOption, Status, RouteStore } from '@serge/custom-types'
import { PlanningStates } from '@serge/config'

const store: RouteStore = routeCreateStore(undefined, forces, 'Blue', false, platformTypes, undefined, false, false)

it('contains relevant population results', () => {
  const { condition, speed, status, visibleTo }:
    {condition: Array<string>, speed: Array<number>, status: Array<Status>, visibleTo: Array<ColorOption>} =
    collateAdjudicationFormData(platformTypes, selectedAsset, forces, store).populate
  expect(condition.length).toEqual(3)
  expect(condition[0]).toEqual('Full capability')
  expect(speed.length).toEqual(3)
  expect(speed[0]).toEqual(10)
  expect(status.length).toEqual(3)
  expect(status[0]).toEqual({ mobile: true, name: 'Transiting' })
  expect(visibleTo.length).toEqual(5)
  expect(visibleTo[0]).toEqual({ colour: '#FCFBEE', name: 'White' })
})

it('contains relevant current results', () => {
  const { plannedRouteStatusVal, statusVal, speedVal, visibleToVal, conditionVal }:
    { plannedRouteStatusVal: string, statusVal: Status, speedVal: number, visibleToVal: Array<string>, conditionVal: string} =
    collateAdjudicationFormData(platformTypes, selectedAsset, forces, store).values
  expect(plannedRouteStatusVal).toEqual(PlanningStates.Pending)
  expect(statusVal).toEqual({ mobile: true, name: 'Transiting' })
  expect(speedVal).toEqual(10)
  expect(visibleToVal.length).toEqual(2)
  expect(visibleToVal[0]).toEqual('red')
  expect(conditionVal).toEqual('Full capability')
})
