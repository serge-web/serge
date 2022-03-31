/* global it expect */

import { UMPIRE_FORCE } from '@serge/config'
import { Perception } from '@serge/custom-types'
import findPerceivedAsTypes from '../find-perceived-as-types'

// perceptions element
const perceptions: Perception[] = [{
  by: 'Blue',
  force: 'Green',
  name: 'Dumbo',
  type: 'merchant-vessel',
  typeId: 'a12'
}]

// get a perceptions element with Force missing
const perceptionsForceMissing: Perception[] = [{
  by: 'Blue',
  name: 'Dumbo',
  type: 'merchant-vessel',
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
  type: 'merchant-vessel',
  typeId: 'a12'
}]

// perceptions with nothing known
const perceptionsEmpty: Perception[] = [{
  by: 'Blue'
}]

it('gives true details for same force', () => {
  expect(findPerceivedAsTypes('yellow', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptions)).toEqual({ name: 'osaka', force: 'yellow', type: 'submarine', typeId: 'a13' })
})

it('gives true details for umpire', () => {
  expect(findPerceivedAsTypes(UMPIRE_FORCE, 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptions)).toEqual({ name: 'osaka', force: 'yellow', type: 'submarine', typeId: 'a13' })
})

it('gives null for force without perception', () => {
  expect(findPerceivedAsTypes('Red', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptions)).toEqual(null)
})

it('gives perceived details for force with entry', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptions)).toEqual({ name: 'Dumbo', force: 'green', type: 'merchant-vessel', typeId: 'a12' })
})

it('gives perceived details for force with entry but type missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptionsTypeMissing)).toEqual({ name: 'Dumbo', force: 'green', type: 'unknown' })
})

it('gives perceived details for force with entry but force missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptionsForceMissing)).toEqual({ name: 'Dumbo', force: 'unknown', type: 'merchant-vessel', typeId: 'a12' })
})

it('gives perceived details for force with entry but name missing', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptionsNameMissing)).toEqual({ name: 'C0011', force: 'green', type: 'merchant-vessel', typeId: 'a12' })
})

it('gives perceived details for force with no details', () => {
  expect(findPerceivedAsTypes('Blue', 'osaka', false, 'C0011', 'yellow', 'submarine', 'a13',
    perceptionsEmpty)).toEqual({ name: 'C0011', force: 'unknown', type: 'unknown' })
})
