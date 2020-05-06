/* global it expect */

import findPerceivedAsTypes from './find-perceived-as-types'

// perceptions element
const perceptions:any = [{
  by: 'Blue',
  force: 'Green',
  name: 'OSAKA',
  type: 'merchant-vessel'
}]

// get a perceptions element with Force missing
const perceptionsForceMissing:any = [{
  by: 'Blue',
  name: 'OSAKA',
  type: 'merchant-vessel'
}]

// get a perceptions element with type missing
const perceptionsTypeMissing:any = [{
  by: 'Blue',
  force: 'Green',
  name: 'OSAKA'
}]

it('gives true details for same force', () => {
  console.log(perceptions)
  expect(findPerceivedAsTypes('yellow', 'yellow', 'submarine',
    perceptions, false)).toEqual(['yellow', 'submarine'])
})

it('gives true details for umpire', () => {
  expect(findPerceivedAsTypes('Red', 'yellow', 'submarine',
    perceptions, true)).toEqual(['yellow', 'submarine'])
})


it('gives null for force without perception', () => {
  expect(findPerceivedAsTypes('Red', 'yellow', 'submarine',
    perceptions, false)).toEqual(null)
})

it('gives perceived details for force with entry', () => {
  expect(findPerceivedAsTypes('Blue', 'yellow', 'submarine',
    perceptions, false)).toEqual(['green', 'merchant-vessel'])
})

it('gives perceived details for force with entry but type missing', () => {
  expect(findPerceivedAsTypes('Blue', 'yellow', 'submarine',
    perceptionsTypeMissing, false)).toEqual(['green', 'unknown'])
})

it('gives perceived details for force with entry but force missing', () => {
  expect(findPerceivedAsTypes('Blue', 'yellow', 'submarine',
    perceptionsForceMissing, false)).toEqual(['unknown', 'merchant-vessel'])
})
