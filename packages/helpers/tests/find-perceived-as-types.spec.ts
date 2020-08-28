/* global it expect */

import findPerceivedAsTypes from '../find-perceived-as-types'

// perceptions element
const perceptions: any = [{
  by: 'Blue',
  force: 'Green',
  name: 'Dumbo',
  type: 'merchant-vessel'
}]

// get a perceptions element with Force missing
const perceptionsForceMissing: any = [{
  by: 'Blue',
  name: 'Dumbo',
  type: 'merchant-vessel'
}]

// get a perceptions element with type missing
const perceptionsTypeMissing: any = [{
  by: 'Blue',
  force: 'Green',
  name: 'Dumbo'
}]

// get a perceptions element with name missing
const perceptionsNameMissing: any = [{
  by: 'Blue',
  force: 'Green',
  type: 'merchant-vessel'
}]

// perceptions with nothing known
const perceptionsEmpty: any = [{
  by: 'Blue'
}]

it('gives true details for same force', () => {
  expect(findPerceivedAsTypes('yellow', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, false)).toEqual(['osaka', 'yellow', 'submarine'])
})

it('gives true details for umpire', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, true)).toEqual(['osaka', 'yellow', 'submarine'])
})

it('gives null for force without perception', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, false)).toEqual(null)
})

it('gives perceived details for force with entry', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, false)).toEqual(['Dumbo', 'green', 'merchant-vessel'])
})

it('gives perceived details for force with entry but type missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptionsTypeMissing, false)).toEqual(['Dumbo', 'green', 'unknown'])
})

it('gives perceived details for force with entry but force missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptionsForceMissing, false)).toEqual(['Dumbo', 'unknown', 'merchant-vessel'])
})

it('gives perceived details for force with entry but name missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptionsNameMissing, false)).toEqual(['C0011', 'green', 'merchant-vessel'])
})

it('gives perceived details for force with no details', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
  perceptionsEmpty, false)).toEqual(['C0011', 'unknown', 'unknown'])
})
