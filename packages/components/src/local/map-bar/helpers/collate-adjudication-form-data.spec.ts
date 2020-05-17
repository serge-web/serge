/* global it expect */
import collateAdjudicationFormData from './collate-adjudication-form-data'

import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import forces from '@serge/mocks/forces.mock'
import { AdjudicateTurnFormPopulate, AdjudicateTurnFormValues } from '@serge/custom-types'

it('contains relevant population results', () => {
  const res: AdjudicateTurnFormPopulate = collateAdjudicationFormData(platformTypes, selectedAsset, forces).populate
  expect(res.condition.length).toEqual(5)
  expect(res.condition[0]).toEqual('Full capability')
  expect(res.speed.length).toEqual(3)
  expect(res.speed[0]).toEqual(10)
  expect(res.status.length).toEqual(3)
  expect(res.status[0]).toEqual({ mobile: true, name: 'Transiting' })
  expect(res.visibleTo.length).toEqual(5)
  expect(res.visibleTo[0]).toEqual({ colour: '#FCFBEE', name: 'White' })
})

it('contains relevant current results', () => {
  const res: AdjudicateTurnFormValues = collateAdjudicationFormData(platformTypes, selectedAsset, forces).values
  expect(res.plannedRouteStatusVal).toEqual('pending')
  expect(res.statusVal).toEqual({ mobile: true, name: 'Transiting' })
  expect(res.speedVal).toEqual(10)
  expect(res.visibleToVal.length).toEqual(2)
  expect(res.visibleToVal[0]).toEqual('red')
  expect(res.conditionVal).toEqual('Full capability')
})
