import { padInt } from '@serge/helpers'

const turnNameFor = (turn: number): string => 'T' + padInt(turn, 2)

export default turnNameFor
