/* global it expect */
import collateAdjudicationFormData from './collate-adjudication-form-data'
import platformTypes from '@serge/mocks/platform-types.mock'
import selectedAsset from '@serge/mocks/selected-asset.mock'
import forces from '@serge/mocks/forces.mock'
import { ForceOption, Status } from '@serge/custom-types'

it('contains relevant population results', () => {
  const { condition, speed, status, visibleTo }:
    {condition: Array<string>, speed: Array<number>, status: Array<Status>, visibleTo: Array<ForceOption>} =
    collateAdjudicationFormData(platformTypes, selectedAsset, forces)
  expect(condition.length).toEqual(5)
  expect(condition[0]).toEqual('Full capability')
  expect(speed.length).toEqual(3)
  expect(speed[0]).toEqual(10)
  expect(status.length).toEqual(3)
  expect(status[0]).toEqual({ mobile: true, name: 'Transiting' })
  expect(visibleTo.length).toEqual(2)
  expect(visibleTo[0]).toEqual({ colour: '#F00', name: 'Red Force', id: 'Red' })
})
