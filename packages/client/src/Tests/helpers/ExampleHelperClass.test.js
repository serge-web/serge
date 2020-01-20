/* global it expect */
import ExampleHelperClass from '../../Helpers/ExampleHelperClass'

const exhelper = new ExampleHelperClass('Joe', 'Bloggs', 39, 'Male')

it('correctly connects the first and last names', () => {
  expect(exhelper.fullName).toEqual('Joe Bloggs')
})

it('Outputs the bio as expected', () => {
  expect(exhelper.generateBio()).toEqual({ age: 39, name: 'Joe Bloggs', sex: 'Male' })
})

it('Creates a "Restricted access" guest pass as expected', () => {
  expect(exhelper.createGuestPass('limited')).toEqual({ age: 39, name: 'Joe Bloggs', passType: 'Restricted Access', sex: 'Male' })
})

it('Creates a "All access" guest pass as expected', () => {
  expect(exhelper.createGuestPass('full')).toEqual({ age: 39, name: 'Joe Bloggs', passType: 'All Access', sex: 'Male' })
})
