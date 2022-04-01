/* global it expect */
import collatePlanFormData from './collate-plan-form-data'

import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import { PlanTurnFormPopulate, PlanTurnFormValues } from '@serge/custom-types'

it('contains relevant population results', () => {
  const res: PlanTurnFormPopulate = collatePlanFormData(platformTypes, selectedAsset).populate
  expect(res.speed.length).toEqual(3)
  expect(res.speed[0]).toEqual(10)
  expect(res.status.length).toEqual(3)
  expect(res.status[0]).toEqual({ mobile: true, name: 'Transiting' })
})

it('contains relevant current results', () => {
  const res: PlanTurnFormValues = collatePlanFormData(platformTypes, selectedAsset).values
  expect(res.speedVal).toEqual(10)
  expect(res.statusVal).toEqual({ mobile: true, name: 'Transiting' })
  expect(res.turnsVal).toEqual(1)
})


it('contains relevant current results for mangled platform name', () => {
  selectedAsset.type = 'bad type'
  const res: PlanTurnFormValues = collatePlanFormData(platformTypes, selectedAsset).values
  expect(res.speedVal).toEqual(10)
  expect(res.statusVal).toEqual({ mobile: true, name: 'Transiting' })
  expect(res.turnsVal).toEqual(1)
})
