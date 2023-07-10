/* global it expect */

import { UMPIRE_FORCE, UNKNOWN_TYPE } from '@serge/config'
import { Perception } from '@serge/custom-types'
import findPerceivedAsTypes from '../find-perceived-as-types'

// perceptions element
const perceptions: Perception[] = [{
  by: 'Blue',
  force: 'Green',
  name: 'Dumbo',
  typeId: 'a12'
}]

// get a perceptions element with Force missing
const perceptionsForceMissing: Perception[] = [{
  by: 'Blue',
  name: 'Dumbo',
  typeId: 'a12'
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
  typeId: 'a12'
}]

// perceptions with nothing known
const perceptionsEmpty: Perception[] = [{
  by: 'Blue'
}]

it('gives true details for same force', () => {
  expect(findPerceivedAsTypes('yellow', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptions)).toEqual({ name: 'osaka', typeId: 'a13', forceId: 'yellow' })
})

it('gives true details for umpire', () => {
  expect(findPerceivedAsTypes(UMPIRE_FORCE, 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptions)).toEqual({ name: 'osaka', typeId: 'a13', forceId: 'yellow' })
})

it('gives null for force without perception', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptions)).toEqual(null)
})

it('gives perceived details for force with entry', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptions)).toEqual({ name: 'Dumbo', typeId: 'a12', forceId: 'Green' })
})

it('gives perceived details for force with entry but type missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptionsTypeMissing)).toEqual({ name: 'Dumbo', typeId: UNKNOWN_TYPE, forceId: 'Green' })
})

it('gives perceived details for force with entry but force missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptionsForceMissing)).toEqual({ name: 'Dumbo', forceId: UNKNOWN_TYPE, typeId: 'a12' })
})

it('gives perceived details for force with entry but name missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptionsNameMissing)).toEqual({ name: 'C0011', typeId: 'a12', forceId: 'Green' })
})

it('gives perceived details for force with no details', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'a13',
    perceptionsEmpty)).toEqual({ name: 'C0011', forceId: UNKNOWN_TYPE, typeId: UNKNOWN_TYPE })
})
