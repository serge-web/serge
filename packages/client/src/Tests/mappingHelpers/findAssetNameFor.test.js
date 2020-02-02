/* global it expect */
import { UMPIRE_FORCE } from '../../consts'
import findAssetNameFor from '../../Components/Mapping/helpers/findAssetNameFor'

it('returns real name & condition for own force', () => {
  expect(findAssetNameFor('aname', 'acondition', 'blue', 'blue', null, null)).toEqual('aname - acondition')
})

it('returns real name & condition for white force', () => {
  expect(findAssetNameFor('aname', 'acondition', 'blue', UMPIRE_FORCE, null, null)).toEqual('aname - acondition')
})

it('only returns condition if present', () => {
  expect(findAssetNameFor('aname', '', 'blue', UMPIRE_FORCE, null, null)).toEqual('aname')
})

it('returns perceived name when present', () => {
  expect(findAssetNameFor('aname', 'acondition', 'blue', 'red', { name: 'aname' }, null)).toEqual('aname')
})

it('returns contact id when no name present', () => {
  expect(findAssetNameFor('aname', 'acondition', 'blue', 'red', {}, 'C002')).toEqual('C002')
})

it('returns contact id when no perception present', () => {
  expect(findAssetNameFor('aname', 'acondition', 'blue', 'red', null, 'C002')).toEqual('C002')
})
