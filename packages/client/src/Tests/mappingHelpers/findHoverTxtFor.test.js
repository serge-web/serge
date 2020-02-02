/* global it expect */
import { UMPIRE_FORCE } from '../../consts'
import findHoverTxtFor from '../../Components/Mapping/helpers/findHoverTextFor'

it('returns real name & condition for own force', () => {
  expect(findHoverTxtFor('aname', 'acondition', 'blue', 'blue', null, null)).toEqual('aname - acondition')
})

it('returns real name & condition for white force', () => {
  expect(findHoverTxtFor('aname', 'acondition', 'blue', UMPIRE_FORCE, null, null)).toEqual('aname - acondition')
})

it('returns perceived name when present', () => {
  expect(findHoverTxtFor('aname', 'acondition', 'blue', 'red', { name: 'aname' }, null)).toEqual('aname')
})

it('returns contact id when no name present', () => {
  expect(findHoverTxtFor('aname', 'acondition', 'blue', 'red', {}, 'C002')).toEqual('C002')
})

it('returns contact id when no perception present', () => {
  expect(findHoverTxtFor('aname', 'acondition', 'blue', 'red', null, 'C002')).toEqual('C002')
})
