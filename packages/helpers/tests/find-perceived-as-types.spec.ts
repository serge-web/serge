/* global it expect */

import { Perception } from '@serge/custom-types'
import findPerceivedAsTypes from '../find-perceived-as-types'

// perceptions element
const perceptions: Perception[] = [{
  by: 'Blue',
  force: 'Green',
  name: 'Dumbo',
  type: 'merchant-vessel'
}]

// get a perceptions element with Force missing
const perceptionsForceMissing: Perception[] = [{
  by: 'Blue',
  name: 'Dumbo',
  type: 'merchant-vessel'
}]

// get a perceptions element with type missing
const perceptionsTypeMissing: Perception[] = [{
  by: 'Blue',
  force: 'Green',
  name: 'Dumbo'
}]

// get a perceptions element with name missing
const perceptionsNameMissing: Perception[] = [{
  by: 'Blue',
  force: 'Green',
  type: 'merchant-vessel'
}]

// perceptions with nothing known
const perceptionsEmpty: Perception[] = [{
  by: 'Blue'
}]

it('gives true details for same force', () => {
  expect(findPerceivedAsTypes('yellow', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, false)).toEqual({ name:'osaka', force: 'yellow', type: 'submarine'})
})

it('gives true details for umpire', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, true)).toEqual({ name:'osaka', force: 'yellow', type: 'submarine'})
})

it('gives null for force without perception', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, false)).toEqual(null)
})

it('gives perceived details for force with entry', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptions, false)).toEqual({ name:'Dumbo', force: 'green', type: 'merchant-vessel'})
})

it('gives perceived details for force with entry but type missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptionsTypeMissing, false)).toEqual({ name:'Dumbo', force: 'green', type: 'unknown'})
})

it('gives perceived details for force with entry but force missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptionsForceMissing, false)).toEqual({ name:'Dumbo', force: 'unknown', type: 'merchant-vessel'})
})

it('gives perceived details for force with entry but name missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
    perceptionsNameMissing, false)).toEqual({ name:'C0011', force: 'green', type: 'merchant-vessel'})
})

it('gives perceived details for force with no details', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', 'C0011', 'yellow', 'submarine',
  perceptionsEmpty, false)).toEqual({ name:'C0011', force: 'unknown', type: 'unknown'})
})
