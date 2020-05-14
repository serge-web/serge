/* global it expect */

import findPerceivedAsTypes from './find-perceived-as-types'

// perceptions element
const perceptions: any = [{
  by: 'Blue',
  force: 'Green',
  name: 'OSAKA',
  type: 'merchant-vessel'
}]

// get a perceptions element with Force missing
const perceptionsForceMissing: any = [{
  by: 'Blue',
  name: 'OSAKA',
  type: 'merchant-vessel'
}]

// get a perceptions element with type missing
const perceptionsTypeMissing: any = [{
  by: 'Blue',
  force: 'Green',
  name: 'OSAKA'
}]

it('gives true details for same force', () => {
  expect(findPerceivedAsTypes('yellow', 'osaka', 'yellow', 'submarine',
    perceptions, false)).toEqual(['osaka','yellow', 'submarine'])
})

it('gives true details for umpire', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', 'yellow', 'submarine',
    perceptions, true)).toEqual(['osaka','yellow', 'submarine'])
})

it('gives null for force without perception', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', 'yellow', 'submarine',
    perceptions, false)).toEqual(null)
})

it('gives perceived details for force with entry', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'yellow', 'submarine',
    perceptions, false)).toEqual(['osaka', 'green', 'merchant-vessel'])
})

it('gives perceived details for force with entry but type missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'yellow', 'submarine',
    perceptionsTypeMissing, false)).toEqual(['osaka', 'green', 'unknown'])
})

it('gives perceived details for force with entry but force missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'yellow', 'submarine',
    perceptionsForceMissing, false)).toEqual(['osaka', 'unknown', 'merchant-vessel'])
})
