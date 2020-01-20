/* global it expect */

import colorFor from '../../Components/Mapping/helpers/colorFor'
import mockConsole from 'jest-mock-console'

it('Outputs the correct color for the Red force', () => {
  expect(colorFor('Red')).toEqual('#ff0000')
})

it('Outputs the correct color for the Blue force', () => {
  expect(colorFor('Blue')).toEqual('#000fff')
})

it('Outputs the correct color for the Green force', () => {
  expect(colorFor('Green')).toEqual('#19bd37')
})

it('Fails with an error if no force is specified', () => {
  const restoreConsole = mockConsole()
  expect(colorFor())
    .toEqual('#555')
  expect(console.warn.mock.calls).toEqual([['failed to recognise force for: undefined']])
  restoreConsole()
})

it('Fails with an error if the wrong force is specified', () => {
  const restoreConsole = mockConsole()
  expect(colorFor('Pink'))
    .toEqual('#555')
  expect(console.warn.mock.calls).toEqual([['failed to recognise force for: Pink']])
  restoreConsole()
})
